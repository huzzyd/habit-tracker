# Habit Replacement Engine: product spec v0.3

Company: Artomai. Working title: TBD (candidates: Rewire, Outgrow, Seedless, Overwrite).
Status: draft. Supersedes `habit-engine-concept.pdf` (v0.1). Source analysis is in `research-findings.md`. Reward parameters come from `lit-review.md`.

Change log:
- v0.3.1, 2026-09-05: lit-review sprint 2. Three cannabis reviews and the CM manual added to the evidence map. Recovery bonus marked as having no basis in the manual.
- v0.3, 2026-09-02: reward parameters locked from the lit-review sprint. Multiplier redefined as draw count. Hold phase added. Timeline Followback added to metrics.
- v0.2, 2026-09-02: first full spec.

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
| Draw | One roll of the reward engine. Each Draw pays a prize with probability 0.50. |
| Multiplier | The number of Draws a beaten Craving earns. Starts at 1. Rises by 1 per consecutive clear day. Cap 8. |
| Soft reset | The response to a Lapse. The Multiplier returns to 1. The Build, the money counter, and the Trigger map stay. |
| Taper | The scheduled decrease in the Multiplier cap from day 15 to Graduation. |
| Graduation | The end of a Program. The final unlock. |
| Hold | An optional 60-day phase after Graduation. Multiplier cap 2. Bookend sessions optional. |
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

The engine copies the Petry prize-based CM protocol, with Draws in place of fishbowl pulls. See `lit-review.md` section 6 for the basis of each row.

| Parameter | Value | Status |
|---|---|---|
| Draws per beaten Craving | Equal to the Multiplier | Evidence |
| Prize probability per Draw | 0.50 | Evidence (Petry fishbowl) |
| Prize tiers, given a prize | small 84%, large 15.6%, jumbo 0.4% | Evidence (Petry fishbowl) |
| Multiplier | 1 + consecutive clear days, cap 8 | Evidence (Petry; Roll 1996; Romanowich 2015) |
| Soft reset on a Lapse | Multiplier returns to 1. Nothing else changes | Evidence (Roll and Higgins 2000) |
| Recovery bonus | First beaten Craving after a Lapse pays a guaranteed large prize | Design choice. No basis in the Petry and Stitzer manual |
| Reward latency | Prize shown within 1 second of the outcome tap | Evidence (Lussier 2006) |
| Surge mode, days 0 to 3 | Multiplier starts at 2 | Design choice |
| Taper, day 15 to 30 | Multiplier cap falls from 8 to 4 by day 30. Prize probability stays 0.50 | Evidence for decay (Prendergast 2006; Ginley 2021). Shape is a design choice |
| Rewarded Cravings per day | First 5 beaten Cravings each day earn Draws. Later ones log only | Design choice |
| Night session bonus | A completed night session adds 1 Draw to the next beaten Craving | Design choice |
| Graduation | One jumbo fixed unlock. New Build. Hold or next Program offered | Design choice |

Prize types by tier:
- Small: Character cosmetic, dashboard detail, a line added to the Build.
- Large: trait reveal on the Character, a money-reclaimed milestone release toward the pledge.
- Jumbo: full trait rewrite, pledge release, Build snapshot.

No cash. No external prizes in v1. The money-reclaimed pledge carries the magnitude: it is the user's own money, released toward a named purchase.

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
- Sessions are optional. Missed sessions do not break the streak. A completed night session adds 1 Draw to the next beaten Craving.
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
| 30 | Graduation | One unlock | New Build. Offer the Hold or the next Program. |
| 31 to 90 | Hold (optional) | Low. Multiplier cap 2 | Catch and Ride stay live. Bookend sessions optional. Contrast phase and Replacement rituals stay mandatory. |

