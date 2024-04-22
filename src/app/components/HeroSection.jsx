"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="lg-py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal  font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary-400  to-secondary-600">
              {" "}
              Hello I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={["", 1000, "Hari", 1000, "Web Developer", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Hi, I&apos;m a Full Stack Developer with MERN stack experience.
            Passionate about creating remarkable web solutions for complex
            problems.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br  from-primary-500 to-secondary-500 hover:bg-slate-200 text-white ">
              Hire Me
            </button>
            <a href="/Hari_s_resume.pdf" download>
              <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3">
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                  Download CV
                </span>
              </button>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:0"
        >
          <div
            className="bg-gradient-to-br  from-primary-500 to-secondary-500 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative"
            style={{ borderRadius: "70% 30% 30% 70% / 70% 64% 36% 30%" }}
          >
            <Image
              src="/images/hero-image.jpg"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
              width={300}
              height={300}
              style={{ borderRadius: "30% 70% 70% 30% / 30% 36% 64% 70%" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
