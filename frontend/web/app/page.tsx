export default function Home() {
  return (
    <main className="relative flex flex-1 items-center justify-center overflow-hidden p-6">
      <div aria-hidden className="absolute left-[calc(50%-340px)] top-[calc(50%-190px)] h-80 w-80 rounded-full bg-mist blur-2xl" />
      <div aria-hidden className="absolute left-[calc(50%+110px)] top-[calc(50%-30px)] h-64 w-64 rounded-full bg-ember/30 blur-2xl" />
      <section className="glass relative w-full max-w-xl rounded-3xl p-10">
        <h1 className="text-3xl font-semibold tracking-tight">Niharika Valacha</h1>
      </section>
    </main>
  );
}
