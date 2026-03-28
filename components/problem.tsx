export default function Problem() {
  return (
    <section className="bg-muted/40 relative overflow-hidden rounded-4xl py-14 md:py-20">
      <div className="absolute inset-0 -z-10">
        <div className="bg-accent/5 absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Stop typing text manually!
        </h2>
        <div className="text-muted-foreground mx-auto mt-8 max-w-2xl space-y-4 text-base leading-relaxed md:text-lg">
          <p>
            Struggling to extract text from images, videos, PDFs, and restricted sites like YouTube or Instagram?
          </p>
          <p>
            It&apos;s tedious work that interrupts your flow.{" "}
            <span className="text-foreground font-medium">
              Extractly eliminates the friction
            </span>{" "}
            so you can focus on being productive.
          </p>
        </div>
      </div>
    </section>
  );
}
