import fs from "fs";
export function engine() {
  const res 
  = fs.readFileSync('./jsons/welcome.json','utf8');
    return res;
}
