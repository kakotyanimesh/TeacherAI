import { Key } from "lucide-react"
import TestiCard from "./TestiCard"

export default function Testimonial(){
    return (
        <div className="mt-20 space-y-10 ">
            <div className="flex flex-col justify-center text-center items-center">
                <h1 className="md:text-4xl text-xl font-semibold text-[#111827]">Trusted by Teachers Worldwide</h1>
                <p className="text-gray-600 md:text-xl text-sm">Join thousands of educators who are transforming their teaching</p>
            </div>
            <div className="flex md:flex-row gap-10 flex-col md:mx-20">
                {
                    testimonial.map((test, Key) => (
                        <TestiCard key={Key} name={test.name} image={test.image} professional={test.professional} testimonial={test.testimonial}/>
                    ))
                } 
            </div>
        </div>
    )
}


const testimonial = [
    {
        image : "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        name : "Sara",
        professional: "High School Teacher",
        testimonial : "LessonPro has revolutionized my lesson planning process. I save hours each week and my students are more engaged than ever."
    },
    {
        image : "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        name : "Sara",
        professional: "High School Teacher",
        testimonial : "LessonPro has revolutionized my lesson planning process. I save hours each week and my students are more engaged than ever."
    },
    {
        image : "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        name : "Sara",
        professional: "High School Teacher",
        testimonial : "LessonPro has revolutionized my lesson planning process. I save hours each week and my students are more engaged than ever."
    },

]