import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ChevronLeft, ChevronRight, Download, Lock, PlayCircle, ThumbsUp } from "lucide-react"

export default function ChapterPage({
  params,
}: {
  params: { courseId: string; chapterId: string }
}) {
  // For demo purposes, we'll assume this is a video chapter in a free course
  const chapter = {
    id: params.chapterId,
    title: "Working with Integers",
    description: "Learn how to perform operations with positive and negative integers.",
    type: "video",
    videoUrl: "#", // In a real app, this would be the actual video URL
    duration: "12:15",
    nextChapterId: "chapter-1-4",
    prevChapterId: "chapter-1-2",
    courseId: params.courseId,
    isFree: true,
  }

  // Premium course recommendations
  const premiumRecommendations = [
    {
      id: "advanced-algebra",
      title: "Advanced Algebra Masterclass",
      description: "Take your algebra skills to the next level with our comprehensive masterclass",
      features: ["In-depth video lessons", "Interactive exercises", "Personal feedback"],
    },
    {
      id: "math-problem-solving",
      title: "Math Problem Solving Techniques",
      description: "Learn powerful strategies to solve complex math problems efficiently",
      features: ["Step-by-step solutions", "Practice worksheets", "Challenge problems"],
    },
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
          <div className="space-y-4">
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <PlayCircle size={80} className="text-white opacity-80" />
              </div>
              <Image
                src="/placeholder.svg?height=720&width=1280"
                alt="Video thumbnail"
                width={1280}
                height={720}
                className="object-cover"
              />
            </div>

            <div>
              <h1 className="text-2xl font-bold">{chapter.title}</h1>
              <p className="text-muted-foreground mt-2">{chapter.description}</p>
            </div>

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

            <Separator />

            {/* Notes section with premium upsell */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Chapter Notes</h2>
              <div className="prose prose-sm max-w-none">
                <p>In this chapter, we cover the following key concepts:</p>
                <ul>
                  <li>Understanding positive and negative integers</li>
                  <li>Addition and subtraction with integers</li>
                  <li>Multiplication and division with integers</li>
                </ul>
                <p>Remember that when multiplying or dividing two integers:</p>
                <ul>
                  <li>Positive × Positive = Positive</li>
                  <li>Negative × Negative = Positive</li>
                  <li>Positive × Negative = Negative</li>
                </ul>
              </div>

              {/* Premium content teaser */}
              <Card className="border-2 border-primary/20 bg-primary/5">
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Lock size={24} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">Premium Notes Available</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Unlock comprehensive notes with detailed explanations, examples, and practice problems.
                      </p>
                      <ul className="text-sm space-y-1 mb-4">
                        <li className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-primary"></div>
                          <span>Step-by-step solutions to complex problems</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-primary"></div>
                          <span>Downloadable worksheets with answer keys</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-primary"></div>
                          <span>Visual aids and interactive examples</span>
                        </li>
                      </ul>
                      <Button size="sm">Upgrade to Premium</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Related chapters section */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">You Might Also Like</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Number Systems Overview</CardTitle>
                    <CardDescription>Previous chapter in this course</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/courses/${chapter.courseId}/chapters/chapter-1-2`}>Review Chapter</Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Practice Quiz: Numbers</CardTitle>
                    <CardDescription>Next chapter in this course</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/courses/${chapter.courseId}/chapters/chapter-1-4`}>Continue Learning</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>

            {/* User engagement section */}
            <div className="pt-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <ThumbsUp size={16} className="mr-1" /> Helpful
                  </Button>
                  <span className="text-sm text-muted-foreground">Was this lesson helpful?</span>
                </div>
                <Button variant="ghost" size="sm">
                  Report an issue
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Sticky sidebar with premium course advertisements */}
          <div className="lg:sticky lg:top-6 space-y-6">
            {/* Premium course banner */}
            <Card className="border-2 border-primary overflow-hidden">
              <div className="h-3 bg-primary" />
              <CardHeader>
                <CardTitle>Ready to Master Mathematics?</CardTitle>
                <CardDescription>Our premium courses offer comprehensive learning experiences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {premiumRecommendations.map((course) => (
                  <div key={course.id} className="space-y-2">
                    <h4 className="font-medium">{course.title}</h4>
                    <p className="text-sm text-muted-foreground">{course.description}</p>
                    <ul className="text-sm space-y-1">
                      {course.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-primary"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <Link href={`/courses/${course.id}`}>View Course</Link>
                    </Button>
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <Button className="w-full">Explore All Premium Courses</Button>
              </CardFooter>
            </Card>

            {/* Downloadable resources teaser */}
            <Card className="border-dashed">
              <CardHeader>
                <CardTitle className="text-base">Premium Resources</CardTitle>
                <CardDescription>Available with premium subscription</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Download size={16} />
                    <span>Integer operations cheat sheet</span>
                    <Lock size={14} className="ml-auto" />
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Download size={16} />
                    <span>Practice worksheet with solutions</span>
                    <Lock size={14} className="ml-auto" />
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Download size={16} />
                    <span>Visual number line guide</span>
                    <Lock size={14} className="ml-auto" />
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full text-primary">
                  Unlock Resources
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

