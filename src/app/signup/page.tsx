import React from 'react'

export default function SignupPage() {
  return (
    <div className="flex justify-center items-center">
      <form className="flex flex-col space-y-4 my-48 p-40 bg-foreground text-background rounded-custom">
        <div className="flex space-x-4">
          <label className="flex-1">
            Email:
          </label>
          <input type="text" name="email" className="border-background border-2 rounded-custom"/>
        </div>

        <div className="flex space-x-4">
          <label className="flex-1">
            Password:
          </label>
          <input type="password" name="password" className="border-background border-2 rounded-custom"/>
        </div>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

