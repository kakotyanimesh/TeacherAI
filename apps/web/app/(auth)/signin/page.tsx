"use client"

import { InputBox, Button } from "@repo/ui"
import axios from "axios"
import { useRouter } from "next/navigation"

import { useRef } from "react"


export default function Signin(){
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const router = useRouter()

    const signinUser = async () => {
        const user = await axios.post('http://localhost:4000/api/v1/user/signin', {
            email : emailRef.current?.value,
            password : passwordRef.current?.value
        }, {
            withCredentials : true
        })

        console.log(user);
        
        if(user.data){
            router.push("/dashboard")
        }
        // try catch add 
    }

    return (
        <div className="flex flex-col gap-5 justify-center items-center min-h-screen">
            <InputBox type="text" placeholder="email" ref={emailRef}/>
            <InputBox type="text" placeholder="password" ref={passwordRef}/>
            <Button Onclick={signinUser} title="sign in"/>
        </div>
    )
}