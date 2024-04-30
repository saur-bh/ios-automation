const fs = require('fs');
const { parseString } = require('xml2js');
const { html } = require('js-beautify');
const {html} = require("../subflows/")

(function convertJUnitXMLToHTML(xmlFilePath, htmlFilePath) {
    // Read the JUnit XML file
    fs.readFile(xmlFilePath, 'utf-8', (err, data) => {
        if (err) {
            console.error('Error reading XML file:', err);
            return;
        }

        // Parse the XML data
        parseString(data, (err, result) => {
            if (err) {
                console.error('Error parsing XML:', err);
                return;
            }

            // Construct HTML
            const htmlContent = `
                <!DOCTYPE html>
                <html>
                <head>
                    <title>JUnit Test Results</title>
                </head>
                <body>
                    <h1>JUnit Test Results</h1>
                    <table border="1">
                        <tr>
                            <th>Test Suite</th>
                            <th>Test Case</th>
                            <th>Status</th>
                        </tr>
                        ${result.testsuites.testsuite.map(suite => 
                            suite.testcase.map(testcase => `
                                <tr>
                                    <td>${suite.$.name}</td>
                                    <td>${testcase.$.name}</td>
                                    <td style="color: ${testcase.failure ? 'red' : 'green'};">
                                        ${testcase.failure ? 'Failed' : 'Passed'}
                                    </td>
                                </tr>
                            `).join('')
                        ).join('')}
                    </table>
                </body>
                </html>
            `;

            // Write HTML to file
            fs.writeFile(htmlFilePath, html(htmlContent, { indent_size: 2 }), err => {
                if (err) {
                    console.error('Error writing HTML file:', err);
                    return;
                }
                console.log('HTML file has been created successfully.');
            });
        });
    });
})();

// Usage
convertJUnitXMLToHTML('/Users/100rabh/samples/report/test.xml', '/Users/100rabh/samples/report/test.html');
