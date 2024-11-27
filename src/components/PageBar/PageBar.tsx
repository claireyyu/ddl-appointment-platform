import React from 'react'

function PageBar({children}) {
  return (
    <div className="mx-4 md:mx-16 flex p-8 mt-16 justify-center items-end bg-gradient-to-r from-pStart to-pEnd text-foreground rounded-custom-lg">
      {children}
    </div>
  )
}

export default PageBar
