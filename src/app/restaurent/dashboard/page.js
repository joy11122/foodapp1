"use client"
import AddFood from '@/component/AddFood'
import FoodList from '@/component/FoodList'
import RestoNavbar from '@/component/RestoNavbar'
import React, { useState } from 'react'

const Page = () => {
const [toggle,setToggle]=useState(false)
    return (
        <div>
            <RestoNavbar/>
            <div className='container'>
            <div className='mt-2 mb-3 d-flex gap-2'>
            <button className='btn btn-outline-dark' onClick={()=>setToggle(true)}>Add Food</button>
            <button className='btn btn-outline-dark'onClick={()=>setToggle(false)}>DashBoard</button>
            </div>
         {toggle?<AddFood setToggle={setToggle}/>: <FoodList/>}
          
            </div>
        </div>
    )
}

export default Page
