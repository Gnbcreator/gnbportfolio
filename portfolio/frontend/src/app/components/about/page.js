'use client'

import { BoyRounded, CalendarMonthRounded, EmailRounded, EngineeringRounded, GitHub, Instagram, LandscapeRounded, LinkedIn, LocationCityRounded, PermPhoneMsgRounded, Person2Outlined, PersonPinCircleOutlined, SchoolRounded} from '@mui/icons-material';
import Link from 'next/link';
import Image from 'next/image';
import gnbcreator from '/public/images/1725289119363.jpg'
import reactlogo from '/public/images/1174949_js_react js_logo_react_react native_icon.png'
import javalogo from '/public/images/4373217_java_logo_logos_icon.png'
import jslogo from '/public/images/JavaScript.png'
import expresslogo from '/public/images/expresslogo.png'
import html from '/public/images/Html5.png'
import css from '/public/images/Css.png'
import nodejs from '/public/images/nodejslogo.png'
import mongodb from '/public/images/mongoDB.png'
import { motion, motionValue } from 'framer-motion';
import { styled } from "@mui/material/styles";
import { Chip, Container, LinearProgress, makeStyles } from '@mui/material';

const logoList = [
  {
    name: 'reactlogo',
    src: reactlogo,
    percent: 73
  },
  {
    name: 'javalogo',
    src: javalogo,
    percent: 70
  },
  {
    name: 'jslogo',
    src: jslogo,
    percent: 85
  },
  {
    name: 'expresslogo',
    src: expresslogo,
    percent: 68
  },
  {

    src: html,
    percent: 95
  },
  {
    src: nodejs,
    percent: 64
  },
  {
    src: css,
    percent: 90
  },
  {
    src: mongodb,
    percent: 50
  }
]

const personalInfo = [
  { avatar: <Person2Outlined />, info: 'Ganesh Bochare', },
  { avatar: <SchoolRounded />, info: 'Bachelors of Science', },
  { avatar: <PersonPinCircleOutlined />, info: 'Field : Computer Science', },
  { avatar: <EngineeringRounded />, info: 'Full Stack Developer', },
  { avatar: <CalendarMonthRounded />, info: 'DOB : 3 August 2003' },
  { avatar: <LandscapeRounded />, info: 'Country:India', },
  { avatar: <BoyRounded />, info: 'Age:21', },
  { avatar: <LocationCityRounded />, info: 'City:Karad', },
  { avatar: <PermPhoneMsgRounded />, info: 'Contact:+91 7350491070', },
  { avatar: <EmailRounded />, info: 'bochare7350@gmail.com', },
]

const BorderdLinearProssessbar = styled(LinearProgress)(({ theme }) => ({
  height: 5,
  borderRadius: 20,

}))

export default function About() {
  return (
    <>
      <Container maxWidth="xl" className='py-14' >
        <div className=''>
          <div className=''>
            <h4 className='text-2xl text-center  lg:font-semibold  lg:text-4xl'>Little bit</h4>
            <h1 className='text-3xl text-center  lg:font-semibold  lg:text-5xl'>About me </h1>
          </div>
          <div className='p-10 mt-10 lg:mt-0'>
            <div className='   justify-around py-10 lg:grid lg:grid-cols-2 lg:place-content-center mx-auto '>
              <motion.div
                whileInView={{ x: [-100, 0], transition: { duration:.5} }}
              >
                <Image
                  src={gnbcreator}
                  quality={100} alt='image'
                  className='w-[250px] h-[250px] lg:w-[450px] lg:h-[450px] rounded-full mx-auto my-auto lg:my-0'
                />
              </motion.div>
              <motion.div   whileInView={{ x: [100, 0], transition: { duration:.5} }} className=' text-center mt-5 px-0'>
                <h1 className='text-start text-2xl md:text-3xl lg:text-center  lg:text-4xl text-blue-600' >Full Stack Developer</h1>
                <p className='text-md text-wrap inline-block text-center l mt-2  lg:text-lg' >
                  <span className='text-2xl '> Hi</span> I'am "Ganesh Bochare" a passionate Full Stack developer specializing in creating drynamic and responsive web applications.
                  With a background in computer science and deep love for coding,I have honed my skills in React,
                  Redux,JavaScript,and modern web technologys.
                </p>
                <div className='mt-14 lg:mt-5 grid lg:grid-cols-2 gap-4 lg:gap-8'>
                  {
                    personalInfo.map((items) => (
                      <Chip color='info' size='medium' className='text-sm w-auto text-white lg:text-md' avatar={items.avatar} label={items.info} variant="outlined" />
                    ))
                  }

                </div>
                <div className='mt-10'>
                  <Link target='_blank' href={"https://www.instagram.com/ganeshbochare7350/"}><Instagram className='lg:w-10 lg:h-10 mouse mx-4 w-7 h-7' /></Link>
                  <Link target='_blank' href={"https://github.com.Gnbcreator"}><GitHub className='lg:w-10 lg:h-10 mouse mx-4 w-7 h-7' /></Link>
                  <Link target='_blank' href={"https://linkedin.com/in/ganesh-bochare-15b919303"}><LinkedIn className='lg:w-10 lg:h-10 mouse mx-4  w-7 h-7' /></Link>
                </div>
              </motion.div>
            </div>

          </div>

          {/* //skills */}

          <div className='animate-fade-in '>
            <h1 className='text-center  ml-5 text-3xl md:text-4xl '>My Skills</h1>
            <div className='grid mt-5 lg:grid-cols-2 gap-16 lg:gap-16 px-2  py-5 md:gap-5 lg:place-items-center'>
              {
                logoList.map((items) => (
                  <div>
                    <motion.div whileInView={{y:[100,0],transition:{duration:1}}} className='flex'>
                      <Image className=' w-auto h-10 md:w-auto md:h-16 p-1' src={items.src} alt='image' />
                      <div className=' w-full my-auto  ml-2 md:w-full lg:w-[500px] lg:mt-6'><BorderdLinearProssessbar  variant='determinate' value={items.percent} /><motion.span  className=' text-lg w-auto'>{items.percent}%</motion.span></div>
                    </motion.div>
                  </div>
                ))
              }

            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
