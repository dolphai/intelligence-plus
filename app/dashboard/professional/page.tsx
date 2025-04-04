"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Award,
  Users,
  Trophy,
  Calendar,
  CheckCircle,
  Bell,
  Clock,
  BookMarked,
  Briefcase,
  Download,
  FileText,
  Share2,
  Bookmark,
} from "lucide-react";

export default function ProfessionalDashboard() {
  const [notifications, setNotifications] = useState(4);

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
            <Link
              href="/dashboard/professional"
              className="text-sm font-medium text-primary"
            >
              Dashboard
            </Link>
            <Link
              href="/courses"
              className="text-sm font-medium hover:text-primary"
            >
              Courses
            </Link>
            <Link
              href="/challenges"
              className="text-sm font-medium hover:text-primary"
            >
              Challenges
            </Link>
            <Link
              href="/resources"
              className="text-sm font-medium hover:text-primary"
            >
              Resources
            </Link>
            <Link
              href="/network"
              className="text-sm font-medium hover:text-primary"
            >
              Network
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
                <AvatarImage
                  src="/placeholder.svg?height=32&width=32"
                  alt="User"
                />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="hidden md:block">
                <p className="text-sm font-medium">John Doe</p>
                <p className="text-xs text-muted-foreground">
                  Software Engineer
                </p>
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
                <h1 className="text-2xl font-bold">Welcome back, John!</h1>
                <p className="max-w-md">
                  You have <strong>4 upcoming deadlines</strong> and{" "}
                  <strong>2 new challenge rounds</strong> this week.
                </p>
              </div>
              <div className="flex items-center gap-2 bg-primary-foreground/10 p-3 rounded-lg">
                <Briefcase className="h-5 w-5" />
                <div>
                  <p className="text-sm font-medium">Professional Account</p>
                  <p className="text-xs">Premium Subscription</p>
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
              {/* Learning Progress */}
              <Tabs defaultValue="courses">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <div className="space-y-1">
                      <CardTitle>My Learning Progress</CardTitle>
                      <CardDescription>
                        Track your professional development
                      </CardDescription>
                    </div>
                    <TabsList>
                      <TabsTrigger value="courses">Courses</TabsTrigger>
                      <TabsTrigger value="challenges">Challenges</TabsTrigger>
                    </TabsList>
                  </CardHeader>
                  <CardContent>
                    <TabsContent value="courses" className="space-y-4 mt-0">
                      {professionalCourses.map((course) => (
                        <div
                          key={course.id}
                          className="flex items-center space-x-4"
                        >
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
                              <Badge variant="outline">
                                {course.progress}%
                              </Badge>
                            </div>
                            <Progress value={course.progress} className="h-2" />
                            <div className="flex items-center justify-between text-xs text-muted-foreground">
                              <div className="flex items-center">
                                <Clock className="mr-1 h-3 w-3" />
                                <span>
                                  Last accessed: {course.lastAccessed}
                                </span>
                              </div>
                              <div className="flex items-center">
                                <CheckCircle className="mr-1 h-3 w-3" />
                                <span>
                                  {course.completedModules} of{" "}
                                  {course.totalModules} modules
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                      <Button variant="outline" className="w-full">
                        View All Courses
                      </Button>
                    </TabsContent>
                    <TabsContent value="challenges" className="space-y-4 mt-0">
                      {professionalChallenges.map((challenge) => (
                        <Card key={challenge.id} className="overflow-hidden">
                          <CardHeader className="pb-2">
                            <div className="flex justify-between items-start">
                              <Badge
                                variant="default"
                                className="bg-orange-500 hover:bg-orange-600"
                              >
                                Round {challenge.currentRound} of{" "}
                                {challenge.totalRounds}
                              </Badge>
                              <div className="flex items-center gap-2">
                                <Calendar size={14} />
                                <span className="text-xs text-muted-foreground">
                                  {challenge.deadline}
                                </span>
                              </div>
                            </div>
                            <CardTitle className="text-base mt-2">
                              {challenge.title}
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="pb-2">
                            <div className="space-y-2">
                              <div className="flex items-center justify-between text-sm">
                                <span className="font-medium">Status:</span>
                                <Badge
                                  variant="outline"
                                  className="text-green-500 border-green-500"
                                >
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
                              {challenge.status === "Submission Open"
                                ? "Submit Entry"
                                : "View Details"}
                            </Button>
                          </CardFooter>
                        </Card>
                      ))}
                      <Button variant="outline" className="w-full">
                        View All Challenges
                      </Button>
                    </TabsContent>
                  </CardContent>
                </Card>

                {/* Skill Development */}
                <Card>
                  <CardHeader>
                    <CardTitle>Skill Development</CardTitle>
                    <CardDescription>
                      Track your professional skills progress
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {professionalSkills.map((skill) => (
                        <div key={skill.name} className="space-y-1">
                          <div className="flex items-center justify-between">
                            <h3 className="text-sm font-medium">
                              {skill.name}
                            </h3>
                            <span className="text-sm text-muted-foreground">
                              {skill.level}/10
                            </span>
                          </div>
                          <Progress value={skill.level * 10} className="h-2" />
                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <span>{skill.courses} courses completed</span>
                            <span>{skill.nextMilestone}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      View Detailed Skills Report
                    </Button>
                  </CardFooter>
                </Card>

                {/* Career Resources */}
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <div className="space-y-1">
                      <CardTitle>Career Resources</CardTitle>
                      <CardDescription>
                        Professional development materials
                      </CardDescription>
                    </div>
                    <Link href="/resources">
                      <Button variant="ghost" size="sm">
                        View All
                      </Button>
                    </Link>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {careerResources.map((resource, index) => (
                        <Card key={index} className="overflow-hidden">
                          <CardHeader className="pb-2">
                            <div className="flex items-center gap-2">
                              {resource.type === "document" && (
                                <FileText className="h-4 w-4 text-primary" />
                              )}
                              {resource.type === "video" && (
                                <BookMarked className="h-4 w-4 text-primary" />
                              )}
                              {resource.type === "template" && (
                                <Download className="h-4 w-4 text-primary" />
                              )}
                              <CardTitle className="text-base">
                                {resource.title}
                              </CardTitle>
                            </div>
                          </CardHeader>
                          <CardContent className="pb-2">
                            <p className="text-sm text-muted-foreground">
                              {resource.description}
                            </p>
                          </CardContent>
                          <CardFooter className="flex justify-between">
                            <Button variant="ghost" size="sm" className="gap-1">
                              <Bookmark className="h-4 w-4" /> Save
                            </Button>
                            <Button variant="ghost" size="sm" className="gap-1">
                              <Share2 className="h-4 w-4" /> Share
                            </Button>
                            <Button size="sm">
                              {resource.type === "document"
                                ? "Read"
                                : resource.type === "video"
                                  ? "Watch"
                                  : "Download"}
                            </Button>
                          </CardFooter>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Tabs>
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
                      <AvatarImage
                        src="/placeholder.svg?height=80&width=80"
                        alt="User"
                      />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="text-center">
                      <h3 className="font-medium">John Doe</h3>
                      <p className="text-sm text-muted-foreground">
                        Software Engineer • Premium Member
                      </p>
                    </div>
                    <div className="grid grid-cols-3 gap-4 w-full text-center">
                      <div className="space-y-1">
                        <p className="text-2xl font-bold">12</p>
                        <p className="text-xs text-muted-foreground">Courses</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-2xl font-bold">5</p>
                        <p className="text-xs text-muted-foreground">
                          Challenges
                        </p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-2xl font-bold">18</p>
                        <p className="text-xs text-muted-foreground">
                          Certificates
                        </p>
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
                    {professionalDeadlines.map((deadline, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div
                          className={`mt-0.5 flex h-6 w-6 items-center justify-center rounded-full ${deadline.daysLeft <= 2 ? "bg-red-100 text-red-600" : "bg-muted text-muted-foreground"}`}
                        >
                          <Clock className="h-4 w-4" />
                        </div>
                        <div className="space-y-1">
                          <p className="font-medium text-sm">
                            {deadline.title}
                          </p>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Calendar className="mr-1 h-3 w-3" />
                            <span>{deadline.date}</span>
                            {deadline.daysLeft <= 2 && (
                              <Badge
                                variant="outline"
                                className="ml-2 text-red-600 border-red-600 text-[10px]"
                              >
                                {deadline.daysLeft === 0
                                  ? "Due Today"
                                  : `${deadline.daysLeft} days left`}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Certifications */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Recent Certifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {professionalCertifications.map((certification, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Award className="h-4 w-4" />
                        </div>
                        <div className="space-y-1">
                          <p className="font-medium text-sm">
                            {certification.title}
                          </p>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Calendar className="mr-1 h-3 w-3" />
                            <span>Issued: {certification.issueDate}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full">
                    View All Certifications
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
                    {professionalRecommendedCourses.map((course, index) => (
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
                            <span>{course.students} professionals</span>
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

              {/* Network Activity */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Network Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {networkActivity.map((activity, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage
                            src={activity.userAvatar}
                            alt={activity.userName}
                          />
                          <AvatarFallback>
                            {activity.userInitials}
                          </AvatarFallback>
                        </Avatar>
                        <div className="space-y-1">
                          <p className="text-sm">
                            <span className="font-medium">
                              {activity.userName}
                            </span>
                            <span className="text-muted-foreground">
                              {" "}
                              {activity.action}
                            </span>
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {activity.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full">
                    View Network
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// Sample data
const professionalCourses = [
  {
    id: "data-science",
    title: "Data Science for Professionals",
    image: "/placeholder.svg?height=64&width=64",
    progress: 85,
    lastAccessed: "Today",
    completedModules: 8,
    totalModules: 10,
  },
  {
    id: "machine-learning",
    title: "Machine Learning Fundamentals",
    image: "/placeholder.svg?height=64&width=64",
    progress: 60,
    lastAccessed: "Yesterday",
    completedModules: 6,
    totalModules: 12,
  },
  {
    id: "cloud-computing",
    title: "Cloud Computing Essentials",
    image: "/placeholder.svg?height=64&width=64",
    progress: 40,
    lastAccessed: "3 days ago",
    completedModules: 4,
    totalModules: 8,
  },
];

const professionalChallenges = [
  {
    id: "coding-challenge-2023",
    title: "Professional Coding Challenge 2023",
    currentRound: 2,
    totalRounds: 4,
    deadline: "Nov 10, 2023",
    status: "In Progress",
    rank: "156",
    participants: "8,000+",
  },
  {
    id: "data-analysis-hackathon",
    title: "Data Analysis Hackathon",
    currentRound: 1,
    totalRounds: 2,
    deadline: "Oct 30, 2023",
    status: "Submission Open",
    rank: "42",
    participants: "3,500+",
  },
];

const professionalSkills = [
  {
    name: "Data Analysis",
    level: 8,
    courses: 5,
    nextMilestone: "Advanced certification available",
  },
  {
    name: "Machine Learning",
    level: 6,
    courses: 3,
    nextMilestone: "70% to next level",
  },
  {
    name: "Cloud Computing",
    level: 4,
    courses: 2,
    nextMilestone: "40% to next level",
  },
  {
    name: "Software Development",
    level: 9,
    courses: 7,
    nextMilestone: "Expert level achieved",
  },
];

const careerResources = [
  {
    title: "Tech Industry Trends 2023",
    description: "Latest trends and insights in the technology sector",
    type: "document",
  },
  {
    title: "Resume Templates for Tech Professionals",
    description: "Customizable templates optimized for tech roles",
    type: "template",
  },
  {
    title: "Interview Preparation Guide",
    description: "Comprehensive guide for technical interviews",
    type: "document",
  },
  {
    title: "Leadership in Tech Teams",
    description: "Video course on effective leadership in technical teams",
    type: "video",
  },
];

const professionalDeadlines = [
  {
    title: "Coding Challenge Round 2 Submission",
    date: "Nov 10, 2023",
    daysLeft: 7,
  },
  {
    title: "Data Analysis Hackathon Submission",
    date: "Oct 30, 2023",
    daysLeft: 0,
  },
  {
    title: "Cloud Computing Final Project",
    date: "Nov 15, 2023",
    daysLeft: 12,
  },
  {
    title: "Machine Learning Course Deadline",
    date: "Oct 28, 2023",
    daysLeft: 2,
  },
];

const professionalCertifications = [
  {
    title: "Data Science Professional Certificate",
    issueDate: "Oct 5, 2023",
  },
  {
    title: "Advanced Python Programming",
    issueDate: "Sep 15, 2023",
  },
  {
    title: "Cloud Architecture Fundamentals",
    issueDate: "Aug 20, 2023",
  },
];

const professionalRecommendedCourses = [
  {
    title: "Advanced AI Techniques",
    image: "/placeholder.svg?height=40&width=40",
    students: "1,756",
  },
  {
    title: "Blockchain Development",
    image: "/placeholder.svg?height=40&width=40",
    students: "2,345",
  },
  {
    title: "DevOps and CI/CD Pipelines",
    image: "/placeholder.svg?height=40&width=40",
    students: "1,879",
  },
];

const networkActivity = [
  {
    userName: "Sarah Johnson",
    userAvatar: "/placeholder.svg?height=32&width=32",
    userInitials: "SJ",
    action: "completed Data Science Certification",
    time: "2 hours ago",
  },
  {
    userName: "Michael Chen",
    userAvatar: "/placeholder.svg?height=32&width=32",
    userInitials: "MC",
    action: "joined Professional Coding Challenge",
    time: "Yesterday",
  },
  {
    userName: "Emily Rodriguez",
    userAvatar: "/placeholder.svg?height=32&width=32",
    userInitials: "ER",
    action: "shared a resource: 'AI Ethics Guide'",
    time: "2 days ago",
  },
];
