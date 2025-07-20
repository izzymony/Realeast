import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div>

     
        <footer className='bg-white p-6 md:p-12 '>
           <div className="md:flex">  
              <div className=' w-full'>

              
         <div className=' flex gap-2 '>      
         <Image  src={'/icons8-home-32.png'} alt='' width={24} height={24} className='object-contain'/> 
         <p className='text-black font-bold text-[18px]'>Realest</p>   
        
         </div>
         </div>
         <div className=' w-full'>
         <div className='grid grid-cols-2 gap-3 md:grid-cols-3'>
          <div className=''>
              <div className='flex flex-col gap-2'>
               <h1 className='text-black font-semibold'>SELL A HOME</h1> 
               <Link href={'/'} className='text-gray-600' >
               Request an offer
               </Link>            
               <Link href={'/'} className='text-gray-600' >
               Pricing
               </Link>            
               <Link href={'/'} className='text-gray-600' >
               Reviews
               </Link>            
               <Link href={'/'} className='text-gray-600' >
               Reviews
               </Link>            
               <Link href={'/'} className='text-gray-600' >
               stories
               </Link>            
              </div>
              </div>

          <div className='footer-header'>
              <div className='flex flex-col gap-2'>
               <h1 className='text-black font-semibold'>BUY A HOME</h1> 
               <Link href={'/'} className='text-gray-600' >
               Buy
               </Link>            
               <Link href={'/'} className='text-gray-600' >
               Finance
               </Link>            
                          
              </div>
              </div>


          <div className='footer-header'>
              <div className='flex flex-col gap-2'>
               <h1 className='text-black font-semibold'>BUY ,RENT AND SELL</h1> 
               <Link href={'/'} className='text-gray-600' >
               Buy and sell properties
               </Link>            
               <Link href={'/'} className='text-gray-600' >
               Rent home
               </Link>            
               <Link href={'/'} className='text-gray-600' >
               Builder trade-up
               </Link>            
                          
              </div>
              </div>


          <div className='footer-header'>
              <div className='flex flex-col gap-2'>
               <h1 className='text-black font-semibold'>TERMS & PRIVACY </h1> 
               <Link href={'/'} className='text-gray-600' >
               Trust & safety
               </Link>            
               <Link href={'/'} className='text-gray-600' >
               Finance
               </Link>            
               <Link href={'/'} className='text-gray-600' >
               Terms of Service
               </Link>            
                          
               <Link href={'/'} className='text-gray-600' >
               Privacy Policy
               </Link>            
                          
              </div>
              </div>


          <div className='footer-header'>
              <div className='flex flex-col gap-2'>
               <h1 className='text-black font-semibold'>BUY A HOME</h1> 
               <Link href={'/'} className='text-gray-600' >
               Company
               </Link>            
               <Link href={'/'} className='text-gray-600' >
               How it works
               </Link>            
               <Link href={'/'} className='text-gray-600' >
               Contact
               </Link>            
               <Link href={'/'} className='text-gray-600' >
              Investors
               </Link>            
                          
              </div>
              </div>


          <div className='footer-header'>
              <div className='flex flex-col gap-2'>
               <h1 className='text-black font-semibold'>RESOURCES</h1> 
               <Link href={'/'} className='text-gray-600' >
               Blog
               </Link>            
               <Link href={'/'} className='text-gray-600' >
              Guides
               </Link>            
                          
               <Link href={'/'} className='text-gray-600' >
              FAQ
               </Link>            
                          
              </div>
              </div>



         </div>
         </div>
         </div> 
      </footer>       
     
    </div>
  )
}

export default Footer
