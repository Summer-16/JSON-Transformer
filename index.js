const jsonTransformer = require('./jsonTransformer');
const jsonSample = require('./sample.json');

let roughObjSize = JSON.stringify(jsonSample).length;
console.log("Rough size of original JSON: ", roughObjSize);

const csvData = jsonTransformer.toCSV(jsonSample);
roughObjSize = JSON.stringify(csvData).length;
console.log("Rough size of converted CSV: ", roughObjSize);
// console.log("csvData: ", csvData);

const originalData = jsonTransformer.toJSON(csvData);
// console.log("originalData: ", originalData);