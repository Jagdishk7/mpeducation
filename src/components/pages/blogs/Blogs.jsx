import React from 'react'
import TabCard from '../../Cards/TabCard'

const Blogs = () => {
  return (
    <>
    <div className='flex-center fd-c'>
    <h1 className='page-heading'>Blogs</h1>
        <div className="sub-section w-90">
            <TabCard title={'Travelled to Rishikesh'} src={'assets/blogs/rishikesh.jpg'}/>
        </div>
        <div className="sub-section w-90">
            <TabCard title={'Travelled to Rishikesh'} src={'assets/blogs/rishikesh.jpg'}/>
        </div>
        <div className="sub-section w-90">
            <TabCard title={'Travelled to Rishikesh'} src={'assets/blogs/rishikesh.jpg'}/>
        </div>
        <div className="sub-section w-90">
            <TabCard title={'Travelled to Rishikesh'} src={'assets/blogs/rishikesh.jpg'}/>
        </div>
        <div className="sub-section w-90">
            <TabCard title={'Travelled to Rishikesh'} src={'assets/blogs/rishikesh.jpg'}/>
        </div>
    </div>
    </>
  )
}

export default Blogs
