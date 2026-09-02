# Literature review: reward schedule and digital cannabis interventions

Status: sprint 1 complete, 2026-09-02. Companion to `habit-engine-spec.md` section 7.6 and `research-findings.md`.
Purpose: read the priority list from concept v0.1, then set the reward engine parameters from evidence.

This document is STE-informed. A human gives final approval.

Method: abstracts were read through Europe PMC and PubMed. Full texts were not read except where noted. Two claims below are marked "from memory, unverified" because the full text was not reachable. Treat those as placeholders.

## 1. Contingency management (CM): what the meta-analyses say

| Source | Scope | Result | What it sets |
|---|---|---|---|
| Prendergast et al., Addiction (2006) | 47 comparisons, 1970 to 2002 | d = 0.42 overall. Opiates 0.65, cocaine 0.66, tobacco 0.31. Effect declines after treatment ends. Shorter treatment linked to larger effect | CM works during treatment. Decay after rewards stop is real |
| Lussier et al., Addiction (2006) | 30 voucher studies | r = 0.32 for abstinence. Larger effect with more immediate delivery and larger voucher value | Reward within 1 second. Magnitude matters |
| Bolívar et al., JAMA Psychiatry (2021) | 74 RCTs, n = 10,444, patients on opioid medication | d = 0.58 for abstinence, 0.62 for adherence. Stimulant abstinence d = 0.70 | CM is the strongest single mechanic in substance use |
| Ginley et al., J Consult Clin Psychol (2021) | 23 RCTs, objective abstinence up to 1 year after incentives ended | OR = 1.22 (95% CI 1.01 to 1.44). Longer active treatment predicts long-term abstinence | The effect survives the end of rewards, but small. Longer reward periods hold better |
| Remote CM systematic review, J Subst Use Addict Treat (2023) | 39 studies, mostly smoking | Remote CM matches in-person CM on outcomes | Delivery through a phone is fine |

Links:
- https://europepmc.org/abstract/MED/17034434
- https://pubmed.ncbi.nlm.nih.gov/16445548/
- https://pubmed.ncbi.nlm.nih.gov/34347030/
- https://pubmed.ncbi.nlm.nih.gov/33507776/
- https://pubmed.ncbi.nlm.nih.gov/36804352/

## 2. Reward schedule structure: the trials that set the shape

| Source | Design | Result | What it sets |
|---|---|---|---|
| Roll, Higgins, Badger, J Appl Behav Anal (1996) | 60 smokers, progressive vs fixed vs yoked control | Progressive and fixed beat control. Progressive group least likely to resume smoking | Escalation |
| Roll and Higgins, Drug Alcohol Depend (2000) | 18 smokers, within-subject, three schedules, total money equalized | Progressive with reset beat progressive without reset and beat fixed | The reset is the active ingredient, not only the escalation |
| Romanowich and Lamb, J Appl Behav Anal (2015) | 146 smokers, 12-week RCT | Escalating ($5.00 start, +$0.50 per consecutive sample) held abstinence longer than fixed ($19.75 per sample) | Escalation holds in a full-length trial |
| Petry prize-based CM, the fishbowl protocol (VA national rollout) | 500 slips per draw. Draws escalate by 1 per consecutive negative sample, cap 8. 12 weeks, two samples per week | 250 "Good job" (50%), 209 small $1 (41.8%), 40 large $20 (8%), 1 jumbo $100 (0.2%) | The probability and magnitude tiers |

Links:
- https://europepmc.org/abstract/MED/8995832
- https://pubmed.ncbi.nlm.nih.gov/10669060/
- https://europepmc.org/search?query=fixed%20versus%20escalating%20reinforcement%20schedules
- https://pmc.ncbi.nlm.nih.gov/articles/PMC6435332/

## 3. Cannabis-specific trials

