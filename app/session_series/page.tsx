import React from "react";

const SessionSeries = () => {
  return (
    <main className="min-h-screen bg-black text-zinc-100 py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-3xl mx-auto">
        {/* Main Header */}
        <header className="mb-12 text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl font-light tracking-tight text-white mb-2">
            The Session Series by 26 Roots
          </h1>
          <div className="h-1 w-20 bg-zinc-700 mt-4 mx-auto sm:mx-0"></div>
        </header>

        {/* Content Paragraphs */}
        <section className="space-y-6 text-zinc-300 text-lg leading-relaxed">
          <p>
            Every working musician needs a reliable, no-nonsense tool that is
            built to perform when the pressure is on. The{" "}
            <strong className="text-white font-semibold">Session Series</strong>{" "}
            is designed to be exactly that—your ultimate stage and studio
            workhorse.
          </p>

          <p>
            For this line, we start with a foundational chassis and completely
            strip it down to focus on what matters most to a player: elite
            playability, rock-solid reliability, and undeniable tone. Every
            single Session Series instrument undergoes rigorous, top-tier
            luthier work right here in our workshop. We overhaul the factory
            fretwork, level and crown the frets for a low, effortless action,
            and stabilize the neck for maximum tuning consistency.
          </p>

          <p>
            From there, we hotrod the instrument with premium, heavy-duty
            hardware and elite electronics to guarantee zero hum and total tonal
            versatility. Finished with custom paint and stain jobs, the Session
            Series delivers the feel, control, and performance of a boutique
            instrument, stripped of the collector's price tag.
          </p>
        </section>

        {/* Callout Footer */}
        <footer className="mt-10 pt-6 border-t border-zinc-800">
          <p className="text-xl font-light italic text-indigo-200">
            This isn't a budget bass. It&apos;s a finely tuned, gig-ready
            machine built to do the heavy lifting night after night.
          </p>
        </footer>
      </div>
    </main>
  );
};

export default SessionSeries;
