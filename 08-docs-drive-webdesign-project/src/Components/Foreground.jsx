import React, { useRef } from 'react';
import Card from './Card';

const Foreground = () => {

    const ref = useRef(null);

    const data = [
        {
            file_name : "ShrimadBhagvatam Canto 01",
            file_extension : ".pdf",
            size : "4.2mb",
            isClose : true,
            tag : {
                isOpen : true,
                tagTitle : "File Downloaded",
                bgColor : "bg-blue-900/50"
            }
        },
        {
            file_name : "ShrimadBhagvadGita",
            file_extension : ".pdf",
            size : "2.1mb",
            isClose : false,
            tag : {
                isOpen : false,
                tagTitle : "File Downloaded",
                bgColor : "bg-green-900/50"
            }
        },
        {
            file_name : "Ramayan",
            file_extension : ".pdf",
            size : ".9mb",
            isClose : true,
            tag : {
                isOpen : true,
                tagTitle : "File Downloaded",
                bgColor : "bg-green-900/50"
            }
        }
    ];


  return (
    <div ref={ref} className='absolute z-[3] w-full h-screen bg-sky-900/10 flex flex-wrap gap-10 p-5 overflow-y-auto'>
        {data.map((item,index)=>(
            <Card key={index} data={item} reference={ref}/>
        ))}
        
    </div>
  )
}

export default Foreground