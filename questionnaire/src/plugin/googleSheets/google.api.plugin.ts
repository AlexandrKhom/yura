// import {
//   google, // The top level object used to access services
//   sheets_v4, // For every service client, there is an exported namespace
//   Auth, // Namespace for auth related types
//   Common, // General types used throughout the library
// } from 'googleapis';
// import * as path from 'path';
//
// // Note: using explicit types like `Auth.GoogleAuth` are only here for
// // demonstration purposes.  Generally with TypeScript, these types would
// // be inferred.
// const scopes = ['https://www.googleapis.com/auth/spreadsheets'];
//
// const auth: Auth.GoogleAuth = new google.auth.GoogleAuth({
//   keyFile: path.join(__dirname, './credentials.json'),
//   scopes: scopes,
// });
//
// const googleSheets = google.sheets({ version: 'v4', auth });
