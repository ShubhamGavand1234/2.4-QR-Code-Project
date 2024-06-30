/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import fs from "node:fs";
import qr from "qr-image";

var url = "https://www.youtube.com/watch?v=vvQFTP9uRxA";

fs.writeFile("myUrl.txt", url, (err) => {
  if (err) throw err;
  console.log(`${url} added in myUrl.txt file`);
});

let qrCode = qr.image(url, { type: "png" });
qrCode.pipe(fs.createWriteStream("qrCode.png"));
