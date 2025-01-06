import React from 'react'

const Footer = () => {
  return (
    <div className=" grid grid-cols-3  mx-7 my-8 rounded-xl">
    <div className=" min-h-80 bg-black  col-span-1 rounded-l-2xl">
      <div className=" flex flex-col text-white font-light ml-6 mt-8 gap-4">
        <h3 className=" text-sm">SOCIAL</h3>
        <a
          className=" text-xs text-[#999]"
          href="mailto:contact@cilvrstudio.com"
        >
          contact@cilvrstudio.com
        </a>
      </div>
    </div>
    <div className=" min-h-80 bg-black  col-span-1">
    <div className=" flex flex-col text-white font-light ml-6 mt-8 gap-4">
        <h3 className=" text-sm">BRAND</h3>

        <ul className=" flex flex-col gap-3 text-xs text-[#999]">
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Terms & Conditions</li>
        </ul>
       
      </div>
    </div>
    <div className=" min-h-80 bg-black col-span-1 rounded-r-2xl">
    <div className=" flex flex-col text-white font-light ml-6 mt-8 gap-4 ">
        <h3 className=" text-sm">CLIENT SERVICES</h3>

        <ul className=" flex flex-col gap-3 text-xs text-[#999] ">
          <li>Refund Policy</li>
          <li>Payment Policy</li>
          <li>Shipping Policy</li>
          <li>FAQs</li>
          <li>Track Order</li>
          <li>Exchange & Returns</li>
        </ul>
       
      </div>
    </div>

    
  </div>
  )
}

export default Footer