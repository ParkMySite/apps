// config.js - Updated with Apps Script URL
const CONFIG = {
    // Your Google Sheet ID
    SHEET_ID: '', //blog master sheet
    
    // Google Sheets API Key (for reading only)
    API_KEY: '',  // Replace with your restricted API key
    
    // Apps Script Web App URL (for writes - likes/comments)
    // DEPLOY THIS FIRST: Go to Extensions > Apps Script, paste code.gs, Deploy > New deployment > Web App
    APPS_SCRIPT_URL: '',
    
    // Sheet names
   
    SHEETS: {
        BLOG_DATA: 'blog data',
        COMMENTS_DATA: 'Comments data',
        CONFIGURE: 'configure',
        MASTER_CATEGORIES: 'master_categories',
        MASTER_TAGS: 'master_tags'
    }
};