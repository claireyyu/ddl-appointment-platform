import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import generateLocalizedPath from '../../utils/PathHelper'
import {useLocale} from 'next-intl'

export default function ServiceCard({ children, link, pic, imgPosition }) {
  
  const locale = useLocale()
  
  return (
    <div className="relative hover:-translate-y-2 transition-transform duration-200">
      <Link href={generateLocalizedPath(`/services/${link}`, locale)}>
        <div className="flex">
          <Image src={pic} alt="service image" className="w-2/5 object-contain h-[50vh]" />
          {children}
        </div>
      </Link>
    </div>
  )
}
