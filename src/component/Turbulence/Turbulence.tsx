const Turbulence = () => {
  const image =
    "https://images.pexels.com/photos/16345043/pexels-photo-16345043/free-photo-of-flowers-and-books-in-bicycle-basket.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <svg width="0" height="0">
        <defs>
          <filter id="noise">
            <feTurbulence
              baseFrequency="0.7,0.8"
              seed="0"
              type="fractalNoise"
              result="static"
            >
              <animate
                attributeName="seed"
                values="0;100"
                dur="800ms"
                repeatCount="1"
                begin="card.mouseenter"
              />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="static" scale="0">
              <animate
                attributeName="scale"
                values="0;40;0"
                dur="800ms"
                repeatCount="1"
                begin="card.mouseenter"
              />
            </feDisplacementMap>
          </filter>
        </defs>
      </svg>
      <div
        id="card"
        className="w-[380px] aspect-[2/3] overflow-hidden border-[0.25rem] border-solid border-[rgb(255 255 255 /15%)] rounded-xl"
      >
        <img
          src={image}
          alt="Turbulence Effect"
          className="w-full h-full object-cover"
          style={{ filter: "url(#noise)" }}
        />
      </div>
    </div>
  );
};

export default Turbulence;
