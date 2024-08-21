"use client"
import React, { useState } from 'react'
import DeliveryPartnerLogin from "@/component/DeliveryPartnerLogin"
import DeliveryPartnerSignUp from "@/component/DeliveryPartnerSignUp"  
import Link from 'next/link'

import DeliveryNavbar from '@/component/DeliveryNavbar'
const Page = () => {

    const [toggle,setToggle]=useState(false)
    return (
        <div className='container mt-5 p-4'>
<DeliveryNavbar/>
          {toggle?  <DeliveryPartnerLogin/>:
            <DeliveryPartnerSignUp/>}
<div className='text-center  '>
    <Link onClick={()=>setToggle(!toggle)} href="#" className='text-decoration-none'>{toggle?"Don't Have Any Account?SignUp Here":"Already Have a account ?Login"}</Link>
</div>
        </div>
    )
}

export default Page
