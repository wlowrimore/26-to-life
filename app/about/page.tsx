import React from "react";

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-black text-zinc-100 py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-3xl mx-auto">
        {/* Main Header */}
        <header className="mb-12 text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl font-light tracking-tight text-white mb-2">
            About 26 Roots Hand-Crafted Instruments
          </h1>
          <div className="h-1 w-20 bg-zinc-700 mt-4 mx-auto sm:mx-0"></div>
        </header>

        {/* Introduction Paragraph */}
        <section className="space-y-6 text-zinc-300 text-lg leading-relaxed">
          <p>
            My journey with the bass guitar started when I was 13 years old. By
            18, I landed my first professional touring gig, which opened the
            doors to a career sharing the stage and studio with incredibly
            high-caliber musicians. Over the years, that path took me everywhere
            from legendary clubs in L.A. and New York to theaters, coliseums,
            and amphitheaters. Between extensive touring and building up a deep
            studio discography, I spent decades learning exactly what an
            instrument needs to do when the red light is on or you're under the
            stage lights.
          </p>
        </section>

        <hr className="my-10 border-zinc-800" />

        {/* Section 1: Built by a Player */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-light text-white tracking-wide">
            Built by a Player, For the Players
          </h2>
          <div className="space-y-4 text-zinc-300 text-lg leading-relaxed">
            <p>
              I know what it’s like to strap on a bass that feels like a boat
              anchor by the third set, or one so weightless you feel like you
              have no control over it. I’ve battled stiff necks, sloppy setups,
              unstable wood, and electronics that hum, cut out, or just plain
              sound dead.
            </p>
            <p>
              For years, I searched for the perfect, versatile instrument that
              could eliminate those headaches—a bass that could seamlessly
              transition from a precise studio tracking session to any live
              genre at a moment's notice.
            </p>
            <p>
              I eventually found that level of perfection in a high-end builder,
              but it came with a catch: I couldn't afford it. The truth is, a
              majority of the people who can afford those instruments buy them
              just to put them in a case as a collector's item.
            </p>
          </div>

          {/* Callout / Blockquote statement */}
          <div className="my-8 border-l-4 border-zinc-500 pl-4 py-1 italic text-xl text-indigo-200 font-light">
            "I am a player, building a player&apos;s instrument." <br />
            <span className="text-zinc-300 text-sm not-italic">
              - William Lowrimore ( Founder/CEO of 26 Roots )
            </span>
          </div>
        </section>

        <hr className="my-10 border-zinc-800" />

        {/* Section 2: The Path to 26 Roots */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-light text-white tracking-wide">
            The Path to 26 Roots
          </h2>
          <div className="space-y-4 text-zinc-300 text-lg leading-relaxed">
            <p>
              When I wasn't on the road, I was deep in the world of high-end
              luthiery—demoing, selling, and repairing top-tier, boutique
              guitars and basses. That is where I mastered tone woods, hardware,
              and the fine mechanics of instrument design.
            </p>
            <p>
              I took all of that knowledge and poured it into crafting the exact
              instruments I had been searching for all those years. Only I am
              doing it with the working musician’s pocketbook in mind.
            </p>
            <p>
              Originally from Memphis, I now reside in Nashville—the place where{" "}
              <strong className="text-white font-semibold">26 Roots</strong>{" "}
              truly begins. The name represents a deeply personal foundation:
              it's named after my wedding anniversary, symbolizing the exact
              moment of committing to a new foundation and a new way of life.
            </p>
            <p>
              We are a small, meticulous start-up. I don't mass-produce, and I
              don't cut corners. By utilizing locally sourced materials and
              leaning on connections I've built over a lifetime in music, I put
              uncompromising talent, intelligence, and obsessive attention to
              detail into every single build.
            </p>
            <p className="pt-2 text-zinc-200 font-medium">
              You shouldn't have to be a collector to own an instrument that
              feels like an extension of your hands. 26 Roots is here to put
              elite, master-built quality back where it belongs: in the hands of
              the working musician.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AboutPage;
