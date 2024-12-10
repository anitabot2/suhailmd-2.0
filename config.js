in const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port it=process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "233201890700";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_05_23_12_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTg0LFxuICAgICAgICA2MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwLFxuICAgICAgICA5NSxcbiAgICAgICAgMjM1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxODIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDkzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjksXG4gICAgICAgIDIyMixcbiAgICAgICAgNzIsXG4gICAgICAgIDk3LFxuICAgICAgICAxODAsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzNixcbiAgICAgICAgOSxcbiAgICAgICAgODUsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQ3LFxuICAgICAgICA5MyxcbiAgICAgICAgMTk5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDUxLFxuICAgICAgICA4OCxcbiAgICAgICAgODQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzgsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA1MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNDksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxODksXG4gICAgICAgIDE0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5LFxuICAgICAgICA0MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDg2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDU5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyOCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxODQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODIsXG4gICAgICAgIDUxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDY1LFxuICAgICAgICAxODgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOTksXG4gICAgICAgIDExNixcbiAgICAgICAgNjQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjcsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTMxLFxuICAgICAgICA4MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDExNixcbiAgICAgICAgMjA2LFxuICAgICAgICAzNixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2MixcbiAgICAgICAgNDEsXG4gICAgICAgIDQzLFxuICAgICAgICAyMCxcbiAgICAgICAgMzksXG4gICAgICAgIDc2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA1NCxcbiAgICAgICAgMyxcbiAgICAgICAgMTM1LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTQsXG4gICAgICAgIDU3LFxuICAgICAgICAxODgsXG4gICAgICAgIDEwLFxuICAgICAgICA3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDM2LFxuICAgICAgICA0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5MixcbiAgICAgICAgNjMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDkwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTE3LFxuICAgICAgICA4NixcbiAgICAgICAgMTIwLFxuICAgICAgICAxOSxcbiAgICAgICAgMjE1LFxuICAgICAgICA5OCxcbiAgICAgICAgMTAzLFxuICAgICAgICA1MixcbiAgICAgICAgNjMsXG4gICAgICAgIDgxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTg1LFxuICAgICAgICA0MyxcbiAgICAgICAgMzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEyN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA0OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3LFxuICAgICAgICAyNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjE2LFxuICAgICAgICA2MixcbiAgICAgICAgMjE2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTg3LFxuICAgICAgICA4NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDgsXG4gICAgICAgIDEzMixcbiAgICAgICAgNjAsXG4gICAgICAgIDUxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDc5LFxuICAgICAgICA1OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDgzLFxuICAgICAgICAxODMsXG4gICAgICAgIDkyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjE0LFxuICAgICAgICA5MyxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTEwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjdJZVB6WGVTVXR3aUpMUWoyaEcwZGlJU3gxSVk0ZHN3WDlEbnU2NzdESTg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImFhaWpOWkM2UkJtbHBtdHl0SEVDZ2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiMzcxYzc2MTYtNTA2OS00MGNmLTgzNGQtMTE1ODEzYzA3NzExXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMSxcbiAgICAgIDIxNixcbiAgICAgIDI1MixcbiAgICAgIDIwOCxcbiAgICAgIDIyNyxcbiAgICAgIDIxMSxcbiAgICAgIDE2NSxcbiAgICAgIDI1MSxcbiAgICAgIDIwLFxuICAgICAgNSxcbiAgICAgIDU0LFxuICAgICAgMTUwLFxuICAgICAgMjQ3LFxuICAgICAgNjMsXG4gICAgICAyMjcsXG4gICAgICAxMjAsXG4gICAgICA5MixcbiAgICAgIDU4LFxuICAgICAgODMsXG4gICAgICAxNDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAwLFxuICAgICAgNTQsXG4gICAgICAxMzMsXG4gICAgICAxNTcsXG4gICAgICA3NCxcbiAgICAgIDEyOCxcbiAgICAgIDEwOSxcbiAgICAgIDQzLFxuICAgICAgMTIwLFxuICAgICAgODEsXG4gICAgICAxMDEsXG4gICAgICAyMTAsXG4gICAgICAzMCxcbiAgICAgIDIxNixcbiAgICAgIDEzOSxcbiAgICAgIDIyOCxcbiAgICAgIDEwNSxcbiAgICAgIDE1MCxcbiAgICAgIDY1LFxuICAgICAgMjM1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjJNTUU1WUUxXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzMyMDE4OTA3MDA6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTg2MTk1OTkyNjQ5ODIwOjJAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiQ29uY2lvdXMgQXlvdW5neVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01LcHpzTUtFTTZnMzdvR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZzk1aDlDWFVFSy9acUpWS0VYN1JyWUNJWVBhdDE4RnJZWExFR2hmeG9VQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJhaEpNWTRWWkFHM29uSjlWOU45M0R0R1djemd2TXZJMnViY0ltTHdzMk1wZjNqR1kybk9lUWdlZG5SMUhhQ0pPUExoaEdtNmxoTENpWVZMYmEwamdDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJMaFVHQ1U0enlpaTVHeGI2SUpCazVqS0o3K3VWblZLWEZJcWU5Zlp5Z3U1RGpkcVplRWFkZStKZTBNRk5XZE5hT3dQRURzeVlsenN0SXBWNmQ5bnZEQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzMyMDE4OTA3MDA6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA2NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzM4MDgyMTAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCQmJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJCYi5qc29uIjogIntcImtleURhdGFcIjpcIk01aWtjejhaSmVVTGlpdG9YY3JvUVk1ZjVoS0Y4SDRZOThkUUpqWGhZbUk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjgyNjE0NzAxMCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMzNzMyMzUzNzYyXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
