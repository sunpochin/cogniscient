// import type { NextApiRequest, NextApiResponse } from 'next'
// import * as admin from 'firebase-admin'

// // Initialize Firebase Admin SDK (replace with your actual config)
// if (!admin.apps.length) {
//   admin.initializeApp({
//     credential: admin.credential.cert({
//       projectId: 'your-project-id',
//       clientEmail: 'your-client-email',
//       privateKey: 'your-private-key'.replace(/\\n/g, '\n'),
//     }),
//     databaseURL: 'https://your-project-id.firebaseio.com',
//   })
// }

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method === 'POST') {
//     // Example: Handle Google login (in a real app, use client-side token)
//     const idToken = req.body.idToken // Assume token from client
//     try {
//       const decodedToken = await admin.auth().verifyIdToken(idToken)
//       res.status(200).json({ user: decodedToken })
//     } catch (error) {
//       res.status(401).json({ error: 'Authentication failed' })
//     }
//   } else {
//     res.status(405).json({ error: 'Method not allowed' })
//   }
// }
