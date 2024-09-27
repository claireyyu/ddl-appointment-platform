import React from 'react'

export default function page(searchParams) {
  const result = searchParams.result
  console.log(result)
  return (
    <div>
      <p>{result}</p>
    </div>
  )
}
