"use client"
import Container from '@mui/material/Container'
import Ganesh1 from '/public/images/Ganesh white.png'
import Ganesh2 from '/public/images/Ganesh_black.png'

import Image from 'next/image'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import { Link } from 'react-scroll'
import { Menu, Paper, } from '@mui/material'
import { Dialog, DialogPanel } from '@headlessui/react'
import { CloseRounded, MenuOpenRounded, MenuRounded, Instagram, GitHub, LinkedIn } from '@mui/icons-material'
import { useEffect, useState } from 'react'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import { dark } from '@mui/material/styles/createPalette'

const navlinks = [
    {
        name: 'Home',
        src: '/',

    },
    {
        name: "About",
        src: 'about'
    },
    {
        name: "Education",
        src: 'education'
    },
    {
        name: "Projects",
        src: 'projects'
    },
    {
        name: "Contact",
        src: 'contacts'
    }
]


export default function Navigation() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [theme, setTheme] = useState(false)

    return (
        <Container maxWidth="xl" className='fixed '>          
            <div className="lg:flex lg:justify-between backdrop-blur-sm flex justify-between py-5">
                <div className="">
                    <Image src={Ganesh1} width={130} height={50} alt="Ganesh" />
                </div>
                <div className=" lg:fixed right-0 transition-all  lg:mt-[2px] bg-transparent lg:grid grid-flow-col  lg:place-content-center hidden  ">
                    {
                        navlinks.map((items) => (
                            <Button  key={items.name} className=' rounded-3xl hover:border-2 px-2 py-1 hover:border-pink-100  hover:border-opacity-50  hover:rounded-2xl'>
                                <Link key={items.name} className="  text-justify text-md mx-9 lg:text-[15px] text-white capitalize font-light hover:text-blue-500 hover:animate-in  " offset={-50} smooth={10} to={items.src}>{items.name}</Link>
                            </Button>
                        ))

                    }
                </div>
                <div className='-mt-2 inline-block  lg:hidden '>
                    <Button className='rounded-full  w-1 h-7 mt-3' onClick={() => setMobileOpen(true)}>
                        {
                            <MenuRounded className='text-white w-7 h-7' />
                        }
                    </Button>
                </div>
            </div>

            {/* Mobile Dislplay */}
            <Dialog open={mobileOpen} onClose={setMobileOpen} className="lg:hidden py-3 px-3 ">
                <DialogPanel className=' bg-white py-3 px-3 fixed right-0 inset-y-0   z-50 top-0 sm:w-full  md:w-1/2 block m-0 p-0  transition-all delay-50'>
                    <div className=" mt-[20] mx-[48] flex justify-between">
                        <Image src={Ganesh2} width={130} height={50} alt="Ganesh" className='mt-2 ml-7' />

                        <Button className=' -m-2.5  rounded-full  w-1 h-7 mt-3' onClick={() => setMobileOpen(false)}>
                            <CloseRounded className='text-black w-7 h-7' />
                        </Button>
                    </div>
                    <div className=" my-auto bg-transparent lg:grid grid-flow-col  lg:place-content-center py-4">
                        {
                            navlinks.map((items) => (
                                <Link key={items.name} className="text-black mt-5 block text-justify text-nd mx-9 capitalize hover:text-blue-500 hover:animate-in " offset={-50} smooth={10} to={items.src}>{items.name}</Link>
                            ))
                        }

                    </div>
                    <div className='mt-10 flex justify-center'>
                        <a href={""}><Instagram className='lg:w-10 lg:h-10 mouse mx-4 w-7 h-7 text-blue-600' /></a>
                        <a href={""}><GitHub className='lg:w-10 lg:h-10 mouse mx-4 w-7 h-7 text-blue-700' /></a>
                        <a href={""}><LinkedIn className='lg:w-10 lg:h-10 mouse mx-4  w-7 h-7 text-blue-600' /></a>
                    </div>
                </DialogPanel>
            </Dialog>
        </Container>
    )
}
