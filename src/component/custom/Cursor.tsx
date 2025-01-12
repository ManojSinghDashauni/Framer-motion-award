import { useEffect, useRef } from "react"

const Cursor = () => {
    const cursorRef = useRef<HTMLInputElement>(null!);
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
          if (cursorRef.current) {
            const { clientX, clientY } = e;
            cursorRef.current.style.left = `${clientX}px`;
            cursorRef.current.style.top = `${clientY}px`;
            cursorRef.current.style.opacity = "1";
          }
        };
    
        const handleMouseLeave = () => {
          if (cursorRef.current) {
            cursorRef.current.style.opacity = "0";
          }
        };
    
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          window.removeEventListener("mousemove", handleMouseMove);
          window.removeEventListener("mouseleave", handleMouseLeave);
        };
      }, []);
  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center relative cursor-none bg-[url('https://images.pexels.com/photos/30108588/pexels-photo-30108588/free-photo-of-black-and-white-photo-of-rustic-boathouse-in-bavaria.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-no-repeat">
        <div ref={cursorRef} className="w-5 h-5 bg-white absolute rounded-full transition-none mix-blend-difference"></div>
        <h1 className="text-9xl font-bold w-40 text-white">Manoj singh dashauni</h1>
        
    </div>
  )
}

export default Cursor