import constantsJson from "../json/constants.json";
import noticesJson from "../json/notices.json";

declare global {
  var constants: typeof constantsJson;
  var notices: typeof noticesJson;
}
Object.assign(globalThis, Object.freeze({
    constants: constantsJson,
    notices: noticesJson
}));