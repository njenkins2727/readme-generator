
function generateLicenseBadge(license){

  if(license === 'GPL-v2'){
    return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
  }
  if(license === 'MIT'){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  if(license === 'Apache-2.0'){
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  if (license === 'No license'){
    return '';
  }
}

function generateMarkdown({
  title, 
  license,
  description,
  installation,
  usage,
  test,
  contributing,
  github,
  email
}) {
  return `# ${title}

${generateLicenseBadge(license)}

## Table of Content 
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Collaborators](#Collaborators)
- [Test](#Test)
- [License](#License)
- [Question](#Question)

## Description
${description}.

## Installation
${installation}. 

## Usage
${usage}.

## Contributing
${contributing}.

## Test
${test}.

## License 
This project is under ${license}.

## Questions
If you want to contact me or have any questions you can visit my [Github](https://github.com/${github})
or if you have any further questions you can also send me an email: ${email}
`;
}

module.exports = generateMarkdown;
