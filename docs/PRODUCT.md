# Niharika's Portfolio: Product Spec

> **One line:** A portfolio that *is* a working AI product. Visitors don't read about my work, they use it.

**Owner / Stakeholder / Developer:** Niharika Valacha (AI / Applied AI Engineer, Backend & AI Systems)
**Status:** Discovery & design (no code yet)
**Last updated:** 2026-09-24

---

## 1. Why this exists

1. **Get hired** by product companies as an AI / backend engineer.
2. **Prove it, don't claim it:** every resume skill (multi-agent systems, RAG, queues, payments, system design) runs live on the site.
3. **Learn by building:** frontend, Go, cloud, animation, payments.
4. **Interview prep:** every feature produces a system-design story I can explain and demo.
5. **Be memorable:** creative, fun, nothing like a template portfolio.

## 2. Product principles

- **Crazy, but never in the way.** A recruiter reaches my resume and contact in under 5 seconds.
- **Show the machinery.** X-ray Mode makes every feature explain itself.
- **Mobile and laptop get their own designs,** not one layout shrunk down.
- **Never breaks.** Every live feature has a fallback (cold start, budget cap, errors).
- **Cheap to run.** Uses free tiers; cloud credits are for learning, not for staying online.

## 3. Who visits

| Persona | Time | Needs | Main path |
|---|---|---|---|
| Recruiter | 30 sec | Role, experience, resume, contact | Recruiter Mode |
| Hiring manager / engineer | 5–10 min | Depth, proof, thinking | Mimi chat, case studies, X-ray |
| Curious peer | 2–5 min | Fun, something to share | Game, galaxy, voice tour, Treat Mimi |
| Me | Ongoing | Update content, interview prep | Private prep mode |

## 4. The cast

- **🧑‍💻 My avatar:** a stylized version of me (Memoji-like). Hosts the voice tour and lip-syncs to my pre-recorded voice.
- **🐱 Mimi the cat:** my AI agent with a cat body. Lives on every page, guides visitors, chats, reacts, does tricks.

**Mimi's look (decided):**
- **Enamel-pin style:** flat midnight `#1A2138` cat, thin **muted gold** `#B89A5E` line work, one **ember** `#D9622B` star on her forehead (her circuit-node tag). Heart nose. No gradients, no moons.
- **Eyes:** 2 normally; **all 4 open when she's thinking** (one per sub-agent). 4-eye state is post-Release 1.
- Premium, a little mysterious, a little sassy. Needs a simplified version that reads at 48–64px.
- Built for Rive.
- **Costumes are small props:** glasses (Projects) · scroll badge (Experience) · tiny tie (Interview) · yarn (Fun) · goggles (X-ray Mode).
- **Site palette (decided, "Midnight & Cream"):** Paper `#FBFAF7` / `#12151F` · Mist `#D6DCEE` / `#1E2436` · Ink `#1A2138` / `#ECEAE4` · Slate `#5E6680` / `#9AA1B6` · Dusk `#4B5A94` / `#AFBBE6` · Ember `#D9622B` / `#F07A45` (light / dark). Usage ~90% paper+ink, 8% mist, 2% ember. No gradients, hairline borders. Preview: `design/palette/palette.html`. Ember button text contrast still to fix.

## 5. First 5 seconds

1. "Agent OS booting…" sequence (~1.5s, skippable, first visit only).
2. Avatar waves and Mimi presents three doors:
   - 🎙️ **Talk to Mimi** (voice agent that clicks through the site)
   - 💬 **Chat with Mimi** (text)
   - 📄 **Recruiter Mode**
3. The X-ray 🔍 toggle is always visible.

## 6. Features

### 6.1 Agent OS + Mimi 🐱 (the core)
- Click Mimi → chat opens next to her (popover on laptop, bottom sheet on mobile).
- **Multi-agent routing, shown through costumes:**

  | Sub-agent | Mimi's look |
  |---|---|
  | Router | Plain Mimi |
  | Projects | 🤓 Glasses |
  | Experience | 📜 Scroll badge |
  | Interview-me | 👔 Tiny tie |
  | Fun / Game | 🧶 Yarn ball |

- **Interview-me:** answers behavioral questions in STAR format from my real stories.
- **Generative UI:** replies render project cards, timelines, and charts, not just text.
- **Guardrails:** stays on topic, never shares my phone number, resists prompt injection, daily cost cap.
- **Personality:** playful, a little sassy, professional underneath. Only real facts, and says so when it doesn't know.

**Mimi reactions:**

