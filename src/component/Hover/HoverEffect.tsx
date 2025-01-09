import { HoverData } from "./HoverData";

const HoverEffect = () => {
  return (
    <div className="grid w-screen h-screen place-items-center">
      <div className="grid grid-cols-2 w-[40%] gap-[2%]">
        {HoverData.map(({ url }, index) => (
          <div key={index} className="grid-container--element cursor-pointer rounded-xl overflow-hidden relative">
            <img src={url} className="w-full h-full object-cover aspect-square" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HoverEffect;
