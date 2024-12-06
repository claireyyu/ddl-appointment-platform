import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import generateLocalizedPath from '../../utils/PathHelper'
import {useLocale, useTranslations} from 'next-intl'

export default function ServiceCard({ link, content, pic, imgPosition }) {
  
  const locale = useLocale()
  const t = useTranslations('ServicesPage'); // Specify translation namespace

  function pickBackgroundColor(link: string) {
    switch (link) {
      case 'personal-reading':
        return 'bg-gradient-to-r from-bg-personalReading-start to-bg-personalReading-end'
      case 'interpretation-life':
        return 'bg-gradient-to-r from-bg-interLife-start to-bg-interLife-end'
      case 'psychic-reading':
        return 'bg-gradient-to-r from-bg-psychicReading-start to-bg-psychicReading-end'
      case 'interpretation-year':
        return 'bg-gradient-to-r from-bg-interYear-start to-bg-interYear-end'
      default:
        return 'bg-serviceBg'
    }
  }

  return (
    <div className="relative hover:-translate-y-2 transition-transform duration-200">
      <Link href={generateLocalizedPath(`/services/${link}`, locale)}>
        <div className="flex flex-1 items-center">
          <div className="flex flex-[1]">
            <Image src={pic} alt="Service" className="w-full object-contain h-[50vh]" />
          </div>
          <div className="flex flex-[2]">
            <div className={`${pickBackgroundColor(link)} px-8 py-2 rounded-custom-lg`}>
              <p className="text-center text-3xl">{t(content)}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
