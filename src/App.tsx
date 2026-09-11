function App() {
  return (
    <main className="min-h-screen bg-background text-text">
      {/* Presentación temporal para validar estilos */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <p className="mb-3 text-sm tracking-[0.3em] text-accent">
          CLOTHING · JEWELRY · ESSENTIALS
        </p>

        <h1 className="text-5xl font-semibold tracking-[0.18em] sm:text-7xl">
          AURELLE
        </h1>

        <p className="mt-6 max-w-md text-sm leading-6">
          Contemporary fashion and jewelry designed for everyday elegance.
        </p>

        <button
          type="button"
          className="mt-8 bg-text px-7 py-3 text-sm tracking-wider text-background transition-opacity hover:opacity-80"
        >
          SHOP COLLECTION
        </button>
      </section>
    </main>
  )
}

export default App