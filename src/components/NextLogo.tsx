'use client';
import Image from "next/image"
import { motion } from "framer-motion"


const NextLogo = () => {
    return (
        <motion.div
            initial={{
                y: 20
            }}
            animate={
                {
                    y: [20, 40, 20],
                    x: [0, 12, 0]
                }
            }
            transition={{
                ease: 'easeIn',
                duration: 4,
                repeat: Infinity,

            }}

            className="absolute -left-40 top-20"

        >
            <Image alt="next js logo" src="/next.svg" width={100} height={24} priority className="-rotate-45 dark:invert text-2xl" color="" />
        </motion.div>

    )
}

export default NextLogo