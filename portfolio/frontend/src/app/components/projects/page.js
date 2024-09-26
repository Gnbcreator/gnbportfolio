'use client'
import { Box, Button, Paper, Chip, Alert } from '@mui/material'
import Container from '@mui/material/Container'
import Image from 'next/image'
import macbookpng from '/public/images/MacBook.png'
import html from '/public/images/Html5.png'
import css from '/public/images/Css.png'
import jslogo from '/public/images/JavaScript.png';
import mysqllogo from '/public/images/MySQL.png';
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import {  motion } from 'framer-motion'

export default function Projects() {
  return (
    <>
      <Container maxWidth="xl" className=' animate-fade-in grid place-content-center py-20 '>
        <h1 className='text-center text-white  text-4xl  lg:text-5xl ' > My Work </h1>

        <Paper elevation={0} className=' bg-transparent grid mx-auto my-20 w-[380px]  h-auto  md:w-[600px] md:h-[auto] lg:grid lg:grid-cols-2 lg: lg:w-auto' >
          <motion.div whileHover={{scale:1.03,transition: { duration:.2 } }} className='grid place-content-center'>
            <Image className='lg:w-[600px] lg:h-auto' src={macbookpng} quality={100} alt='image' />
          </motion.div>
          <motion.div whileInView={{ x: [100, 0], transition: { duration:1} }} className="grid  p-12 ">
            <Chip label="✨Explore now" variant='outlined' size='small' className='w-40 h-5 p-3 text-white' />
            <h1 variant="h3" className=' text-white text-light-blue-900 text-3xl md:text-4xl lg:text-3xl'>PixelPerfectTool</h1>
            <h1 variant="h6" className=' text-white text-md md:text-lg lg:text-2xl'>A Graphics Editing Tool</h1>
            <h1 className=' text-white text-sm md:text-md lg:text-lg'> Here i have created project which is used to create Graphical works like
              create logos ,banners,templetes,user interfaces and more,<br />
              Also you can downloded youre created designs </h1>
            <Button variant='outlined' className='  capitalize lg:w-40  lg:h-10 mt-3 h-8 rounded-3xl w-36' onClick={() => <Alert security='info' variant="outlined" >Temprory this site is take down by the hosting servise </Alert>}>
              Preview <ArrowRightIcon className='w-5 h-5 lg:w-6 lg:h-6 ml-6 ' />
            </Button>
            <h1 className='text-md font-bold mt-3 text-blue-400 lg text-xl'>Technology</h1>
            <div className=' flex justify-evenly mt-2 py-10'>
              <div><Image alt='image' src={html} className='md:w-14 md:h-13 rounded-full mx-2 bg-white p-2' /></div>
              <div><Image alt='image' src={css} className='md:w-auto md:h-14 bg-white p-2 rounded-full mx-2' /></div>
              <div><Image alt='image' src={jslogo} className='md:w-15 md:h-14 bg-white p-1 rounded-full mx-2' /></div>
              <div><Image alt='image' src={mysqllogo} className='md:w-15 md:h-14 bg-white p-1 rounded-full mx-2' /></div>

            </div>
            
          </motion.div>
        </Paper>

      </Container>
    </>
  )
}