import React from "react"
import Image from "next/image"
// import { Company_LINKS } from "@/app/utils/companylinks"
import Link from "next/link"
import { Company_LINKS } from "@/app/utils/companylinks"
import { Support_LINKS } from "@/app/utils/support_Links"
import { Contacts_LINKS } from "@/app/utils/contacts_Links"
// import { Contacts_LINKS } from "@/app/utils/contacts_Links"
// import { Support_LINKS } from "@/app/utils/support_Links"
// import SocialFollow from '@/components/SocialFollow'
const Footer = () => {
  return (
    <>

<div className='flex justify-between px-20 py-10 bg-gradient-to-r from-green-600 via-yellow-600 to-red-600 '>
      <div className="Wrapper justify-between flex gap-20 ">
      {/* First div with flex-grow-1 to take remaining space */}
      {/* <div className='flex-grow-1 bg-red-700'> */}
        <div className='grid grid-cols-1 grid-rows-2 '>
              {/* Logo div */}
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-green-400 via-yellow-400 to-red-400 flex justify-center items-center relative">
                      <div>
                          <Link href={"/"}>
                          <Image
                            src={"/images/Logo gen-ai institute.jpg"}
                            
                            alt="logo-image"
                            width={80}
                            height={80}
                            className="rounded-full" // Ensure the image is rounded
                          /></Link>
                      </div>  
                  
                  </div>
                  {/*--------------- Logo End ------------------- */}

                  <div className='Dashboard_Learning_Process text-justify'>
                      <p>
                      {`GenAI Institute is a pioneering educational institution dedicated to`}
                      <br />
                      {`providing comprehensive training in Generative AI. Our institute `}
                      <br />
                      {`offers a meticulously crafted curriculum designed to empower students `}
                      <br />
                      {`with the skills and knowledge necessary to excel in the rapidly evolving `}
                      <br />
                      {`Our expert instructors guide students through a thoughtfully curated`}
                      <br />
                      {`field of artificial intelligence.collection of practical exercises `}
                      <br />
                      {`and real-world projects, ensuring they gain hands-on experience and`}
                      <br />
                      {` mastery in Generative AI technologies.`}
                     </p>
                    </div>

            {/* </div> */}
        </div>

      {/* Second div Navigations */}
      <div className=''>
      <div>
      <h3 className="font-semibold mb-3 font-semibold text-2xl text-gray-100 ">Navigations</h3>
              <div className="grid grid-col-1 gap-2 items-center">
                {Company_LINKS.map((link, index) => (
                  <Link key={index} href={link.href}>
                    <p className="hover:font-bold hover:text-blue-500 hover:underline transition duration-300">
                      {link.name}
                    </p>
                  </Link>
                ))}
              </div>
          </div>
      </div>

      {/* Third div Support */}
      <div className=''>
      <h3 className="font-semibold mb-3 font-semibold text-2xl text-gray-100 ">Support</h3>
      <div className="grid grid-col-1 gap-2 items-center ">
            {Support_LINKS.map((link,index) => (
              <Link href={link.href} key={index}>
                <p className="hover:font-bold hover:text-blue-600 hover:underline transition duration-400"  
                >{link.name}</p>
              </Link>
            ))} 
          </div>
      </div>

      {/* Fourth div contac us */}
      <div className='bg-steel-blue-200'>
      <h3 className="font-semibold mb-3 font-semibold text-2xl text-gray-100 ">Contact</h3>
      <div className="grid grid-col-1 gap-2 items-center ">
            {Contacts_LINKS.map((link,index) => (
              <Link href={link.href} key={index} >
                <p className="hover:font-bold hover:text-blue-600 hover:underline transition duration 300"
                 >{link.name}</p>
              </Link>
            ))} 
            </div>
      </div>
      </div>
</div>

<div className="footer flex justify-between items-center p-10 border">
  <p>Copyright © 2024 <br />GenAI-Institute</p>
  <p>Designed By <b>Mobi DEV <br />GenAI-Institute</b></p>
  <p>Code By: <b>Mubashar & Faizan <br />on GitHub</b></p>
</div></>
    
  )
}

export default Footer