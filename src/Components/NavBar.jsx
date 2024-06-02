import logo from '../assets/new-logo.png'
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <nav className='bg-white flex items-center justify-between p-8 sticky top-0 z-20'>
        <img src={logo} className='w-1/6 max-w-xs -ml-4 '>
        </img>    
        <div className=" cursor-pointer md:hidden">
            {/* note */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>        
        </div>
        <div className='md:block hidden'>
            {/* note:hidden in small screensize and block and md n above */}
            <Link to='/' className='p-2'>Men's Fashion</Link>
            <Link to='/' >Women's Fashion</Link>
            <Link to='/' className='p-2'>Bedding</Link>
            <Link to='/' className='p-2'>Sofa Covers</Link>
            <Link to='/' className='p-2'>Waterproof</Link>
            <Link to='/' className='p-2'>Accessories</Link>
            <Link to='/' className='pl-36'><u>Login</u></Link>
            </div>
            <div className='flex space-x-4'>
            <Link><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg></Link>
            <Link><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
            </svg></Link>
            <Link>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
            </svg></Link>
            </div>
        
     </nav>
  )
}

export default NavBar

{/* <nav className="bg-gray-800">
<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
  <div className="relative flex h-16 items-center justify-between">
    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
      { /* Mobile menu button*/ }
    //   <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
    //     <span className="absolute -inset-0.5" />
    //     <span className="sr-only">Open main menu</span>
    //     { /*
    //                  Icon when menu is closed.
         
    //                  Menu open: "hidden", Menu closed: "block"
    //                */ }
    //     <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
    //       <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    //     </svg>
    //     { /*
    //                  Icon when menu is open.
         
    //                  Menu open: "block", Menu closed: "hidden"
    //                */ }
    //     <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
    //       <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    //     </svg>
    //   </button>
    // </div>
    // <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
    //   <div className="flex flex-shrink-0 items-center">
    //     <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
    //   </div>
    //   <div className="hidden sm:ml-6 sm:block">
    //     <div className="flex space-x-4">
    //       { /* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */ }
    //       <a href="#" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Dashboard</a>
    //       <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Team</a>
    //       <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Projects</a>
    //       <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Calendar</a>
    //     </div>
    //   </div>
    // </div>
    // <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
    //   <button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
    //     <span className="absolute -inset-1.5" />
    //     <span className="sr-only">View notifications</span>
    //     <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
    //       <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
    //     </svg>
    //   </button>

    //   { /* Profile dropdown */ }
    //   <div className="relative ml-3">
    //     <div>
    //       <button type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
    //         <span className="absolute -inset-1.5" />
    //         <span className="sr-only">Open user menu</span>
    //         <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
    //       </button>
    //     </div>

    //     { /*
//                      Dropdown menu, show/hide based on menu state.
         
//                      Entering: "transition ease-out duration-100"
//                        From: "transform opacity-0 scale-95"
//                        To: "transform opacity-100 scale-100"
//                      Leaving: "transition ease-in duration-75"
//                        From: "transform opacity-100 scale-100"
//                        To: "transform opacity-0 scale-95"
//                    */ }
//         <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex={-1}>
//           { /* Active: "bg-gray-100", Not Active: "" */ }
//           <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-0">Your Profile</a>
//           <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-1">Settings</a>
//           <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-2">Sign out</a>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

// { /* Mobile menu, show/hide based on menu state. */ }
// <div className="sm:hidden" id="mobile-menu">
//   <div className="space-y-1 px-2 pb-3 pt-2">
//     { /* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */ }
//     <a href="#" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
//     <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
//     <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
//     <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
//   </div>
// </div> */}