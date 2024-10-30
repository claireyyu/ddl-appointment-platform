import { FormEvent, useState } from 'react';
import { type ContactFormData } from '../../types/contact';
import { createContactForm } from '../../services/contactService';

export default function ContactForm() {
    const [contactFormData, setContactFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    function handleContactFormChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setContactFormData({
            ...contactFormData,
            [name]: value
        });
    }

    function handleMessageChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        const { name, value } = e.target;
        setContactFormData({
            ...contactFormData,
            [name]: value
        });
    }
    
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        createContactForm(contactFormData);
        window.alert('Your submission has been received. Thank you!');
        setContactFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    }
    
    return (
        <div className="flex flex-col">
            <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold">Contact Us</h1>
            <p className="text-sm md:text-base xl:text-lg text-justify mb-2 md:mb-4">Have a question, need more information, or interested in a partnership? Share your details below, and we'll get back to you as soon as possible!</p>
            <form className="flex flex-col gap-3 md:gap-4 lg:gap-5" onSubmit={handleSubmit}>
                
                <div className="flex flex-col md:flex-row md:space-x-4">
                    <div className="flex flex-col flex-1 gap-1 md:gap-2">
                        <label htmlFor="name" className="text-sm md:text-base xl:text-lg p-1 md:p-2">Name</label>
                        <input type="text" name="name" id="name" autoComplete="name" className="p-2 rounded-custom bg-slate-100 text-background" value={contactFormData.name} onChange={handleContactFormChange} />
                    </div>
                    <div className="flex flex-col flex-1 gap-1 md:gap-2 mt-3 md:mt-0">
                        <label htmlFor="email" className="text-sm md:text-base xl:text-lg p-1 md:p-2">Email</label>
                        <input type="email" name="email" id="email" autoComplete="email" className="p-2 rounded-custom bg-slate-100 text-background" value={contactFormData.email} onChange={handleContactFormChange}/>
                    </div>
                </div>

                <div className="flex flex-col gap-1 md:gap-2">
                    <label htmlFor="subject" className="text-sm md:text-base xl:text-lg p-1 md:p-2">Subject</label>
                    <input name="subject" id="subject" className="p-2 rounded-custom bg-slate-100 text-background" value={contactFormData.subject} onChange={handleContactFormChange}/>
                </div>

                <div className="flex flex-col gap-1 md:gap-2">
                    <label htmlFor="message" className="text-sm md:text-base xl:text-lg p-1 md:p-2">Message</label>
                    <textarea name="message" id="message" className="p-2 rounded-custom bg-slate-100 resize-none h-20 md:h-16 text-background" value={contactFormData.message} onChange={handleMessageChange}/>
                </div>

                <div className="flex justify-center mt-2 md:mt-4">
                    <input type="submit" value="Send" className="bg-gradient-to-r from-bStart to-bEnd px-8 md:px-10 py-2 rounded-custom font-bold text-sm md:text-base xl:text-lg hover:opacity-90 cursor-pointer"/>
                </div>
                
            </form> 
        </div>
    )
}