| Trigger | Reaction |
|---|---|
| Idle | Grooms, tail flicks |
| 30s no activity | Sleeps 💤 |
| Scroll | Walks along and sits on section headings |
| Agent thinking | Paws at a yarn ball (loading state) |
| Cold start | "Mimi is waking up…" yawn |
| LLM budget used up | Napping, falls back to canned answers |
| Resume downloaded | "Meow! Excellent taste 😼" + confetti |
| Pitch job done | Walks in carrying a letter ✉️ |
| Purchase complete | Eats the treat 😻 |
| High score | Holds a trophy 🏆 |
| X-ray on | Pops on glowing goggles 🥽 |
| 404 | Knocked the page off the table |
| Idle cursor (easter egg) | Cursor becomes a laser pointer, Mimi chases it |
| Pet 5× (easter egg) | Backflip |

**Mimi rules:** never covers content or buttons · at most one pop-up per ~20s and none while the visitor is reading · sound off by default (🔈 toggle) · "Shoo Mimi" button · static under reduced motion · quiet in Recruiter Mode · on mobile she stays small in the bottom-right corner without wandering.

### 6.2 X-ray Mode 🔍 (ties everything together)
A global toggle. Every component shows how it works: render mode, latency, cache status, the API calls made, and the agent's live execution graph (`router → interview_agent`). Includes the payment flow and the chaos buttons.

### 6.3 Recruiter Mode 📄
Clean one-pager: role, experience, top projects with numbers, resume download, contact. Loads fast, no gimmicks.

### 6.4 Mimi voice agent 🎙️ (live, not recorded)
- Tap Mimi and talk. She answers out loud **and acts on the site** through tool calls: `navigate()`, `open_project()`, `toggle_xray()`, `start_pitch()`, `open_shop()`.
- **Cheap stack:** browser speech recognition (free) → my agent (cheap model, capped) → Google Cloud TTS (free tier).
- **Limits:** tap to start only · 60s per session · a few sessions per visitor per day · global daily cap → "voice is napping 😴", switches to text.
- **Fallback:** browsers without speech recognition (e.g. Firefox) get text chat.
- Open: Mimi's own voice vs mine; keep or drop my avatar (see §14).

### 6.5 "Pitch me to your company" ⚙️
- Visitor enters a company name → a Celery job → live progress over WebSocket: `queued → researching → matching projects → drafting → done`.
- Output: a one-page "why Niharika fits [company]", with a shareable link and preview image.
- Cost control: 1 run per visitor per day, results cached per company, LLM spend cap.

### 6.6 Treat Mimi 🐟 (real payments)
Mimi's corner: cat lovers buy for Mimi. Sells real products (no donations; needs KYC).

| Buy | Price (placeholder) | Delivered |
|---|---|---|
| 🐟 Fish snack | ₹49 | Mimi wallpaper pack |
| 🥫 Tuna can | ₹149 | Sticker pack + wallpapers |
| 🍣 Salmon feast | ₹499 | Everything bundle + Hall of Fame spot on the Treat Wall |

- **Flow:** order created on the server → Razorpay checkout (UPI/cards) → signature verified → webhook → Celery job emails download/booking link → Mimi eats → Treat Wall (opt-in).
- **Patterns shown:** server-side order creation and verification, webhook as source of truth, idempotency, order state machine (`created → pending → paid/failed → refunded`), async fulfillment, daily reconciliation.
- **Chaos buttons (X-ray, sandbox on test keys):** duplicate webhook · failed webhook + retry · fake payment rejected.
- **Requires:** Terms, Privacy, Refund/Cancellation, Contact, and pricing pages.

### 6.6b Money model 💰
Two places only. **Home page and Recruiter Mode have no money buttons.**

**`/hire`: Niharika (my skills)**
| Offer | How |
|---|---|
| Hire me: freelance AI agent & backend builds | Inquiry form; Mimi asks a few questions and sends me the lead |
| Architecture / code review ("I'll review your AI system") | Fixed price |
| Paid 1:1 calls: mock interviews, career chats | Topmate link |
| Workshops: "Production AI agents 101" for colleges & companies | Inquiry form |

**`/uses`: tools I use** (a classic developer page) with clearly disclosed affiliate links.

**`/mimi`: Mimi's world**
| Offer | How | When |
|---|---|---|
| Treat Mimi 🐟 | Razorpay (§6.6) | v1 |
| Mimi Portfolio Kit | This site as a template for other devs | After v1 is done |
| Get your own Mimi | AI guide for other devs' portfolios, monthly subscription | Later (the big bet) |

