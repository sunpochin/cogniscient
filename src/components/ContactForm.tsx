'use client'
import { useForm } from 'react-hook-form'

interface ContactFormData {
  name: string
  email: string
  message: string
}

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>()
  
  const onSubmit = (data: ContactFormData) => {
    console.log(data)
    // 處理表單提交
    alert('Message sent! We will get back to you soon.')
    reset()
  }

  return (
    <div className="mt-20 w-4/5 mx-auto">
      <div className="text-[3.556rem] font-semibold mb-8">Contact Us</div>
      <div className="text-[1.333rem] font-semibold mb-6">
        We look forward to hear from you!
      </div>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="bg-[#dcebff] w-full max-w-[22.283rem] h-[3.144rem] flex items-center px-4">
          <input
            {...register('name', { required: 'Name is required' })}
            className="bg-transparent w-full outline-none text-[#5d85b9] placeholder-[#5d85b9]"
            placeholder="Name"
          />
        </div>
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

        <div className="bg-[#dcebff] w-full max-w-[49.45rem] h-[3.144rem] flex items-center px-4">
          <input
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
            type="email"
            className="bg-transparent w-full outline-none text-[#5d85b9] placeholder-[#5d85b9]"
            placeholder="Email"
          />
        </div>
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

        <div className="bg-[#dcebff] w-full max-w-[49.45rem] h-[20.083rem] p-4">
          <textarea
            {...register('message', { required: 'Message is required' })}
            className="bg-transparent w-full h-full outline-none resize-none text-[#5d85b9] placeholder-[#5d85b9]"
            placeholder="The message"
          />
        </div>
        {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}

        <button
          type="submit"
          className="bg-[#51a0ef] text-white px-8 py-3 rounded font-semibold hover:bg-[#4a90d9] transition-colors"
        >
          Send Message
        </button>
        
        <p className="text-[0.667rem] text-[#5d85b9] mt-4">
          You will receive a copy of the message after you submit
        </p>
      </form>
    </div>
  )
}

export default ContactForm