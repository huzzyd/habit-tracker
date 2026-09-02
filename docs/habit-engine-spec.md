# Habit Replacement Engine: product spec v0.2

Company: Artomai. Working title: TBD (candidates: Rewire, Outgrow, Seedless, Overwrite).
Status: draft. Supersedes `habit-engine-concept.pdf` (v0.1). Evidence and source analysis are in `research-findings.md`.

This document is STE-informed. A human gives final approval.

Scope: this is a product spec. It defines behavior, content, data, and metrics. It does not choose a tech stack. See section 15.

## 1. Glossary

Technical Names used in this spec. Use each name identically everywhere, in code and in copy.

| Name | Meaning |
|---|---|
| Program | One habit-replacement run. 30 days by default. The user "runs a Program." |
| Pack | Habit-specific content that a Program loads: cue slots, rituals, imagery scripts, quests, withdrawal content, cost model. |
| Trigger map | The user's cues: times, places, moods, rituals, people. Built at onboarding. |
| Cue slot | One recurring time-and-place where the habit fires. Example: "10 pm, couch, after the kids sleep." |
| Goal statement | The user's present-tense description of life after the Program. Generated at onboarding, edited by the user. |
| Card | The Goal statement rendered as a small screen. Shown on the lock-screen widget and in the app. |
| Craving | One logged urge. One tap. |
| Ride | The guided 10 to 20 minute response to a Craving. Four phases: breathe, image, contrast, replace. |
| Replacement ritual | A Pack-defined action that fills one Cue slot. |
| Quest | One action per day from the user's prioritized action list. |
| Bookend session | A guided session at wake and before sleep. The night session sits in the highest-risk Cue slot. |
| State dial | A one-tap 1 to 5 rating of how the user feels now. |
| Character | The user's profile. Traits describe how the Character behaves. Programs rewrite traits. |
| Build | The Character's trait set at a point in time. Graduation produces a new Build. |
| Surge mode | Days 0 to 3 of a Program. Highest reward density. |
| Multiplier | The streak bonus applied to rewards. |
| Soft reset | The response to a Lapse. The Multiplier drops. The Build, the money counter, and the Trigger map stay. |
| Taper | The scheduled decrease in reward density from day 15 to Graduation. |
| Graduation | The end of a Program. The final unlock. |
| Lapse | A logged use during a Program. Never called relapse in copy. |

## 2. Thesis

A private, stigma-free habit-replacement engine. It uses the mechanics of dependency (variable rewards, ritual, identity) to outcompete an unwanted habit. It starts with cannabis and generalizes to any compulsive behavior through Packs.

The loop does not get deleted. It gets outcompeted.

## 3. Positioning

Not a recovery app. A training Program you finish.

- No addiction language in the UI. Habits are Programs. Cannabis sits beside sugar, doomscrolling, nicotine, and late-night gaming.
- Privacy is structural. Nobody can tell which Program you run.
- The app weans you off itself. Graduation is the final unlock and the marketing story.
- Retention comes from Graduation. Finish one Program, point the engine at the next.

## 4. Target user

The private struggler. Employed, functional, ashamed. Has tried to quit more than once. Will never join a group or see a therapist. Wants out.

## 5. Product principles

These principles gate every feature and every line of copy.

1. Craving-moment intervention plus contingency-style rewards are the differentiators. Content modules alone do not work (ICan RCT, 2023).
2. The app is a scaffold, not a new cage. Taper is not optional.
3. Wellness product, not a medical device. No diagnosis. No treatment claims. No outcome claims.
4. Evidence first. Every mechanic maps to a source in section 13. No metaphysics, no "frequency," no "manifestation."
5. The user is never told who they are. The user decides. The Character frame carries this.
6. Friction at the Craving moment is near zero. One tap, under 2 seconds, from the lock screen.
7. Same name for the same thing everywhere. See the glossary.

## 6. Core loop v0.2

