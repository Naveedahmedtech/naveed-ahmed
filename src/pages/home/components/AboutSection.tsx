import hero from "../../../assets/images/hero.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { skills } from '../../../utils/home';

const AboutSection = () => {
    return (
        <section id="about" className="py-16 bg-background text-text">
            <div className="container mx-auto px-4 md:px-20 flex wrap flex-col lg:flex-row items-center justify-between gap-10">
                <div className="about-content w-full lg:w-1/2">
                    <h2 className="text-4xl font-bold mb-4">About Me</h2>
                    <p className="text-lg mb-4">
                        I translate complex functionalities into user-friendly web applications. By combining my technical expertise with a deep understanding of your needs, I deliver scalable solutions that empower your users and drive business growth.
                    </p>
                    <p className="text-lg mb-6">
                        My passion for continuous learning fuels my commitment to staying at the forefront of industry trends. This dedication extends beyond technical mastery. I actively contribute to the developer community and mentor future generations, fostering a collaborative environment where innovation thrives.
                    </p>
                    <div className="skills-grid grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                        {skills.map((skill, index) => (
                            <div key={index} className="skill-card flex items-center p-2">
                                <FontAwesomeIcon icon={skill.icon} size="2x" style={{ color: skill.color }} />
                                <div className="skill-content ml-4">
                                    <h4 className="font-semibold">{skill.name}</h4>
                                    <p className="text-sm">{skill.level}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
                <div className="hero-image w-full lg:w-1/2 flex justify-center lg:justify-end ">
                    <img src={hero} alt="Naveed Ahmed" className="rounded-lg shadow-xl max-w-xs mx-2 sm:max-w-sm md:max-w-md lg:max-w-lg" />
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