| Source | Design | Result | Lesson |
|---|---|---|---|
| Budney et al., J Consult Clin Psychol (2000) | n = 60. Motivational (M) vs M plus coping skills (MBT) vs MBT plus vouchers (MBTV) | MBTV produced longer documented abstinence than MBT or M. MBT did not beat M | Vouchers drive the during-treatment effect. Skills content alone adds little |
| Budney et al., J Consult Clin Psychol (2006) | n = 90. CBT vs vouchers vs both. 14 weeks, 12-month follow-up | Vouchers drove abstinence during treatment. CBT added nothing during treatment. CBT improved maintenance after treatment | Rewards for now, skills for later |
| Kadden et al., Addict Behav (2007) | n = 240. MET+CBT vs CM-only vs MET+CBT+CM vs case management | CM-only best at end of treatment. MET+CBT+CM best at 12 months | Same lesson, larger sample |
| Budney et al., Drug Alcohol Depend (2015) | n = 75. Brief MET vs therapist MET/CBT/CM vs computer MET/CBT/CM | Computer arm matched therapist arm on abstinence and held at least as well | A computer can deliver the whole package |

Voucher schedule in the Budney trials, from memory, unverified. Verify against the full text before you cite it.
- Start at $1.50 per negative specimen.
- Increase by $1.50 per consecutive negative specimen.
- Bonus every third consecutive negative specimen.
- Reset to the start value on a positive or missed specimen.
- Two specimens per week. Maximum near $570 over 14 weeks.

Links:
- https://pubmed.ncbi.nlm.nih.gov/11142539/
- https://pubmed.ncbi.nlm.nih.gov/16649875/
- https://pubmed.ncbi.nlm.nih.gov/25938629/

## 4. Digital cannabis interventions without rewards

| Source | Design | Result | Lesson |
|---|---|---|---|
| Boumparis et al., Drug Alcohol Depend (2019) | Meta-analysis, 30 studies, n = 13,333 | Treatment interventions g = 0.12 after treatment. Not significant at follow-up. Prevention g = 0.33, held at 12 months | Content-only treatment apps produce a small effect that fades |
| Olthof et al., ICan RCT, Addiction (2023) | n = 378. Guided digital program vs non-interactive education. Primary outcome: use days at 6 months | d = 0.06, p = 0.93. Both arms fell about 4 use days per week. Grams fell more in ICan at 3 months, gone by 6 | A well-built guided app did not beat an education page |
| Rooke et al., Reduce Your Use, J Med Internet Res (2013) | n = 225. Six self-guided modules vs education modules | Fewer use days and lower quantity at 6 weeks. Quantity effect gone at 3 months. Attrition 34% at 6 weeks, 46% at 3 months | Effects are short. Attrition is the enemy |
| Tossmann et al., Quit the Shit, Cyberpsychol Behav Soc Netw (2011) | 1,292 enrolled, 206 completed post-test. 50-day program vs waitlist | Moderate-to-strong effect on frequency and quantity at 3 months among completers | Waitlist control inflates the effect. 84% did not complete |
| Quit the Shit factorial trial, J Med Internet Res (2018) | 28 days vs 50 days, chat vs no chat | Neither shorter length nor removal of chat reduced effect | A 28-day arc loses nothing against 50 days |

Links:
- https://pubmed.ncbi.nlm.nih.gov/31112834/
- https://pubmed.ncbi.nlm.nih.gov/37128762/
- https://pubmed.ncbi.nlm.nih.gov/23470329/
- https://pubmed.ncbi.nlm.nih.gov/21651419/
- https://pubmed.ncbi.nlm.nih.gov/29739738/

## 5. Behavior change technique (BCT) map

Numbers from Michie et al., Ann Behav Med 46:81 (2013), BCT Taxonomy v1, 93 techniques in 16 clusters. Verified against the open-access PDF.

| Spec feature | BCT number and label |
|---|---|
| Goal statement | 1.1 Goal setting (behavior); 13.4 Valued self-identity |
| Trigger map | 1.2 Problem solving; 2.3 Self-monitoring of behavior |
| Contrast phase if-then plan | 1.4 Action planning (including implementation intentions) |
| Card and widget | 7.1 Prompts/cues; 1.9 Commitment |
| Replacement ritual | 8.2 Behavior substitution; 8.3 Habit formation |
| Quest | 8.7 Graded tasks; 12.1 Restructuring the physical environment; 12.3 Avoidance/reducing exposure to cues |
| Reward engine | 10.2 Material reward (behavior); 10.3 Non-specific reward; 14.4 Reward approximation |
| Money reclaimed pledge | 10.9 Self-reward |
| Breathe phase | 11.2 Reduce negative emotions |
| Image phase | 15.2 Mental rehearsal of successful performance |
| Lapse copy | 13.2 Framing/reframing; 15.3 Focus on past success |
| Character and Build | 13.5 Identity associated with changed behavior |
| Withdrawal-window content | 5.1 Information about health consequences |
| State dial | 2.4 Self-monitoring of outcome(s) of behavior |