| Step | Trigger | User action | System action | Done when |
|---|---|---|---|---|
| Map | Onboarding | Answers 10 minutes of questions | Builds the Trigger map and Cue slots | 3 or more Cue slots exist |
| Decide | End of onboarding | Reviews and edits the Goal statement and action list | Generates the Card and the Quest bank | Card is on the lock screen |
| Catch | A Craving hits | Taps the widget | Logs time, Cue slot, intensity | Under 2 seconds |
| Ride | Catch complete | Follows the four phases | Runs the timer, the breath guide, the imagery script, the contrast prompt | User marks beaten, partial, or used |
| Replace | Ride phase 4, or a Cue slot opens | Does the Replacement ritual | Suggests the ritual mapped to this Cue slot | Ritual marked done |
| Reward | Craving marked beaten | Sees the reward | Rolls the variable-ratio reward, applies the Multiplier | Reward shown within 1 second |
| Compound | Daily | Views the dashboard | Updates money reclaimed, clear days, Cravings beaten, Build | Always |
| Bookend | Wake and pre-sleep | Runs the session | Delivers State dial, Card, Quest, imagery, contrast | Session marked complete |
| Taper | Day 15 onward | Nothing | Lowers reward density per schedule | Graduation |

## 7. Feature specs

### 7.1 Onboarding: Map and Decide

Time budget: 10 minutes. No addiction language. Anonymous account is the default.

1. Pick the Pack. v1 ships one Pack: cannabis.
2. Build the Trigger map. For each Cue slot, capture: time window, place, mood before, ritual, people present.
3. Capture the cost model. Spend per week, in the user's currency. This feeds money reclaimed.
4. Generate the Goal statement. The system drafts it from the answers, present tense, first person, sensory detail. The user edits it.
5. Generate the action list. The system drafts 10 to 15 actions from the Pack and the Trigger map. The user removes, adds, and orders them.
6. Install the widget. Show the Card on the lock screen.

Goal statement rules:
- Present tense. First person.
- At least three sensory details. Example: "I wake at 6:40 with a clear head. My room smells like nothing. The $60 stays in my account."
- No mention of the habit by its name. The statement describes life after, not the thing avoided.

Action list rules:
- Each item is one physical action the user can complete in one day.
- The Pack supplies the bank. Examples: "Move the grinder to the garage," "Buy the tea for the 10 pm slot," "Tell one person you are running a Program."
- The user orders the list. The top item becomes tomorrow's Quest.

### 7.2 Card and widget

The Card shows the Goal statement, the day number, and one tap target: "Craving."

- The widget lives on the lock screen and on the watch face where available.
- The Craving tap opens the Catch screen directly. No login step. No animation before the log.
- The Card text is the only copy on the widget. No Program name, no habit name. Privacy holds if someone sees the phone.

### 7.3 Catch: the Craving log

Target: under 2 seconds from tap to logged.

Fields:
- Time: automatic.
- Cue slot: pre-selected from the Trigger map by time and location. One tap to change.
- Intensity: 1 to 5, one tap.
- State: optional, one tap, from the State dial.

After the log, the Ride starts. The user can skip the Ride. A skipped Ride still counts as a logged Craving.

### 7.4 Ride

Duration: 10 to 20 minutes. Cravings peak and decay in this window. The timer is visible throughout.

| Phase | Duration | Content | Evidence |
|---|---|---|---|
| 1. Breathe | 90 seconds | Cyclic sighing. Double inhale through the nose, long exhale through the mouth. | Balban 2023 |
| 2. Image | 3 minutes | Guided first-person imagery from the Goal statement. All five senses. Personalised per user. | Solbrig 2019, Kavanagh 2005 |
| 3. Contrast | 2 minutes | Name the obstacle in this Cue slot. Recall the if-then plan for it. | Kappes and Oettingen 2011, Gollwitzer and Sheeran 2006 |
| 4. Replace | Remainder | Do the Replacement ritual for this Cue slot. | Concept doc Replace step |

Outcome prompt at the end: beaten, partial, used. No judgment copy on any option.

