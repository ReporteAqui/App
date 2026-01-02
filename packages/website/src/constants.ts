import constantsJson from "../json/constants.json";
import noticesJson from "../json/notices.json";
import reportsJson from "../json/reports.json";
import newsJson from "../json/news.json";

declare global {
  var constants: typeof constantsJson;
  var notices: typeof noticesJson;
  var reports: typeof reportsJson;
  var news: typeof newsJson;
}
Object.assign(globalThis, Object.freeze({
    constants: constantsJson,
    notices: noticesJson,
    reports: reportsJson,
    news: newsJson
}));