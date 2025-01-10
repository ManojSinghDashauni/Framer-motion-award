import cn from "classnames"
import { ImageProps } from '../../type/StackNavType'

const Image = ({url,active,rotationPosition}:ImageProps) => {
  return (
    <img  className={cn({ active })} id='img' src={url} alt="" style={{transform : active ? `scale(1.1) rotate(${rotationPosition}deg)`:`rotate(${rotationPosition}deg)` }} />
  )
}

export default Image;
