import { Dispatch, SetStateAction } from "react"

export type TitleProps = {
    title:string,
    index:number,
    setRotation:(itemIndex: number) => void,
    setIndex:Dispatch<SetStateAction<number>>
}

export type ImageProps = {
    url:string,
    active:boolean,
    rotationPosition:number
}