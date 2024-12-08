import React from 'react'
interface ButtonProps{
    label:string
    secondary?:boolean
    primary?:boolean
    isblue?:boolean
}
const Button:React.FC<ButtonProps> = (
    {
        label,
        secondary,
        primary,
    }
) => {
  return (
    <button className={`h-[62px] w-[221px] ${secondary ? "text-[#2DC071]":"text-white"} rounded-[5px] ${secondary? "bg-white":"bg-[#2DC071]"} ${secondary? "border-[1px]":""}  ${secondary? "border-[#2DC071]":""} font-bold text-[22px] p-3 ${primary? "bg-[#23A6F0]":""} ${primary? "w-[94px]":""} ${primary? "h-[48px]":""} ${primary? "text-[14px]":""} ${primary? "p-2":""}  `}>{label}</button>
  )
}

export default Button