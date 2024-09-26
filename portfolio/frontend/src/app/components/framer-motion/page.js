'use client'
import { Container } from "@mui/material"
import { motion } from "framer-motion"


export default function () {
    return (
        <>
            <Container maxWidth={'lg'}>
                <div className=" px-2 grid h-full border bg-blue-600 border-blue-800 border-opacity-30 rounded-md ">
                    <div className="h-screen lg:h-screen bg-slate-300 grid place-content-center">
                        <h1 className="text-center  text-blue-700 capitalize text-2xl">hero section </h1>
                    </div>
                    <div className=" flex h-screen lg:h-screen bg-slate-500 justify-around py-52">
                        <motion.div
                            whileInView={{ x: [-100, 0], opacity: [0, 1], transition: { duration: 1 } }}
                            className="text-2xl text-center grid place-content-center rounded-lg text-blue-800 bg-orange-200 h-[500px] w-[500px] ">
                            content 1
                        </motion.div>
                        <motion.div
                            whileInView={{ x: [100, 0], opacity: [0, 1], transition: { type: 'tween', duration: 1 } }}
                            className="text-2xl text-center grid place-content-center rounded-lg text-blue-800 bg-orange-200 h-[500px] w-[500px] ">
                            content 2
                        </motion.div>
                    </div>

                    <div className="h-screen bg-slate-600 grid gap-10">
                        <motion.div
                            whileInView={{ x: [100, 0,null], opacity: [0, 1], transition: { duration: 1 } }}
                            className="text-2xl text-center grid place-content-center rounded-lg text-blue-800 bg-orange-200 ">
                            content 1
                        </motion.div>
                        <motion.div
                            whileInView={{ x: [-100, 0], opacity: [0, 1], transition: { type: 'tween', duration: 1 } }}
                            className="text-2xl text-center grid place-content-center rounded-lg text-blue-800 bg-orange-200 ">
                            content 2
                        </motion.div>
                    </div>
                    <div className="h-screen bg-slate-700 grid place-content-center">
                        <h1 className="text-center  text-blue-700 capitalize text-2xl">hero section </h1>
                    </div>
                    <div className="h-screen bg-slate-800 grid place-content-center">
                        <h1 className="text-center  text-blue-700 capitalize text-2xl">hero section </h1>
                    </div>
                </div>
            </Container>
        </>
    )
}