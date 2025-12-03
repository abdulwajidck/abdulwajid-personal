// Google Services Integration
// This file provides utilities for Google OAuth, Sheets, and Drive integration

export interface GoogleAuthConfig {
  clientId: string
  clientSecret: string
  redirectUri: string
}

export interface GoogleSheetsConfig {
  spreadsheetId: string
  range: string
}

/**
 * Initialize Google OAuth
 */
export async function initGoogleAuth(config: GoogleAuthConfig) {
  if (typeof window === 'undefined') {
    return null
  }

  // Load Google API client
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = 'https://apis.google.com/js/api.js'
    script.onload = () => {
      window.gapi.load('auth2', () => {
        window.gapi.auth2.init({
          client_id: config.clientId,
        }).then(() => {
          resolve(window.gapi.auth2.getAuthInstance())
        }).catch(reject)
      })
    }
    script.onerror = reject
    document.head.appendChild(script)
  })
}

/**
 * Sign in with Google
 */
export async function signInWithGoogle() {
  if (typeof window === 'undefined' || !window.gapi) {
    throw new Error('Google API not loaded')
  }

  const authInstance = window.gapi.auth2.getAuthInstance()
  return authInstance.signIn()
}

/**
 * Sign out from Google
 */
export async function signOutFromGoogle() {
  if (typeof window === 'undefined' || !window.gapi) {
    return
  }

  const authInstance = window.gapi.auth2.getAuthInstance()
  return authInstance.signOut()
}

/**
 * Get Google Sheets data
 */
export async function getGoogleSheetsData(
  spreadsheetId: string,
  range: string,
  accessToken?: string
) {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}`
  
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  }
  
  if (accessToken) {
    headers['Authorization'] = `Bearer ${accessToken}`
  }

  const response = await fetch(url, { headers })
  
  if (!response.ok) {
    throw new Error('Failed to fetch Google Sheets data')
  }

  return response.json()
}

/**
 * Get Google Drive file
 */
export async function getGoogleDriveFile(
  fileId: string,
  accessToken?: string
) {
  const url = `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media`
  
  const headers: HeadersInit = {}
  
  if (accessToken) {
    headers['Authorization'] = `Bearer ${accessToken}`
  }

  const response = await fetch(url, { headers })
  
  if (!response.ok) {
    throw new Error('Failed to fetch Google Drive file')
  }

  return response
}

// Type declarations for window.gapi
declare global {
  interface Window {
    gapi: any
  }
}

