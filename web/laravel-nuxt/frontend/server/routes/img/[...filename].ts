import fs from "node:fs";
import path from "node:path";
import { fileTypeFromFile } from "file-type";
const __dirname = new URL(import.meta.url).pathname;
const __root =
  process.env.APP_ENV === "local"
    ? path.resolve(__dirname, "../../../")
    : "/var/task/frontend";
const ASSETS_IMG_DIR = __root + "/assets/img/";

export default defineEventHandler(async (event) => {
  const filename = event.context.params?.filename;
  const files = fs.readdirSync(ASSETS_IMG_DIR);
  const imgFileName = files.find((file) => file === filename);
  if (!imgFileName) {
    throw createError({
      statusCode: 404,
      statusMessage: "Image file not found!!",
    });
  }

  const imgFilePath = ASSETS_IMG_DIR + imgFileName;
  const fileType = await fileTypeFromFile(imgFilePath);
  const mime = fileType?.mime ?? "image/png";
  const bufer = fs.readFileSync(imgFilePath);
  const body = bufer.toString("base64");
  setResponseStatus(event, 200);
  setHeader(event, "Content-Type", mime);
  return body;
});
