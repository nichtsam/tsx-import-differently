import staticImport from "./common.cjs";
const dynamicImport = await import("./common.cjs");
console.log({ staticImport });
console.log({ dynamicImport });