The Hold exists because longer active reward periods predict long-term abstinence (Ginley 2021). Skills content stays mandatory through the Hold because skills carry the effect after rewards stop (Budney 2006, Kadden 2007).

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
- Self-reported use days at day 30 versus baseline, measured with the Timeline Followback so the result is comparable to the trial literature.

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
| Prize-probability rewards on beaten Cravings | Petry prize-based CM; Lussier 2006 | Strong, substance use |
| Escalation with reset | Roll 1996; Roll and Higgins 2000; Romanowich and Lamb 2015 | Strong, smoking |
| CM overall | Prendergast 2006 (d = 0.42); Bolívar 2021 (d = 0.58); Ginley 2021 (OR 1.22 at 1 year) | Strong, substance use. Decays after rewards stop |
| Rewards now, skills for later | Budney 2000, 2006; Kadden 2007; Budney 2015 (computer delivery) | Strong, cannabis |
| CM for cannabis, pooled | Gates 2016 Cochrane (RR 2.55 abstinence); Lima 2024 (16 studies, moderate to high quality); Halicka 2025 (OR 3.78, wide interval) | Moderate, cannabis. Long-term unknown |
| Acceptance-based copy on Outcome and Lapse | Halicka 2025 (acceptance-based therapy, OR 4.34 point abstinence) | Moderate, cannabis |
| Reset to 1, no restore | Petry and Stitzer manual 2002 | Implementation standard |
| Content-only digital programs are weak | Boumparis 2019 (g = 0.12); ICan 2023 (d = 0.06); Rooke 2013 | Strong, cannabis. Negative result |
| Implementation intentions in the contrast phase | Gollwitzer and Sheeran 2006, d=0.65 | Strong, general |
| Competing imagery in the Ride | Kavanagh, Andrade, May 2005; Solbrig 2019; Bakou 2021 | Strong in weight loss. Pilot in alcohol. Untested in cannabis |
| Imagery paired with obstacle contrast | Kappes and Oettingen 2011 | Strong, general |
| Breathe phase, cyclic sighing | Balban 2023 | Moderate. Mood and arousal only |
| Stillness and acceptance copy | Bowen 2014 MBRP | Moderate. Single site |
| Identity progression, Character frame | Behavior-change identity literature | Moderate, indirect |
| No magical-thinking content | Di Forti 2019 | Safety rationale |
| BCT coverage | Michie 2013 taxonomy, 14 techniques mapped | Reporting standard |

Full citations and links: `research-findings.md` and `lit-review.md`.

## 14. Open questions

1. Reward magnitude. Every CM trial pays money. In-app prizes have unknown magnitude. The pledge release is the closest analog. Test whether users set a pledge at onboarding.
2. Verification. CM trials verify abstinence with tests. v1 uses self-report. Decide before the pilot whether the pilot arm adds optional verification.
3. Name and brand direction. "Overwrite" fits the Program and Build vocabulary best.
4. Widget feasibility per platform. iOS lock-screen widgets cannot open a deep link without an unlock on some versions. Confirm the under-2-seconds target on both platforms.
5. Imagery script generation: template fill at onboarding, or one model call at onboarding with caching. Both keep the Craving path offline.
6. University partner for the pre-registered pilot. The competing-imagery question in section 11 is the study.

## 15. Assumptions

- Mobile-first. iOS and Android. The widget is a hard requirement, so a web-only v1 does not meet the spec.
- No tech stack is chosen. The data model in section 10 is logical only.
- One Program runs at a time per user in v1.
- Copy in this spec is placeholder. Product voice is defined in `VOICE.md` when it exists.

## 16. Next steps

1. Cannabis Pack content: done, `packs/cannabis.md`.
2. Wireframes for Card, Catch, Ride, Outcome, Reward, Lapse: done. Sources in `wireframes/`. Canvas: https://claude.ai/code/artifact/5866e4ed-d222-46ca-95b6-c174b7b7ad0f
3. Copy lint: done. `copy-lint.json` and `tools/copy-lint.mjs`, run on every push by GitHub Actions.
4. Choose the name.
5. Lit-review sprint 2: done. See `lit-review.md` section 9. Budney 2006 and Kadden 2007 full texts still need a library request.
6. Wireframes for Map, Decide, Home, Character, night session: done, second page of the same canvas. Not drawn: Pack pick, cost model, morning session, Graduation.
