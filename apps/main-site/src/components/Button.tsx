import React from "react"

interface ButtonTypes {
    title : string,
    Onclick : (evenet : React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    type : 'primary' | 'secondary'
}


const style = {
    'primary' : "bg-gradient-to-r from-cyan-500 to-blue-700 text-white px-6 py-2 rounded-md",
    'secondary' : "bg-slate-300 rounded-md px-2 py-2"
}
export default function Button ({title, Onclick, type} : ButtonTypes) {
    return (
        <button onClick={Onclick} className={`${style[type]} cursor-pointer`}>
            {title}
        </button>
    )
}