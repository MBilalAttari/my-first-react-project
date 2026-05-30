import React from 'react'
import Navbar from './Navbar'
import PageContent from './pageContent'

const Section1 = (props) => {
  return (
    <div>
      <div className='h-screen w-full'>
        <Navbar />
        <PageContent users={props.users} />
      </div>
    </div>
  )
}

export default Section1
