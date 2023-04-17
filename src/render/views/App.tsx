import React from 'react'
import Layout from './Layout/Layout'
import Title from './title/Title'
import Pleyer from './player/Pleyer'
export default function App() {
  return (
    <div className='text-center h-screen w-screen flex flex-col'>
      <Title></Title>
      <div className='flex flex-1'>
        <Layout></Layout>

      </div>
      <Pleyer></Pleyer>
    </div>
  )
}
