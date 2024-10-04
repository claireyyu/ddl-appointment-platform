import React from 'react'
import ServiceCard from '@/components/ServiceCard/ServiceCard'
import Button from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import aboutPic from "../../../public/about.png";

export default function Page() {
  return (
    <div className="bg-backrground text-foreground text-justify">      
      <div className="flex flex-col m-16">
        <p className="text-lg mt-4">
          At Lab 8, the number '8' symbolizes both the "Ba" (八) in BaZi and the infinity symbol (∞), reflecting our belief in the limitless potential within each individual. We are here to guide you through life's possibilities, helping you navigate challenges with clarity and wisdom.</p>
        <p className="text-lg mt-4">
          We utilize the ancient wisdom of BaZi, or the "Four Pillars of Destiny," to unlock a deeper understanding of your life's path, personality, and potential. BaZi is a Chinese metaphysical system that interprets universal energies through the interaction of the Five Elements (Wood, Fire, Earth, Metal, and Water) and Yin-Yang forces, shaping your life experiences from birth.
        </p>
        <p className="text-lg mt-4">Central to BaZi is your birth chart, a unique map based on the date and time of your birth. This chart is made up of four pillars, with each pillar consisting of a Top Stem and a Bottom Branch:
        </p>
        <div className="my-8 flex items-center justify-center">
          <Image src={aboutPic} alt="About" className="cursor-pointer"/>
        </div>
        <div>
          <p className="text-xl mt-4">Meaning of the Four Pillars</p>
          <p className="text-lg mt-4">
            Year Pillar:<br />
            Heavenly Stem: Represents the influence of grandparents or family elders, reflecting a person's family background and early environment.Earthly Branch: Reflects innate constitution and hereditary factors, symbolizing growth and foundations during adolescence.
          </p>
          <p className="text-lg mt-4">
            Month Pillar:<br />
            Heavenly Stem: Represents parents, leaders, or supervisors, symbolizing early career development and social status in adulthood.Earthly Branch: Reflects interactions with family and work environment, as well as life state and interpersonal relationships during middle age.
          </p>
          <p className="text-lg mt-4">
            Day Pillar:<br />
            Heavenly Stem: Represents the individual, directly reflecting the person’s character and health based on its elemental attributes.Earthly Branch: Represents the spouse and marriage status, indicating partner relationships and family interactions.
          </p>
          <p className="text-lg mt-4">
            Hour Pillar:<br />
            Heavenly Stem: Symbolizes children, reflecting the relationship with them and predicting the state of later life.Earthly Branch: Represents a person's achievements and living environment in later years, reflecting later life fortunes and interactions with descendants.
          </p>
          <p className="text-lg mt-4 mb-4">
            In summary, the Year Pillar influences early life, the Month Pillar impacts middle age, the Day Pillar is closely related to the individual and marriage, while the Hour Pillar affects later life fortunes and relationships with children. Together, these four pillars form a person's BaZi chart, helping to interpret their life’s fortunes, character, and significant events.
          </p><br />
          <p className="text-xl mt-4">Our Mission</p>
          <p className="text-lg mt-4 mb-4">At Lab 8, we are dedicated to helping you uncover your life's potential through personalized BaZi readings. With years of experience and deep knowledge of Chinese metaphysics, we offer clear guidance to help you live in harmony and happiness.</p>
          <p className="text-lg mt-4 mb-4">Whether you're seeking clarity on a specific issue or a comprehensive understanding of your life’s journey, we are here to support you with insightful interpretations and practical advice.</p>
        </div>
      </div>
    </div>
  );
}
