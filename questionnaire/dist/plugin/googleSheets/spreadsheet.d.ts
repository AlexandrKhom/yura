declare const auth: import("google-auth-library").GoogleAuth<import("google-auth-library/build/src/auth/googleauth").JSONClient>;
declare const getGoogleSheetConnection: () => Promise<{
    googleSheets: import("googleapis").sheets_v4.Sheets;
}>;
declare const getSpreadSheetMetaData: (googleSheets: any, spreadsheetId: any) => Promise<{
    metaData: any;
}>;
declare const getGoogleSheetRows: (googleSheets: any, spreadsheetId: any, range: any) => Promise<{
    rows: any;
}>;
declare const appendSpreadSheetValues: ({ googleSheets, spreadsheetId, range, valueInputOption, values, }: {
    googleSheets: any;
    spreadsheetId: any;
    range: any;
    valueInputOption: any;
    values: any;
}) => Promise<void>;
declare const updateSpreadSheetValues: ({ googleSheets, spreadsheetId, range, valueInputOption, values, }: {
    googleSheets: any;
    spreadsheetId: any;
    range: any;
    valueInputOption: any;
    values: any;
}) => Promise<void>;
export { auth, getGoogleSheetConnection, getSpreadSheetMetaData, getGoogleSheetRows, appendSpreadSheetValues, updateSpreadSheetValues, };
