import fs from "node:fs";
import path from "node:path";
import { parse } from "yaml";

const contentPath = path.join(process.cwd(), "content", "site.yml");

export function getSiteContent() {
    const file = fs.readFileSync(contentPath, "utf8");
    return parse(file);
}