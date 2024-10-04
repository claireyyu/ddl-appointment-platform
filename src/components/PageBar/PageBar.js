import React from 'react'

function PageBar({children}) {
  return (
    <div className="flex p-8 justify-center items-end bg-gradient-to-r from-pStart to-pEnd mx-4 md:mx-16 text-foreground rounded-custom-lg">
      {children}
    </div>
  )
}

export default PageBar
