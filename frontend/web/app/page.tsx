const metrics = [
  { value: "73%", label: "Agent latency cut, 3.8s → 1.04s", pos: "lg:-left-60 lg:-top-20", delay: "0s" },
  { value: "2N+1 → 3", label: "Database queries", pos: "lg:-left-52 lg:top-28", delay: "-2s" },
  { value: "Top 700", label: "of 9,100+ at Google Agentic AI Day", pos: "lg:-right-60 lg:top-6", delay: "-4s" },
];

export default function Home() {
  return (
    <main className="relative flex flex-1 items-center justify-center overflow-hidden p-6">
      <div aria-hidden className="drift absolute left-[calc(50%-340px)] top-[calc(50%-190px)] h-80 w-80 rounded-full bg-mist blur-2xl" />
      <div aria-hidden className="drift absolute left-[calc(50%+110px)] top-[calc(50%-30px)] h-64 w-64 rounded-full bg-ember/30 blur-2xl [animation-delay:-7s]" />

      <div className="relative w-full max-w-xl">
        <section className="glass sheen relative rounded-3xl p-10">
          <h1 className="text-3xl font-semibold tracking-tight">Niharika Valacha</h1>
        </section>

        <ul className="mt-6 grid gap-3 sm:grid-cols-3 lg:mt-0 lg:block">
          {metrics.map((m) => (
            <li
              key={m.value}
              className={`glass float rounded-2xl px-5 py-4 lg:absolute lg:w-52 ${m.pos}`}
              style={{ animationDelay: m.delay }}
            >
              <p className="text-2xl font-semibold tracking-tight">{m.value}</p>
              <p className="mt-1 text-sm text-slate">{m.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
