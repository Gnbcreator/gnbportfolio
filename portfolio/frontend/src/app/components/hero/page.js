'use client'
import { Instagram, GitHub, LinkedIn } from '@mui/icons-material'
import { Button } from '@mui/material'
import Container from '@mui/material/Container'
import Link from 'next/link'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { motion } from 'framer-motion'

export default function Hero() {
  const [text] = useTypewriter({
    words: ['Full Stack Developer', 'MERN Stack Developer', 'Frontend Developer', 'Backend Developer '],
    loop: true,
    deleteSpeed: 80,
    typeSpeed: 80,
    delaySpeed: 500,
  });

  const getResume = () => {
    console.warn("downloded")


  }

  return (
    <Container maxWidth="xl " className='' name="/">
      <div className=' grid place-content-center h-screen lg:text-xl md:py-5 lg:py-10'>
        <motion.h1  className='text-[35px] text-wrap text-center sm:text-5xl   md:text-5xl md:px-0 lg:text-7xl'> <motion.span className=' cursor-pointer' whileHover={{ rotate:[100],transition:{duration:1}}} >👋</motion.span> Hi I am  </motion.h1>
        <motion.h1 whileInView={{ opacity: [0, 1, 1.5], transition: { duration: 4 } }} className='text-[40px] text-wrap sm:text-6xl  md:text-7xl lg:text-8xl font-semibold text-center stroke-3 bg-gradient-to-r from-lime-200 via-deep-purple-600 to-purple-500 bg text-transparent bg-clip-text' >
          Ganesh Bochare
        </motion.h1>
        <motion.h1  className=' text-center text-[35px] sm:text-5xl  md:text-5xl lg:text-7xl  lg:font-semibold ' variant="h2">A Passionate </motion.h1>
        <h1 variant="h2" className='text-[28px] sm:text-5xl  md:text-6xl lg:text-6xl mt-8 animate-fade-in  text-center'><span style={{ color: "#2962ff" }}>{text} <Cursor className='opacity-15' cursorBlinking={1000} cursorStyle={'|'} /></span></h1>
        <Button
          variant="outlined"
          className=' capitalize text-sm rounded-3xl flex justify-center mx-auto mt-8 '
          size='large'
          color='primary'
          onClick={getResume}
        >
          <Link href='./myresume/ganesh_bochare.pdf' target='_blank' >
            Download
          </Link>

        </Button>
        <div className='mt-10 flex justify-center'>
          <Link target="_blank" href={"https://www.instagram.com/ganeshbochare7350/"}><Instagram className='lg:w-10 lg:h-10 mouse mx-4 w-7 h-7' /></Link>
          <Link target="_blank" href={"https://github.com/Gnbcreator"}><GitHub className='lg:w-10 lg:h-10 mouse mx-4 w-7 h-7' /></Link>
          <Link target="_blank" href={"https://linkedin.com/in/ganesh-bochare-15b919303"}><LinkedIn className='lg:w-10 lg:h-10 mouse mx-4  w-7 h-7' /></Link>
        </div>
      </div>

    </Container>
  )
}