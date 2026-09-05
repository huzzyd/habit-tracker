# ADR 001: Catch entry surfaces and app stack

Status: proposed, 2026-09-05. Resolves spec open question 4 (widget feasibility) and sets up the stack decision.

This document is STE-informed. A human gives final approval.

## Context

Spec section 7.2 requires one tap from the lock screen to a logged Craving in under 2 seconds, with no login and no animation. Spec section 15 assumes a lock-screen widget is a hard requirement. Neither platform lets a third-party lock-screen widget run code before the phone unlocks in every case. This record lists what each surface can do and picks the ones the product uses.

## Findings

Sources: Apple WidgetKit and App Intents documentation and developer forum threads. Google's lock-screen widget FAQ (March 2025). Android TileService and Notification documentation. Expo Widgets documentation (SDK 57).

| Surface | Platform | Works while locked | Opens the app | Notes |
|---|---|---|---|---|
| Lock Screen widget, tap | iOS 16+ | No. Deep-links after unlock | Yes | Face ID unlocks on raise, so the tap lands about 1 second after the raise |
| Interactive widget button (App Intent) | iOS 17+ | No. Buttons are inactive until unlock, then the intent runs without opening the app | No | Same Face ID timing. Logs in place once unlocked |
| Control (Control Center, Lock Screen corner, Action button) | iOS 18+ | Depends. The intent's authentication policy can allow it. Developer reports say the system may still ask for unlock | No | Needs a device test before it is promised |
| Smart Stack widget button (App Intent) | watchOS 11+ | Yes. A worn watch is unlocked | No | Lowest friction of all surfaces. Watch owners only |
| Lock screen widget, action on a background receiver | Android 16 QPR2+ (Pixel first, other OEMs later) | Yes, if the action does not open an activity | No | Rollout started December 2025 on Pixel. OEM adoption is not guaranteed |
| Lock screen widget, action that opens an activity | Android 16 QPR2+ | No, unless the activity declares showWhenLocked | Yes | |
| Quick Settings tile | Android 7+ | Yes, for a safe action handled in the service | No | Universal across OEMs. Two swipes from the lock screen to reach it |
| Notification action button on an ongoing notification | Android 5+ | Yes, with authentication not required and public visibility | No | One tap on the lock screen. Costs a persistent notification |
| Home screen widget | Both | No | Either | After unlock only |

Cross-platform frameworks:

- Expo Widgets (SDK 57) is stable, iOS only, and needs development builds. Lock Screen widget families and interactive buttons are supported. Live Activities are supported.
- The Android surfaces (Glance widget, TileService, notification actions) need a small Kotlin module in any framework.
- Interactive iOS widgets, Controls, and a watch app need Swift targets in any framework. Expo's config plugins generate the targets.

## Decision

1. The Craving log is an intent-level action. It writes the time and the default Cue slot to shared storage without opening the app. Intensity and State are asked afterward, in the app, and default when unanswered. Spec 7.3 changes to match.
2. Entry surfaces, in the order the app offers them at onboarding:
   - iOS: interactive Lock Screen widget (iOS 17+). Then a Control for the Lock Screen corner and the Action button (iOS 18+). Then a watch Smart Stack button when a watch is paired (watchOS 11+).
   - Android: Quick Settings tile (all versions). Then the lock screen widget where the OS offers it (Android 16 QPR2+). Then an optional ongoing notification action for one-tap logging on older phones.
3. Measured target. Time from phone raise to logged Craving is 2 seconds or less on a Face ID iPhone and on a Pixel through the tile. This replaces "under 2 seconds from the lock screen" in spec 7.2.
4. Minimum OS: iOS 17, Android 8. Controls, the watch surface, and the Android lock screen widget are progressive additions, not requirements.
5. Stack: Expo (React Native) for the app, with native targets for the entry surfaces. Swift for WidgetKit, the Control, and the watch app. Kotlin for the Glance widget, the TileService, and the notification action. The Ride audio and timer live in the app. The log write lives in the native layer and never waits for the JavaScript runtime.

## Consequences

- The Catch screen becomes optional. The Ride can start from a notification if the app is not open.
- Two native modules ship in v1. A solo developer can build them, but the pilot build must be tested on a locked device for each surface.
- The iOS 18 Control needs a device test for the no-unlock path. Until then, marketing copy does not promise "without unlocking."
- Expo Go cannot run the app. Development builds only.

## Alternatives considered

- Native Swift and Kotlin apps. Most direct, two full codebases. Rejected for v1 on team size.
- Flutter with home_widget. Comparable to Expo for the widget surfaces, no Live Activity or watch support in the package. Rejected on ecosystem fit.
- Web app with a PWA shortcut. No lock screen surface on either platform. Rejected.

## Open items

1. Device test: iOS 18 Control with the always-allowed authentication policy on a locked iPhone.
2. Device test: Android 16 QPR2 lock screen widget action on a background receiver, on a locked Pixel.
3. Decide whether the ongoing notification is on by default on Android phones without lock screen widgets.

Links:
- https://developer.apple.com/forums/thread/756194
- https://android-developers.googleblog.com/2025/03/widgets-on-lock-screen-faq.html
- https://developer.android.com/reference/android/service/quicksettings/TileService
- https://docs.expo.dev/versions/latest/sdk/widgets/
- https://github.com/EvanBacon/expo-apple-targets
