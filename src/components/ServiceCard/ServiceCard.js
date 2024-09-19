import React from 'react'
import { Card, CardContent, CardFooter } from '../ui/card'
import { Button } from '../ui/button'
import Link from 'next/link'

export default function ServiceCard(props) {
  return (
    <div>
      <Card>
        <CardContent className="flex flex-col items-center">
          <Link href={`/services/${props.name}`}>
            <img src="https://placehold.co/200" alt="Service" className="mt-4 cursor-pointer" />
          </Link>
        </CardContent>
        <CardFooter className="flex flex-col items-center">
          <p className="text-slate-800">Lorem dolor sit amet ipsum dolor sit amet</p>
        </CardFooter>
      </Card>
    </div>
  )
}
