import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { ChevronLeft, ChevronRight, Crown, Lock } from "lucide-react"

export default function QuizPage({
  params,
}: {
  params: { courseId: string; chapterId: string }
}) {
  // For demo purposes, we'll assume this is a quiz chapter in a free course
  const chapter = {
    id: params.chapterId,
    title: "Practice Quiz: Numbers",
    description: "Test your understanding of number systems and integer operations.",
    type: "quiz",
    nextChapterId: "chapter-2-1",
    prevChapterId: "chapter-1-3",
    courseId: params.courseId,
    isFree: true,
  }

  // Sample quiz questions
  const questions = [
    {
      id: "q1",
      question: "What is the result of -5 × -3?",
      options: ["15", "-15", "8", "-8"],
      correctAnswer: "15",
    },
    {
      id: "q2",
      question: "Which of the following is the smallest number?",
      options: ["-10", "0", "-5", "5"],
      correctAnswer: "-10",
    },
    {
      id: "q3",
      question: "What is the result of -8 ÷ 2?",
      options: ["4", "-4", "16", "-16"],
      correctAnswer: "-4",
    },
  ]

  // Premium quiz features
  const premiumFeatures = [
    "Unlimited quiz attempts",
    "Detailed explanations for each answer",
    "Performance tracking and analytics",
    "Additional practice questions",
    "Personalized feedback on your answers",
  ]

  return (
    <div className="container mx-auto py-6">
      <div className="mb-4">
        <Link href={`/courses/${params.courseId}`} className="text-sm text-muted-foreground hover:text-primary">
          ← Back to Course
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h1 className="text-2xl font-bold">{chapter.title}</h1>
            <p className="text-muted-foreground mt-2">{chapter.description}</p>
          </div>

          <div className="space-y-6">
            {questions.map((question, index) => (
              <Card key={question.id}>
                <CardHeader>
                  <CardTitle className="text-base">Question {index + 1}</CardTitle>
                  <CardDescription>{question.question}</CardDescription>
                </CardHeader>
                <CardContent>
                  <RadioGroup>
                    {question.options.map((option, optionIndex) => (
                      <div key={optionIndex} className="flex items-center space-x-2">
                        <RadioGroupItem value={option} id={`q${index + 1}-option-${optionIndex}`} />
                        <Label htmlFor={`q${index + 1}-option-${optionIndex}`}>{option}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </CardContent>
              </Card>
            ))}

            {/* Premium quiz questions teaser */}
            <Card className="border-2 border-primary/20 bg-primary/5">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Lock size={16} className="text-primary" />
                  <CardTitle className="text-base">Premium Questions</CardTitle>
                </div>
                <CardDescription>Unlock 10 additional practice questions with detailed explanations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2 opacity-60">
                  <p className="font-medium text-sm">Question 4</p>
                  <p className="text-sm text-muted-foreground">If a = -3 and b = 4, what is the value of a² - b²?</p>
                  <div className="flex flex-col gap-2 mt-2">
                    <div className="flex items-center space-x-2">
                      <div className="h-4 w-4 rounded-full border"></div>
                      <span className="text-sm">-7</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="h-4 w-4 rounded-full border"></div>
                      <span className="text-sm">-25</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="h-4 w-4 rounded-full border"></div>
                      <span className="text-sm">7</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="h-4 w-4 rounded-full border"></div>
                      <span className="text-sm">25</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <Button>Upgrade to Access</Button>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-between">
              <Button variant="outline" size="sm" disabled={!chapter.prevChapterId} asChild={!!chapter.prevChapterId}>
                {chapter.prevChapterId ? (
                  <Link href={`/courses/${chapter.courseId}/chapters/${chapter.prevChapterId}`}>
                    <ChevronLeft size={16} className="mr-1" /> Previous
                  </Link>
                ) : (
                  <>
                    <ChevronLeft size={16} className="mr-1" /> Previous
                  </>
                )}
              </Button>
              <Button>Submit Answers</Button>
              <Button variant="outline" size="sm" disabled={!chapter.nextChapterId} asChild={!!chapter.nextChapterId}>
                {chapter.nextChapterId ? (
                  <Link href={`/courses/${chapter.courseId}/chapters/${chapter.nextChapterId}`}>
                    Next <ChevronRight size={16} className="ml-1" />
                  </Link>
                ) : (
                  <>
                    Next <ChevronRight size={16} className="ml-1" />
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Sticky sidebar with premium features */}
          <div className="lg:sticky lg:top-6 space-y-6">
            <Card className="border-2 border-primary overflow-hidden">
              <div className="h-3 bg-primary" />
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Crown className="text-primary" size={20} />
                  <CardTitle>Premium Quiz Features</CardTitle>
                </div>
                <CardDescription>Enhance your learning experience with premium features</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {premiumFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-primary"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Upgrade to Premium</Button>
              </CardFooter>
            </Card>

            {/* Quiz statistics teaser */}
            <Card className="border-dashed">
              <CardHeader>
                <CardTitle className="text-base">Your Quiz Statistics</CardTitle>
                <CardDescription>Available with premium subscription</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Average Score:</span>
                  <div className="flex items-center gap-2">
                    <Lock size={14} />
                    <span>Locked</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Quizzes Completed:</span>
                  <div className="flex items-center gap-2">
                    <Lock size={14} />
                    <span>Locked</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Strongest Topic:</span>
                  <div className="flex items-center gap-2">
                    <Lock size={14} />
                    <span>Locked</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Areas to Improve:</span>
                  <div className="flex items-center gap-2">
                    <Lock size={14} />
                    <span>Locked</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full text-primary">
                  Unlock Statistics
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