### 6.7 Game 🎮 (design TBD)
- Working idea: **Latency Hunter**. Route queries through the agent graph before they time out.
- Global leaderboard (Go + Redis sorted set), server-validated signed sessions (anti-cheat), shareable scores.

### 6.8 Embedding Galaxy 🌌 (the wow section)
3D space where projects, skills, and jobs are stars positioned by real embeddings. Searching lights up the matches (vector search, visualized). Mobile: 2D swipeable map.

### 6.9 Mission Control `/status` 📊
Public live dashboard of the site itself: visitors, agent latency, queue depth, pitch runs, uptime, success metrics.

### 6.10 Case studies & engineering notes 📝
- `/work/[project]`: Agent Studio, the 73% latency fix, Skill Passport, the PII microservice, VEDA. Each covers problem → constraints → decision → result → numbers.
- `/notes`: published decision docs (why Go, why Celery, why Razorpay…). Good for SEO and interview prep.

### 6.11 Private prep mode (only for me) 🎯
Mimi grills me on my own system design ("Why Go over Node for the gateway?").

## 7. Sitemap

```
/                 Home: Agent OS (avatar + Mimi + 3 doors)
/recruiter        Recruiter Mode
/work/[project]   Case studies
/pitch            Pitch me to your company
/hire             Hire me, reviews, 1:1 calls, workshops
/uses             Tools I use (affiliate links)
/mimi             Mimi's world: Treat Mimi, Treat Wall, Portfolio Kit, Get your own Mimi
/play             Game + leaderboard
/galaxy           Embedding Galaxy
/status           Mission Control
/notes            Engineering notes
/terms /privacy /refunds /contact   Required for payments
/prep             Private (me only)
X-ray             Global toggle on every page
```

## 8. Mobile vs laptop

| | Laptop | Mobile |
|---|---|---|
| Mimi | Walks the page, follows the cursor, popover chat | Small, corner, bottom-sheet chat |
| Voice agent | Mimi walks to what she talks about | Mimi stays in the corner; the page scrolls |
| Galaxy | Full 3D | 2D swipe map |
| X-ray | Hover labels | Tap labels |
| Extras | Custom cursor, ⌘K palette | Touch/gesture controls |

## 9. Architecture

```
Visitor ──▶ Next.js (Vercel): UI, SEO, voice tour, game, Mimi
               │ HTTPS / WebSocket
               ▼
          Go service (Cloud Run): gateway, rate limiting, WebSockets,
               │                  leaderboard, payments + webhooks
       ┌───────┴──────────┐
       ▼                  ▼
 FastAPI agent       Redis + Celery worker (GCP e2-micro, free)
 (Cloud Run)         pitch jobs, payment fulfillment, emails,
 LangGraph, RAG      reconciliation
       └───────┬──────────┘
               ▼
     Postgres + pgvector (Neon free)
```

| Layer | Choice | Why |
|---|---|---|
| Frontend | Next.js + TypeScript | React, SSR/SEO, server components, used widely by product companies |
| Styling | Tailwind + design tokens | Design system, themes |
| Motion | Motion + View Transitions API | Smooth transitions, light |
| Character animation | Rive | Interactive state-machine animation for Mimi and the avatar |
| 3D | React Three Fiber | Galaxy |
| Gateway / realtime / payments | Go | Many concurrent connections, WebSockets |
| Agent | FastAPI + LangGraph | My core strength |
| Queue | Celery + Redis (self-hosted on VM) | Async jobs; Upstash free tier can't handle Celery's constant polling |
| DB | Postgres + pgvector | Relational data + vectors in one place |
| Payments | Razorpay | UPI, India-friendly |
| Hosting | Vercel + GCP Cloud Run + e2-micro | Free tiers, scale to zero |
| CI/CD | GitHub Actions | Tests + auto-deploy |
| Containers | Docker + docker compose | `Dockerfile` + `docker-compose.yml` from day one; each service joins compose when built; required for Cloud Run services |

**Cost target:** ~₹0–400/month + domain (~₹1000/year). LLM spend is hard-capped. Payment fees ~2%.

## 10. Non-functional requirements

- **Performance:** Lighthouse 90+; the home page is fast on a cheap Android phone; 3D, game, avatar, and Rive load only when opened.
- **Resilience:** cold-start state, budget-exhausted fallback, graceful errors.
- **Accessibility:** reduced motion, full keyboard navigation, screen-reader-friendly chat, text alternatives for the game and galaxy.
- **SEO:** metadata, OG images, sitemap, structured data, server-rendered case studies.
- **Security:** rate limiting, prompt-injection guardrails, webhook signature checks, secrets never in the browser.
- **Privacy:** cookie-less analytics, no consent banner.
- **Content:** projects stored as files in the repo; a push updates both the site and Mimi's knowledge.

