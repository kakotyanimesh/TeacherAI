"use client"

import { InputBox, Button } from "@repo/ui"
import { useRef } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"

export default function Signup(){
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const usernameRef = useRef<HTMLInputElement>(null)
    const schoolNameRef = useRef<HTMLInputElement>(null)
    const router = useRouter()

   
    

    const signinUser = async () => {
        const user = await axios.post(`http://localhost:4000/api/v1/user/signup`, {
            email : emailRef.current?.value,
            password : passwordRef.current?.value,
            username : usernameRef.current?.value,
            schoolName : schoolNameRef.current?.value 
        })

        if(user.data){
            router.push("/signin")
        }
        // const url = process.env.BackEndUrl

        // console.log(url);

    }

    return (
        <div className="flex flex-col gap-5 justify-center items-center min-h-screen">
                <InputBox type="text" placeholder="email" ref={emailRef}/>
                <InputBox type="password" placeholder="password" ref={passwordRef}/>
                <InputBox type="text" placeholder="username" ref={usernameRef}/>
                <InputBox type="text" placeholder="school name " ref={schoolNameRef}/>
                <Button Onclick={signinUser} title="signup"/>
        </div>
    )
}