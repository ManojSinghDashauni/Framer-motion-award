import { useEffect, useState } from "react";

const TrackingEyes = () => {

  const [rotate,setRotate]=useState<number>(0);

  useEffect(()=>{
    window.addEventListener("mousemove",(e)=>{
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      // innerWidth/2 and innerWidth/2 give screen center point ex=> (250,150)
      const deltaX = mouseX - window.innerWidth/2;
      const deltaY = mouseY - window.innerHeight/2;
      // atan and aten2 give radian angle and 1 radian= 57.29 and 180/Math.pi = 57.29
      var angle = Math.atan2(deltaY,deltaX) * (180/Math.PI);
      setRotate(angle-180);
    })
  },[])
  return (
    <div className="w-screen h-screen bg-amber-700 flex justify-center items-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')] bg-cover bg-center">
      <div className="h-1/2 w-1/2 flex justify-center items-center gap-20">
        <div className="bg-slate-50 h-72 w-72 rounded-full flex justify-center items-center">
          <div className=" bg-black h-44 w-44 rounded-full flex justify-center items-center ">
          <div style={{transform:`rotate(${rotate}deg)`}} className=" w-full h-10">
            <div className=" bg-slate-50 h-10 w-10 rounded-full">
            </div>
            </div>
          </div>
        </div>
        <div className="bg-slate-50 h-72 w-72 rounded-full flex justify-center items-center">
          <div className=" bg-black h-44 w-44 rounded-full flex justify-center items-center overflow-hidden">
          <div style={{transform:`rotate(${rotate}deg)`}} className=" w-full h-10">
            <div className=" bg-slate-50 h-10 w-10 rounded-full">
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackingEyes;
