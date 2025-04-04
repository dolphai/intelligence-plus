import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Trophy, Calendar, ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Trophy className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Innoventure</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary">
              IntelligentPlus
            </Link>
            <Link
              href="#courses"
              className="text-sm font-medium hover:text-primary"
            >
              Courses
            </Link>
            <Link
              href="#challenges"
              className="text-sm font-medium hover:text-primary"
            >
              Challenges
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium hover:text-primary"
            >
              Testimonials
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium hover:text-primary"
            >
              About Us
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/dashboard/other-student">
              <Button variant="outline">Log in</Button>
            </Link>
            <Link href="/dashboard/partner-student">
              <Button>Sign up</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <Badge className="inline-flex mb-2">
                  New Challenges Available
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Learn, Challenge, Succeed
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  ABC Learning Platform offers courses and challenges for
                  students and professionals. Enhance your skills, compete
                  nationally, and track your progress.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/signup">
                  <Button size="lg" className="gap-1">
                    Get Started <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#courses">
                  <Button size="lg" variant="outline">
                    Explore Courses
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-[500px] aspect-video overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=720&width=1280"
                  alt="ABC Learning Platform"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 border-t border-b">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="text-3xl font-bold">500+</div>
              <div className="text-sm text-muted-foreground">Courses</div>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <div className="text-3xl font-bold">50,000+</div>
              <div className="text-sm text-muted-foreground">Students</div>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <div className="text-3xl font-bold">100+</div>
              <div className="text-sm text-muted-foreground">Challenges</div>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <div className="text-3xl font-bold">95%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Explore Our Courses
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover courses designed for students and professionals across
                various subjects.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
            {courses.map((course) => (
              <Card key={course.id} className="overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    width={400}
                    height={200}
                    className="object-cover w-full h-full transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <Badge variant={course.isFree ? "secondary" : "default"}>
                      {course.isFree ? "Free" : "Premium"}
                    </Badge>
                    <Badge variant="outline">{course.level}</Badge>
                  </div>
                  <CardTitle className="mt-2">{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <BookOpen size={16} />
                    <span>{course.lessons} lessons</span>
                    <Users size={16} className="ml-2" />
                    <span>{course.students} students</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    {course.isFree ? "Start Learning" : "Enroll Now"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/courses">
              <Button variant="outline" size="lg">
                View All Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section
        id="challenges"
        className="w-full py-12 md:py-24 lg:py-32 bg-muted/50"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                National Challenges
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Participate in nationwide competitions and test your skills
                against peers.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 mt-8">
            {challenges.map((challenge) => (
              <Card key={challenge.id} className="overflow-hidden">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <Badge
                      variant="default"
                      className="bg-orange-500 hover:bg-orange-600"
                    >
                      {challenge.status}
                    </Badge>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span className="text-sm text-muted-foreground">
                        {challenge.date}
                      </span>
                    </div>
                  </div>
                  <CardTitle className="mt-2">{challenge.title}</CardTitle>
                  <CardDescription>{challenge.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">Current Round:</span>
                      <span>
                        {challenge.currentRound} of {challenge.totalRounds}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">Participants:</span>
                      <span>{challenge.participants}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">Eligibility:</span>
                      <span>{challenge.eligibility}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    {challenge.status === "Registration Open"
                      ? "Register Now"
                      : "View Details"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/challenges">
              <Button variant="outline" size="lg">
                View All Challenges
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Success Stories
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from our students and professionals who have achieved
                success with ABC Learning.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 mt-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-base">
                        {testimonial.name}
                      </CardTitle>
                      <CardDescription>{testimonial.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    "{testimonial.quote}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Ready to Start Your Learning Journey?
              </h2>
              <p className="mx-auto max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of students and professionals who are enhancing
                their skills with ABC Learning.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/signup">
                <Button size="lg" variant="secondary">
                  Sign Up Now
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 md:py-12 border-t">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Trophy className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">ABC Learning</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Empowering students and professionals through quality education
                and challenges.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Platform</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/courses"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Courses
                  </Link>
                </li>
                <li>
                  <Link
                    href="/challenges"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Challenges
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/blog"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/support"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Support
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li className="text-muted-foreground">info@abclearning.com</li>
                <li className="text-muted-foreground">+1 (555) 123-4567</li>
                <li className="text-muted-foreground">
                  123 Education St, Learning City
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-muted-foreground">
              © 2023 ABC Learning. All rights reserved.
            </p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Sample data
const courses = [
  {
    id: "math-fundamentals",
    title: "Mathematics Fundamentals",
    description: "Master essential math concepts for grades 6-8",
    image: "/placeholder.svg?height=200&width=400",
    lessons: 24,
    students: 1245,
    level: "Beginner",
    isFree: true,
  },
  {
    id: "science-intro",
    title: "Introduction to Science",
    description: "Explore basic scientific principles and experiments",
    image: "/placeholder.svg?height=200&width=400",
    lessons: 18,
    students: 987,
    level: "Beginner",
    isFree: true,
  },
  {
    id: "advanced-algebra",
    title: "Advanced Algebra Masterclass",
    description: "Comprehensive algebra course with practice problems",
    image: "/placeholder.svg?height=200&width=400",
    lessons: 36,
    students: 2156,
    level: "Advanced",
    isFree: false,
  },
  {
    id: "data-science",
    title: "Data Science for Professionals",
    description: "Learn data analysis and visualization techniques",
    image: "/placeholder.svg?height=200&width=400",
    lessons: 42,
    students: 1876,
    level: "Intermediate",
    isFree: false,
  },
  {
    id: "english-grammar",
    title: "English Grammar Essentials",
    description: "Build a strong foundation in English grammar",
    image: "/placeholder.svg?height=200&width=400",
    lessons: 20,
    students: 3421,
    level: "Beginner",
    isFree: true,
  },
  {
    id: "coding-basics",
    title: "Coding Fundamentals",
    description: "Introduction to programming concepts and languages",
    image: "/placeholder.svg?height=200&width=400",
    lessons: 30,
    students: 5432,
    level: "Beginner",
    isFree: true,
  },
];

const challenges = [
  {
    id: "math-olympiad-2023",
    title: "National Mathematics Olympiad 2023",
    description:
      "Test your mathematical skills in this prestigious national competition",
    status: "Registration Open",
    date: "Oct 15 - Dec 20, 2023",
    currentRound: 1,
    totalRounds: 3,
    participants: "10,000+",
    eligibility: "Students Grade 6-12",
  },
  {
    id: "science-fair-2023",
    title: "National Science Fair 2023",
    description:
      "Showcase your scientific projects and compete with peers nationwide",
    status: "Ongoing",
    date: "Sep 1 - Nov 30, 2023",
    currentRound: 2,
    totalRounds: 3,
    participants: "5,000+",
    eligibility: "Students Grade 8-12",
  },
  {
    id: "coding-challenge-2023",
    title: "Professional Coding Challenge 2023",
    description:
      "Solve complex programming problems and showcase your coding skills",
    status: "Registration Open",
    date: "Nov 1 - Dec 15, 2023",
    currentRound: 1,
    totalRounds: 4,
    participants: "8,000+",
    eligibility: "Professionals & College Students",
  },
  {
    id: "debate-championship-2023",
    title: "National Debate Championship 2023",
    description:
      "Demonstrate your critical thinking and public speaking skills",
    status: "Coming Soon",
    date: "Jan 15 - Mar 30, 2024",
    currentRound: 0,
    totalRounds: 5,
    participants: "3,000+",
    eligibility: "Students Grade 9-12",
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "High School Student",
    avatar: "/placeholder.svg?height=100&width=100",
    quote:
      "The courses on ABC Learning helped me improve my grades significantly. The national challenges were a great way to test my skills against other students.",
  },
  {
    name: "Michael Chen",
    role: "Software Engineer",
    avatar: "/placeholder.svg?height=100&width=100",
    quote:
      "As a professional, I found the advanced courses extremely valuable for upskilling. The platform's flexibility allowed me to learn at my own pace.",
  },
  {
    name: "Emily Rodriguez",
    role: "Teacher at XYZ School",
    avatar: "/placeholder.svg?height=100&width=100",
    quote:
      "ABC Learning has been an excellent resource for my students. The partnership with our school has provided them with valuable learning opportunities.",
  },
];
