import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated: University of North Carolina",
    location: "Chapel Hill, NC",
    description:
      "Graduated with a degree in Business Administration and Finance.",
    icon: React.createElement(LuGraduationCap),
    date: "2011",
  },
  {
    title: "Director of Operations / Product Manager",
    location: "Remote - empireflippers.com",
    description:
      "Director of Operations at an online business brokerage firm. Lead product management initiatives for various deprtments to help build out our platform",
    icon: React.createElement(CgWorkAlt),
    date: "2018-Present",
  },
  {
    title: "Full-Stack Development Bootcamp & Courses",
    location: "Remote",
    description:
      "Began the journey of learning software development to help improve my abilities as a product manager and aid in more technical decisions. I also wanted to shift my mindset to be able to identify more process improvments through automations and work on some fun side projects.",
    icon: React.createElement(FaRegLightbulb),
    date: "2020-Present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Swift",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "GraphQL",
  "Python",
  "Framer Motion",
] as const;