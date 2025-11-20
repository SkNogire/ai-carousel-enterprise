import { motion } from "framer-motion";
import Link from "next/link";

export default function Landing(){
  return (
    <main className="min-h-screen bg-black text-white p-20">
      <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="text-6xl font-extrabold">
        AI Carousel Enterprise (Global)
      </motion.h1>
      <p className="mt-6 text-xl text-gray-300 max-w-2xl">
        Advanced carousel generator with AI, icons, templates, video export, builder & global key.
      </p>
      <Link href="/create" className="inline-block mt-10 px-10 py-4 bg-white text-black text-lg rounded-xl">
        Start Creating
      </Link>
    </main>
  );
}
