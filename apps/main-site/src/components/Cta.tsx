'use client'
import Button from "./Button";

export default function Cta(){
    return (
        <div className="flex flex-col text-white my-20 justify-center items-center text-center bg-blue-500 md:space-y-10  space-y-4 md:p-20 p-4 md:mx-34 mx-3 rounded-xl">
            <h1 className="md:text-4xl font-bold">Ready to Transform Your Teaching?</h1>
            <p className="text-gray-100 md:text-xl text-sm">Join thousands of teachers who are already creating amazing lesson plans with LessonPro.</p>
            <Button title="Start Now " type="primary" Onclick={() => alert("adas")}/>
        </div> 
    )
}