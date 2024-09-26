'use client'
import { Card, CardContent, CardHeader, Grid, Paper, ThemeProvider, createTheme, Avatar, IconButton, CardBody, List, ListItem } from '@mui/material'
import Container from '@mui/material/Container'
import { CalendarTodayRounded, LibraryBooks, LocationCityRounded, NumbersRounded, SchoolRounded, UnarchiveRounded } from '@mui/icons-material'
import { motion } from 'framer-motion'

const darkTheme = createTheme({ palette: { mode: 'light' } })
export default function Education() {
    return (
        <>
            <Container maxWidth="xl" className=' lg:py-10 grid place-content-center mx-auto'>
                <h1 variant='h3' className=' mt-10  mx-auto text-center text-3xl md:text-4xl lg:text-5xl  lg:text-center '>Education</h1>
                <ThemeProvider theme={darkTheme}>
                    <div className=' grid gap-6 place-content-center md:place-content-center mt-10  md:px-20 lg:grid-cols-2   lg:place-content-center lg:mx-auto  py-20'  >
                        <motion.div whileHover={{ scale: 1.03, transition: { duration: .2 } }} className='p-7 lg:p-7 bg-transparent border border-opacity-15 border-cyan-300  w-80 h-auto md:w-[600px] md:h-auto animate-fade-in  lg:max-w-screen-lg  lg:mx-auto rounded-lg hover:shadow-md '>
                            <h1 className=' text-xl   text-white'>Sadguru Gadge Maharaj College <span className='text-xl'>(Karad)</span> </h1>
                            <h1 className='text-lg  font-medium mt-2 text-red-500'><LibraryBooks />Bachelor Of Science at Computer Science BSc</h1>
                            <div className='grid grid-cols-1 gap-4 mt-4'>
                                <h1 className=' text-white text-' ><CalendarTodayRounded className='text-blue-500' /> Passing year: June 2024</h1>
                                <h1 className=' text-white text-' ><LocationCityRounded className='text-blue-500' />City: karad</h1>
                                <h1 className=' text-white text- '><SchoolRounded className='text-blue-500' /> University: Shivaji University Kolhapur</h1>
                                <h1 className=' text-white text-' ><NumbersRounded className='text-blue-500' /> Percentage:75.00%</h1>
                                <h1 className=' text-white text-' ><NumbersRounded className='text-blue-500' /> CGPA:7.80%</h1>
                            </div>
                        </motion.div>


                        <motion.div whileHover={{ scale: 1.03, transition: { duration: .2 } }} variant='outlined' className='p-7 lg:p-7 w-80 bg-transparent  border border-opacity-15 border-cyan-300 h-auto md:w-[600px] md:h-max animate-fade-in lg:w-auto  rounded-lg hover:shadow-md'>
                            <h1 className='text-xl  text-white'>Sadguru Gadge Maharaj College <span className='text-xl'>(Karad)</span> </h1>
                            <h1 className='text-lg font-sans font-medium mt-2 text-red-500'><LibraryBooks />Heigher Secondary Certificate HSC </h1>
                            <div className='grid grid-cols-1 gap-4 mt-4'>
                                <h1 className=' text-white text-md' ><CalendarTodayRounded className='text-blue-500' /> Passing year: June 2021</h1>
                                <h1 className=' text-white text-md' ><LocationCityRounded className='text-blue-500' />City: karad</h1>
                                <h1 className=' text-white text-md'><SchoolRounded className='text-blue-500' /> University: Shivaji University Kolhapur</h1>
                                <h1 className=' text-white text-md' ><NumbersRounded className='text-blue-500' /> Percentage:71.00%</h1>
                                <h1 className=' text-white text-' ><NumbersRounded className='text-blue-500' /> Grade:A</h1>
                            </div>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.03, transition: { duration: .2 } }} variant='outlined' className='p-7 lg:p-7 bg-transparent border border-opacity-15 border-cyan-300 w-80 h-auto md:w-[600px] md:h-auto lg:w-auto rounded-lg hover:shadow-md  lg:col-span-2'>
                            <h1 className='text-xl text-white'>Maharani Tarabai Vidyalay <span className='text-xl'>(Talbid)</span> </h1>
                            <h1 className='text-lg font-sans font-medium mt-2 text-red-500'><LibraryBooks /> Secondary School Certificate SSC</h1>
                            <div className='grid grid-cols-1 gap-4 mt-4'>
                                <h1 className=' text-white text-md' ><CalendarTodayRounded className='text-blue-500' /> Passing year: June 2019</h1>
                                <h1 className=' text-white text-md' ><LocationCityRounded className='text-blue-500' />City: karad</h1>
                                <h1 className=' text-white text-md '><SchoolRounded className='text-blue-500' /> University: Shivaji University Kolhapur</h1>
                                <h1 className=' text-white text-md' ><NumbersRounded className='text-blue-500' /> Percentage:76.86%</h1>
                            </div>
                        </motion.div>

                    </div>
                </ThemeProvider>
            </Container>
        </>
    )
}