import React, { useState } from 'react'
import Container from '@mui/material/Container'
import { Button, Paper } from '@mui/material'
import { CallRounded, GitHub, Instagram, LinkedIn, LocationCityRounded, LocationOnRounded, MailRounded } from '@mui/icons-material'
import Link from 'next/link'


export default function Contacts() {
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")

    const sendEmail = async (e) => {
        e.preventDefault();

        try {
            const data = await fetch("http://localhost:5000/contact", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ email, subject, message })
            })
            if (data.ok) {
                alert('Response Submited Successfully')
            }
        } catch (error) {
            alert('Somthing went wrong')
        }
    }
    return (
        <Container maxWidth="xl" className='px-20 py-5 focus-visible:an imate-fade-in '>
            <h1 variant="h3" className='text-center text-4xl   ml-50 lg:text-5xl '> Contact us</h1>
            <div className=' flex justify-center  my-1'>
                <Paper elevation={0} className='mt-10 rounded-lg p-10 w-[380px] h-auto  md:w-[600px] md:h-[auto] lg:grid lg:grid-cols-2 lg:w-screen bg-transparent  text-white ' >
                    <div className=''>
                        <h1 variant="h3" className=' text-white   text-3xl font-semibold md:text-4xl'>Let's Work Togather</h1>

                        <h1 className='text-sm mt-16 text-white  lg:text-lg'><CallRounded /> <span className=''>+91 7350491070</span></h1>
                        <h1 className='text-sm mt-7  text-white  lg:text-lg'><MailRounded /> <span className=''>ganeshbochare1070@gmail.com</span></h1>
                        <h1 className='text-sm mt-7  text-white   lg:text-lg'><LocationOnRounded /><span className=''>Anand Nivas Near Janardan Lawan</span></h1>
                        <h1 className='text-sm mt-7  text-white  lg:text-lg'><LocationCityRounded /><span className=''>Karad Maharashtra,415124,IN</span></h1>

                        <div className='flex mt-7  justify-start ' >
                            <Link target='_blank' href={"https://www.instagram.com/ganeshbochare7350/"}><Instagram className='lg:w-10 lg:h-10 mouse mx-4 w-7 h-7' /></Link>
                            <Link target='_blank' href={"https://github.com/Gnbcreator"}><GitHub className='lg:w-10 lg:h-10 mouse mx-4 w-7 h-7' /></Link>
                            <Link target='_blank' href={"https://linkedin.com/in/ganesh-bochare-15b919303"}><LinkedIn className='lg:w-10 lg:h-10 mouse mx-4  w-7 h-7' /></Link>
                        </div>
                    </div>
                    <div className='mb-6 mt-10 lg:mt-0'>
                        <h1 className=' text-center text-3xl text-white font-semibold md:text-4xl'> Your Response</h1>
                        <form className='grid gap-10 p-3 place-content-center mt-9' onSubmit={sendEmail}>
                            <input type='email' placeholder="From" required
                                className='p-3 rounded-3xl border  border-blue-300 border-opacity-50 outline-none cursor-text text-white font-normal bg-transparent focus:bg-white focus:text-black focus:placeholder:text-black  w-[250px] h-auto md:w-[400px]'
                                onChange={(e) => setEmail(e.target.value)} />

                            <input type='text' label="Subject" required
                                placeholder='subject'
                                className='w-[250px]  h-auto md:w-[400px] p-3 rounded-3xl border  border-blue-300  border-opacity-50 outline-none cursor-text text-white font-normal bg-transparent focus:bg-white focus:text-black focus:placeholder:text-black '
                                onChange={(e) => setSubject(e.target.value)}
                            />

                            <textarea placeholder='Massage*' required
                                className='w-[250px] h-[150px] md:w-[400px] p-3 rounded-3xl border  border-blue-300  border-opacity-50 outline-none cursor-text text-white font-normal bg-transparent focus:bg-white focus:text-black focus:placeholder:text-black'
                                onChange={(e) => setMessage(e.target.value)}
                            />

                            <Button type='submit' variant='outlined' className=' rounded-full' size='large'>Submit</Button>
                        </form>
                    </div>
                </Paper>
            </div>
        </Container>
    )
}

