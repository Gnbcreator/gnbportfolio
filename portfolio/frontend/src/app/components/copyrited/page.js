"use client"
import { ArrowUpIcon } from '@heroicons/react/24/outline'
import { CopyrightRounded } from '@mui/icons-material'
import { Link } from 'react-scroll'
import Container from '@mui/material/Container'
export default function Copyrited() {
  return (
    <>
      <Container maxWidth="xl" className='py-20' >
        <div className='text-center'>
          <h1 className='text-xl'> <CopyrightRounded /> copyrighted by gnbcreator</h1>
          <button className=' border border-blue-600 rounded-full p-2 mt-4'>
            <Link to='/' offset={-50} smooth={10}><ArrowUpIcon className='w-7 h-7 text-yellow-300 animate-bounce' /></Link>
          </button>
        </div>
      </Container>
    </>
  )
}
