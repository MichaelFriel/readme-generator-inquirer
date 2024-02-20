// function to generate markdown for README
function generateMarkdown(data) {
  const licenseString = licenseImages(data.license);
  return `# ${data.Project}
${licenseString}
## Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Tests](#tests)
- [Contribution](#contribution)
- [Questions](#questions)

## Description
${data.Description}

## Installation
${data.Dependencies}

## Usage
${data.Usage}

## License
This application is covered under the ${data.license} License

## Tests
${data.Tests}

## Contribution
${data.Contribution}

## Questions
If you have any questions, you can contact me in the following ways:<br/>
[Git Hub Profile](https://github.com/${data.GitHub}) (github.com/${data.GitHub})<br/>
Email: ${data.Email}
`;
}

function licenseImages(license) {

let licenseString = ''

if (license == 'Mit') {
licenseString = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
} else 
if (license == 'Apache 2.0') {
  licenseString = `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
} else
if (license == 'Boost Software 1.0') {
  licenseString = `![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`
} else
if (license == 'BSD 3-Clause') {
  licenseString = `![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)`
}

return licenseString;
}

module.exports = generateMarkdown;