Link: https://openaccess.city.ac.uk/id/eprint/3293/

## 6. Parameter decisions for spec section 7.6

| Parameter | v0.2 placeholder | Locked value | Basis |
|---|---|---|---|
| Reward roll on a beaten Craving | Probability 0.35 | One draw per beaten Craving. P(prize) = 0.50 per draw | Petry fishbowl: 250 of 500 slips pay |
| Magnitude tiers, given a prize | small 70%, medium 25%, large 5% | small 84%, large 15.6%, jumbo 0.4% | Petry fishbowl: 209, 40, 1 of 250 paying slips |
| Escalation | Multiplier +0.1 per clear day, cap 3.0 | Draws per beaten Craving = 1 + consecutive clear days, cap 8 | Petry: draws rise by 1 per consecutive negative sample, cap 8. Roll 1996, Romanowich 2015 |
| Reset on a Lapse | Multiplier to 1.0 | Draws return to 1. Nothing else changes | Roll and Higgins 2000: the reset is the active ingredient |
| Recovery after a Lapse | Guaranteed medium reward on the next beaten Craving | Kept. No CM evidence for or against | Design choice. Protects the "punish lightly" principle |
| Reward latency | Within 1 second | Within 1 second | Lussier 2006: immediacy raises the effect |
| Surge mode, days 0 to 3 | P = 0.7 | Draws start at 2 instead of 1 for days 0 to 3 | Design choice. No CM trial front-loads. Keeps P fixed, which the fishbowl evidence supports |
| Taper, day 15 to 30 | P falls to 0.15 | Draw cap falls from 8 to 4 by day 30. P stays 0.50 | Prendergast and Ginley: effect decays after rewards stop. Taper the escalation, not the odds |
| Rewarded Cravings per day | Not set | Cap 5 draws-eligible Cravings per day | Design choice. Prevents reward inflation. No evidence |
| Program length | 30 days, extend once | 30 days, then an optional 60-day Hold at draw cap 2 | Ginley 2021: longer active reward period predicts long-term abstinence. Quit the Shit 2018: 28 days of content loses nothing against 50 |
| Skills content during Taper | Not set | Contrast phase and Replacement rituals stay mandatory through Graduation | Budney 2006, Kadden 2007: skills carry the effect after rewards stop |

Two gaps stay open:

1. Reward magnitude. Every CM trial pays money. In-app cosmetic rewards have unknown magnitude. Lussier shows magnitude matters. The money-reclaimed pledge is the closest in-product analog: the user's own money, released toward a named purchase at milestones. Treat the pledge as the large-tier reward.
2. Verification. Every CM trial verifies abstinence with urine or breath tests. The spec uses self-report. The remote CM review shows remote delivery works, but with biochemical verification. Self-report is acceptable for v1 because the user only cheats themselves. The pilot must measure use days with a validated self-report instrument, the Timeline Followback, so the outcome is comparable to the literature.

## 7. What this changes in the spec

1. Section 7.6 reward table: replace with the locked values above. Multiplier becomes draw count.
2. Section 8 Program arc: add the optional 60-day Hold after Graduation.
3. Section 1 glossary: redefine Multiplier as draw count. Add Hold and Draw.
4. Section 11 metrics: add Timeline Followback as the use-days instrument.
5. Section 13 evidence map: replace "Prendergast 2006; 2021 JAMA Psychiatry" with this document.

## 8. Not read this sprint

- Full text of Budney 2006 for the exact voucher values.
- The 2021 JAMA Psychiatry CM meta-analysis covers patients on opioid medication. A cannabis-specific CM meta-analysis was not located. Search Cochrane for "cannabis contingency management" next sprint.
- Petry's prize CM recovery rule after a reset. Some protocols restore draw level after consecutive negatives. Confirm before you change the recovery bonus.
