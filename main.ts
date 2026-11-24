import { writeFileSync } from "fs";

const entry = "My human said ship fast. I shipped the bug before the feature.";

writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);