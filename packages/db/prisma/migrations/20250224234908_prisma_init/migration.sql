-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "schoolName" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("email")
);

-- CreateTable
CREATE TABLE "LessonPlan" (
    "id" SERIAL NOT NULL,
    "userEmail" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "topic" TEXT NOT NULL,
    "lessonPlanTitle" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LessonPlan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LessonPlanData" (
    "id" SERIAL NOT NULL,
    "conceptMap" TEXT NOT NULL,
    "mappingTable" TEXT NOT NULL,
    "instructionStrategies" TEXT NOT NULL,
    "teachingLearningResources" TEXT NOT NULL,
    "introduction" TEXT NOT NULL,
    "essentialQuestions" TEXT NOT NULL,
    "presentationTable" TEXT NOT NULL,
    "summarization" TEXT NOT NULL,
    "assessmentQuestions" TEXT NOT NULL,
    "homeworks" TEXT NOT NULL,
    "suggestedReading" TEXT NOT NULL,
    "studentTeachingReflections" TEXT NOT NULL,
    "lessonPlanId" INTEGER NOT NULL,

    CONSTRAINT "LessonPlanData_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "LessonPlanData_lessonPlanId_key" ON "LessonPlanData"("lessonPlanId");

-- AddForeignKey
ALTER TABLE "LessonPlan" ADD CONSTRAINT "LessonPlan_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LessonPlanData" ADD CONSTRAINT "LessonPlanData_lessonPlanId_fkey" FOREIGN KEY ("lessonPlanId") REFERENCES "LessonPlan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
