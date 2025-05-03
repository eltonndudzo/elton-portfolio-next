import React from "react";
import Link from "next/link";
import Image from "next/image";

const WritingPage = () => {
  return (
    <div className="min-h-screen bg-[#f9f6f0] px-6 pt-24 pb-12">
      <h1 className="text-4xl font-bold text-[#4b3832] text-center mb-12">
        Books & Writings by Elton Ndudzo
      </h1>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Charwe */}
        <Link
          href="/charwe"
          className="group border rounded-2xl p-6 bg-white shadow hover:shadow-lg transition"
        >
          <div className="mb-4">
            <Image
              src="/images/charwe-cover.jpg"
              alt="Charwe Cover Art"
              width={500}
              height={300}
              className="rounded-xl object-cover w-full h-auto"
            />
          </div>
          <h2 className="text-2xl font-semibold text-[#4b3832] group-hover:underline">
            Charwe
          </h2>
          <p className="text-[#6b4f3b] mt-2">
            A historical and spiritual reimagining of the story of Charwe, the
            spirit medium of Nehanda. My debut novella.
          </p>
        </Link>

        {/* Ipikai Poetry Journal */}
        <a
          href="https://ipikaipoetryjournal.wordpress.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="group border rounded-2xl p-6 bg-white shadow hover:shadow-lg transition"
        >
          <h2 className="text-2xl font-semibold text-[#4b3832] group-hover:underline">
            Poetry in Ipikai Journal
          </h2>
          <p className="text-[#6b4f3b] mt-2">
            A selection of my poems featured in Zimbabwe’s premier poetry
            journal.
          </p>
        </a>

        {/* Other Poems */}
        <Link
          href="/poetry"
          className="group border rounded-2xl p-6 bg-white shadow hover:shadow-lg transition"
        >
          <h2 className="text-2xl font-semibold text-[#4b3832] group-hover:underline">
            Other Poems
          </h2>
          <p className="text-[#6b4f3b] mt-2">
            A growing archive of my poetic experiments, musings, and pieces
            rooted in memory, spirituality, and African cosmology.
          </p>
        </Link>
      </div>
    </div>
  );
};

export default WritingPage;
