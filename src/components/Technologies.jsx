import { BiLogoAws } from "react-icons/bi"
import { FaNodeJs } from "react-icons/fa"
import { RiReactjsLine } from "react-icons/ri"
import { SiDocker, SiDotnet, SiGithub, SiJquery, SiMongodb, SiOracle, SiPostman } from "react-icons/si"
import { motion } from "framer-motion"



const iconVarients = (duration) => ({
    initial: { y: -10},
    animate: {
        y: [2, -2],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})
const Technologies = () => {
  return (
    <div className="pb-24">
        <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{opacity: 0, y: -100 }}
            transition={{duration: 1.5}}
            className="my-20 text-center text-4xl">Technologies</motion.h2>

        <motion.div
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, y: -100 }}
            transition={{duration: 1.5}}
            className="flex flex-wrap items-center justify-center gap-4">
                <motion.div 
                initial="initial"
                animate="animate"
                variants={iconVarients(7)}>
                    <RiReactjsLine className="text-7xl text-cyan-400"/>
                </motion.div>
                <motion.div 
                initial="initial"
                animate="animate"
                variants={iconVarients(7)}
                className="p-4">
                    <FaNodeJs className="text-7xl text-green-500"/>
                </motion.div>
                <motion.div 
                initial="initial"
                animate="animate"
                variants={iconVarients(7)}
                className="p-4">
                    <BiLogoAws className="text-7xl text-yellow-500"/>
                </motion.div>
                <motion.div 
                initial="initial"
                animate="animate"
                variants={iconVarients(7)}
                className="p-4">
                    <SiJquery className="text-7xl text-blue-400"/>
                </motion.div>
                <motion.div
                initial="initial"
                animate="animate"
                variants={iconVarients(7)}
                className="p-4">
                    <SiOracle className="text-7xl text-orange-500"/>
                </motion.div>
                <motion.div 
                initial="initial"
                animate="animate"
                variants={iconVarients(7)}
                className="p-4">
                    <SiMongodb className="text-7xl text-cyan-500"/>
                </motion.div>
                <motion.div 
                initial="initial"
                animate="animate"
                variants={iconVarients(7)}
                className="p-4">
                    <SiDotnet className="text-7xl text-purple-600"/>
                </motion.div>
                <motion.div 
                initial="initial"
                animate="animate"
                variants={iconVarients(7)}
                className="p-4">
                    <SiDocker className="text-7xl text-blue-500"/>
                </motion.div>
                <motion.div
                initial="initial"
                animate="animate"
                variants={iconVarients(7)}
                className="p-4">
                    <SiGithub className="text-7xl text-grey-800"/>
                </motion.div>
                <motion.div 
                initial="initial"
                animate="animate"
                variants={iconVarients(7)}
                className="p-4">
                    <SiPostman className="text-7xl text-orange-400"/>
                </motion.div>

        </motion.div>
      
    </div>
  )
}

export default Technologies
