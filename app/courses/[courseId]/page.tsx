import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { BookOpen, CheckCircle, Clock, Download, Lock, PlayCircle, Star, Users } from "lucide-react"

export default function CourseOverview({ params }: { params: { courseId: string } }) {
  // For demo purposes, we'll assume this is a free course
  const course = {
    id: params.courseId,
    title: "Mathematics Fundamentals",
    description:
      "Master essential math concepts for grades 6-8 with our comprehensive course designed to build a strong foundation in mathematics.",
    instructor: "Dr. Sarah Johnson",
    instructorRole: "Mathematics Professor",
    rating: 4.2,
    students: 1245,
    progress: 15,
    isFree: true,
    sections: [
      {
        id: "section-1",
        title: "Getting Started with Numbers",
        chapters: [
          {
            id: "chapter-1-1",
            title: "Introduction to the Course",
            duration: "10:25",
            type: "video",
            isCompleted: true,
          },
          { id: "chapter-1-2", title: "Number Systems Overview", duration: "15:40", type: "video", isCompleted: true },
          { id: "chapter-1-3", title: "Working with Integers", duration: "12:15", type: "video", isCompleted: false },
          {
            id: "chapter-1-4",
            title: "Practice Quiz: Numbers",
            duration: "20 questions",
            type: "quiz",
            isCompleted: false,
          },
        ],
      },
      {
        id: "section-2",
        title: "Fractions and Decimals",
        chapters: [
          { id: "chapter-2-1", title: "Understanding Fractions", duration: "14:30", type: "video", isCompleted: false },
          {
            id: "chapter-2-2",
            title: "Converting Between Fractions and Decimals",
            duration: "11:45",
            type: "video",
            isCompleted: false,
          },
          {
            id: "chapter-2-3",
            title: "Operations with Fractions",
            duration: "18:20",
            type: "video",
            isCompleted: false,
          },
          {
            id: "chapter-2-4",
            title: "Practice Quiz: Fractions",
            duration: "15 questions",
            type: "quiz",
            isCompleted: false,
          },
        ],
      },
      {
        id: "section-3",
        title: "Introduction to Algebra",
        chapters: [
          {
            id: "chapter-3-1",
            title: "Variables and Expressions",
            duration: "16:10",
            type: "video",
            isCompleted: false,
          },
          {
            id: "chapter-3-2",
            title: "Solving Simple Equations",
            duration: "20:05",
            type: "video",
            isCompleted: false,
          },
          { id: "chapter-3-3", title: "Word Problems", duration: "22:30", type: "video", isCompleted: false },
          { id: "chapter-3-4", title: "Final Assessment", duration: "30 questions", type: "quiz", isCompleted: false },
        ],
      },
    ],
  }

  // Related premium courses for recommendations
  const relatedCourses = [
    {
      id: "advanced-algebra",
      title: "Advanced Algebra Masterclass",
      description: "Take your algebra skills to the next level with our comprehensive masterclass",
      instructor: "Prof. Michael Chen",
      rating: 4.9,
      isFree: false,
    },
    {
      id: "geometry-essentials",
      title: "Geometry Essentials",
      description: "Master geometric concepts with interactive exercises and 3D visualizations",
      instructor: "Dr. Emily Rodriguez",
      rating: 4.8,
      isFree: false,
    },
  ]

  return (
    <div className="container mx-auto py-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div>
            <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
              ← Back to Courses
            </Link>
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2">
                <Badge variant="secondary">Free Course</Badge>
                <div className="flex items-center text-amber-500">
                  <Star size={16} fill="currentColor" />
                  <span className="ml-1 text-sm">{course.rating}</span>
                </div>
                <div className="flex items-center text-muted-foreground text-sm">
                  <Users size={16} className="mr-1" />
                  {course.students} students
                </div>
              </div>
              <h1 className="text-3xl font-bold">{course.title}</h1>
              <p className="text-muted-foreground">{course.description}</p>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center gap-2">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden bg-muted">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt={course.instructor}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{course.instructor}</p>
                    <p className="text-xs text-muted-foreground">{course.instructorRole}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Your Progress</h2>
            <Progress value={course.progress} className="h-2" />
            <p className="text-sm text-muted-foreground">{course.progress}% complete</p>
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Course Content</h2>
            {course.sections.map((section, sectionIndex) => (
              <div key={section.id} className="space-y-2">
                <h3 className="font-medium">
                  Section {sectionIndex + 1}: {section.title}
                </h3>
                <Card>
                  <CardContent className="p-0">
                    <ul className="divide-y">
                      {section.chapters.map((chapter) => (
                        <li key={chapter.id} className="p-4 hover:bg-muted/50 transition-colors">
                          <Link
                            href={`/courses/${course.id}/chapters/${chapter.id}`}
                            className="flex items-center justify-between"
                          >
                            <div className="flex items-center gap-3">
                              {chapter.isCompleted ? (
                                <CheckCircle size={20} className="text-green-500" />
                              ) : chapter.type === "video" ? (
                                <PlayCircle size={20} className="text-primary" />
                              ) : (
                                <BookOpen size={20} className="text-primary" />
                              )}
                              <div>
                                <p className="font-medium">{chapter.title}</p>
                                <div className="flex items-center text-xs text-muted-foreground">
                                  {chapter.type === "video" ? (
                                    <>
                                      <Clock size={14} className="mr-1" />
                                      {chapter.duration}
                                    </>
                                  ) : (
                                    <>
                                      <BookOpen size={14} className="mr-1" />
                                      {chapter.duration}
                                    </>
                                  )}
                                </div>
                              </div>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Premium content teaser after each section */}
                {sectionIndex === 1 && (
                  <Card className="border-2 border-primary/20 bg-primary/5">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                          <Lock size={24} className="text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium">Premium Content Available</h4>
                          <p className="text-sm text-muted-foreground">
                            Unlock 15+ additional practice exercises and step-by-step solutions for fractions and
                            decimals.
                          </p>
                        </div>
                        <Button>Upgrade</Button>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {/* Sticky sidebar with premium course advertisement */}
          <div className="lg:sticky lg:top-6">
            <Card className="border-2 border-primary">
              <CardHeader className="bg-primary text-primary-foreground">
                <CardTitle>Upgrade to Premium</CardTitle>
                <CardDescription className="text-primary-foreground/80">
                  Get the complete learning experience
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 pt-6">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle size={18} className="text-primary" />
                    <span>Downloadable practice worksheets</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={18} className="text-primary" />
                    <span>Step-by-step solutions to all problems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={18} className="text-primary" />
                    <span>1-on-1 Q&A with instructors</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={18} className="text-primary" />
                    <span>Ad-free learning experience</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={18} className="text-primary" />
                    <span>Course completion certificate</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="flex-col gap-4">
                <Button className="w-full" size="lg">
                  Upgrade Now
                </Button>
                <p className="text-xs text-center text-muted-foreground">30-day money-back guarantee</p>
              </CardFooter>
            </Card>

            {/* Related premium courses */}
            <div className="mt-6">
              <h3 className="font-medium mb-4">Recommended Premium Courses</h3>
              <div className="space-y-4">
                {relatedCourses.map((course) => (
                  <Card key={course.id} className="overflow-hidden">
                    <div className="h-3 bg-primary" />
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">{course.title}</CardTitle>
                      <div className="flex items-center text-amber-500">
                        <Star size={14} fill="currentColor" />
                        <span className="ml-1 text-xs">{course.rating}</span>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <p className="text-sm text-muted-foreground">{course.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full text-sm">
                        Learn More
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>

            {/* Downloadable resources teaser */}
            <Card className="mt-6 border-dashed">
              <CardHeader>
                <CardTitle className="text-base">Premium Resources</CardTitle>
                <CardDescription>Available with premium subscription</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Download size={16} />
                    <span>Complete formula sheet</span>
                    <Lock size={14} className="ml-auto" />
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Download size={16} />
                    <span>Practice problem set</span>
                    <Lock size={14} className="ml-auto" />
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Download size={16} />
                    <span>Interactive worksheets</span>
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

