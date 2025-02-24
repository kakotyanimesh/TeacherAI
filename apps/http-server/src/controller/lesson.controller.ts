import { lessonPlanSchema } from "@repo/common/types";
import { Request, Response } from "express";
import {GoogleGenerativeAI} from "@google/generative-ai"
import { assessmentQuestions, conceptMap, essentialQuestions, homeworks, instructionStrategies, introduction, mappingTable, presentationTable, studentTeachingReflections, suggestedReading, summarization, teachingLearningResources } from "../utils/lessonPrompts";
import { prisma } from "@repo/db";

export const  createPlans = async (req : Request, res : Response) => {
    const parsedObject = lessonPlanSchema.safeParse(req.body)

    if(!parsedObject.success){
        res.status(403).json({
            msg : `zod error : ${JSON.stringify(parsedObject.error.errors)}`
        })
        return
    }

    const userEmail = req.userId

    if(!userEmail){
        res.status(403).json({
            msg : "no user email provided "
        })
        return
    }

    const { subject, topic, grade, duration } = parsedObject.data

    const conceptMapPrompt = conceptMap({subject, topic, grade, duration})
    const mappingTablePrompt = mappingTable({subject, topic, grade, duration})
    const instructionStrategiesPrompt = instructionStrategies({subject, topic, grade, duration})
    const teachingLearningResourcesPrompts = teachingLearningResources({subject, topic, grade, duration})
    const introductionPrompt = introduction({subject, topic, grade, duration})
    const essentialQuestionsPrompts = essentialQuestions({subject, topic, grade, duration})
    const presentationTablePrompts = presentationTable({subject, topic, grade, duration})
    const summarizationPrompts = summarization({subject, topic, grade, duration})
    const assessmentQuestionsPrompts = assessmentQuestions({subject, topic, grade, duration})
    const homeworksPrompts = homeworks({subject, topic, grade, duration})
    const suggestedReadingPrompts = suggestedReading({subject, topic, grade, duration})
    const studentTeachingReflectionsPrompts = studentTeachingReflections({subject, topic, grade, duration})

    try {
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string)
        const model = genAI.getGenerativeModel({model : "gemini-1.5-flash" })

        const [conceptMap, mappingTable, instructionStrategies, teachingLearningResources, introduction, essentialQuestions, presentationTable, summarization,assessmentQuestions, homeworks, suggestedReading, studentTeachingReflections ] = await Promise.all([
            model.generateContent(conceptMapPrompt),
            model.generateContent(mappingTablePrompt),
            model.generateContent(instructionStrategiesPrompt),
            model.generateContent(teachingLearningResourcesPrompts),
            model.generateContent(introductionPrompt),
            model.generateContent(essentialQuestionsPrompts),
            model.generateContent(presentationTablePrompts),
            model.generateContent(summarizationPrompts),
            model.generateContent(assessmentQuestionsPrompts),
            model.generateContent(homeworksPrompts),
            model.generateContent(suggestedReadingPrompts),
            model.generateContent(studentTeachingReflectionsPrompts)
        ])

        // getting texts from it 
        const conceptMapText = conceptMap.response.candidates![0]?.content.parts[0]?.text
        const mappingTableText = mappingTable.response.candidates![0]?.content.parts[0]?.text
        const instructionStrategiesText = instructionStrategies.response.candidates![0]?.content.parts[0]?.text
        const teachingLearningResourcesText = teachingLearningResources.response.candidates![0]?.content.parts[0]?.text
        const intrpductionText = introduction.response.candidates![0]?.content.parts[0]?.text
        const essentialQuestionsText = essentialQuestions.response.candidates![0]?.content.parts[0]?.text
        const presentationTableText = presentationTable.response.candidates![0]?.content.parts[0]?.text
        const summarizationText = summarization.response.candidates![0]?.content.parts[0]?.text
        const assessmentQuestionsText = assessmentQuestions.response.candidates![0]?.content.parts[0]?.text
        const homeworksText = homeworks.response.candidates![0]?.content.parts[0]?.text
        const suggestedReadingText = suggestedReading.response.candidates![0]?.content.parts[0]?.text
        const studentTeachingReflectionsText = studentTeachingReflections.response.candidates![0]?.content.parts[0]?.text

        // const fullContent = `
        //     conceptMap : ${conceptMapText}
            
        //     mappingTable : ${mappingTableText}
            
        //     instructionStrategies : ${instructionStrategiesText}
            
        //     instructionText : ${intrpductionText},

        //     teachingLearningResources : ${teachingLearningResourcesText}
            
        //     essentialQuestions : ${essentialQuestionsText}
            
        //     presentationTable : ${presentationTableText}
            
        //     summarization : ${summarizationText}

        //     assessmentQuestion : ${assessmentQuestionsText}

        //     homeworks : ${homeworksText},

        //     suggesstedReading : ${suggestedReadingText}

        //     studentTeaching reflection : ${studentTeachingReflectionsText}
        // `

        const title = `${subject}_${topic}_lessonPlan`


        const lP = await prisma.lessonPlan.create({
            data : {
                subject,
                topic,
                userEmail,
                lessonPlanTitle : title
            }
        })

        res.status(200).json({
            id : lP.id,
            title : title,
            sections : {
                conceptMap : `${conceptMapText}`,
                mappingTable : `${mappingTableText}`,
                instructionStrategies : `${mappingTableText}`,
                teachingLearningResources : `${teachingLearningResourcesText}`,
                introduction : `${intrpductionText}`,
                essentialQuestions : `${essentialQuestionsText}`,
                presentationTable : `${presentationTable}`,
                summarization : `${summarizationText}`,
                assessmentQuestions : `${assessmentQuestionsText}`,
                homeworks : `${homeworksText}`,
                suggestedReading : `${suggestedReadingText}`,
                studentTeachingReflections : `${studentTeachingReflectionsText}`
            }
        })
    } catch (error) {
        res.status(500).json({
            msg : `something went wrong while creating lesson plan : ${JSON.stringify(error)}`
        })
    }
}