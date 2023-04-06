import React, { useState } from 'react'

const ReactSideBar = () => {

  // manage the stste of the sidebar visibility
  const [isSideBarVisible, setisSideBarVisible] = useState(false)

  // function to toggle the sideBar visibility
  function toggleSideBar() {
    setisSideBarVisible(!isSideBarVisible);
  }
  return (

    <div className='min-h-screen bg-gradient-to-r from-cyan-400 via-purple-600 to-purple-700 text-center justify-center'>
      <h1 className='text-white text-6xl font-extrabold pt-10'>React Js Toggleable SideBar</h1>

      {/* button to toggle the sidebar */}
      <button className='bg-slate-100 text-slate-600 text-lg font-bold px-8 rounded-2xl h-10 w-52 mt-10'
        onClick={toggleSideBar}
      >
        {!isSideBarVisible ? 'Show SideBar' : 'Hide SideBar'}
      </button>

      {/* here is the sideBar */}
      <div className={`fixed inset-y-0 left-0 w-80 bg-slate-100 text-slate-600 text-lg font-bold shadow-2xl transition-all transform ${isSideBarVisible ? 'translate-x-0' : '-translate-x-full'
        }`}>

        {/* sidebar content will be here */}
        <div className='p-4'>
          <h1 className='text-2xl font-bold mb-4 pl-6 text-left'>Social Media App</h1>

          <ul className='pl-6 list-none text-left text-2xl'>

            <li className='mb-2'>
              <a className='text-blue-600 hover:text-blue-500'
                href='https://facebook.com/'
                target='_blank'
                rel='noopener nonreferrer'
              >
                Facebook
              </a>
            </li>
            <li className='mb-2'>
              <a className='text-blue-400 hover:text-blue-300'
                href='https://twitter.com/'
                target='_blank'
                rel='noopener nonreferrer'
              >
                Twitter
              </a>
            </li>
            <li className='mb-2'>
              <a className='text-blue-500 hover:text-blue-400'
                href='https://linkedin.com/'
                target='_blank'
                rel='noopener nonreferrer'
              >
                Linkedin
              </a>
            </li>
            <li className='mb-2'>
              <a className='text-pink-400 hover:text-pink-300'
                href='https://instagram.com/'
                target='_blank'
                rel='noopener nonreferrer'
              >
                Instagram
              </a>
            </li>

          </ul>
        </div>
      </div>
    </div>
  )
}

export default ReactSideBar