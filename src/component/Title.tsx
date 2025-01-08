import React from 'react'
import { TitleProps } from '../type/Type'

const Title = ({title,index,setRotation,setIndex}:TitleProps) => {
  return (
    <div
    className='cursor-pointer group' 
    onMouseEnter={()=>setRotation(index)}
    onMouseLeave={()=>setIndex(-1)}>
        <h1 className='group-hover:text-[#2d2d2d] block text-[10vw] text-[#2d2d2d] transition-colors duration-100 ease-in-out hover:text-[#bababa]'>{title}</h1>
    </div>
  )
}

export default Title