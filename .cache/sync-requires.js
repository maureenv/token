// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/maureenvogel/webprojects/token/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/maureenvogel/webprojects/token/.cache/dev-404-page.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/maureenvogel/webprojects/token/src/pages/index.js"))
}

exports.json = {
  "layout-index.json": require("/Users/maureenvogel/webprojects/token/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/maureenvogel/webprojects/token/.cache/json/dev-404-page.json"),
  "index.json": require("/Users/maureenvogel/webprojects/token/.cache/json/index.json")
}