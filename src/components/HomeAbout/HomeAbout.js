import Link from 'next/link';

export default function HomeAbout() {
    return (
        <div>
          <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold mb-4 lg:mb-8">WHAT IS BAZI?</h1>
          <p className="text-sm md:text-base xl:text-lg text-justify mb-4 lg:mb-8">
            Bazi, or "Eight Characters," is a traditional Chinese system that analyzes a person's destiny based on their birth date and time. It consists of four pairs of "Top Stems" and "Bottom Branches," which represent the year, month, day, and hour of birth.<br /><br />
            Rooted in ancient Chinese philosophy and metaphysics, Bazi has origins that trace back over 3,000 years. The system provides insights into various aspects of life, including personality, relationships, career, and health, by examining the interactions of the Five Elements (Wood, Fire, Earth, Metal, Water) and the balance of Yin and Yang.   
          </p>
          <Link href="/services" className="font-semibold text-sm md:text-base xl:text-lg hover:underline">Learn More</Link>    
        </div>
    )
}

