const fs = require("fs");

function convertJsonToCsv(jsonData) {
  var csv = '';

  // Get the headers from the first object
  var headers = Object.keys(jsonData[0]);

  // Add the headers to the CSV string
  csv += headers.join(',') + '\n';

  // Process each object in the JSON array
  jsonData.forEach(function(obj) {
    var row = [];

    // Process each property in the object
    headers.forEach(function(header) {
      var value = obj[header];

      // Check if the value is an empty string
      if (value !== '') {
        // Enclose the value in double quotes if it contains a comma
        if (value.includes(',')) {
          value = '"' + value + '"';
        }

        row.push(value);
      }
    });

    // Add the row to the CSV string
    csv += row.join(',') + '\n';
  });

  return csv;
}

var csvData = convertJsonToCsv(json);

// Write the CSV data to a file
var filename = "data.csv";
fs.writeFileSync(filename, csvData);

console.log("CSV file generated successfully.");
