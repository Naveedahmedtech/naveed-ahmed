import React from 'react';
import hero from "../../../assets/images/hero.png";

const AboutSection = () => {
    const skills = ["MERN Stack", "Responsive Design", "RESTful Services & APIs", "State Management", "Agile & Scrum"];

    return (
        <section id="about" className="py-16 px-4 md:px-20 bg-background text-text">
            <div className="flex flex-col items-center justify-center md:flex-row md:justify-between gap-10">
                <div className="flex justify-center w-full md:w-auto" data-aos="fade-right">
                    <img src={hero} alt="Naveed Ahmed" className="rounded-lg w-3/4 md:w-3/2 lg:w-3/2" />
                </div>
                <div className="space-y-6 w-full md:w-auto" data-aos="fade-left">
                    <h2 className="text-4xl font-bold text-center md:text-left">
                        About Me
                    </h2>
                    <p className="text-lg text-center md:text-left">
                        Hello! I'm a passionate Software Engineer specializing in full-stack development with a focus on the MERN stack. Creating scalable web applications and engaging user experiences, leveraging a solid background in computer science and extensive hands-on experience.
                    </p>
                    <p className="text-lg text-center md:text-left">
                        Beyond coding, I'm deeply involved in the tech community, contributing to open-source projects, exploring emerging technologies, and sharing insights through blogging and speaking engagements.
                    </p>
                    <div>
                        <h3 className="text-2xl font-semibold">Core Skills</h3>
                        <ul className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2">
                            {skills.map((skill, index) => (
                                <li key={index} className="text-lg bg-background text-text rounded-md p-2 shadow-lg">
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
