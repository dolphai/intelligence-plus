"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Award, Users, Trophy, Calendar, Bell, Clock, BarChart, BookMarked, School, Lock } from "lucide-react"

export default function OtherStudentDashboard() {
  const [notifications, setNotifications] = useState(2)

  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Trophy className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">ABC Learning</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/dashboard/other-student" className="text-sm font-medium text-primary">
              Dashboard
            </Link>
            <Link href="/courses" className="text-sm font-medium hover:text-primary">
              Courses
            </Link>
            <Link href="/challenges" className="text-sm font-medium hover:text-primary">
              Challenges
            </Link>
            <Link href="/resources" className="text-sm font-medium hover:text-primary">
              Resources
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              {notifications > 0 && (
                <span className="absolute top-0 right-0 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                  {notifications}
                </span>
              )}
            </Button>
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                <AvatarFallback>AR</AvatarFallback>
              </Avatar>
              <div className="hidden md:block">
                <p className="text-sm font-medium">Alex Rodriguez</p>
                <p className="text-xs text-muted-foreground">Westside High School</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="container py-6">
          {/* Welcome Banner */}
          <div className="relative overflow-hidden rounded-lg bg-primary p-6 text-primary-foreground shadow-lg mb-6">
            <div className="flex flex-col md:flex-row items-start justify-between gap-4">
              <div className="space-y-2">
                <h1 className="text-2xl font-bold">Welcome back, Alex!</h1>
                <p className="max-w-md">
                  You have <strong>2 upcoming deadlines</strong> and <strong>1 new challenge round</strong> this week.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 bg-primary-foreground/10 p-3 rounded-lg">
                  <School className="h-5 w-5" />
                  <div>
                    <p className="text-sm font-medium">Westside High School</p>
                    <p className="text-xs">Individual Student</p>
                  </div>
                </div>
                <Button size="sm" variant="secondary">
                  Upgrade to Premium
                </Button>
              </div>
            </div>
            <div className="absolute -right-12 -bottom-12 opacity-10">
              <Award size={180} />
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-6">
              {/* My Courses */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <div className="space-y-1">
                    <CardTitle>My Courses</CardTitle>
                    <CardDescription>Continue where you left off</CardDescription>
                  </div>
                  <Link href="/courses">
                    <Button variant="ghost" size="sm">
                      View All
                    </Button>
                  </Link>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {otherStudentCourses.map((course) => (
                      <div key={course.id} className="flex items-center space-x-4">
                        <div className="relative h-16 w-16 overflow-hidden rounded-md">
                          <Image
                            src={course.image || "/placeholder.svg"}
                            alt={course.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium">{course.title}</h3>
                            <div className="flex items-center gap-2">
                              {course.isPremium && (
                                <Badge variant="outline" className="text-primary border-primary">
                                  Premium
                                </Badge>
                              )}
                              <Badge variant="outline">{course.progress}%</Badge>
                            </div>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Clock className="mr-1 h-3 w-3" />
                            <span>Last accessed: {course.lastAccessed}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Resume Learning
                  </Button>
                </CardFooter>
              </Card>

              {/* Active Challenges */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <div className="space-y-1">
                    <CardTitle>Active Challenges</CardTitle>
                    <CardDescription>National competitions you're participating in</CardDescription>
                  </div>
                  <Link href="/challenges">
                    <Button variant="ghost" size="sm">
                      View All
                    </Button>
                  </Link>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {otherStudentChallenges.map((challenge) => (
                      <Card key={challenge.id} className="overflow-hidden">
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <Badge variant="default" className="bg-orange-500 hover:bg-orange-600">
                              Round {challenge.currentRound} of {challenge.totalRounds}
                            </Badge>
                            <div className="flex items-center gap-2">
                              <Calendar size={14} />
                              <span className="text-xs text-muted-foreground">{challenge.deadline}</span>
                            </div>
                          </div>
                          <CardTitle className="text-base mt-2">{challenge.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span className="font-medium">Status:</span>
                              <Badge variant="outline" className="text-green-500 border-green-500">
                                {challenge.status}
                              </Badge>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                              <span className="font-medium">Your Rank:</span>
                              <span>
                                {challenge.rank} of {challenge.participants}
                              </span>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button className="w-full" size="sm">
                            {challenge.status === "Submission Open" ? "Submit Entry" : "View Details"}
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Premium Features Teaser */}
              <Card className="border-2 border-primary/20 bg-primary/5">
                <CardHeader>
                  <CardTitle>Unlock Premium Features</CardTitle>
                  <CardDescription>Enhance your learning experience with premium features</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start space-x-3">
                      <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <BookMarked className="h-4 w-4" />
                      </div>
                      <div className="space-y-1">
                        <p className="font-medium text-sm">Advanced Course Materials</p>
                        <p className="text-xs text-muted-foreground">
                          Access comprehensive study materials and practice problems
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Users className="h-4 w-4" />
                      </div>
                      <div className="space-y-1">
                        <p className="font-medium text-sm">1-on-1 Tutoring</p>
                        <p className="text-xs text-muted-foreground">Get personalized help from expert tutors</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <BarChart className="h-4 w-4" />
                      </div>
                      <div className="space-y-1">
                        <p className="font-medium text-sm">Performance Analytics</p>
                        <p className="text-xs text-muted-foreground">Track your progress with detailed analytics</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Award className="h-4 w-4" />
                      </div>
                      <div className="space-y-1">
                        <p className="font-medium text-sm">Challenge Preparation</p>
                        <p className="text-xs text-muted-foreground">Special training for national competitions</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Upgrade to Premium</Button>
                </CardFooter>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Profile Card */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>My Profile</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center space-y-4">
                    <Avatar className="h-20 w-20">
                      <AvatarImage src="/placeholder.svg?height=80&width=80" alt="User" />
                      <AvatarFallback>AR</AvatarFallback>
                    </Avatar>
                    <div className="text-center">
                      <h3 className="font-medium">Alex Rodriguez</h3>
                      <p className="text-sm text-muted-foreground">Grade 11 • Westside High School</p>
                    </div>
                    <div className="grid grid-cols-3 gap-4 w-full text-center">
                      <div className="space-y-1">
                        <p className="text-2xl font-bold">5</p>
                        <p className="text-xs text-muted-foreground">Courses</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-2xl font-bold">2</p>
                        <p className="text-xs text-muted-foreground">Challenges</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-2xl font-bold">8</p>
                        <p className="text-xs text-muted-foreground">Badges</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Edit Profile
                  </Button>
                </CardFooter>
              </Card>

              {/* Upcoming Deadlines */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Upcoming Deadlines</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {otherUpcomingDeadlines.map((deadline, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div
                          className={`mt-0.5 flex h-6 w-6 items-center justify-center rounded-full ${deadline.daysLeft <= 2 ? "bg-red-100 text-red-600" : "bg-muted text-muted-foreground"}`}
                        >
                          <Clock className="h-4 w-4" />
                        </div>
                        <div className="space-y-1">
                          <p className="font-medium text-sm">{deadline.title}</p>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Calendar className="mr-1 h-3 w-3" />
                            <span>{deadline.date}</span>
                            {deadline.daysLeft <= 2 && (
                              <Badge variant="outline" className="ml-2 text-red-600 border-red-600 text-[10px]">
                                {deadline.daysLeft === 0 ? "Due Today" : `${deadline.daysLeft} days left`}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Achievements */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Recent Achievements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {otherRecentAchievements.map((achievement, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Trophy className="h-4 w-4" />
                        </div>
                        <div className="space-y-1">
                          <p className="font-medium text-sm">{achievement.title}</p>
                          <p className="text-xs text-muted-foreground">{achievement.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full">
                    View All Achievements
                  </Button>
                </CardFooter>
              </Card>

              {/* Premium Courses Teaser */}
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <CardTitle>Premium Courses</CardTitle>
                    <Lock className="h-4 w-4 text-primary" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {premiumCourses.map((course, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="relative h-10 w-10 overflow-hidden rounded-md">
                          <Image
                            src={course.image || "/placeholder.svg"}
                            alt={course.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="space-y-1">
                          <p className="font-medium text-sm">{course.title}</p>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Users className="mr-1 h-3 w-3" />
                            <span>{course.students} students</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Upgrade to Access
                  </Button>
                </CardFooter>
              </Card>

              {/* Recommended Free Courses */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Recommended Free Courses</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recommendedFreeCourses.map((course, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="relative h-10 w-10 overflow-hidden rounded-md">
                          <Image
                            src={course.image || "/placeholder.svg"}
                            alt={course.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="space-y-1">
                          <p className="font-medium text-sm">{course.title}</p>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Users className="mr-1 h-3 w-3" />
                            <span>{course.students} students</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full">
                    Browse More Courses
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

// Sample data
const otherStudentCourses = [
  {
    id: "math-fundamentals",
    title: "Mathematics Fundamentals",
    image: "/placeholder.svg?height=64&width=64",
    progress: 65,
    lastAccessed: "Today",
    isPremium: false,
  },
  {
    id: "science-intro",
    title: "Introduction to Science",
    image: "/placeholder.svg?height=64&width=64",
    progress: 30,
    lastAccessed: "2 days ago",
    isPremium: false,
  },
  {
    id: "advanced-algebra",
    title: "Advanced Algebra Masterclass",
    image: "/placeholder.svg?height=64&width=64",
    progress: 15,
    lastAccessed: "1 week ago",
    isPremium: true,
  },
]

const otherStudentChallenges = [
  {
    id: "math-olympiad-2023",
    title: "National Mathematics Olympiad 2023",
    currentRound: 1,
    totalRounds: 3,
    deadline: "Oct 25, 2023",
    status: "In Progress",
    rank: "1,245",
    participants: "10,000+",
  },
  {
    id: "coding-challenge-2023",
    title: "Coding Challenge 2023",
    currentRound: 1,
    totalRounds: 4,
    deadline: "Nov 10, 2023",
    status: "Submission Open",
    rank: "567",
    participants: "8,000+",
  },
]

const otherUpcomingDeadlines = [
  {
    title: "Math Olympiad Round 1 Submission",
    date: "Oct 25, 2023",
    daysLeft: 2,
  },
  {
    title: "Coding Challenge Submission",
    date: "Nov 10, 2023",
    daysLeft: 18,
  },
  {
    title: "Science Course Quiz",
    date: "Oct 23, 2023",
    daysLeft: 0,
  },
]

const otherRecentAchievements = [
  {
    title: "Course Completion",
    description: "Completed 'Basic Mathematics' with a score of 88%",
  },
  {
    title: "Challenge Entry",
    description: "Successfully registered for National Math Olympiad",
  },
  {
    title: "Learning Milestone",
    description: "Completed 10 lessons in Introduction to Science",
  },
]

const premiumCourses = [
  {
    title: "Advanced Physics",
    image: "/placeholder.svg?height=40&width=40",
    students: "1,756",
  },
  {
    title: "Calculus Masterclass",
    image: "/placeholder.svg?height=40&width=40",
    students: "2,345",
  },
  {
    title: "Chemistry Lab Techniques",
    image: "/placeholder.svg?height=40&width=40",
    students: "1,879",
  },
]

const recommendedFreeCourses = [
  {
    title: "Basic Geometry",
    image: "/placeholder.svg?height=40&width=40",
    students: "3,421",
  },
  {
    title: "English Literature",
    image: "/placeholder.svg?height=40&width=40",
    students: "2,876",
  },
  {
    title: "Introduction to Coding",
    image: "/placeholder.svg?height=40&width=40",
    students: "5,432",
  },
]

