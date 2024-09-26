export default function ContactForm() {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submit');
        window.alert('Your submission has been received. Thank you!');
    }
    
    return (
        <div className="flex flex-col gap-4 md:p-8 bg-background rounded-md mx-4 md:mx-8">
        <p>Have a question, need more information, or interested in a partnership? Share your details below, and we’ll get back to you as soon as possible!</p>
        <form className="flex flex-col gap-6 m-4" onSubmit={handleSubmit}>
            
            <div className="flex flex-col xl:flex-row xl:space-x-20">
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="p-2">Name</label>
                    <input type="text" name="name" id="name" className="p-2 rounded bg-slate-100" />
                </div>
                <div className="flex flex-col gap-2 mt-4 md:mt-0">
                    <label htmlFor="email" className="p-2">Email</label>
                    <input type="email" name="email" id="email" className="p-2 rounded bg-slate-100" />
                </div>
            </div>

            <div className="flex flex-col gap-2">
            <label htmlFor="subject" className="p-2">Subject</label>
            <input name="subject" id="subject" className="p-2 rounded bg-slate-100 resize-none"/>
            </div>

            <div className="flex flex-col gap-2">
            <label htmlFor="message" className="p-2">Message</label>
            <textarea name="message" id="message" className="p-2 rounded bg-slate-100 resize-none"/>
            </div>

            <div className="flex justify-center my-6">
            <input type="submit" value="Send" className="bg-gradient-to-r from-pStart to-pEnd px-10 py-2 rounded font-bold"/>
            </div>
            
        </form> 
        </div>

    )
}
