import { useState } from 'react'
import { StackNavData } from '../../data/StackNavData'
import {Image, Title} from '../index'

const Home = () => {
    const [rotationPosition,setRotation]=useState<number[]>(new Array(StackNavData.length).fill(0))
    const [activeIndex,setActiveIndex] =useState<number>(-1);

    const handleSetRotation=(itemIndex:number)=>{
        const newRotation =Math.random() * 7 * (Math.round(Math.random()) ? 1 : -1);
        const tempState=[...rotationPosition];

        tempState[itemIndex]=newRotation;
        setRotation(tempState);
        setActiveIndex(itemIndex);
    }
  return (
    <div>
        <div className="px-[6.597vw] z-50" id='main-container'>
            <div className='relative block pt-[37.77vh] pb-[10vh] text-container'>
                {StackNavData.map(({title},index)=>(
                    <Title key={index} title={title} index={index} setRotation={handleSetRotation} setIndex={setActiveIndex}/>
                ))}
            </div>
            <div className="fixed flex justify-center items-center ml-[-6.597vw] h-screen w-full -z-10 top-0 ">
                {StackNavData.map(({url},index)=>(
                    <Image key={index} url={url} active={activeIndex===index} rotationPosition={rotationPosition[index]}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Home