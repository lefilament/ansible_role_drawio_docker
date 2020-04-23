/**
 * Copyright (c) 2006-2019, JGraph Ltd
 * Copyright (c) 2006-2019, draw.io AG
 */
// Overrides of global vars need to be pre-loaded
window.EXPORT_URL = '/export'; //This points to ExportProxyServlet which uses the local export server at port 8000. 
window.DRAW_MATH_URL = 'math';
window.DRAWIO_CONFIG = null; //Replace with your custom draw.io configurations. For more details, https://desk.draw.io/support/solutions/articles/16000058316


//Disable unsupported services
urlParams['db'] = '0'; //dropbox
urlParams['gapi'] = '0'; //google
urlParams['gh'] = '0'; //github
urlParams['gl'] = '0'; //gitlab
urlParams['od'] = '0'; //onedrive
urlParams['tr'] = '0'; //trello