Rules:
- Phase 2 never runs without phase 3. Positive imagery alone lowers effort.
- The imagery script is generated once at onboarding from the Goal statement, then cached. It does not call a model at Craving time.
- Audio-first. The user may have the phone in a pocket.

### 7.5 Replace

Each Cue slot maps to one Replacement ritual from the Pack. The ritual fits the slot, not a generic "go for a walk."

Example mapping for the cannabis Pack:

| Cue slot pattern | Replacement ritual |
|---|---|
| Pre-sleep, couch | Night Bookend session, then the sleep tea ritual |
| After work, car | Ten-minute drive with a set playlist, then the breathe phase |
| Social, friend's place | Pre-decided drink in hand, exit plan at a set time |

The user can swap any ritual for another from the Pack, or write their own.

### 7.6 Reward engine

Rewards fire on a beaten Craving, never on a daily check-in. Beating a Craving is the jackpot moment.

| Parameter | Default | Basis | Lock in |
|---|---|---|---|
| Base reward probability on a beaten Craving | 0.35 | Variable ratio | Lit-review sprint |
| Reward magnitude tiers | small 70%, medium 25%, large 5% | Variable magnitude | Lit-review sprint |
| Multiplier step per consecutive clear day | +0.1, cap 3.0 | CM escalation | Lit-review sprint |
| Soft reset on a Lapse | Multiplier returns to 1.0. Nothing else changes | CM reset, softened | Fixed |
| Recovery bonus | First beaten Craving after a Lapse pays a guaranteed medium reward | Reward recovery fast | Fixed |
| Surge mode, days 0 to 3 | Base probability 0.7 | Front-loaded density | Fixed |
| Taper, day 15 to 30 | Base probability falls linearly to 0.15 | Taper | Lit-review sprint |
| Graduation | One large fixed unlock. New Build. Next Program offered | Identity progression | Fixed |

Reward types: Build trait reveals, dashboard unlocks, money milestones, cosmetic changes to the Character. No cash. No external prizes in v1.

### 7.7 Quest

One Quest per day from the top of the action list.

- The morning Bookend session presents it.
- The user marks it done or skips it. A skip moves it to tomorrow. Two skips move it to the bottom of the list.
- A done Quest counts toward the clear-day streak. It does not fire a variable reward.
- Quests are actions, never lessons. A Quest that reads like content is a bug.

### 7.8 Bookend sessions

| Session | Length | Order of content |
|---|---|---|
| Morning | 5 minutes | State dial. Read the Card aloud or silently. Today's Quest. 2-minute imagery with contrast. |
| Night | 15 minutes | State dial. Review today's Cravings and Quest. 3-minute breathe. 5-minute imagery with contrast. Withdrawal-window content if applicable. Sleep wind-down. |

Rules:
- The night session is scheduled at the start of the user's highest-risk Cue slot. It fills the slot.
- Sessions are optional. Missed sessions do not break the streak. Completed sessions raise the Multiplier by +0.05 each, inside the cap.
- Days 1 to 28 include withdrawal-window content in the night session: sleep disruption, irritability, vivid dreams. This content tells the user what is normal and how long it lasts.

### 7.9 State dial

One tap, 1 to 5. Shown at each Bookend session and offered at each Catch.

- Copy: "Right now I feel" with five faces or five words. No clinical scale names.
- Loop detection. The trigger is a State dial average of 2 or lower for three days with a rise in Cravings. On the trigger, the system moves the Program into Surge mode for 48 hours and raises the night session prompt.
- The State dial trend appears on the dashboard as "clear days."

### 7.10 Compound dashboard

Always visible from the home screen.

- Money reclaimed. Live counter from the cost model. The hero metric. The user can pledge it toward a named purchase.
- Clear days. Days with no Lapse.
- Cravings beaten. Count and ratio.
- Build. The Character's current traits.
- Sleep score (v2, from HealthKit or Google Fit).

Loss aversion protects the streak: the dashboard shows what a Lapse costs (the Multiplier) and what it does not cost (everything else).

