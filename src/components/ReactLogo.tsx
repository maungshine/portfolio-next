'use client';
import Image from "next/image"
import { motion } from "framer-motion"


const ReactLogo = () => {
    return (
        <motion.div
            initial={{
                y: -40
            }}
            animate={
                {
                    y: [-40, -60, -40],
                    x: [0, -24, 0]
                }
            }
            transition={{
                ease: 'easeIn',
                duration: 4,
                repeat: Infinity,

            }}

            className="absolute -right-40 top-20"

        >
            <Image alt="next js logo" src="/react.svg" width={50} height={50} priority />
        </motion.div>

    )
}

export default ReactLogo