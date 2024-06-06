import React from "react";
import { CgWorkAlt } from "react-icons/cg";

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

export const skillsData = [
	"JavaScript",
	"TypeScript",
	"Node.js",
	"Express.js",
	"PHP",
	"Laravel",
	"C/C++",
	"Python",
	"HTML",
	"CSS",
	"PostgreSQL",
	"MongoDB",
	"MySQL",
	"Redis",
	"Git",
	"Docker",
	"Microservices"
] as const;

export const experiencesData = [
	{
		title: "Software Developer",
		location: "Hyper Systems Ltd.",
		description:
			`I have worked as a Backend Developer specializing in Node.js and Laravel, contributing to four significant projects:
			 MyRadar: Created and integrated backend APIs with Node.js & Laravel focusing on efficient data handling and real-time processing.
			 RMS: Implemented backend solutions in Node.js, optimizing performance and enhancing the reliability of the system.
			 BIWTA: Designed & developed backend solutions in Node.js.
			 PGW: Team lead of bKash Payment Gateway project. Developed & maintained backend services using Javascript,Node.js,PHP,Laravel ensuring robust and scalable server-side functionality.`,
		icon: React.createElement(CgWorkAlt),
		date: "July'2022 - Present",
	},
	{
		title: "Software Developer",
		location: "Colgis BD Ltd.",
		description:
			`Served as a Backend Developer of Warehouse Management System, contributing to feature development and deployment.
			Implemented functionalities using raw SQL queries for optimized database interactions.
			Collaborated with the team to ensure the robustness and efficiency of the system. Worked with PHP, Laravel, jQuery, Ajax, PostgreSQL, JavaScript`,
		icon: React.createElement(CgWorkAlt),
		date: "Jan'2022 - June'2022",
	},
	{
		title: "Jr. Software Developer",
		location: "Creatiosoft",
		description:`Authored project workflow and comprehensive documentation. Developed the admin dashboard and implemented authentication mechanisms. Technology stack TypeScript, Node.js, Socket.io, MongoDB, Redis`,
		icon: React.createElement(CgWorkAlt),
		date: "July'2021 - Dec'2021",
	},
] as const;

export const projectsData = [
	{
		title: "bKash Payment Gateway NPM Package",
		description:`I developed two npm package for integrating the bKash payment gateway & bKash dynamic charge payment, designed to simplify and streamline the process of accepting payments through bKash.`,
		tags: ["Javascript", "Node.js","bKash AP"],
		imageUrl: "/bKash.png",
	},
	{
		title: "myRADAR",
		description: `A real-time tracking system to monitor and manage vehicles.`,
		tags: ["Typescript", "Javascript", "Node.js", "PHP", "Laravel", "MongoDB", "Redis", "Pusher", "Web-socket"],
		imageUrl: "/myradar.png",
	},
	{
		title: "BCRC",
		description: `Developed a comprehensive thesis-based project`,
		tags: ["PHP", "Laravel", "Javascript", "Postgressql","Redis"],
		imageUrl: "/bcrc.png",
	},
	{
		title: "Remote Monitoring System (RMS)",
		description:`I developed a Battery Management System (BMS) & Rectifier Parser with real-time monitoring, performance analysis, ensuring efficiency & data representation.`,
		tags: ["Node.js", "PostgreSQL","Redis","Web-socket"],
		imageUrl: "/rms.jpeg",
	},

] as const;