### 7.11 Character and Build

The profile is a Character. This is the identity layer.

- At onboarding the Character has traits programmed by its environment. Example traits: "Winds down with smoke," "Sleeps late."
- Each Program targets one or more traits. Progress rewrites a trait. Example: "Winds down with smoke" becomes "Winds down with tea and a session."
- Graduation produces a new Build. The Build history is the user's record of Programs finished.
- Copy rule: the trait belongs to the Character. The habit is never the user's identity. The user is the player.

### 7.12 Lapse response and copy

A Lapse is logged like a Craving, with "used" as the outcome.

- Copy on the Lapse screen: "Logged. That is data. The next Craving you beat pays out." No streak-broken animation.
- Soft reset applies. See 7.6.
- The next Ride shows the recovery bonus.
- Three Lapses in 48 hours re-enter Surge mode.

### 7.13 Safety

- Crisis detection: free-text fields (Goal statement, journal notes) pass through a self-harm classifier. On a hit, show professional resources in the same no-stigma voice. Do not lock the app.
- No magical-thinking content. Daily cannabis users carry raised psychosis odds (Di Forti 2019). Imagery scripts describe realistic scenes from the user's own life.
- Language review before launch. Ban list: addict, addiction, relapse, recovery, sober, clean, cure, treat, diagnose, frequency, manifest.
- Future alcohol Pack: screen for heavy daily use and redirect. Cold-turkey alcohol withdrawal is medically dangerous.

### 7.14 Privacy

- Anonymous account is the default. Email is optional and used only for recovery of the account.
- The widget and notifications never name the habit or the Program.
- Craving logs and Trigger maps stay on device. Only aggregate counts sync for the dashboard and, in v2, cohort stats.

## 8. Program arc: 30 days

| Days | Phase | Reward density | Content focus |
|---|---|---|---|
| 0 to 3 | Surge mode | Highest | Catch and Ride habit. Card read. First Quests. |
| 4 to 14 | Withdrawal window | High | Night session content on sleep, mood, dreams. Replacement rituals bed in. |
| 15 to 29 | Taper | Falling | Real-world rewards take over: money, sleep, clear mornings. Fewer prompts. |
| 30 | Graduation | One unlock | New Build. Offer the next Program. |

The user can extend a Program by 30 days once. A second extension is offered only after a Lapse in the last week.

## 9. Content model

The engine is universal. Packs are habit-specific.

Pack schema:

| Field | Content |
|---|---|
| id, name | Never shown on the widget |
| cueSlotTemplates | Common Cue slots for this habit with default rituals |
| replacementRituals | Ritual bank with slot tags |
| imageryScriptTemplate | Sensory prompts the Goal statement fills |
| questBank | 30 or more one-day actions, ordered by typical priority |
| withdrawalContent | Day-indexed notes for the night session, days 1 to 28 |
| costModel | Unit, typical spend, currency handling |
| safetyRules | Screening questions and redirects |

v1 ships the cannabis Pack. v2 candidates: nicotine, sugar, doomscroll, late-night gaming, alcohol moderation.

## 10. Data model

Logical entities. Storage and sync are a tech-stack decision.

| Entity | Key fields |
|---|---|
| User | id, anonymous flag, created at, current Build id |
| Program | id, user id, pack id, start date, day, phase, multiplier, status |
| TriggerMap | program id, list of CueSlot |
| CueSlot | id, time window, place, mood, ritual, people, replacement ritual id |
| GoalStatement | program id, text, imagery script (cached), version |
| ActionItem | program id, text, priority, status, done date |
| Craving | id, program id, timestamp, cue slot id, intensity, state, outcome |
| RideSession | craving id, phases completed, duration |
| Reward | craving id, tier, type, multiplier applied |
| StateEntry | program id, timestamp, value 1 to 5, context |
| BookendSession | program id, date, type, completed, duration |
| Build | user id, program id, traits, created at |
| MoneyLedger | program id, daily reclaimed amount, pledge target |

