import { useState } from 'react';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleBlur = (e: any) => {
        const { name, value } = e.target;
        if (name === 'name' && !value.trim()) {
            setFormErrors(prevState => ({
                ...prevState,
                name: 'Name is required',
            }));
        } else if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
            setFormErrors(prevState => ({
                ...prevState,
                email: 'Invalid email address',
            }));
        } else if (name === 'message' && !value.trim()) {
            setFormErrors(prevState => ({
                ...prevState,
                message: 'Message is required',
            }));
        } else {
            setFormErrors(prevState => ({
                ...prevState,
                [name]: '',
            }));
        }
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <section id="contact" className="py-16 px-4 md:px-20 bg-background text-text flex justify-center items-center">
            <div className="w-full max-w-2xl">
                <h2 className="text-4xl font-bold text-center mb-10">Let's Connect</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="mb-6">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-text">Your Name</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} onBlur={handleBlur} required
                            className={`form-input w-full p-3 text-sm text-background border-gray-300 rounded-lg focus:ring-primary focus:border-primary ${formErrors.name ? 'border-red-500' : ''}`} />
                        {formErrors.name && <span className="text-sm text-red-500">{formErrors.name}</span>}
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-text">Your Email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} onBlur={handleBlur} required
                            className={`form-input w-full p-3 text-background text-sm border-gray-300 rounded-lg focus:ring-primary focus:border-primary ${formErrors.email ? 'border-red-500' : ''}`} />
                        {formErrors.email && <span className="text-sm text-red-500">{formErrors.email}</span>}
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-text">Your Message</label>
                        <textarea id="message" name="message" value={formData.message} onChange={handleChange} onBlur={handleBlur} rows={4} required
                            className={`form-input w-full text-background p-3 text-sm border-gray-300 rounded-lg focus:ring-primary focus:border-primary ${formErrors.message ? 'border-red-500' : ''}`} ></textarea>
                        {formErrors.message && <span className="text-sm text-red-500">{formErrors.message}</span>}
                    </div>
                    <button type="submit" className="btn-animate-fill bg-primary text-text border-2 border-primary font-bold py-3 px-6 rounded hover:bg-background hover:text-primary transition duration-300 w-full">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactSection;
