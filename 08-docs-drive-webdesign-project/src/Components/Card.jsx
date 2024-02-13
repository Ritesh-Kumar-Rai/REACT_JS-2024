import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { RxDownload } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

const Card = ({data, reference}) => {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.1}} dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }} className='relative px-5 py-5 w-48 h-64 bg-slate-900/60 text-zinc-100 rounded-[30px] overflow-hidden'>
        <FaRegFileAlt />
        <p className='mt-5 text-sm leading-tight font-semibold break-words'>{data.file_name}{data.file_extension}</p>
        <footer className='absolute left-0 bottom-0 w-full mt-0 p-0'>
            
            <div className='flex items-center justify-between px-5 py-5'>
                <h4>{data.size}</h4>
                <span className='flex items-center justify-center p-1 bg-slate-50 text-black rounded-[20px] font-semibold cursor-pointer'>
                    {data.isClose ? <IoClose size=".9rem"/> :<RxDownload size=".9rem"/>}
                </span>
            </div>
            {data.tag.isOpen && (
                <div className={`flex items-center justify-center p-5 w-full h-9 ${data.tag.bgColor}`}>
                    <h4>{data.tag.tagTitle}</h4>
                </div>
            )}
        </footer>
    </motion.div>
  )
}

export default Card