"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Award, Users, Trophy, Calendar, Bell, Clock, School } from "lucide-react"

export default function PartnerStudentDashboard() {
  const [notifications, setNotifications] = useState(3)

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
            <Link href="/dashboard/partner-student" className="text-sm font-medium text-primary">
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
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
              <div className="hidden md:block">
                <p className="text-sm font-medium">Jessica Smith</p>
                <p className="text-xs text-muted-foreground">Lincoln High School</p>
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
                <h1 className="text-2xl font-bold">Welcome back, Jessica!</h1>
                <p className="max-w-md">
                  You have <strong>3 upcoming deadlines</strong> and <strong>2 new challenge rounds</strong> this week.
                </p>
              </div>
              <div className="flex items-center gap-2 bg-primary-foreground/10 p-3 rounded-lg">
                <School className="h-5 w-5" />
                <div>
                  <p className="text-sm font-medium">Lincoln High School</p>
                  <p className="text-xs">Partner School Program</p>
                </div>
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
                    {studentCourses.map((course) => (
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
                            <Badge variant="outline">{course.progress}%</Badge>
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
                    {studentChallenges.map((challenge) => (
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

              {/* School Announcements */}
              <Card>
                <CardHeader>
                  <CardTitle>School Announcements</CardTitle>
                  <CardDescription>Updates from Lincoln High School</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {schoolAnnouncements.map((announcement, index) => (
                      <div key={index} className="border-b pb-4 last:border-0 last:pb-0">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="font-medium">{announcement.title}</h4>
                          <span className="text-xs text-muted-foreground">{announcement.date}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{announcement.content}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
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
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                    <div className="text-center">
                      <h3 className="font-medium">Jessica Smith</h3>
                      <p className="text-sm text-muted-foreground">Grade 10 • Lincoln High School</p>
                    </div>
                    <div className="grid grid-cols-3 gap-4 w-full text-center">
                      <div className="space-y-1">
                        <p className="text-2xl font-bold">8</p>
                        <p className="text-xs text-muted-foreground">Courses</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-2xl font-bold">4</p>
                        <p className="text-xs text-muted-foreground">Challenges</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-2xl font-bold">12</p>
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
                    {upcomingDeadlines.map((deadline, index) => (
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
                    {recentAchievements.map((achievement, index) => (
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

              {/* Recommended Courses */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Recommended For You</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recommendedCourses.map((course, index) => (
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
const studentCourses = [
  {
    id: "math-fundamentals",
    title: "Mathematics Fundamentals",
    image: "/placeholder.svg?height=64&width=64",
    progress: 75,
    lastAccessed: "Today",
  },
  {
    id: "science-intro",
    title: "Introduction to Science",
    image: "/placeholder.svg?height=64&width=64",
    progress: 45,
    lastAccessed: "Yesterday",
  },
  {
    id: "english-grammar",
    title: "English Grammar Essentials",
    image: "/placeholder.svg?height=64&width=64",
    progress: 90,
    lastAccessed: "3 days ago",
  },
]

const studentChallenges = [
  {
    id: "math-olympiad-2023",
    title: "National Mathematics Olympiad 2023",
    currentRound: 2,
    totalRounds: 3,
    deadline: "Oct 25, 2023",
    status: "Submission Open",
    rank: "156",
    participants: "10,000+",
  },
  {
    id: "science-fair-2023",
    title: "National Science Fair 2023",
    currentRound: 1,
    totalRounds: 3,
    deadline: "Nov 15, 2023",
    status: "In Progress",
    rank: "89",
    participants: "5,000+",
  },
]

const schoolAnnouncements = [
  {
    title: "Math Department Competition",
    date: "Oct 10, 2023",
    content:
      "Lincoln High School will be hosting an internal math competition next week. All students are encouraged to participate.",
  },
  {
    title: "Science Lab Equipment Update",
    date: "Oct 5, 2023",
    content:
      "New lab equipment has been installed in the science department. Training sessions will be held this Friday.",
  },
  {
    title: "ABC Learning Partnership Extension",
    date: "Sep 28, 2023",
    content:
      "Our school's partnership with ABC Learning has been extended for another year, providing premium access to all students.",
  },
]

const upcomingDeadlines = [
  {
    title: "Math Olympiad Round 2 Submission",
    date: "Oct 25, 2023",
    daysLeft: 2,
  },
  {
    title: "Science Project Draft",
    date: "Oct 30, 2023",
    daysLeft: 7,
  },
  {
    title: "English Essay Submission",
    date: "Nov 5, 2023",
    daysLeft: 13,
  },
  {
    title: "Coding Challenge Registration",
    date: "Oct 23, 2023",
    daysLeft: 0,
  },
]

const recentAchievements = [
  {
    title: "Course Completion",
    description: "Completed 'Algebra Basics' with a score of 95%",
  },
  {
    title: "Challenge Milestone",
    description: "Advanced to Round 2 in the National Math Olympiad",
  },
  {
    title: "Learning Streak",
    description: "Maintained a 30-day learning streak",
  },
]

const recommendedCourses = [
  {
    title: "Advanced Algebra",
    image: "/placeholder.svg?height=40&width=40",
    students: "2,156",
  },
  {
    title: "Physics Fundamentals",
    image: "/placeholder.svg?height=40&width=40",
    students: "1,879",
  },
  {
    title: "Creative Writing",
    image: "/placeholder.svg?height=40&width=40",
    students: "3,421",
  },
]

