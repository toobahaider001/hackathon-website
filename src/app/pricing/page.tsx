import FAQs from '@/components/ui/FAQs'
import Pricing from '@/components/ui/Pricing'
import Pricing2 from '@/components/ui/Pricing2'
import Trials from '@/components/ui/Trials'
import React from 'react'
const page = () => {
  return (
    <div>
        <Pricing />
        <Pricing2 />
        <FAQs/>
        <Trials />
    </div>
  )
}

export default page