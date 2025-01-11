import { easeIn } from "motion";
import { easeInOut, motion } from "motion/react";
import { useRef, useState } from "react"

const Tilt = () => {
  const [xVal,setxVal] = useState<number>(0)
  const [yVal,setyVal] = useState<number>(0)
  const tiltRef = useRef<HTMLInputElement>(null!);
  
  const movingMouse:React.MouseEventHandler<HTMLDivElement> =(e) => {
    let rect = tiltRef.current.getBoundingClientRect();
    setxVal((e.clientX - rect.x -rect.width/2)/20);
    setyVal(-(e.clientY  - rect.y -rect.height/2)/10);
    tiltRef.current.style.transform = `rotateX(${yVal}deg) rotateY(${xVal}deg)`;
  }

  return (
    <div className="w-screen h-screen bg-slate-500 relative bg-[url('https://images.pexels.com/photos/3113541/pexels-photo-3113541.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-no-repeat "  onMouseMove={movingMouse} style={{perspective:1000}}>
      <div ref={tiltRef}  className="absolute top-40 left-40 w-fit h-fit text-6xl font-bold uppercase font-serif">
        <h1>Manoj singh </h1>
        <h1>Dashauni</h1>
        <h1>2024</h1>
        <h1>Web-developer</h1>
      </div>
    </div>
  )
}

export default Tilt