"use client";

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {

  const { ref } = useSectionInView("About");


  return (
    <motion.section 
    ref={ref}
    className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.175 }}
    id="about"
    >

       <SectionHeading>About me</SectionHeading>

        <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Business & Finance</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is being directly involved in solving real world problems.
         I <span className="underline">love</span> the
        feeling of seeing my code help people or businesses solve issues. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript, Swift and React Native. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer or product manager.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy long distance running,
         traveling, and cafe hopping. I also enjoy{" "}
        <span className="font-medium">learning new things via Youtube and podcasts</span>. I am currently
        learning about{" "}
        <span className="font-medium">philosophy and business acquistions</span>.
      </p>
    </ motion.section>
  );
}
