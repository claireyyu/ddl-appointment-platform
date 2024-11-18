import Link from 'next/link';
import homeTraitsPic from "../../../public/home-traits.png";
import Image from 'next/image'


export default function HomeTraits() {
    return (
        <div>
        <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold mb-4 lg:mb-8">Traits of Five Elements</h1>
        <div className="h-8"></div>
        <p className="text-sm md:text-base xl:text-lg text-justify mb-2 lg:mb-4">·  Metal: Thrives in structured, rule-based environments and values efficiency and justice.</p>
        <p className="text-sm md:text-base xl:text-lg text-justify mb-2 lg:mb-4">·  Wood: Seeks growth, ideals, and breakthroughs, emphasizing creativity and progress.</p>
        <p className="text-sm md:text-base xl:text-lg text-justify mb-2 lg:mb-4">·  Water: Focuses on wisdom, adaptability, and navigating complex or changing situations.</p>
        <p className="text-sm md:text-base xl:text-lg text-justify mb-2 lg:mb-4">·  Fire: Driven by passion, leadership, and inspiring others, with a strong sense of energy.</p>
        <p className="text-sm md:text-base xl:text-lg text-justify mb-2 lg:mb-4">·  Earth: Values balance, reliability, and long-term stability, ensuring a solid foundation.</p>
        <div className="h-8"></div>
          <p className="text-sm md:text-base xl:text-lg text-justify mb-2 lg:mb-4">Find out what type of person you are using our <Link href="/" className="font-semibold text-sm md:text-base xl:text-lg underline"> Bazi Calculator</Link>
        </p>
        </div>
    )
}

