# Pack: cannabis

Status: draft v0.1, 2026-09-03. Follows the Pack schema in `habit-engine-spec.md` section 9.
Copy in this file is placeholder until `VOICE.md` exists. Every line passes the ban list in spec section 7.13.

This document is STE-informed. A human gives final approval.

## Pack header

| Field | Value |
|---|---|
| id | `cannabis` |
| name | Cannabis. Never shown on the widget or in notifications. |
| default Program length | 30 days, then optional 60-day Hold |
| withdrawal window | Days 1 to 21. Sleep content through day 28. |
| age gate | 18 or older |

## Cue slot templates

Each template pre-fills one Cue slot at onboarding. The user confirms, edits, or deletes it. The default ritual links to the ritual bank below.

| id | Cue slot | Typical time | Mood before | Default ritual |
|---|---|---|---|---|
| `night-couch` | Wind-down on the couch, screen on | 21:00 to 23:30 | Restless, bored, wired | `R1` Night session and sleep tea |
| `sleep-aid` | In bed, cannot fall asleep | 22:30 to 01:00 | Anxious, awake | `R2` Wind-down protocol |
| `after-work` | Home from work, first hour | 17:00 to 19:00 | Drained, tense | `R3` Decompression walk |
| `wake` | First 30 minutes after waking | 06:00 to 09:00 | Foggy, flat | `R4` Morning session and cold water |
| `car` | Parked, before driving or after arriving | Any | Idle, waiting | `R5` Car playlist and breathe |
| `social` | At a friend's place or a gathering | 19:00 to 02:00 | Wants to belong | `R6` Drink in hand and exit time |
| `gaming-tv` | Start of a gaming or TV session | 19:00 to 01:00 | Anticipation | `R7` Snack and timer |
| `stress` | After conflict, bad news, or a deadline | Any | Angry, anxious | `R8` Breathe and voice note |
| `meal` | After dinner | 18:30 to 20:30 | Full, sluggish | `R9` Dishes and a walk |
| `weekend` | Saturday or Sunday afternoon, nothing planned | 13:00 to 17:00 | Bored, empty | `R10` Planned block |
| `pain-sleep` | Physical discomfort or chronic pain at night | 21:00 onward | Uncomfortable | `R11` Heat and stretch |
| `creative` | Before creative work or music | Any | Blocked | `R12` Ten-minute ugly draft |

## Replacement rituals

Each ritual fits a Cue slot. Each takes 10 to 20 minutes, the length of a Ride. The user can swap any ritual or write their own.

| id | Ritual | Steps | Slot tags | Supplies |
|---|---|---|---|---|
| `R1` | Night session and sleep tea | 1. Start the night Bookend session. 2. Boil water during the breathe phase. 3. Drink the tea during the image phase. 4. Lights down at the end. | `night-couch`, `sleep-aid`, `pain-sleep` | Caffeine-free tea, kettle |
| `R2` | Wind-down protocol | 1. Out of bed. 2. Dim light, no screen. 3. Ten minutes of cyclic sighing. 4. Back to bed when heavy. | `sleep-aid` | None |
| `R3` | Decompression walk | 1. Change clothes. 2. Walk 15 minutes with the Ride audio. 3. Enter the house through a different door. | `after-work`, `stress` | Shoes by the door |
| `R4` | Morning session and cold water | 1. Cold water on the face or a 30-second cold shower finish. 2. Morning Bookend session. 3. First Quest. | `wake` | None |
| `R5` | Car playlist and breathe | 1. Start the set playlist. 2. Breathe phase in the seat. 3. Drive or get out at the end of the third track. | `car` | Playlist |
| `R6` | Drink in hand and exit time | 1. Pick a non-alcoholic drink before you arrive. 2. Hold it. 3. Set the exit time before you enter. 4. Leave at the exit time. | `social` | Drink |
| `R7` | Snack and timer | 1. Prepare the snack before the session starts. 2. Set a 20-minute timer. 3. Play until the timer. 4. Stand, stretch, breathe phase. | `gaming-tv` | Snack |
| `R8` | Breathe and voice note | 1. Breathe phase. 2. Record a 2-minute voice note: what happened, what you feel, what you want. 3. Do not send it. | `stress` | Phone |
| `R9` | Dishes and a walk | 1. Wash the dishes by hand. 2. Ten-minute walk. 3. Night plan set. | `meal` | None |
| `R10` | Planned block | 1. Pick one item from the Quest bank or a hobby list. 2. Block 90 minutes. 3. Start within 5 minutes. | `weekend` | None |
| `R11` | Heat and stretch | 1. Heat pack or warm shower. 2. Ten minutes of slow stretches. 3. Wind-down protocol. | `pain-sleep` | Heat pack |
| `R12` | Ten-minute ugly draft | 1. Timer for 10 minutes. 2. Make the worst version. 3. Stop at the timer. | `creative` | Tools for the work |

