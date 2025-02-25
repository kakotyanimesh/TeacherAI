interface LessonType {
    title : string,
    topic : string,
    date ?: string

}



export default function LessonCard({title, topic, date} : LessonType) {
    return (
        <div className="flex ui-flex-col  ui-bg-blue-100 ui-w-fit ui-px-10 ui-py-5 ui-rounded-md">
            <h1>{title}</h1>
            <h1>topic : {topic}</h1>
            <p>date : {date}</p>
        </div>
    )
}