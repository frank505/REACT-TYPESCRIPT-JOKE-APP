import { ReactChildren } from "react";

export default interface CardsProps{
customStyles?:any;
className?:string;
contentElements:JSX.Element|HTMLElement;
actionElements?:JSX.Element|HTMLElement;
}