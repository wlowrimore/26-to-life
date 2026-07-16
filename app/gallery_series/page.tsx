import React from "react";

const GallerySeries = () => {
  return (
    <main className="min-h-screen bg-black text-zinc-100 py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-3xl mx-auto">
        {/* Main Header */}
        <header className="mb-12 text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl font-light tracking-tight text-white mb-2">
            The Gallery Series by 26 Roots
          </h1>
          <div className="h-1 w-20 bg-zinc-700 mt-4 mx-auto sm:mx-0"></div>
        </header>

        {/* Content Paragraphs */}
        <section className="space-y-6 text-zinc-300 text-lg leading-relaxed">
          <p>
            Welcome to the absolute pinnacle of our craft. The{" "}
            <strong className="text-white font-semibold">Gallery Series</strong>{" "}
            represents the cream of the crop—a master-class line of
            heirloom-quality, handcrafted boutique instruments designed for
            those who demand uncompromising perfection in both visual artistry
            and sonic execution.
          </p>

          <p>
            For this premier tier, every instrument is carved entirely from
            scratch right here in our workshop. We hand-select the most
            breathtaking, premium tonewoods and striking structural laminates,
            treating each build as a blank canvas where striking natural
            aesthetics meet elite engineering. From masterfully sculpted armrest
            carves to flawlessly stabilized neck configurations, no detail is
            too small, and no boundary is too large.
          </p>

          <p>
            We outfit the Gallery Series with state-of-the-art, top-tier
            electronics and heavy-duty, ultra-precise hardware to ensure that
            its sonic character matches its striking elegance. Meticulously
            voiced, effortlessly balanced, and tailored to become an intuitive
            extension of your hands, these instruments are built with an
            obsessive attention to detail that ensures flawless studio precision
            and commanding stage presence.
          </p>
        </section>

        {/* Callout Footer */}
        <footer className="mt-10 pt-6 border-t border-zinc-800">
          <p className="text-xl font-medium text-indigo-200 italic">
            This isn't just an instrument. It is functional art, built from
            scratch, and engineered to last a lifetime.
          </p>
        </footer>
      </div>
    </main>
  );
};

export default GallerySeries;
