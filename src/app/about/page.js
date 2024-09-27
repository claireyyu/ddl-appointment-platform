import React from 'react'
import ServiceCard from '@/components/ServiceCard/ServiceCard'
import Button from '@/components/ui/button'
import Link from 'next/link'

export default function page() {
  return (
    <div className="bg-backrground text-foreground text-justify">
      <div className="flex p-8 justify-center items-end bg-gradient-to-r from-pStart to-pEnd mx-4 md:mx-16 text-foreground">
        <h1 className="text-2xl md:text-3xl font-bold">ABOUT US</h1>
      </div>
      <div className="flex flex-col m-16">
        <p className="text-lg mt-4">
          At Lab 8, the number '8' symbolizes both the "Ba" (八) in BaZi and the infinity symbol (∞), reflecting our belief in the limitless potential within each individual. We are here to guide you through life's possibilities, helping you navigate challenges with clarity and wisdom.
          <br /><br />We utilize the ancient wisdom of BaZi, or the "Four Pillars of Destiny," to unlock a deeper understanding of your life's path, personality, and potential. BaZi is a Chinese metaphysical system that interprets universal energies through the interaction of the Five Elements (Wood, Fire, Earth, Metal, and Water) and Yin-Yang forces, shaping your life experiences from birth.
          <br/><br/>Central to BaZi is your birth chart, a unique map based on the date and time of your birth. This chart is made up of four pillars, with each pillar consisting of a Top Stem and a Bottom Branch:
        </p>
        <h3 className="text-xl mt-8 mb-4 font-semibold">Meaning of the Four Pillars</h3>
        <p className="text-lg">
          Year Pillar:<br/>Heavenly Stem:Represents the influence of grandparents or family elders, reflecting a person's family background and early environment.Earthly Branch: Reflects innate constitution and hereditary factors, symbolizing growth and foundations during adolescence.
          <br /><br />
          Month Pillar:<br />Heavenly Stem: Represents parents, leaders, or supervisors, symbolizing early career development and social status in adulthood.Earthly Branch: Reflects interactions with family and work environment, as well as life state and interpersonal relationships during middle age.
Day Pillar:Heavenly Stem: Represents the individual, directly reflecting the person’s character and health based on its elemental attributes.Earthly Branch: Represents the spouse and marriage status, indicating partner relationships and family interactions.
Hour Pillar:Heavenly Stem: Symbolizes children, reflecting the relationship with them and predicting the state of later life.Earthly Branch: Represents a person's achievements and living environment in later years, reflecting later life fortunes and interactions with descendants.
In summary, the Year Pillar influences early life, the Month Pillar impacts middle age, the Day Pillar is closely related to the individual and marriage, while the Hour Pillar affects later life fortunes and relationships with children. Together, these four pillars form a person's BaZi chart, helping to interpret their life’s fortunes, character, and significant events.
        </p>
        <h3 className="text-2xl mt-8 mb-4 font-semibold">Our Mission</h3>
        <p className="text-lg">
        We are dedicated to helping you uncover your life's potential through personalized BaZi readings.
        With years of experience and deep knowledge of Chinese metaphysics, we offer clear, accurate guidance to help you live in narmony with your destiny.
        </p>
      </div>
    </div>
  );
}
