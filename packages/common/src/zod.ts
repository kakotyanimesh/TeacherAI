import z from "zod"

export const signupSchema = z.object({
    email : z.string().email({message : "provide a valid email"}),
    password : z.string().max(20, {message : "max 20 letters is allowed"}),
    username : z.string().max(20, {message : "max 20 letters of username is allowed"}),
    schoolName : z.string().max(30, {message : "max of 30 letters of school name is allowed"})
})


export const signinSchema = z.object({
    email : z.string().email({message : "provide a valid email address"}),
    password : z.string().max(20, {message : "max 20 letters of password is allowed"})
})


export const lessonPlanSchema = z.object({
    subject : z.string().max(20, {message : "max 20 is allowed"}),
    topic : z.string().max(20, {message : "max 20 is allowed"}),
    grade : z.string().max(10, {message : "max 10 is allowed"}),
    duration : z.string().max(6, {message : "max 6 is allowed bro "})
})