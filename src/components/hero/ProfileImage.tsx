"use client";
import { Image } from "@nextui-org/react";
import { GiBookCover, GiLaptop, GiSoccerBall, GiSpanner } from "react-icons/gi";
import { motion } from "framer-motion";

const ProfileImage = () => {
  return (
    <motion.div className="p-8 border-2 border-border-dark dark:border-border-dark dark:bg-[#040309] rounded-xl rounded-r-[50%] relative">
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: [0, 90, 180, 270, 360] }}
        transition={{
          ease: "linear",
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute left-20 top-6 z-10"
      >
        <GiSoccerBall className="text-4xl text-yellow-600 dark:text-yellow-200" />
      </motion.div>

      <div className="p-8 border-2 border-border-dark dark:border-border-dark dark:bg-[#040309] rounded-xl rounded-r-[50%] relative">
        <GiBookCover className="text-4xl absolute right-14 top-6 text-zinc-500" />
        <div className="p-8 border-2 border-border-dark dark:border-border-dark dark:bg-[#040309] rounded-xl rounded-r-[50%] relative">
          <GiLaptop className="text-4xl absolute right-10 bottom-6 text-sky-500 dark:text-green-500" />
          <div className="p-8 border-2 border-border-dark dark:border-border-dark dark:bg-orange-400 bg-orange-400 rounded-xl rounded-r-[50%] relative">
            <GiSpanner className="text-4xl absolute -left-4 bottom-[50%] text-rose-400" />
            <Image
              src="/maung-shine.png"
              width={200}
              height={200}
              className="profile-image rounded-xl min-w-[100px] min-h-[100px] aspect-square rounded-r-full object-cover"
            />
            <div className="p-4 border border-border-dark dark:border-border-dark dark:bg-[#06050f] rounded-md flex flex-col gap-2 justify-center items-center absolute top-[110%] md:top-[50%] md:bottom-[50%] -bottom-[20%] translate-y-[-50%] -left-[40%] md:-left-[65%] text-xs w-[160px] md:w-[200px] h-[100px] md:h-[200px] z-10 md:text-sm bg-white/30 bg-gradient-to-bl dark:from-ebony-900/90 dark:to-ebony-950/50 backdrop-blur-sm">
              <p className="text-text-light dark:text-text-dark">
                <motion.span
                  className="inline-block"
                  animate={{
                    rotate: [0, 15, -15, 15, 0],
                    scale: [1, 1.8, 1.8, 1.8, 1.8, 1.8, 1],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                    repeatDelay: 1,
                  }}
                >
                  <span>👋</span>
                </motion.span>
                , Welcome
              </p>
              <p className="text-text-light dark:text-text-dark text-center">
                A web developer with expertise in{" "}
                <span className="bg-orange-400 dark:bg-default-50 dark:text-orange-600">
                  React
                </span>{" "}
                and{" "}
                <span className="bg-orange-400 dark:bg-default-50 dark:text-orange-600">
                  Next.js
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileImage;
