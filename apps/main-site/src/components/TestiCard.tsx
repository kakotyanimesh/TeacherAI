interface TestiCardProps {
    image : string,
    name : string,
    professional : string,
    testimonial : string
}

export default function TestiCard({image, name, professional, testimonial} : TestiCardProps) {
    return (
        <div className="shadow-md p-14 rounded-md flex flex-col space-y-5">
            <div className="flex flex-row gap-10 items-center"> 
                <img src={image} alt="testimonial_image" className="size-10 rounded-full" />
                <div className="">
                    <h1 className="font-bold">{name}</h1>
                    <p className="text-gray-600">{professional}</p>
                </div>
            </div>
            <div>
                <p>"{testimonial}"</p>
            </div>
        </div>
    )
}