## Imagery script template

Used in the Ride image phase and in both Bookend sessions. The system fills the slots from the Goal statement at onboarding and caches the result. The script is audio, first person, present tense, 3 minutes.

Slots: `{wake_time}`, `{morning_detail}`, `{money_week}`, `{purchase}`, `{evening_detail}`, `{person}`, `{cue_slot}`, `{ritual}`.

Script:

1. Settle. "Eyes closed or soft. Breathe out slowly."
2. Morning. "It is `{wake_time}`. I wake before the alarm. My head is clear. `{morning_detail}`. I notice how the air feels in the room."
3. Body. "I stand and my chest is open. I take a full breath and it goes all the way down. No cough."
4. Money. "This week `{money_week}` stayed in my account. I see the number. I see `{purchase}` getting closer."
5. Evening. "It is evening. `{evening_detail}`. I am on the couch and the urge comes and I watch it pass like weather."
6. Person. "`{person}` looks at me and sees the difference. I do not have to say anything."
7. Contrast, mandatory. "The hardest slot is `{cue_slot}`. When `{cue_slot}` starts, I `{ritual}`. I see myself doing it. I see the urge fade by the end."
8. Close. "This is who I am on day 30. Open your eyes."

Rules:
- Step 7 never gets cut. If the session is shortened, cut steps 3 and 6 first.
- No abstract words: no "success," "freedom," "healing." Only things the user can see, hear, smell, touch, or taste.
- The habit is never named in the script.

## Quest bank

One Quest per day, from the top. The user reorders at onboarding. Each Quest is one action a person can complete in one day.

Priority tier 1, days 0 to 3. Environment.

1. Put every piece of gear (grinder, papers, pipe, vape, lighter) in one bag. Put the bag in the car trunk or a neighbor's garage.
2. Delete the dispensary app and the delivery app.
3. Move the dealer contact to a note titled "Old" and delete it from contacts.
4. Buy the supplies for your top three rituals (tea, heat pack, snack, playlist).
5. Set the night Bookend session alarm at the start of your `night-couch` or `sleep-aid` slot.
6. Wash the clothes, sheets, and hoodie that smell like smoke.
7. Move the couch cushion, chair, or spot where you always used. Change the room's layout by one piece.
8. Tell one person: "I am running a 30-day Program. Ask me how it is going on day 7."

Priority tier 2, days 4 to 10. Rituals and body.

9. Do the full `R2` wind-down protocol once in daylight so it is familiar at night.
10. Set a fixed wake time for the next 7 days. Put the alarm across the room.
11. Buy or prepare three days of easy breakfasts. Appetite returns and needs a target.
12. Walk 20 minutes in daylight before noon.
13. Book one thing for Saturday afternoon before Saturday arrives.
14. Write the exit time for the next social event on the Card notes.
15. Replace one evening screen hour with a physical task: cook, tidy, build, fix.
16. Do the `R8` voice note once when you are not stressed, so it is easy when you are.

Priority tier 3, days 11 to 20. Money and identity.

17. Open the pledge. Name the purchase. Set the target amount.
18. Move this week's usual spend to a separate account or envelope.
19. Cancel one subscription or standing order that only existed for the habit.
20. Write three traits on the Character that are true today and were not true on day 0.
21. Send a message to the person from Quest 8: "Day 14. Still running it."
22. Cook one full meal from scratch and eat it at a table.
23. Do one thing that used to need the habit first: music, a film, a game, sex, a party. Do it without.
24. Throw out or give away the bag from Quest 1.

Priority tier 4, days 21 to 30. Hold the shape.

25. Plan the first week after Graduation: which sessions stay, which rituals stay.
26. Pick the next Program or decide on the Hold.
27. Write the Lapse plan: if I use once, I log it, I run the next Ride, I do not throw the month away.
28. Tell the person from Quest 8 the Graduation date.
29. Do a full day with no Bookend sessions and log how it goes.
30. Spend the first pledge release on the named purchase.

Reserve Quests, any day.

31. Clear the search history, saved posts, and playlists tied to the habit.
32. Go to a place you avoided because you could not use there.
33. Say no to one invitation that only worked with the habit.
34. Book a dentist or doctor visit you put off.
35. Ten-minute cold walk with no phone.

## Withdrawal-window content

Delivered in the night Bookend session. One note per day. Each note has three parts: what is normal today, how long it lasts, one action. Sources: Budney et al. 2003, J Abnorm Psychol, PMID 12943018: onset days 1 to 3, peak days 2 to 6, most symptoms 4 to 14 days. Bonnet and Preuss 2017, Subst Abuse Rehabil, PMID 28490916: full course up to 21 days, receptors reset by about 4 weeks. Sleep trouble is the symptom most tied to going back.

