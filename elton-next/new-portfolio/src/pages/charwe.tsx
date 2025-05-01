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
            A historical fiction rooted in the legacy of Mbuya Nehanda — spirit medium, warrior, symbol. This is a story of resistance, spirituality, and reclamation, told through the poetic force of Zimbabwean memory.
          </p>
          <div className="mt-6 p-4 bg-white rounded shadow">
            <p className="italic text-gray-700">
              "Charwe is a necessary work of remembrance. A bridge between the sacred past and the spiritual now." — <strong>Carnelian Heart Publishing</strong>
            </p>
          </div>
        </div>
      </motion.div>

      {/* Visual Journey: Cover Art, Great Zimbabwe, Mbuya Nehanda */}
      <div className="space-y-20">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row-reverse md:items-center md:space-x-10"
        >
          <img src="/cover_art.PNG" alt="Charwe Cover Art" className="w-full md:w-1/2 rounded-lg shadow-lg object-cover" />
          <div className="mt-6 md:mt-0">
            <h2 className="text-3xl font-semibold mb-4">The Art of Legacy</h2>
            <p className="text-lg leading-relaxed">
              Designed by <a href="https://chitendefineart.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Chitende Fine Arts</a>, the cover is a visual echo of Charwe’s spiritual power.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row md:items-center md:space-x-10"
        >
          <img src="/great_zimbabwe.jpg" alt="Great Zimbabwe" className="w-full md:w-1/2 rounded-lg shadow-lg object-cover" />
          <div className="mt-6 md:mt-0">
            <h2 className="text-3xl font-semibold mb-4">Inspired by Great Zimbabwe</h2>
            <p className="text-lg leading-relaxed">
              The grandeur of Great Zimbabwe — stone ruins, sacred landscapes — is the spiritual architecture behind this tale.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row-reverse md:items-center md:space-x-10"
        >
          <img src="/mbuya_nehanda.jpg" alt="Mbuya Nehanda" className="w-full md:w-1/2 rounded-lg shadow-lg object-cover" />
          <div className="mt-6 md:mt-0">
            <h2 className="text-3xl font-semibold mb-4">Charwe. Nehanda. Spirit Alive.</h2>
            <p className="text-lg leading-relaxed">
              This book reimagines Charwe’s voice — not as myth, but memory. Not as ghost, but guide.
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
              "I did not choose to speak for the ancestors. They found me beneath the fig tree, and the wind in my chest was not mine."
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <p className="text-gray-700 italic">
              "They built prisons to silence the rain, but even stones remember who we are."
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
      </motion.div>

    </div>
  );
};

export default CharwePage;
