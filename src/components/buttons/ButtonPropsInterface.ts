export default interface ButtonProps {
    buttonText ?: string;
    clickEvent :()=> void;
    color?: string;
    variant?:any;
    customStyles ?:any;
    className?:any;
}