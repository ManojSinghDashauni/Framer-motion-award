import Lenis from "lenis";
import { motion, useScroll, useTransform } from "motion/react"
import { useEffect, useRef } from "react";

const Flow = () => {
  const container = useRef(null!);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  }) 

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time:any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  return (
    <main ref={container} className="h-[200vh] relative">
      <motion.div style={{scale,rotate}} className="sticky top-0 -z-10 w-screen h-screen">
        <img className="w-full h-full object-cover"
          src="https://images.pexels.com/photos/16395463/pexels-photo-16395463/free-photo-of-the-big-buddha-in-phuket-in-thailand.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </motion.div>
      <Sectio2 scrollYProgress={scrollYProgress}/>
    </main>
  );
}

const Sectio2 = ({scrollYProgress}:any) => {

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0])
  return (
    <motion.div style={{scale,rotate}} className="w-screen h-screen z-10">
        <img className="w-full h-full object-cover z-10"
          src="https://images.pexels.com/photos/20161304/pexels-photo-20161304/free-photo-of-the-big-buddha-in-phuket-in-thailand.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </motion.div>
  )
}


export default Flow;


