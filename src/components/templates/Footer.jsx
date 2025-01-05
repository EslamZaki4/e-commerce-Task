import { Logo } from "./Header"



function Footer() {
  return (
    <footer className="bg-gray-50">
    <div className="container py-4">
      <div className="sm:flex sm:items-center sm:justify-between">
        <div className="flex justify-center text-teal-600 sm:justify-start">
        <Logo dark={true}/>
        </div>
  
        <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
          Copyright &copy; 2025. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
  )
}

export default Footer