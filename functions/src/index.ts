/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import {onRequest} from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import { initializeApp } from "firebase-admin/app";


initializeApp();

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

export const testLog = onRequest(
    {
        cors:false,
        region:["europe-north1"]
    },    
    (request, response) => {
   logger.info("Hello logs!", {structuredData: true});
   logger.info(request.body, {structuredData: true});
   response.send("Hello from Firebase!");
});
