import React from 'react'
import { Card, CardContent, CardFooter } from '../ui/card'
import { Button } from '../ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function ServiceCard({name, description, pic}) {
  return (
    <div>
      <Card className="border-none">
        <CardContent className="flex flex-col items-center">
          <Link href={`/services/${name}`}>
            <Image src={pic} alt="Service" className="cursor-pointer" />
          </Link>
        </CardContent>
        <CardFooter className="flex flex-col items-center text-center">
          <p>{description}</p>
        </CardFooter>
      </Card>
    </div>
  )
}
