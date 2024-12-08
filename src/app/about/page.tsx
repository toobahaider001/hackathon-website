import About from '@/components/ui/About'
import Comapny from '@/components/ui/Comapny'
import Grow from '@/components/ui/Grow'
import Meet from '@/components/ui/Meet'
import Problems from '@/components/ui/Problems'
import React from 'react'

const page = () => {
  return (
    <div><About />
    <Problems />
    <Meet />
    <Comapny />
    <Grow /></div>
  )
}

export default page