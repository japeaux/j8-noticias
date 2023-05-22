import fs from "fs";
const filename = "/s1hwwx3bdu6u5yd8mt9mkkxviovnbi.html";
export default async function api(req, res) {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.write(await fs.readFileSync(filename, "utf-8"));
  res.end();
}