## 11. Success metrics

Resume downloads · contact submissions · pitch runs · purchases · time until a recruiter makes contact · tour completion rate. Shown live on `/status`.

## 12. Priorities (v1)

- **Must:** Recruiter Mode, case studies, SEO, Mimi + agent chat with generative UI, basic X-ray, mobile/laptop designs, fallbacks
- **Should:** Mimi voice agent, Pitch me, Treat Mimi payments, `/hire`, `/uses`, `/status`
- **Could:** game + leaderboard, galaxy, ⌘K palette, private prep mode
- **Later:** Mimi Portfolio Kit, Get your own Mimi (SaaS)
- **Won't (for now):** ads, native app, blog comments, multiple languages

## 13. Build phases

0. **Setup:** monorepo (`frontend/web/`; `backend/gateway/`, `backend/agent/`, `backend/worker/`), CI, deploys
1. **MVP live:** Recruiter Mode, case studies, SEO, responsive ← *shareable from day one*
2. **Design system + motion:** tokens, themes, transitions, mobile/laptop interactions
3. **Services:** Go gateway, FastAPI, Postgres, contact form, analytics
4. **Queue:** Redis + Celery on VM → Pitch me
5. **Agent OS + Mimi:** RAG, generative UI, costumes, X-ray
6. **Payments:** Treat Mimi, policy pages, chaos sandbox
7. **Mimi voice agent** + `/hire`, `/uses`
8. **Fun layer:** game + leaderboard, galaxy, ⌘K, easter eggs, `/status`, prep mode
9. **Productize:** Mimi Portfolio Kit → Get your own Mimi

Each phase ends live, and each phase produces a decision doc (interview story).

## 13b. How we build: ship daily 🚢

- **Updated 2026-09-27:** build and run locally with Docker until Release 1 looks right, then ship. Hosting (Vercel vs Cloud Run) is decided at ship time.
- ~~Every day ends with something live on the real URL.~~ Every day still ends with a small finished slice, running locally.
- **One slice per day:** the smallest version of a feature that is useful on its own.
- **Enhancements are decided later:** ideas go into the backlog below, not into today's work.
- **Each day leaves one note** (what I built, why, the tradeoff), which becomes an interview story.
- Mimi, the game, the galaxy, and the money pages are parked until the base is live.

**First 8 days**

| Day | Ship | Live result |
|---|---|---|
| 1 | Next.js app + Vercel deploy + hero (name, role, 3 key numbers, resume, links) | A URL I can share |
| 2 | Experience timeline + projects section | Full recruiter content |
| 3 | SEO: metadata, OG image, sitemap, structured data | Looks good when shared, findable on Google |
| 4 | Mobile vs laptop layouts + dark/light theme tokens | Looks right on every device |
| 5 | First case study: the 73% latency fix (`/work/latency`) | Depth for engineers |
| 6 | Motion: page transitions, scroll reveals, reduced-motion support | It feels alive |
| 7 | Go service on Cloud Run + contact form (email) | First backend + cloud |
| 8 | X-ray v0: toggle shows render mode + timing on 3 components | The signature feature exists |

After Day 8: agent v0 (text Q&A over my resume) → Mimi v0 → the rest, one slice at a time.

**Enhancement backlog** (decide later): Mimi voice switcher (Mimi / Calm / Narrator / Meow mode / Niharika) · voice agent · game · galaxy · Pitch me · Treat Mimi · `/hire` · `/uses` · `/status` · ⌘K · prep mode · Portfolio Kit · Get your own Mimi

## 14. Open decisions

- [ ] ⚠️ **REMINDER: Projects section is not ready.** No written case studies yet. Decide which 2–3 projects to feature (Agent Studio, latency fix, Skill Passport, PII service), sharing is approved by the companies (confirmed 2026-09-27), then write each case study.

- [x] Mimi's look: see §4
- [ ] Mimi's voice: her own, or mine?
- [ ] Keep or drop my avatar
- [ ] Pricing for reviews, workshops, Kit, and the Mimi subscription
- [ ] Final product list and prices for Treat Mimi
- [ ] Game design (Latency Hunter or something else)
- [ ] Domain name
- [ ] Mimi / avatar art: design myself in Rive, community file, or commission
