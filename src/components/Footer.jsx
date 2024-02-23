import React from 'react'
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";

export default function Footer() {
  return (
    <div className='text-white flex justify-center mt-16 mb-10 space-x-5'>
      <a href="https://www.instagram.com/" target='_blank' className='hover:scale-125 hover:text-green-400 duration-300'><FaInstagram /></a>
      <a href="https://www.linkedin.com/in/abhichavan14/" target='_blank' className='hover:scale-125 hover:text-green-400 duration-300'><FaLinkedin /></a>
      <a href="mailto:gayatribharkade2002@gmail.com" className='hover:scale-125 hover:text-green-400 duration-300'><MdOutlineAlternateEmail /></a>
      <a href="https://github.com/abhishekchavan14" target='_blank' className='hover:scale-125 hover:text-green-400 duration-300'><FaGithub /></a>
    </div>
  )
}