'use client'
import { Image } from "@nextui-org/react";
import { GiBookCover, GiLaptop, GiSoccerBall, GiSpanner } from "react-icons/gi";
import { motion } from "framer-motion";

const ProfileImage = () => {
    return (
        <motion.div

            className="p-8 border-2 dark:border-primary-50 border-cyan-50 rounded-r-[50%] rounded-l-xl relative">

            <motion.div
                initial={{

                }}
                animate={
                    {
                        rotate: [0, 90, 180, 270, 360],
                    }
                }
                transition={{
                    ease: 'linear',
                    duration: 4,
                    repeat: Infinity,

                }}
                className="absolute left-20 top-6">
                <GiSoccerBall className="text-4xl dark:text-yellow-200 text-yellow-600" />
            </motion.div>

            <div className="p-8 border-2 dark:border-primary-100 border-cyan-100 rounded-r-[50%] rounded-l-xl relative">
                <GiBookCover className="text-4xl absolute right-14 top-6 text-zinc-500" />
                <div className="p-8 border-2 dark:border-primary-200 border-cyan-200 rounded-r-[50%] rounded-tl-3xl rounded-bl-3xl relative">
                    <GiLaptop className="text-4xl absolute right-10 bottom-6 dark dark:text-green-500 light light:text-sky-500" />
                    <div className="p-8 border-2 dark:border-primary-300 border-cyan-300 rounded-l-xl rounded-r-[50%]  relative">
                        <GiSpanner className="text-4xl absolute -left-4 bottom-[50%] text-rose-400" />
                        <Image
                            src="/maung-shine.jpg"
                            width={200}
                            height={200}
                            className="rounded-full aspect-square object-cover"
                        />
                        <div className="p-4 border border-neutral-300 rounded-md flex flex-col gap-2 justify-center items-center absolute top-[110%] md:top-[50%] md:bottom-[50%] -bottom-[20%] translate-y-[-50%] -left-[40%] md:-left-[65%] text-xs w-[160px] md:w-[200px] h-[100px] md:h-[200px] z-10 md:text-sm bg-white/30 dark:bg-black/30 dark:border-default-100 backdrop-blur-sm">
                            <p className="dark:text-default-500">Hi 👋, Welcome</p>
                            <p className="dark:text-default-500 text-center">
                                A web developer with expertise in <span className="bg-orange-400 dark:bg-default-50 dark:text-orange-600">React</span> and <span className="bg-orange-400 dark:bg-default-50 dark:text-orange-600">Nextjs</span>
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </motion.div>


    )
}

export default ProfileImage