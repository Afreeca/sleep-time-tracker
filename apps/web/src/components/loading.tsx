import { motion } from "framer-motion";
import Image from "next/image";

const LoadingContainer = {
  width: "20rem",
  display: "flex",
};

const ContainerVariants = {
  initial: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const IconVariants = {
  initial: {
    y: "0%",
  },
  animate: {
    y: "20%",
  },
};

const IconTransition = {
  duration: 0.7,
  repeat: Infinity, // Set repeat to Infinity to repeat the animation indefinitely
  repeatType: "reverse" as const, // Reverse the animation direction on each repeat
  yoyo: Infinity,
  ease: "easeInOut",
};

export default function LoadingWave() {
  return (
    <div className="h-full flex flex-col justify-center items-center  w-full">
      <motion.div
        style={LoadingContainer}
        variants={ContainerVariants}
        initial="initial"
        animate="animate"
      >
        <motion.span variants={IconVariants} transition={IconTransition}>
          <Image src="/icons/icon.png" alt="Image 1" width={340} height={510} />{" "}
        </motion.span>
        <motion.span variants={IconVariants} transition={IconTransition}>
          <Image src="/icons/icon.png" alt="Image 1" width={440} height={510} />{" "}
        </motion.span>
        <motion.span variants={IconVariants} transition={IconTransition}>
          <Image src="/icons/icon.png" alt="Image 1" width={540} height={510} />{" "}
        </motion.span>
      </motion.div>
      <span className="text-black mt-4 text-lg">Loading...</span>
    </div>
  );
}
