"use client"

import React from "react"

interface ButtonProps {
    Onclick : (evenet : React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    title : string
}


export default function ButtonCompo({title, Onclick} : ButtonProps){
    return (
        <div>
            <button className="ui-bg-blue-500 ui-rounded-md ui-px-16 ui-py-1 " onClick={Onclick}>{title}</button>
        </div>
    )
}