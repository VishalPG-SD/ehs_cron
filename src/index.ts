import axios from "axios";
import * as logger from "firebase-functions/logger";
import {onSchedule} from "firebase-functions/v2/scheduler";
// import * as remoteConfig from 'firebase-functions/v2/remote-config';

// // Initialize Remote Config
// const config = remoteConfig();

// // Get the base URL from Remote Config
// const baseURL = config.getString('host_name');

const baseURL = 'https://backend-service-b448439-820564601421.us-central1.run.app/';

// Define the cron URLs using the base URL
const cron1URL = `${baseURL}/cron/every6hours`;
const cron2URL = `${baseURL}/cron/every12hours`;

export const hit6PMCron  = onSchedule("every 6 hours", () => {
  axios.get(cron1URL)
    .then((response: any) => {
      logger.info("Cron succesfully ran for each 6 hours", {structuredData: true});
    })
    .catch((error: any) => {
      logger.info("Error in running each 6  hours cron", {structuredData: true}, error);
    });
})

export const hit5PMCron  = onSchedule("every 12 hours", () => {
  axios.get(cron2URL)
    .then((response: any) => {
      logger.info("Cron succesfully ran for each 12 hours", {structuredData: true});
    })
    .catch((error: any) => {
      logger.info("Error in running each 12  hours cron", {structuredData: true}, error);
    });
})

