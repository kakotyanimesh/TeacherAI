import { ReactElement, ReactNode } from "react"

interface CardInterface {
    textH1 : string,
    textP1 : string,
    icons ?: ReactElement,
    width ?:string
}


export default function Card({textH1, textP1, icons, width} : CardInterface){
    return (
        <div className={`shadow-md p-14 rounded-md flex flex-col justify-center items-center text-center`}>
            <div>{icons}</div>
            <h1 className="text-2xl font-bold">{textH1}</h1>
            <p className="text-sm">{textP1}</p>
        </div>
    )
}