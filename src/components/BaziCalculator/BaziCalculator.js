export default function BaziCalculator() {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submit');
    }
    
    return (
        <div>
            <form className="flex flex-col gap-6 p-4 m-12 text-slate-900" onSubmit={handleSubmit}>
                <div className="flex gap-2">
                    <label htmlFor="name" className="p-2">Name</label>
                    <input type="input" name="name" className="p-2 rounded-3xl" />
                </div>
                <div className="flex gap-2 items-center jus">
                    <label for="gender" className="p-2">Gender</label>
                    <select name="gender" className="p-2 rounded-3xl">
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="flex gap-2">
                    <label htmlFor="birthDate" className="p-2">Birth Date</label>
                    <input type="date" name="birthDate" className="p-2 rounded-3xl" />
                </div>
                <div className="flex gap-2">
                    <label htmlFor="birthTime" className="p-2">Birth Time</label>
                    <input type="time" name="birthTime" className="p-2 rounded-3xl" />
                </div>
                <div className="flex gap-2">
                    <label htmlFor="timeZone" className="p-2">Time Zone</label>
                    <select name="timeZone" className="p-2 rounded-3xl">
                        <option value="PST">PST</option>
                        <option value="MST">MST</option>
                        <option value="CST">CST</option>
                        <option value="EST">EST</option>
                    </select>
                </div>
            </form> 
            <div className="flex justify-center">
                <input type="submit" className="bg-sky-600 text-white px-10 py-2 rounded-2xl font-bold" value="Generate"/>
            </div>
        </div>
    )
}