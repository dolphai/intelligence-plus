import { redirect } from "next/navigation";
import { FC } from "react";

export type CourseProps = {};

const Course: FC<CourseProps> = () => {
  redirect("/courses/courseId");
  // return null;
};
export default Course;
