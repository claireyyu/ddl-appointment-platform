import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import generateLocalizedPath from '../../utils/PathHelper'
import {useLocale} from 'next-intl'

export default function ServiceCard({ children, link, pic }) {
  
  const locale = useLocale()
  
  return (
    <div className="relative hover:-translate-y-2 transition-transform duration-200">
      <Link href={generateLocalizedPath(`/services/${link}`, locale)}>
        <Image src={pic} alt="Service 1" className="w-full h-auto" />
        {children}
      </Link>
    </div>
  )
}
