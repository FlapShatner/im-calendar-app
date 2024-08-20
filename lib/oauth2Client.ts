import { google } from 'googleapis'

const creds = process.env.NEXT_PUBLIC_CREDS ?? ''
const keys = JSON.parse(creds).web

export const oauth2Client = new google.auth.OAuth2(keys.client_id, keys.client_secret, keys.redirect_uris[0])
google.options({ auth: oauth2Client })

const scopes = ['https://www.googleapis.com/auth/calendar.readonly']
export const authorizeUrl = oauth2Client.generateAuthUrl({
 access_type: 'offline',
 scope: scopes.join(' '),
 prompt: 'consent',
})
