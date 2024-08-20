import { type NextRequest } from 'next/server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { oauth2Client } from '@/lib/oauth2Client'

export async function GET(request: NextRequest) {
 const searchParams = new URL(request.url).searchParams
 const code = searchParams.get('code') ?? ''
 const { tokens } = await oauth2Client.getToken(code)
 oauth2Client.setCredentials(tokens)
 cookies().set('credentials', JSON.stringify(oauth2Client.credentials), { path: '/' })
 //  console.log(oauth2Client.credentials)
 return redirect('/')
}
