"use client"

import axios from "axios"
import React, { useEffect, useState } from "react"
import TextEditor from "../../../components/TextEditor"

export default function LessonPlanEditorPage({params} : {params : {id : string}}){
    const [lessonPlanData, setLessonPlanData] = useState({
        conceptMap: '',
        mappingTable: '',
        instructionStrategies: '',
        teachingLearningResources: '',
        introduction: '',
        essentialQuestions: '',
        presentationTable: '',
        summarization: '',
        assessmentQuestions: '',
        homeworks: '',
        suggestedReading: '',
        studentTeachingReflections: '',
    })

    const planId = React.use(params).id

    const fetchedLessonPlanData = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/api/v1/lesson/getData/${planId}`,{
                headers : {
                    "Content-Type" : "application/json"
                },
                withCredentials : true
            })

            setLessonPlanData(response.data.LessonPlanData)
        } catch (error) {
            console.log(`error while fetching lesson plan data ${error}`);
            
        }
    }
    useEffect(() => {
      
        fetchedLessonPlanData()
        
    },[])
    
    return (
        <div>
            <h1>Lesson Plan editor</h1>
            <div>
                <h2>Concept map</h2>
                <TextEditor value={lessonPlanData.conceptMap} onChange={(value) => setLessonPlanData({...lessonPlanData, conceptMap : value}) } />
            </div>
        </div>
    )
}