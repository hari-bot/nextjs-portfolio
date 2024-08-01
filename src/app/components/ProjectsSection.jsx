"use client";
import { motion, useInView } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { useRef, useState } from "react";

const projectsData = [
  {
    id: 1,
    title: "NextJs Portfolio Website",
    description: "Personal Portfolio",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Game Hub",
    description: "Search for games and browse details",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/hari-bot/game-hub",
    previewUrl: "https://game-hub-hari.netlify.app/",
  },
  {
    id: 3,
    title: "Cryptocurrency Dashboard",
    description:
      "Bitcoin prices in USD and INR, along with 24-hour change data",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/hari-bot/koinx",
    previewUrl: "https://leafy-crisp-ab4116.netlify.app/",
  },
  {
    id: 4,
    title: "Sociopedia",
    description: "Sociopedia is a full-stack social media platform",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/hari-bot/sociopedia",
    previewUrl: "https://sociopedia-frontend-beta.vercel.app/",
  },
  {
    id: 5,
    title: "Todo Management Application",
    description: "Todo mangement",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/hari-bot/Advanced-Todo-Management-Application",
    previewUrl: "https://todo-assessment-client.onrender.com/",
  },
  {
    id: 6,
    title: "PageInsightPro",
    description: "Facebook Page Management Application",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/hari-bot/pageinsight-pro",
    previewUrl: "https://pageinsightpro.netlify.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInview = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filterdProject = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6 ">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul
        ref={ref}
        className="grid xl:grid-cols-3 md:grid-cols-2 gap-8 md:gap-12"
      >
        {filterdProject.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInview ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
