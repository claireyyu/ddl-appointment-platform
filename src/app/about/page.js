import React from 'react'
import ServiceCard from '@/components/ServiceCard/ServiceCard'
import Button from '@/components/ui/button'
import Link from 'next/link'

export default function BaziPage() {
  return (
    <div className="bg-white text-gray-800">
      <div className="flex p-8 justify-center items-center bg-slate-50 mx-16 text-slate-700">
        <h1 className="text-3xl font-bold">About</h1>
      </div>
      <div className="flex flex-col m-16">
        <h2 className="text-3xl font-bold text-slate-600 text-center">Understanding Your Destiny Through Chinese Astrology</h2>
        <p className="text-lg mt-4">
          Bazi, also known as the "Four Pillars of Destiny," is an ancient Chinese metaphysical system used to understand a person's life path, personality, and destiny. It is rooted in the belief that the universe's energy, expressed through the interaction of the Five Elements (Wood, Fire, Earth, Metal, Water) and the Yin-Yang forces, shapes our experiences from the moment we are born.
        </p>
        <h3 className="text-2xl mt-8 mb-4 font-semibold">What is Bazi?</h3>
        <p className="text-lg">
          At the heart of Bazi is your birth chart, which is based on your date and time of birth. This chart is composed of four pillars, each representing a specific aspect of your life: Year Pillar, Month Pillar, Day Pillar, and Hour Pillar. Each pillar is a combination of a Stem (at the top) and a Branch (at the bottom), which align with the Five Elements. The interaction between these elements reveals valuable insights about your strengths, weaknesses, opportunities, and potential challenges in various aspects of life.
        </p>
        <h3 className="text-2xl mt-8 mb-4 font-semibold">How Does Bazi Work?</h3>
        <p className="text-lg">
          Bazi is more than just a tool for fortune-telling. It helps you align with the natural flow of the universe, revealing the best times to pursue opportunities and when to be more cautious. The power of Bazi lies in understanding how your personal elemental balance interacts with the cycles of time.
        </p>
        <h3 className="text-2xl mt-8 mb-4 font-semibold">Why Choose a Bazi Reading?</h3>
        <p className="text-lg">
          A Bazi reading provides deep insight into your destiny and personality. It can help answer important life questions, such as career paths, relationship timings, and financial planning. Whether you're seeking clarity on a specific issue or a comprehensive understanding of your life's journey, we are here to support you with insightful interpretations and practical advice.
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
