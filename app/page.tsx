import React from 'react'
import { getEvents } from '@/actions/events'
import { authorizeUrl } from '@/lib/oauth2Client'
import Link from 'next/link'
async function Home() {
 const events = await getEvents()
 console.log(events)
 return (
  <div className='flex min-h-screen flex-col items-center justify-between p-8'>
   <Link
    href={authorizeUrl}
    className='p-2 rounded-md bg-blue-800'>
    Auth
   </Link>
  </div>
 )
}

export default Home
