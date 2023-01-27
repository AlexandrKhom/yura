"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSpreadSheetValues = exports.appendSpreadSheetValues = exports.getGoogleSheetRows = exports.getSpreadSheetMetaData = exports.getGoogleSheetConnection = exports.auth = void 0;
const googleapis_1 = require("googleapis");
const auth = new googleapis_1.google.auth.GoogleAuth({
    keyFile: './src/plugin/googleSheets/credentials.json',
    scopes: 'https://www.googleapis.com/auth/spreadsheets',
});
exports.auth = auth;
const getGoogleSheetConnection = async () => {
    const client = await auth.getClient();
    const googleSheets = googleapis_1.google.sheets({ version: 'v4', auth: client });
    return { googleSheets };
};
exports.getGoogleSheetConnection = getGoogleSheetConnection;
const getSpreadSheetMetaData = async (googleSheets, spreadsheetId) => {
    return {
        metaData: await googleSheets.spreadsheets.get({
            auth,
            spreadsheetId,
        }),
    };
};
exports.getSpreadSheetMetaData = getSpreadSheetMetaData;
const getGoogleSheetRows = async (googleSheets, spreadsheetId, range) => {
    return {
        rows: await googleSheets.spreadsheets.values.get({
            auth,
            spreadsheetId,
            range,
        }),
    };
};
exports.getGoogleSheetRows = getGoogleSheetRows;
const appendSpreadSheetValues = async ({ googleSheets, spreadsheetId, range, valueInputOption, values, }) => {
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
exports.appendSpreadSheetValues = appendSpreadSheetValues;
const updateSpreadSheetValues = async ({ googleSheets, spreadsheetId, range, valueInputOption, values, }) => {
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
exports.updateSpreadSheetValues = updateSpreadSheetValues;
//# sourceMappingURL=spreadsheet.js.map