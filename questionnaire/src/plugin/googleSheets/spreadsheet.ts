import { google } from 'googleapis';
// import axios from 'axios';
const auth = new google.auth.GoogleAuth({
  // keyFile: 'credentials.json',
  keyFile: './src/plugin/googleSheets/credentials.json',
  scopes: 'https://www.googleapis.com/auth/spreadsheets',
});

const getGoogleSheetConnection = async () => {
  const client = await auth.getClient();
  const googleSheets = google.sheets({ version: 'v4', auth: client });
  // console.log('zzzzzzzzzzzzzzzzzzzzzzzzzzzzz');
  // console.log(googleSheets);
  // console.log('zzzzzzzzzzzzzzzzzzzzzzzzzzzzz');
  return { googleSheets };
};

const getSpreadSheetMetaData = async (googleSheets, spreadsheetId) => {
  return {
    metaData: await googleSheets.spreadsheets.get({
      auth,
      spreadsheetId,
    }),
  };
};

const getGoogleSheetRows = async (googleSheets, spreadsheetId, range) => {
  return {
    rows: await googleSheets.spreadsheets.values.get({
      auth,
      spreadsheetId,
      range,
    }),
  };
};

const appendSpreadSheetValues = async ({
  googleSheets,
  spreadsheetId,
  range,
  valueInputOption,
  values,
}) => {
  console.log('=========================');
  console.log(values);
  console.log('=========================');
  await googleSheets.spreadsheets.values.append({
    auth,
    spreadsheetId,
    range,
    valueInputOption,
    requestBody: {
      values,
    },
  });
};

const updateSpreadSheetValues = async ({
  googleSheets,
  spreadsheetId,
  range,
  valueInputOption,
  values,
}) => {
  await googleSheets.spreadsheets.values.update({
    auth,
    spreadsheetId,
    range,
    valueInputOption,
    requestBody: {
      values,
    },
  });
};

// const getValue = async ({ googleSheets, spreadsheetId, range }) => {
//   try {
//     const result = await googleSheets.spreadsheets.values.get({
//       auth,
//       spreadsheetId,
//       range,
//     });
//     const { Authorization } = await auth.getRequestHeaders();
//     const qs = {
//       gid: '464702025',
//       tqx: 'out:json',
//       tq: 'Select A,B,C,D,E,F,G,I,J,K',
//     };
//     // https://stackoverflow.com/questions/31765773/converting-google-visualization-query-result-into-javascript-array
//     const data = await axios.get(
//       `https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?gid=${qs.gid}&tqx=${qs.tqx}&tq=${qs.tq}`,
//       {
//         headers: {
//           Authorization: Authorization,
//         },
//       },
//     );
//     const [text, json_value] = data.data.split('\n');
//
//     return JSON.parse(
//       json_value.replace(
//         /(^google\.visualization\.Query\.setResponse\(|\);$)/g,
//         '',
//       ),
//     );
//   } catch (error) {
//     console.log(error.message);
//     return false;
//   }
// };
export {
  auth,
  getGoogleSheetConnection,
  getSpreadSheetMetaData,
  getGoogleSheetRows,
  appendSpreadSheetValues,
  updateSpreadSheetValues,
  // getValue,
};
