// Content (name, metrics) comes later; for now only the glass + floating layout.
const cards = [
  { pos: "lg:-left-60 lg:-top-20", delay: "0s" },
  { pos: "lg:-left-52 lg:top-28", delay: "-2s" },
  { pos: "lg:-right-60 lg:top-6", delay: "-4s" },
];

export default function Home() {
  return (
    <main className="relative flex flex-1 items-center justify-center overflow-hidden p-6">
      <div aria-hidden className="drift absolute left-[calc(50%-340px)] top-[calc(50%-190px)] h-80 w-80 rounded-full bg-mist blur-2xl" />
      <div aria-hidden className="drift absolute left-[calc(50%+110px)] top-[calc(50%-30px)] h-64 w-64 rounded-full bg-ember/30 blur-2xl [animation-delay:-7s]" />

      <div aria-hidden className="relative w-full max-w-xl">
        <div className="glass sheen relative h-32 rounded-3xl" />
        <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:mt-0 lg:block">
          {cards.map((c) => (
            <div
              key={c.delay}
              className={`glass float h-24 rounded-2xl lg:absolute lg:w-52 ${c.pos}`}
              style={{ animationDelay: c.delay }}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