| Day | Normal today | How long | Tonight's action |
|---|---|---|---|
| 1 | Nothing yet, or restlessness by evening. Cravings come from the Cue slot, not the body. | The body part starts tomorrow or the day after. | Run the full night session. Bed at the fixed time. |
| 2 | Irritability, short temper, hard to fall asleep. | Peaks over the next four days, then eases. | Wind-down protocol. Move the phone out of the room. |
| 3 | Anxiety, restlessness, low appetite. Vivid dreams may start. | Days 2 to 6 are the peak. | Eat something at dinner even without hunger. Breathe phase twice. |
| 4 | Sleep is broken. Dreams are strange. Mood is flat or angry. | This is the hardest stretch. It is also the shortest. | Say the Lapse plan aloud. Night session. |
| 5 | Sweats, chills, headache, or stomach ache for some. Not everyone. | Physical symptoms fade first. | Warm shower, heat pack, water. |
| 6 | Peak ends for most. Sleep is still poor. | From here, each day is a little better. | Walk in daylight tomorrow before noon. |
| 7 | Appetite returns. Mood lifts a little. Cravings still come at the Cue slot. | Most symptoms gone by day 14. | Message the person from Quest 8. |
| 8 to 10 | Sleep improving but light. Dreams still vivid. Irritability fading. | Dreams can run into week 4. That is the brain resetting. | Same bedtime. No screen in bed. |
| 11 to 14 | Most symptoms gone. Boredom takes their place. The Cue slot still fires. | Boredom is not withdrawal. It is a free hour with nothing in it yet. | Fill the slot with the ritual, not with the app. |
| 15 to 21 | Occasional bad night. Occasional flat afternoon. Cravings shorter and rarer. | The full course ends here for nearly everyone. | Plan the week after Graduation. |
| 22 to 28 | Sleep close to normal. Dreams settle. | Receptors are back near baseline at about 4 weeks. | Do the full-day no-session test (Quest 29). |

Copy rules:
- Never say "withdrawal" in the user-facing note. Say "what is normal today."
- Never give a medical instruction. "Water, warm shower, heat pack" are comfort actions, not medical advice.
- If the user logs a State dial of 1 on two consecutive days in this window, show the safety resources card.

## Cost model

| Field | Value |
|---|---|
| unit | Currency per week. Fallback: grams per week times price per gram. |
| prompt at onboarding | "What do you spend on it in a normal week?" Then: "Is that closer to weekly or monthly?" |
| default if skipped | Ask again on day 3. Do not guess. |
| money reclaimed | Weekly spend divided by 7, added daily. Paused on a Lapse day, not deducted. |
| time reclaimed | Optional. "How many hours a week did it take?" Shown as a secondary counter. |
| pledge | Named purchase and target amount. Large prizes release 10% of the target. Jumbo prizes release 25%. Graduation releases the balance. |

## Safety rules

Screening runs inside onboarding as plain questions. No scores are shown. No labels are applied. A hit shows the resources card and, where marked, holds the Program.

| id | Question | On yes |
|---|---|---|
| `age` | "Are you 18 or older?" | No: stop onboarding. Show the age message. |
| `pregnancy` | "Are you pregnant or breastfeeding?" | Show the resources card with a line about talking to a doctor or midwife. Continue. |
| `medical` | "Do you use it on a doctor's advice for a condition?" | Show: "Talk to the person who advised it before you change anything." Hold the Program until the user confirms. |
| `psychosis` | "In the last month, have you heard or seen things other people could not?" and "Have you had beliefs that others said were not real?" | Either yes: show the resources card with a line about seeing a professional first. Hold the Program. Do not name a condition. Do not apply a label. |
| `alcohol` | "On how many days a week do you drink alcohol?" and "On a drinking day, how many drinks?" | Daily and 6 or more: show the resources card with a line that stopping alcohol suddenly needs medical help. Continue the cannabis Program. |
| `synthetic` | "Is it plant cannabis, or synthetic (K2, Spice)?" | Synthetic: show the resources card. Hold the Program. Withdrawal from synthetics can need medical care. |
| `self-harm` | Free-text classifier on Goal statement and voice notes, plus the State dial rule above. | Show the resources card with crisis lines. Never lock the app. |

Resources card: country-specific crisis line, a general helpline, and a link to find a doctor. Content per country is a launch task. The card uses the same voice as the rest of the app.

## Ban list check

The banned words are listed in `copy-lint.json` at the repo root. Run `node tools/copy-lint.mjs` to check this file. The Program copy uses "Lapse," "clear day," "Program," and "what is normal today" in their place.
