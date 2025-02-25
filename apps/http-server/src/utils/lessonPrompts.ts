
import { LessonPlanTypes } from "../types/lesson";

export const conceptMap = ({ subject, grade, duration, topic }: LessonPlanTypes) => {
    return `Generate a concept map for the topic '${topic}' in the subject '${subject}' for grade ${grade}. The map should include key concepts, sub-concepts, relationships, and connections between ideas. Ensure clarity and logical organization.
        dont use stars while giving response , concept map should use bullted points like 1,2,3 etc , concept map word limit should be 100
    `;
};

export const mappingTable = ({ subject, grade, duration, topic }: LessonPlanTypes) => {
    return `Create a mapping table for the topic '${topic}' in the subject '${subject}' for grade ${grade}. The table should link learning objectives with activities, assessment methods, and resources.
    
    dont use stars while giving response , response should use bullted points like 1,2,3 etc , word limit should be 100`;
};
x
export const instructionStrategies = ({ subject, grade, duration, topic }: LessonPlanTypes) => {
    return `Develop instructional strategies for teaching the topic '${topic}' in the subject '${subject}' for grade ${grade}. Include active and passive learning techniques catering to different learning styles.
     dont use stars while giving response , response should use bullted points like 1,2,3 etc , word limit should be 100`;
};

export const teachingLearningResources = ({ subject, grade, duration, topic }: LessonPlanTypes) => {
    return `List relevant teaching-learning resources for the topic '${topic}' in the subject '${subject}' for grade ${grade}. Include traditional and digital materials with brief descriptions.
     dont use stars while giving response , response should use bullted points like 1,2,3 etc , word limit should be 100`;
};

export const introduction = ({ subject, grade, duration, topic }: LessonPlanTypes) => {
    return `Write an introduction for the lesson on '${topic}' in the subject '${subject}' for grade ${grade}. Capture student interest and state learning objectives within 50 words.
     dont use stars while giving response , response should use bullted points like 1,2,3 etc , word limit should be 100`;
};

export const essentialQuestions = ({ subject, grade, duration, topic }: LessonPlanTypes) => {
    return `Develop two essential questions for a lesson on '${topic}' in the subject '${subject}' for grade ${grade}. The questions should be open-ended and thought-provoking.
     dont use stars while giving response , response should use bullted points like 1,2,3 etc , word limit should be 100`;
};

export const presentationTable = ({ subject, grade, duration, topic }: LessonPlanTypes) => {
    return `Create a presentation table outlining the lesson flow for '${topic}' in the subject '${subject}' for grade ${grade}. Include time, content, activities, and resources.
     dont use stars while giving response , word limit should be 100`;
};

export const summarization = ({ subject, grade, duration, topic }: LessonPlanTypes) => {
    return `Write a summary of key concepts covered in the lesson on '${topic}' in the subject '${subject}' for grade ${grade}. Highlight main learning points concisely.   dont use stars while giving response  word limit should be 100`;
};

export const assessmentQuestions = ({ subject, grade, duration, topic }: LessonPlanTypes) => {
    return `Develop assessment questions to evaluate student understanding of '${topic}' in the subject '${subject}' for grade ${grade}. Include multiple-choice, short answer, and open-ended questions   dont use stars while giving response , response should use bullted points like 1,2,3 etc , word limit should be 100.`;
};

export const homeworks = ({ subject, grade, duration, topic }: LessonPlanTypes) => {
    return `Design a homework assignment for students on '${topic}' in the subject '${subject}' for grade ${grade}. Provide clear instructions and expectations.   dont use stars while giving response , response should use bullted points like 1,2,3 etc , word limit should be 100`;
};

export const suggestedReading = ({ subject, grade, duration, topic }: LessonPlanTypes) => {
    return `Compile a list of suggested readings on '${topic}' in the subject '${subject}' for grade ${grade}. Include books, articles, and online resources with brief descriptions.   dont use stars while giving response , response should use bullted points like 1,2,3 etc , word limit should be 100`;
};

export const studentTeachingReflections = ({ subject, grade, duration, topic }: LessonPlanTypes) => {
    return `Develop reflection questions for students and teachers to evaluate the lesson on '${topic}' in the subject '${subject}' for grade ${grade}.   dont use stars while giving response , response should use bullted points like 1,2,3 etc , word limit should be 80`;
};



// import { lessonPlanSchema } from "@repo/common/types";
// import { LessonPlanTypes } from "../types/lesson";


// export const conceptMap = ({subject, grade, duration, topic } : LessonPlanTypes) => {
//     return `Generate a detailed concept map for topic ${topic} of subject ${subject} duration ${duration} minutes and for grade ${grade}. Include key concepts, sub-concepts, relationships, and connections between ideas. The map should visually represent the hierarchical structure of the topic and illustrate the flow of information. Focus on clarity, comprehensiveness, and logical organization. Ensure all relevant terms and definitions are included and appropriately linked.`
// }

// export const mappingTable = ({subject, grade, duration, topic} : LessonPlanTypes) => {
//     return `Create a comprehensive mapping table for topic ${topic} of subject ${subject} duration ${duration} minutes and for grade ${grade}. The table should correlate specific learning objectives with corresponding activities, assessment methods, and resources. Each row should represent a distinct learning objective, clearly stating what students should be able to do upon completion. Columns should include: Learning Objective (specific and measurable), Activity (detailed description of the activity), Assessment Method (how learning will be assessed), Resources (materials needed for the activity). Ensure the table provides a clear and actionable plan for achieving each learning objective.`
// }

