"use client"
import { Button, InputBox, LessonCard } from "@repo/ui"
import axios from "axios"
import { useEffect, useRef, useState } from "react"

export default function Dashboard(){
    const [modal, setModal] = useState(false)
    const subjectRef = useRef<HTMLInputElement>(null)
    const topicRef = useRef<HTMLInputElement>(null)
    const durationRef = useRef<HTMLInputElement>(null)
    const gradeRef = useRef<HTMLInputElement>(null)
    const [plandata, setPlandata] = useState(false)


    
    


    const createPlan = async () => {
        if(!subjectRef.current?.value || topicRef.current?.value || durationRef.current?.value || gradeRef.current?.value ){
            alert("bro its empyt")
            setModal(!modal)
            return
        }

        const plan =  await axios.post('http://localhost:4000/api/v1/lesson/createPlan', {
            subject : subjectRef.current?.value,
            topic : topicRef.current?.value,
            duration : durationRef.current?.value,
            grade : gradeRef.current?.value
        }, {
            headers : {
                "Content-Type" : "application/json"
            },
            withCredentials : true
        })

        console.log(plan);

        if(plan.data){
            setModal(!modal)
        }
        
    }

    return (
        <div>
            <div className="flex flex-row justify-between mx-40 my-10">
                dashboard
                <Button Onclick={() => setModal(!modal)} title="create plan"/>
                <div className="absolute left-1/2 right-1/2 top-20">
                {
                    modal && <div className="flex flex-col gap-6 justify-center items-center">
                        <InputBox placeholder="subject" type="text" ref={subjectRef}/>
                        <InputBox placeholder="topic" type="text" ref={topicRef} />
                        <InputBox placeholder="duration" type="text" ref={durationRef} />
                        <InputBox placeholder="grade" type="text" ref={gradeRef} />
                        <Button title="submit" Onclick={createPlan} / >
                    </div>
                }
                </div>
            </div>
            <div className="mx-20">
                <LessonCard title="Algebra_Maths" topic="Algebra" date="22/10/25"/>
            </div>
        </div>
    )
}