## 11. Metrics

Pilot success metrics, from v0.1:

- D7 and D30 retention versus quit-app benchmarks.
- Percentage of logged Cravings marked beaten.
- Self-reported use days at day 30 versus baseline.

Instrumentation events, minimum set:

`onboarding_complete`, `card_installed`, `craving_logged`, `ride_started`, `ride_phase_complete`, `ride_outcome`, `reward_fired`, `quest_done`, `quest_skipped`, `bookend_complete`, `state_logged`, `lapse_logged`, `surge_entered`, `graduated`.

Pilot-specific measures:

- Craving intensity at Catch versus at Ride end. Tests competing imagery.
- Use rate in the night Cue slot on nights with and without the night session.
- Onboarding completion with and without the Character frame. A/B test.

## 12. MVP scope, v1

In:
- Cannabis Pack.
- Onboarding: Trigger map, Goal statement, action list, Card, widget.
- Catch, Ride (four phases), Replace.
- Reward engine with Surge mode, Multiplier, Soft reset, Taper, Graduation.
- Quest.
- Bookend sessions with withdrawal-window content.
- State dial and loop detection.
- Compound dashboard: money reclaimed, clear days, Cravings beaten, Build.
- Lapse handling.
- Crisis detection and language ban list.
- Anonymous account.

Out, v2 and later:
- More Packs.
- Health data integration.
- Cohort stats ("3,412 people beat a Craving today").
- Graduation certificate.
- B2B channel.
- Verified abstinence.

## 13. Evidence map

| Mechanic | Source | Strength |
|---|---|---|
| Variable-ratio rewards on beaten Cravings | Operant conditioning literature | Strong, general |
| Contingency management structure: escalation, reset, front-loading | Prendergast 2006; 2021 JAMA Psychiatry CM meta-analysis | Strong, substance use |
| Implementation intentions in the contrast phase | Gollwitzer and Sheeran 2006, d=0.65 | Strong, general |
| Competing imagery in the Ride | Kavanagh, Andrade, May 2005; Solbrig 2019; Bakou 2021 | Strong in weight loss. Pilot in alcohol. Untested in cannabis |
| Imagery paired with obstacle contrast | Kappes and Oettingen 2011 | Strong, general |
| Breathe phase, cyclic sighing | Balban 2023 | Moderate. Mood and arousal only |
| Stillness and acceptance copy | Bowen 2014 MBRP | Moderate. Single site |
| Identity progression, Character frame | Behavior-change identity literature | Moderate, indirect |
| Craving-moment intervention as the differentiator | ICan RCT 2023 (negative result for content-only) | Lesson, not evidence |
| No magical-thinking content | Di Forti 2019 | Safety rationale |

Full citations and links: `research-findings.md`.

## 14. Open questions

1. Reward parameters in 7.6 marked "lit-review sprint." Read Prendergast 2006 and the 2021 CM meta-analysis, then set them.
2. Name and brand direction. "Overwrite" fits the Program and Build vocabulary best.
3. Widget feasibility per platform. iOS lock-screen widgets cannot open a deep link without an unlock on some versions. Confirm the under-2-seconds target on both platforms.
4. Imagery script generation: template fill at onboarding, or one model call at onboarding with caching. Both keep the Craving path offline.
5. University partner for the pre-registered pilot. The competing-imagery question in section 11 is the study.

## 15. Assumptions

- Mobile-first. iOS and Android. The widget is a hard requirement, so a web-only v1 does not meet the spec.
- No tech stack is chosen. The data model in section 10 is logical only.
- One Program runs at a time per user in v1.
- Copy in this spec is placeholder. Product voice is defined in `VOICE.md` when it exists.

## 16. Next steps

1. Lock the reward parameters through the lit-review sprint.
2. Wireframe the Catch, Ride, and Card flows.
3. Write the cannabis Pack content: Cue slot templates, rituals, Quest bank, withdrawal notes.
4. Draft the language ban list into a lint rule for copy.
5. Choose the name.
