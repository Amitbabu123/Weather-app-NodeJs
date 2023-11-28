
// // require('dotenv').config();

// // const http = require("http");
// // const fs = require("fs");
// // var requests = require("requests");


// // const homeFile = fs.readFileSync("home.html", "utf-8");
// require('dotenv').config();
// const http = require("http");
// const fs = require("fs");
// const axios = require("axios"); // Replace 'requests' with 'axios'

// const homeFile = fs.readFileSync("home.html", "utf-8");


// const replaceVal = (tempVal, orgVal) => {
//   let temperature = tempVal.replace("{%tempval%}", orgVal.main.temp);
//   temperature = temperature.replace("{%tempmin%}", orgVal.main.temp_min);
//   temperature = temperature.replace("{%tempmax%}", orgVal.main.temp_max);
//   temperature = temperature.replace("{%location%}", orgVal.name);
//   temperature = temperature.replace("{%country%}", orgVal.sys.country);
//   temperature = temperature.replace("{%tempstatus%}", orgVal.weather[0].main);

//   return temperature;
// };

// // const server = http.createServer((req, res) => {
// //   if (req.url == "/") {
// //     requests(
// //       `http://api.openweathermap.org/data/2.5/weather?q=Pune&units=metric&appid=${process.env.APPID}`
// //     )
// //       .on("data", (chunk) => {
// //         const objdata = JSON.parse(chunk);
// //         const arrData = [objdata];
// //         // console.log(arrData[0].main.temp);
// //         const realTimeData = arrData
// //           .map((val) => replaceVal(homeFile, val))
// //           .join("");
// //         res.write(realTimeData);
// //         // console.log(realTimeData);
// //       })
// //       .on("end", (err) => {
// //         if (err) return console.log("connection closed due to errors", err);
// //         res.end();
// //       });
// //   } else {
// //     res.end("File not found");
// //   }
// // });

// // server.listen(8000, "127.0.0.1");




// const server = http.createServer((req, res) => {
//     if (req.url == "/") {
//         axios
//             .get("https://api.openweathermap.org/data/2.5/weather", {
//                 params: {
//                     q: "pune",
//                     appid: process.env.APPID,
//                 },
//             })
//             .then((response) => {
//                 const orgVal = response.data;
//                 const realTimeData = replaceVal(homeFile, orgVal);
//                 res.write(realTimeData);
//                 res.end();
//             })
//             .catch((error) => {
//                 console.error("Error fetching weather data:", error);
//                 res.end("Error fetching weather data");
//             });
//     } else {
//         res.end("File not found");
//     }
// });

// server.listen(8000, "127.0.0.1");



// Load environment variables from .env file
require('dotenv').config();

const http = require("http");
const fs = require("fs");
const axios = require("axios");

const homeFile = fs.readFileSync("home.html", "utf-8");

const replaceVal = (tempVal, orgVal) => {
  let temperature = tempVal.replace("{%tempval%}", orgVal.main.temp);
  temperature = temperature.replace("{%tempmin%}", orgVal.main.temp_min);
  temperature = temperature.replace("{%tempmax%}", orgVal.main.temp_max);
  temperature = temperature.replace("{%location%}", orgVal.name);
  temperature = temperature.replace("{%country%}", orgVal.sys.country);
  temperature = temperature.replace("{%tempstatus%}", orgVal.weather[0].main);

  return temperature;
};

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=noida&appid=${process.env.APPID}`)
      .then((response) => {
        const orgVal = response.data;
        const realTimeData = replaceVal(homeFile, orgVal);
        res.write(realTimeData);
        res.end();
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        res.end("Error fetching weather data");
      });
  } else {
    res.end("File not found");
  }
});

const PORT = process.env.PORT || 8000;
server.listen(PORT, "127.0.0.1", () => {
  console.log(`Server is running on port ${PORT}`);
});

