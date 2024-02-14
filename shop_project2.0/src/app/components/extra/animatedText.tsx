import React from "react";
import { motion } from "framer-motion";

type animtedTextProps = {
    text: any
    className: string
}

const quote = {
    initial:{
        opacity: 1,
    },
    animate:{
        opacity:1,
        transition:{
            delay:1,
            staggerChildren: 0.08
        }
    }
}

const singleWord = {
    initial:{
        opacity: 0,
        y:50,
    },
    animate:{
        opacity:1,
        y:0,
        transition:{
            duration:0.5,
        }
    }
}
export const AnimatedText = ({text, className}:animtedTextProps) => {
    return(
        <div className="w-full mx-auto py-2 flex overflow-hidden">
            <motion.h1 className={`inline-block w-full text-white font-bold text-4xl md:text-8xl mb-10 md:mb-3 ${className}`}
            variants={quote}
            initial="initial"
            animate="animate"
            >
                {
                    text.split(" ").map((word:any, index:any) => 
                    <motion.span key={word+'-'+index} className="inline-block"
                    variants={singleWord}
                    >
                        {word}&nbsp;
                    </motion.span>)
                }
            </motion.h1>
        </div>
    )
}