import { useEffect, useRef, useState } from "react";
import water from "./water25fps.mp4";

const VideoPlayer = () => {
  const playRef = useRef<HTMLDivElement>(null!);
  const videoContainerRef = useRef<HTMLDivElement>(null!);
  const videoRef = useRef<HTMLVideoElement>(null!);

  const [isPlaying, setIsPlaying] = useState(true); // Track video play state

  const handleMouseLeave = () => {
    if (playRef.current) {
      playRef.current.style.opacity = "0";
      playRef.current.style.transform = "scale(0)";
    }
  };

  const handleMouseEnter = () => {
    if (playRef.current) {
      playRef.current.style.opacity = "1";
      playRef.current.style.transform = "scale(1)";
    }
  };

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true); 
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (playRef.current && videoContainerRef.current) {
        const container = videoContainerRef.current.getBoundingClientRect();
        const { clientX, clientY } = e;

        // Calculate relative positions
        let left = clientX - container.left - 25; // Adjust for PLAY element's size
        let top = clientY - container.top - 25;

        // Clamp the values to stay within the container boundaries
        left = Math.max(0, Math.min(left, container.width - 50));
        top = Math.max(0, Math.min(top, container.height - 50));

        // Update PLAY/PAUSE position
        playRef.current.style.left = `${left}px`;
        playRef.current.style.top = `${top}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div
        ref={videoContainerRef}
        className="w-[75vw] h-[75vh] relative bg-slate-400 overflow-hidden cursor-none"
      >
        <div
          ref={playRef}
          className="w-5 h-5 p-8 flex justify-center font-bold items-center rounded-full text-white bg-black absolute opacity-0 transform scale-0 transition-opacity transition-transform duration-300"
        >
          {isPlaying ? "PAUSE" : "PLAY"}
        </div>
        <video
          ref={videoRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleVideoClick}
          autoPlay
          loop
          muted
          className="h-full w-full object-cover object-center"
          src={water}
        ></video>
      </div>
    </div>
  );
};

export default VideoPlayer;
