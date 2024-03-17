import React, { useEffect, useState } from 'react';
import hero from "../../../assets/images/hero.png";

const ContactSection = () => {
    // State for form inputs
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    // Handle input changes
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement your form submission logic here, such as sending the data to an email or server
        console.log(formData);
        // Reset form after submission
        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <section id="contact" className="flex flex-wrap justify-center items-center py-16 px-4 md:px-20 bg-background text-text">
            <div className="md:w-1/2">
                <img src={hero} alt="Contact Us" className="rounded-lg shadow-lg w-1/2" data-aos="fade-right" />
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0" data-aos="fade-left">
                <h2 className="text-4xl font-bold text-center md:text-left mb-10">Let's Connect</h2>
                <form onSubmit={handleSubmit} className="max-w-lg mx-auto md:mx-0 space-y-6">
                    <div className="mb-6">
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                            className="form-input w-full p-3 text-sm border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-background" placeholder="Your Name" />
                    </div>
                    <div className="mb-6">
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                            className="form-input w-full p-3 text-sm border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-background" placeholder="Your Email" />
                    </div>
                    <div className="mb-6">
                        <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" required
                            className="form-input w-full p-3 text-sm border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-background" placeholder="Your Message"></textarea>
                    </div>
                    <button type="submit" className="w-full px-6 py-3 text-sm font-medium text-white bg-primary rounded-lg transition-colors duration-300 hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                        Send Message
                    </button>
                </form>
            </div>

        </section>
    );
};

export default ContactSection;
