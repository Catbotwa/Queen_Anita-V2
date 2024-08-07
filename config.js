//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "94764038114";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "ture";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEJnbFU3YjdoK2h6WjB3bUs2cEtDRER6Qzl6KzNDRVpRN1FsQ1paK2tVOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmFkeVJsdjUzOUp2WlV4cTU2NWNBVlJYYk9RN1RSdEplS2ZFTTI5MjlUND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDRGwxRGFqd1o0TDZvWS9wTm9qcHdBOHFEcldYUFBDMEVtTkpIZzRkcmxrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUWDYxdk5xMmdxOGRLSHBmYzNXNkU0REljT2pVamZqTi9nUjdOeWk0b2pVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktNMVM3azFpWVkvVllwbVFzbjhRb0VjUXpqYUZ0UTVQUEVNenlJT3EvblE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImYxc2lmV1hMOHl0Wmt5dVo2VkZUZlhTd04wRmQ4MTYxYXFPMGtnN2NRRUU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUI1ekIzQlYydTNwZzBRWEllcUVxdHYzRHdwaFRtcnhEbWowb0hvMHJWOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicTR4L01NazhnVUtUdUYwTFhiU3M2OEp0dGNlcm9RVDd6enY4Rm5HRGJtdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRPd2ljaXhsalkvUHNWcUxLME5kQ1ppOVBtT2tXTnJVYlh3ZGEvdHM5all1d1BPSzRjTVhLcXNPckFOaUlhU3YrYVY1QUtCeGl0OE83ZTJ2NDZzUEN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUxLCJhZHZTZWNyZXRLZXkiOiJQVmxpVXkwYnQwOHU5WWVUeHRKRmdKR2RTL1NpN215OEVjMHRQbFFtUVRBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJZWE12RGhBU1RGLWJRdUVJNE96aEJnIiwicGhvbmVJZCI6IjJiYTNiMjZkLTc0YTctNDhmZS04OGJlLWJkZjA2NGI4YWViNSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXU1ptelRyMWtWVVdXUlAxZmt3dVdHRzRpeEE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUGZnRTMvVVRyU0NuTzdDUk5nNG1ZY3lrWjN3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlZHQTJER1I5IiwibWUiOnsiaWQiOiI5NDc2NDAzODExNDoyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuG0v+G0rOG0tuG0rOG0vuG0rOG0t8ui4bS04bSsXG5cbuKAolxuXG7igKJcblxu4oCiXG5cbuKAolxuXG7igKJcblxu4oCiXG5cbuKAolxuXG7igKJcblxu4oCiXG5cbuKAolxuXG7igKJcblxu4oCiXG5cbuKAolxuXG4o8J2QgPCdkIPwnZCM8J2QiPCdkI0pIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJR2Q0THdDRU1EUnpMVUdHQTRnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJqUDJnbmdEZ2dZMW5rTWc1R3BjWSs3SGFFczhVZmdvSDAvRVBuLzg2dW5BPSIsImFjY291bnRTaWduYXR1cmUiOiJ4eWhGbmVuY2lnZEpId2lCSEdlQkp2S3BXS1pRK1ZWYVF3Z3V6anpVUFVJM1JxTGJBeEtqVVZSTHRkL3FJZHhsVDROaVNNbVk0UGtleEQ3VlBRWDVCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiUlgxMEhOa284ZE9uN0xCVVBvNjhFSzNlQ3YvZ3N5YWdlZ3hDNkRDU3MrTmE0RnN2aXJqVkdDYmlsQUE4OFZaeW5jLzZwOTZTSWV4b0xLdml5VEV4Q0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc2NDAzODExNDoyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQll6OW9KNEE0SUdOWjVESU9ScVhHUHV4MmhMUEZINEtCOVB4RDUvL09ycHcifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjMwMTc0MjIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSldOIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`adeehacke™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "adee",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
