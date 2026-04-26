# 🕵️ Micro:bit Radio Heist — Hacker Edition

> A gamified micro:bit workshop where students become "Agents" in The Matrix, learning radio communication, variables, loops, and signal detection through 5 progressive challenges.

![micro:bit](https://img.shields.io/badge/micro:bit-v2-blue) ![MakeCode](https://img.shields.io/badge/MakeCode-JavaScript-green) ![License](https://img.shields.io/badge/license-MIT-brightgreen)

## 📋 Overview

This project was developed for **Microsoft Dream Space** educational workshops in collaboration with **Codam** (42 Amsterdam network). Students work through a spy-themed narrative, progressing from basic button input to brute-force attacks and signal-strength treasure hunting — all using micro:bit radio.

Designed for students aged 12–16 with no prior coding experience. Duration: approximately 60–90 minutes.

## 🧭 My Role: Project Manager & Facilitator Enablement

This was a team effort. The **workshop narrative** (the spy-themed Matrix storyline) and the **micro:bit challenge code** were created by fellow team members. As project manager, I coordinated the team, kept the project on track, and built everything needed to make the workshop *deliverable* — the infrastructure that ensures a first-time facilitator can walk into a room and run it confidently.

### The Challenge

The team built a great set of micro:bit programs and an engaging storyline. But managing a project means seeing the full picture — and to actually run this in a real masterclass with real time constraints, we needed more around it:

- Facilitators who had never seen the material needed to **understand the full flow, anticipate where students get stuck, and troubleshoot live**
- The workshop had to be **executable within a strict time window** — no room for improvisation
- The facilitation team included **non-Dutch speakers**, so materials couldn't stay in one language
- The **teacher-side micro:bit infrastructure** (The Matrix server, treasure beacon) needed to be built, tested, and ready before students arrived

### What I Contributed

**As project manager:**

| Responsibility | Details |
|----------------|---------|
| **Project coordination** | Managed the team timeline, divided responsibilities, tracked progress, and ensured all pieces came together for delivery day. |
| **Team support** | Helped team members troubleshoot their code, reviewed work, and bridged communication gaps within the group. |
| **Rehearsal & user testing** | Organised a rehearsal of the full masterclass with young children to measure actual timing per challenge, identify bottlenecks, and validate that the flow works in practice — not just on paper. Adjustments were made based on what we observed. |
| **Risk management** | Identified potential failure points early (time overruns, radio conflicts, language barriers) and built solutions before they became problems. |
| **Stakeholder communication** | Coordinated between the team, Microsoft Dream Space, and Codam to align expectations with what we could realistically deliver. |
| **User testing & rehearsal** | Organised a rehearsal session with young children to validate timing and flow before the actual masterclass — a key step that shaped our final facilitation approach. |

**As facilitator enablement lead:**

| Deliverable | What it solved |
|----------------|---------------|
| **Trilingual teacher reference guides** (NL / EN / JP) | Any facilitator can run the workshop confidently, regardless of language. Each guide includes per-challenge goals, student tasks, MakeCode blocks used, teacher notes, and — critically — a section on **where students get stuck** and how to help them. |
| **Workshop flow restructured for 60-minute format** | Mapped the team's narrative arc (boot screen → challenges → treasure hunt) to realistic time blocks, identified which optional tasks to cut under pressure, and built in buffer moments (the "help your fellow agent" pause between phases). |
| **Preparation checklist & troubleshooting guide** | A pre-flight checklist covering envelope preparation, Matrix micro:bit testing, MakeCode setup on all laptops, and a problem/solution table for the most common failures (wrong radio group, for-loop not starting, Matrix not responding). |
| **The Matrix server program** | The teacher-side micro:bit that drives the workshop — broadcasting test signals in Phase 1, then listening across all student groups and responding only to the secret key in Phase 4. Configurable `SECRET_KEY` and `RESPONSE_MSG` so facilitators can customise per session. |
| **Treasure beacon program** | A dedicated micro:bit hidden in the room that continuously broadcasts for the RSSI-based hot/cold treasure hunt in Challenge 5. |
| **Student code scaffolding** | Restructured the team's solutions into starter files with `// TODO` placeholders, clear comments, and progressive difficulty — so students build the code themselves rather than copy-pasting. |
| **Team support** | Supporting team members throughout development, coordinating between the different parts of the project, and making sure everything came together for delivery day. |

### Rehearsal & User Testing

Before the actual masterclass, we ran a **rehearsal session with young children** to measure real timing and identify bottlenecks. This was essential — you can't plan a 60-minute workshop on guesswork.

The surprising result: the young children completed the challenges **significantly faster** than Codam students had during our internal testing. It turned out that children approached the MakeCode blocks with fewer assumptions — they just tried things, while the adult students tended to overthink the logic before touching anything. This insight directly influenced our facilitation strategy: we learned to encourage "just build it and see what happens" rather than explaining everything upfront.

This rehearsal validated the workshop timing, exposed unclear instructions we hadn't noticed, and gave us confidence that the flow would work on delivery day.

### What I Learned

This project taught me what it means to manage a project end-to-end. **Great content needs great preparation to land in a real classroom** — and the only way to know if your plan actually works is to test it with real users. Running a rehearsal with children before the actual masterclass was one of the best decisions we made: it revealed timing issues and stumbling points that no amount of planning on paper could have caught. I learned to think about failure modes before they happen, coordinate across language barriers, iterate based on real feedback, and balance ambition with the reality of a 60-minute time box. These are skills that go beyond programming, but they're essential for shipping anything that involves real people and real deadlines.

## 🗓 Workshop Flow

```
Challenge 1: Hacker-ID          → Buttons, LEDs, timing
     ↓
  [System Test — teacher broadcasts on group 1]
     ↓
Challenge 2: Receive Signals    → Radio groups, variables, events
     ↓
  [Phase 1 complete — help fellow agents]
     ↓
  [Team Formation — envelopes with secret group numbers]
     ↓
Challenge 3: Team Search        → Send + receive, walk around to find partner
     ↓
  [Recap — ready for the real mission]
     ↓
Challenge 4: Hack The Matrix    → For-loops, brute force (hardest challenge)
     ↓
  [Matrix Unlocked — clue revealed]
     ↓
Challenge 5: Find the Treasure  → RSSI signal strength, hot/cold radar
```

### Learning Objectives

| Challenge | Concepts Introduced |
|-----------|-------------------|
| 1 — Hacker-ID | Input (buttons), output (LED icons), sequencing (`pause`, `clearScreen`) |
| 2 — Receive Signals | Radio groups, `on received number`, variables |
| 3 — Team Search | `sendNumber` + `on received number` in one program, peer communication |
| 4 — Hack The Matrix | `for` loops, brute force, variables (`index`), string vs number |
| 5 — Find the Treasure | RSSI (signal strength), LED bar graph, sound feedback |

## 📁 Project Structure

```
radio-heist/
├── README.md
├── challenges/                  # Student starter code (scaffolded with TODOs)
│   ├── challenge1_hacker_id.js
│   ├── challenge2_receive_signals.js
│   ├── challenge3_team_search.js
│   ├── challenge4_hack_the_matrix.js
│   └── challenge5_find_the_treasure.js
├── solutions/                   # Complete working solutions (for facilitators)
│   ├── solution1_hacker_id.js
│   ├── solution2_receive_signals.js
│   ├── solution3_team_search.js
│   ├── solution4_hack_the_matrix.js
│   └── solution5_find_the_treasure.js
├── teacher/                     # Facilitator-side micro:bit programs
│   ├── the_matrix_server.js     # Drives the whole workshop narrative
│   └── treasure_beacon.js       # Hidden beacon for Challenge 5
└── docs/                        # Teacher reference guides
    ├── teacher_reference_EN.md
    ├── teacher_reference_NL.md
    └── teacher_reference_JP.md
```

## 🚀 How to Use

### For Students
1. Open [MakeCode for micro:bit](https://makecode.microbit.org/)
2. Click **"New Project"**
3. Switch to **JavaScript** view (toggle at the top)
4. Copy-paste the code from the relevant `challenges/` file
5. Fill in the `// TODO` sections
6. Download to your micro:bit

> **Tip:** We recommend building the code yourself by following the Solution slide, even if you don't fully understand it yet. The act of building it will help you understand how it works.

### For Teachers / Facilitators
1. **Before the workshop:**
   - Flash `teacher/the_matrix_server.js` onto the teacher's micro:bit
   - Flash `teacher/treasure_beacon.js` onto a second micro:bit and hide it
   - Stick envelopes with group numbers (2x each, numbers 2–15) under laptops
   - Open MakeCode on all student laptops
   - Read the teacher reference guide in `docs/` for your language
2. **During the workshop:**
   - Press **Button A** on The Matrix to start Phase 1 (system test broadcast)
   - Press **Button B** to switch to Phase 2 (listening for brute-force key)
   - Press **A+B** to check current mode / reset to idle
3. **Important:** Group 1 is reserved for The Matrix — do NOT assign to students

### Configuration

In `the_matrix_server.js`, customise per session:
```javascript
const SECRET_KEY = 42        // The number students must brute-force
const RESPONSE_MSG = "NORTH" // The clue revealed when key is found
const TEST_NUMBER = 7        // Number broadcast during system test
const MIN_GROUP = 2          // Lowest student group number
const MAX_GROUP = 15         // Highest student group number
```

## 🎓 Workshop Context

This workshop is part of educational programming activities at:
- **[Microsoft Dream Space](https://www.microsoft.com/nl-nl/dreamspace)** — Inspiring the next generation of innovators
- **[Codam](https://www.codam.nl/)** (42 Amsterdam network) — Peer-to-peer coding education

## 🛠 Technical Notes

- All code is written in **MakeCode JavaScript** (not standard Node.js) — paste directly into the MakeCode editor
- Code runs on **micro:bit v2** but is backwards-compatible with v1 (except sound in Challenge 5)
- Radio range is approximately 10–20 meters indoors
- RSSI values are negative: `-40` is stronger/closer than `-80`
- The Matrix server cycles through student groups rapidly since micro:bit can only listen on one group at a time

## 📄 License

MIT License — feel free to use, modify, and share for educational purposes.

## 👩‍💻 Author

**Takako** — Classical musician turned software engineer  
Freelance developer & educator | Codam (42 Amsterdam) student  

17 years as a professional bassoonist (Tokyo University of the Arts → Conservatorium van Amsterdam, cum laude), now building at the intersection of music, technology, and education. This project reflects my approach: lead the project, support the team, and make sure the experience works for everyone in the room.
