import { google } from 'googleapis'
import { cookies } from 'next/headers'
import { oauth2Client } from '@/lib/oauth2Client'

export async function getEvents() {
 const credentialsCookie = cookies().get('credentials')
 const credentials = credentialsCookie ? credentialsCookie.value : null
 const auth = credentials ? JSON.parse(credentials) : oauth2Client.credentials
 const calendar = google.calendar({ version: 'v3', auth })
 const res = await calendar.events.list({ calendarId: 'primary', timeMin: new Date().toISOString(), maxResults: 10, singleEvents: true, orderBy: 'startTime' })
 return res.data.items
}
