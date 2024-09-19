import React from 'react'
import ServiceCard from '@/components/Services/ServiceCard'
import Button from '@/components/ui/button'
import Link from 'next/link'

export default function page() {
  return (
    <div>
      <div className="flex p-8 justify-center items-center bg-slate-50 mx-16 text-slate-700">
        <h1 className="text-3xl font-bold">Services</h1>
      </div>
      <div className="flex flex-col m-20">
        <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <section className="grid grid-cols-2 gap-24 px-24 py-16 bg-slate-100">
          <ServiceCard name="personal-reading"/>
          <ServiceCard name="interpretation-year"/>
          <ServiceCard name="interpretation-life"/>
          <ServiceCard name="psychic-reading"/>
        </section>
        <section className="flex flex-col">
          <h1 className="text-3xl font-bold text-slate-600 mt-10">Categories We Can Interprete</h1>
          <p className="text-lg m-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </section>
      </div>

      
    </div>

  )
}
