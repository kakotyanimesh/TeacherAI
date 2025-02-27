"use client"
import { title } from "process";
import Button from "./Button";
import { Brain, Hourglass, Users } from 'lucide-react';
import Card from "./Card";


export default function HomePage(){

    return (
        <div className="flex flex-col justify-center items-center my-32 text-center space-y-54">
            <div className="flex flex-col items-center justify-center text-center space-y-10">
                <h1 className="md:text-7xl text-2xl">Create Engaging Lesson Plans with AI</h1>
                <p className="text-sm md:text-xl text-gray-600">Transform your teaching with our AI-powered lesson planning tool. Save time, increase engagement, and deliver better learning outcomes.</p>
                <div className="flex md:flex-row flex-col gap-2 md:text-2xl">
                    <Button type="primary" title="Get Started" Onclick={() => alert("adas")}/>
                    <Button type="secondary" title="Watch Demo" Onclick={() => alert("Adasd")}/>
        
                </div>
            </div>
            <div className="flex flex-col justify-center items-center space-y-3">
                <h1 className="md:text-4xl text-xl font-semibold text-[#111827]">Why Choose Teach AI ?</h1>
                <p className="text-gray-600 md:text-xl text-sm">Powerful features to transform your lesson planning process</p>
                <div className="flex md:flex-row flex-col mx-20 py-10 gap-10">
                    {
                        CardData.map((c, key) => (
                            <Card textH1={c.title} icons={c.icon} key={key} textP1={c.desc}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}


const CardData = [
    {
        title : "AI-Powered Planning",
        icon : <Brain size={48} color="#205fb1" strokeWidth={0.5} />,
        desc : "Generate creative and engaging lesson plans in minutes with our advanced AI technology."
    },
    {
        title : "Time-Saving Templates",
        icon : <Hourglass size={48} color="#205fb1" strokeWidth={0.5} />,
        desc : "Access a library of customizable templates to streamline your planning process."
    },
    {
        title : "Collaboration Tools",
        icon : <Users size={48} color="#205fb1" strokeWidth={0.5} />,
        desc : "Share and collaborate with other teachers to create the best learning experiences."
    }
]