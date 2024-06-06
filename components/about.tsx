"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
	const { ref } = useSectionInView("About");

	return (
		<motion.section
			ref={ref}
			className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
			id="about"
		>
			<SectionHeading>About me</SectionHeading>

			<p className="mb-3">
  I am a passionate software developer with a degree in <span className="font-medium">ICT</span>, 
  specializing in <span className="font-medium">backend web development</span>. My core stack includes 
  <span className="font-medium">Typescript, Javascript, Node.js, Express.js, PHP, Laravel, PostgreSQL & MongoDB.</span> I thrive on solving complex problems and am always eager to learn new 
  technologies. Currently seeking a <span className="font-medium">full-time position</span> as a software developer. 
  <span className="italic">My favorite part of programming</span> is the problem-solving aspect. I{" "}
  <span className="underline">love</span> the feeling of finally figuring out a solution to a problem.
</p>

<p>
  <span className="italic">When I&apos;m not coding</span>, I enjoy playing Fifa, Chess, Cricket, watching movies, footballs, cricket and 
  spending time with loved ones. I also enjoy <span className="font-medium">learning new technologies</span>.
</p>

		</motion.section>
	);
}
