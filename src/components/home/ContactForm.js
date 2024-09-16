export default function ContactForm() {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submit');
    }
    
    return (
        <div>
            <form className="flex flex-col gap-6 p-4 m-12 text-slate-900" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="p-2">Your Name</label>
                    <input type="text" name="name" className="p-2 rounded bg-slate-100" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="p-2">Your Email</label>
                    <input type="email" name="email" className="p-2 rounded bg-slate-100" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="note" className="p-2">What are you interested in?</label>
                    <textarea name="note" className="p-2 rounded bg-slate-100 resize-none"/>
                </div>
                <div className="flex justify-self-start">
                    <input type="submit" value="Send" className="bg-sky-600 text-white px-10 py-2 rounded font-bold"/>
                </div>

            </form> 

        </div>
    )
}
