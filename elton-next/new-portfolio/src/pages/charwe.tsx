import { motion } from "framer-motion";
import Link from "next/link";

const CharwePage = () => {
  return (
    <div className="bg-[#f8f5f0] text-gray-800 px-6 pt-32 pb-20 space-y-32">

      {/* Book Cover and Commentary */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col md:flex-row items-center md:items-start md:space-x-10"
      >
        <img src="/book_cover.PNG" alt="Charwe Book Cover" className="w-full md:w-[60%] rounded-lg shadow-lg object-cover" />
        <div className="mt-6 md:mt-0 md:w-[40%]">
          <h1 className="text-4xl font-bold mb-4">Charwe: A Story Etched in Spirit</h1>
          <p className="text-lg leading-relaxed">
            Charwe is a deeply human retelling of Nehanda Charwe Nyakasikana, a spirit medium and mother, at the turning point of Zimbabwe’s colonization. Blending fact and fiction, it breathes life into a woman caught between family and nation, the living and the ancestral, resistance and survival. Charwe reclaims the spirit of the First Chimurenga, offering a bold, modern narrative rooted in African spirituality, memory, and truth.
          </p>
          <div className="mt-6 p-4 bg-white rounded shadow">
            <p className="italic text-gray-700">
              "Ndudzo's writing adds a certain humanity to her persona that is often missing from the reverence people give her." — <strong>Tafadzwa Madzika, Greedy South</strong>
            </p>
          </div>
          <div className="mt-6 p-4 bg-white rounded shadow">
            <p className="italic text-gray-700">
              "There is very delicate work done here… She is defiant but afraid to die and leave her children. She is caught between family and nation. She is very credible and one can easily relate with her." — <strong>Memory Chirere, University of Zimbabwe</strong>
            </p>
          </div>
        </div>
      </motion.div>

      {/* Visual Journey */}
      <div className="space-y-20">
        {/* Cover Art */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row-reverse md:items-center md:space-x-10"
        >
          <img src="/cover_art.PNG" alt="Charwe Cover Art" className="w-full md:w-1/2 rounded-lg shadow-lg object-cover" />
          <div className="mt-6 md:mt-0">
            <h2 className="text-3xl font-semibold mb-4">The Cover Art</h2>
            <p className="text-lg leading-relaxed">
              Illustrated by <a href="https://chitendefineart.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Chitende Fine Arts</a>, the cover art is also a story on its own. It is Great Zimbabwe, but not quite.
              <br /><br />
              The colours are not from stone but dream. A colourful sky stands behind rocks rendered in vivid purples, reds, and yellows, as if memory itself is tinted with longing.
              <br /><br />
              Behold the place of myth, where power once pulsed through granite walls, and the whisper of the Mhondoro still hums in the wind. Like Charwe's story... real, imagined, reimagined.
              <br /><br />
              We ruin what we love when we try to recreate it. But still, we try. And that is the most important thing.
            </p>
          </div>
        </motion.div>

        {/* Great Zimbabwe */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row md:items-center md:space-x-10"
        >
          <div className="md:w-1/2">
            <img src="/greatzim.PNG" alt="Great Zimbabwe" className="w-full rounded-lg shadow-lg object-cover" />
            <p className="text-sm text-gray-500 mt-2 italic">
              Figure 2 - The Conical Tower inside the Great Enclosure, Great Zimbabwe.<br />
              Photograph courtesy of Ashton Sinamai, Midlands State University, Zimbabwe.<br />
              Source: <a href="https://www.researchgate.net/figure/The-Conical-Tower-inside-the-Great-Enclosure-Great-Zimbabwe-Source-Photograph-courtesy_fig1_248962831" target="_blank" rel="noopener noreferrer" className="underline text-blue-600">ResearchGate</a>
            </p>
          </div>
          <div className="mt-6 md:mt-0 md:w-1/2">
            <h2 className="text-3xl font-semibold mb-4">Inspired by Great Zimbabwe</h2>
            <p className="text-lg leading-relaxed">
              And here we have the Great Zimbabwe ruins themselves. Ever been curious what stories these stones could tell? Of the great Mwene-Mutapa's and the scandals they might've stirred in their time. Coz I am.
              <br /><br />
              But sadly, the tea has all vanished with the past, and all we are left with are echoes. Lucky enough, stones might weather, but they do not disappear. This is proof. Proof that we were. Proof that we are.
              <br /><br />
              It belongs to us. So yes, we dare to dream, and we dare to tell our stories.
            </p>
          </div>
        </motion.div>

        {/* Mbuya Nehanda */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row-reverse md:items-center md:space-x-10"
        >
          <img src="/nehanda.PNG" alt="Mbuya Nehanda" className="w-full md:w-1/2 rounded-lg shadow-lg object-cover" />
          <div className="mt-6 md:mt-0">
            <h2 className="text-3xl font-semibold mb-4">Nehanda Charwe Nyakasikana</h2>
            <p className="text-lg leading-relaxed">
              Just look at her.
              <br /><br />
              She stands there, in front of them all. In front of men posing with guns. Captured by some of the very people she was fighting for. Framed by a camera she had probably never seen before.
              <br /><br />
              Just look, and tell me you are not moved.
              <br /><br />
              Just a woman. Just a mother. And yet, there she stands.
              <br /><br />
              That... that is why I chose to write about her.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Excerpts Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="pt-20"
      >
        <h2 className="text-4xl text-center font-bold mb-12">Excerpts from the Book</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <p className="text-gray-700 italic">
              "Power requires blood. It was not only the kupinga-past ritual that increased the power of the Mutapa kingdom, but it was war and conquest. Blood must flow, that is why if someone tries aquiring power from a sangoma, a sacifice must be made. Power unites people as much as it breaks them."
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <p className="text-gray-700 italic">
              "We are the mhondoro, the true seeds of Tanganyika, the land of creation. We are the great lion spirits of Guruuswa, and the magic of that land flows in our veins."
            </p>
          </div>
        </div>
      </motion.div>

      {/* Purchase Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="pt-20"
      >
        <h2 className="text-4xl text-center font-bold mb-8">Where to Buy</h2>
        <div className="max-w-3xl mx-auto space-y-6 text-lg text-center">
          <p>
            <strong>In Zimbabwe:</strong> Contact me directly, or order via <a href="https://wa.me/263772123456" className="text-blue-600 underline">Book Fantastics</a> (WhatsApp delivery).
          </p>
          <p>
            <strong>Worldwide:</strong> Available on <a href="https://www.amazon.com" className="text-blue-600 underline">Amazon</a>, <a href="https://www.barnesandnoble.com" className="text-blue-600 underline">Barnes & Noble</a>, and other global bookstores.
          </p>
          <p>
            <strong>Publisher:</strong> <a href="https://carnelianheart.com" className="text-blue-600 underline">Carnelian Heart Publishing</a>
          </p>
        </div>

        {/* Contact Me Button */}
        <div className="text-center pt-10">
          <Link
            href={{
              pathname: "/contact",
              query: {
                name: "Charwe Reader",
                message: "Hi Elton, I’d like to know more about Charwe or get a copy.",
              },
            }}
            className="inline-block bg-gray-800 text-white px-6 py-3 rounded-lg shadow hover:bg-gray-700 transition"
          >
            Contact Me
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default CharwePage;
