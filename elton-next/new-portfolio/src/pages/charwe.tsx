
import Image from "next/image";
import Link from "next/link";

const CharwePage = () => {
  return (
    <div className="bg-[#f8f5f0] text-gray-800 px-6 pt-24 pb-20 space-y-24">
      
      {/* Book Cover and Intro */}
      <section className="flex flex-col md:flex-row md:items-center gap-10">
        <Image
          src="/book_cover.PNG"
          alt="Charwe Book Cover"
          width={400}
          height={600}
          className="rounded-lg shadow-lg"
        />
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Charwe</h1>
          <p className="text-lg leading-relaxed">
            A historical fiction inspired by the life and spirit of Charwe — the medium of Mbuya Nehanda. 
            This book reimagines her voice, struggle, and defiant spiritual legacy in colonial Zimbabwe.
          </p>
        </div>
      </section>

      {/* Visual Story Section */}
      <section className="space-y-16">
        {/* Cover Art */}
        <div className="flex flex-col md:flex-row md:items-center gap-10">
          <Image
            src="/cover_art.PNG"
            alt="Charwe Cover Art"
            width={500}
            height={500}
            className="rounded-lg shadow-md"
          />
          <div className="max-w-xl">
            <h2 className="text-2xl font-semibold mb-2">Cover Design</h2>
            <p className="text-lg">
              Created by <a href="https://chitendefineart.com/" className="text-blue-600 underline" target="_blank">Chitende Fine Arts</a>, this artwork captures Charwe’s spirit, resistance, and ancestry in bold symbolism.
            </p>
          </div>
        </div>

        {/* Great Zimbabwe */}
        <div className="flex flex-col md:flex-row-reverse md:items-center gap-10">
          <Image
            src="/great_zimbabwe.jpg"
            alt="Great Zimbabwe"
            width={500}
            height={500}
            className="rounded-lg shadow-md"
          />
          <div className="max-w-xl">
            <h2 className="text-2xl font-semibold mb-2">Inspiration: Great Zimbabwe</h2>
            <p className="text-lg">
              A monument of power and spiritual centrality, Great Zimbabwe serves as a backdrop to the legacy of Charwe and the pride of precolonial sovereignty.
            </p>
          </div>
        </div>

        {/* Mbuya Nehanda */}
        <div className="flex flex-col md:flex-row md:items-center gap-10">
          <Image
            src="/mbuya_nehanda.jpg"
            alt="Mbuya Nehanda"
            width={500}
            height={500}
            className="rounded-lg shadow-md"
          />
          <div className="max-w-xl">
            <h2 className="text-2xl font-semibold mb-2">The Woman Behind the Spirit</h2>
            <p className="text-lg">
              Charwe — Mbuya Nehanda — is more than legend. She is history, embodied. Her final words echo into this novel as seeds of return, resilience, and remembrance.
            </p>
          </div>
        </div>
      </section>

      {/* Excerpts Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Excerpts from Charwe</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <blockquote className="bg-white p-6 rounded-lg shadow text-gray-700 italic border-l-4 border-gray-400">
            “I did not choose this voice. It chose me. The ancestors spoke through wind and womb. And I listened.”
          </blockquote>
          <blockquote className="bg-white p-6 rounded-lg shadow text-gray-700 italic border-l-4 border-gray-400">
            “To name is to remember. To remember is to resist.”
          </blockquote>
          <blockquote className="bg-white p-6 rounded-lg shadow text-gray-700 italic border-l-4 border-gray-400">
            “They thought they killed me. But I returned in every drumbeat, in every daughter's defiance.”
          </blockquote>
        </div>
      </section>

      {/* Praise Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Praise for Charwe</h2>
        <div className="space-y-6 max-w-3xl mx-auto text-center">
          <p className="text-lg italic">
            “A stunning reclamation of history — Elton gives voice to the silenced spirit of resistance.” <br />
            <span className="font-semibold">– Tsitsi Dangarembga</span>
          </p>
          <p className="text-lg italic">
            “Bold, poetic, and spiritually rich. A necessary book for our time.” <br />
            <span className="font-semibold">– Panashe Chigumadzi</span>
          </p>
        </div>
      </section>

      {/* Purchase and Contact */}
      <section className="text-center space-y-6 pt-10">
        <h2 className="text-3xl font-bold">Get the Book</h2>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link href="https://amazon.com" target="_blank" className="bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-700 transition">
            Buy on Amazon
          </Link>
          <Link href="https://carnelianheart.com" target="_blank" className="bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-700 transition">
            Carnelian Heart
          </Link>
          <Link href="mailto:bookfantastics@gmail.com" className="bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-700 transition">
            Contact Book Fantastics
          </Link>
        </div>
      </section>

    </div>
  );
};

export default CharwePage;
