import { createReadStream } from "fs";
import { createStringStream } from "big-json";
import { promisify } from "util";

const pipeline = promisify(require("stream").pipeline);

export default async function parseBigJson(filePath) {
  const readStream = createReadStream(filePath);
  const parseStream = createStringStream({});

  await pipeline(readStream, parseStream);

  return new Promise<void>((resolve, reject) => {
    parseStream.on("data", (data) => {
      // handle each chunk of parsed data here
      console.log(data);
    });
    parseStream.on("end", () => {
      // handle end of parsing here
      resolve();
    });
    parseStream.on("error", (error) => {
      reject(error);
    });
  });
}
