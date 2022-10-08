import fs from "fs";
import path from "path";

export type ApiMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export type ApiRoute = {
  method: ApiMethod;
  route: string;
  description: string;
};

export function getApiRoutesData(): ApiRoute[] {
  const apiRoutesDirectory = path.join(process.cwd(), "lib");

  const fullPath = path.join(apiRoutesDirectory, "api-routes.json");
  const fileContents = fs.readFileSync(fullPath, "utf-8");

  return JSON.parse(fileContents);
}
