// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from "fs";
import path from "path";
export default function handler(req, res) {
  const directory = path.join(__dirname + "../../../../../database");
  const Homejson = fs.readFileSync(`${directory}/home.json`, {
    encoding: "utf-8",
  });
  res.status(200).json({ Homejson: JSON.parse(Homejson) });
}
