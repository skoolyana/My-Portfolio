import React from 'react'
import {PhoneIcon,MapPinIcon,EnvelopeIcon} from 
"@heroicons/react/24/solid"
import { useForm,SubmitHandler } from "react-hook-form";





type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type Props = {};

function ContactMe({}:Props) {

  const {
    register,
    handleSubmit,
  } = useForm<Inputs>();
  
  const onSubmit: SubmitHandler<Inputs> = 
  (formdata) => {

    window.location.href = `mailto:sunil.kulyana@gmail.com?
    subject=${
      formdata.subject}&body=Hi, My name is ${formdata.name} : ${formdata.message}  ${formdata.email}`;
  };

  return (
    <div className='h-screen relative 
    flex items-center text-center 
    md:text-left md:flex-row 
    max-w-7xl  px-10 
    justify-evenly mx-auto'>
    
    <h3 className='absolute top-12 
    tracking-[10px] text-gray-500 text-xl'>

    Contact
    
    </h3>

    <div className='pt-20 flex flex-col space-y-10'>

        <h4 className='text-xl font-semibold text-center'>
        I have got  just what you need. {" "}            
        
        <span className='underline decoration-[#F7AB0A]/50'>
        Lets Talk.
        </span>
        
        </h4>

      <div className='space-y-5'>
      <div className='flex items-center space-x-5 justify-center'>
      <PhoneIcon className='text-[#F7ABBA] h-7 w-7 animate-pulse'></PhoneIcon>
      <p className='2xl'>+34631376624</p>
      </div>
      
      <div className='flex items-center space-x-5 justify-center'>
       <EnvelopeIcon className='text-[#F7ABBA] h-7 w-7 animate-pulse '>  </EnvelopeIcon>
      <p className='2xl'> sunil.kulyana@gmail.com </p>
      </div>
      
      <div className='flex items-center space-x-5 justify-center'>
       <MapPinIcon className='text-[#F7ABBA] h-7 w-7 animate-pulse '>  </MapPinIcon>
      <p className='2xl'> Calle San Maximiliano Madrid Spain </p>
      </div>
      
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col 
      space-y-2 w-fit mx-auto'>

      <div className='flex space-x-2'>
        <input {...register('name')} placeholder='Name' className='contactInput' type="text"></input>
        <input {...register('email')} placeholder='Email' className='contactInput' type="email"></input>
      </div>
      <input {...register('subject')} placeholder='Subject' className='contactInput' type="text"></input>
      <textarea {...register('message')} placeholder='Message' className='contactInput'></textarea>

  <button className='bg-[#F7AB0A] 
  
  py-5 
  px-10
  rounded-md
  text-black
  font-bold
  text-lg
  
  '>Submit</button>

      </form>


    </div>

    </div>
  )
}

export default ContactMe