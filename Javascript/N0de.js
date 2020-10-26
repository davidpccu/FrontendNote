/**
 * Write JSON to file (將 JSON 寫到文件)
 */
const fs = require('fs');
const jsonToFile = (obj, filename) => fs.writeFile(`./${filename}.json`, JSON.stringify(obj, null, 2))
//jsonToFile({test: "is passed"}, 'testJsonFile');