// export const instructionStrategies = ({subject, grade, duration, topic} : LessonPlanTypes) => {
//     return `Develop a variety of engaging and effective instructional strategies for teaching topic ${topic} of subject ${subject} duration ${duration} minutes and for grade ${grade}. Include a mix of active and passive learning techniques, catering to different learning styles. Describe each strategy in detail, explaining its purpose, implementation steps, and potential benefits for student learning. Consider incorporating strategies such as [mention specific strategies like inquiry-based learning, collaborative projects, gamification, differentiated instruction, etc., if relevant]. Explain how these strategies will promote critical thinking, problem-solving, and active participation.`
// }

// export const teachingLearningResources = ({subject, grade, duration, topic} : LessonPlanTypes) => {
//     return `List and describe a range of appropriate and accessible teaching-learning resources for teaching topic ${topic} of subject ${subject} duration ${duration} minutes and for grade ${grade}. Include both traditional and digital resources, such as textbooks, articles, videos, websites, interactive simulations, and hands-on materials. For each resource, provide a brief description of its content, its relevance to the lesson topic, and how it can be used to enhance student learning. Consider resources that cater to diverse learning needs and promote engagement.`
// }

// export const introduction = ({subject, grade, duration, topic} : LessonPlanTypes) => {
//     return `Craft a compelling introduction for a lesson on teaching topic ${topic} of subject ${subject} duration ${duration} minutes and for grade ${grade}. The introduction should capture student interest, activate prior knowledge, and clearly state the learning objectives. words only consits of 50-70 letters.`
// }

// export const essentialQuestions = ({subject, grade, duration, topic} : LessonPlanTypes) => {
//     return `Craft 2-3 essential questions for a lesson on teaching topic ${topic} of subject ${subject} duration ${duration} minutes and for grade ${grade}.2-3 essential questions that will guide student inquiry and exploration throughout the lesson. These questions should be open-ended, thought-provoking, and directly related to the core concepts of the topic. The introduction should set the stage for meaningful learning and encourage students to think critically about the topic.`
// }

// export const presentationTable = ({subject, grade, duration, topic} : LessonPlanTypes) => {
//     return `Design a presentation table outlining the key points and flow of a lesson on teaching topic ${topic} of subject ${subject} duration ${duration} minutes and for grade ${grade}. The table should include columns for: Time (allocated time for each segment), Content (brief description of the material covered), Activity (what the teacher and students will be doing), and Resources (materials used during that segment). The presentation table should provide a clear and organized roadmap for the lesson, ensuring a smooth and logical progression of topics. Include specific timings for each activity to maintain focus.`
// }

// export const summarization = ({subject, grade, duration, topic} : LessonPlanTypes) => {
//     return `Write a concise and comprehensive summary of the key concepts covered in a lesson on teaching topic ${topic} of subject ${subject} duration ${duration} minutes and for grade ${grade}. The summary should reinforce the main learning points, highlight important relationships between ideas, and provide a clear takeaway message for students. Use language that is accessible and engaging for the target audience. Consider using bullet points or numbered lists to organize the information effectively. Ensure the summary accurately reflects the content covered in the lesson and helps students consolidate their understanding.`
// }

// export const assessmentQuestions = ({subject, grade, duration, topic} : LessonPlanTypes) => {
//     return `Develop a set of assessment questions to evaluate student understanding of teaching topic ${topic} of subject ${subject} duration ${duration} minutes and for grade ${grade}. Include a variety of question types, such as multiple-choice, short answer, true/false, and open-ended questions. The questions should assess different levels of cognitive skills, including recall, comprehension, application, analysis, and evaluation. Provide a detailed answer key for each question, including explanations for the correct answers and common misconceptions. Ensure the assessment questions are aligned with the learning objectives of the lesson and provide meaningful feedback on student learning`
// }

// export const homeworks = ({subject, grade, duration, topic} : LessonPlanTypes) => {
//     return `Create a relevant and engaging home assignment for students to reinforce their learning on teaching topic ${topic} of subject ${subject} duration ${duration} minutes and for grade ${grade}. The assignment should be designed to be completed independently and should provide opportunities for students to apply their knowledge and skills in a meaningful way. Provide clear instructions, expectations, and a rubric for grading. The assignment should be challenging but achievable and should promote critical thinking, problem-solving, and creativity.`
// }

// export const suggestedReading = ({subject, grade, duration, topic} : LessonPlanTypes) => {
//     return `Compile a list of suggested readings related to teaching topic ${topic} of subject ${subject} duration ${duration} minutes and for grade ${grade}. Include a variety of sources, such as books, articles, websites, and online resources. For each reading, provide a brief description of its content, its relevance to the lesson topic, and its level of difficulty. Consider readings that offer different perspectives on the topic and cater to diverse reading interests. Encourage students to explore these resources to deepen their understanding and expand their knowledge.`
// }

// export const studentTeachingReflections = ({subject, grade, duration, topic} : LessonPlanTypes) => {
//     return `Develop a set of reflection questions for both students and teachers to evaluate the effectiveness on teaching topic ${topic} of subject ${subject} duration ${duration} minutes and for grade ${grade}.. For students, the questions should focus on their learning experience, their level of engagement, and their understanding of the key concepts. For teachers, the questions should focus on the effectiveness of their instructional strategies, the alignment of the lesson with the learning objectives, and areas for improvement. The reflection should be used to inform future instruction and promote continuous improvement in teaching and learning`
// }

