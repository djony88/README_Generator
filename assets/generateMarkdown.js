// license badge
function renderLicenseBadge(license) {
if(license === 'MIT') {
    return `[MIT](https://img.shields.io/badge/license-MIT-brightgreen)`
} else if(license === 'Apache') {
    return '[Apache](https://img.shields.io/badge/license-Apache%202.0-blue)'    
} else if(license === 'GNU') {
    return `[GNU](https://img.shields.io/badge/license-GNU%20General%20Public-lightgrey)`
} else if(license === 'ISC') {
    return `[ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
} else if(license === 'N/A') {
    return ``
}
}

// licenses links
function renderLicenseLinks(license) {
    if(license === 'MIT') {
        return `[MIT License](https://opensource.org/licenses/MIT)`
    } else if(license === 'Apache') {
        return `[Apache License](https://www.apache.org/licenses/LICENSE-2.0)`
    } else if(license === 'GNU') {
        return `[GNU License](https://www.gnu.org/licenses/gpl-3.0.en.html)`
    } else if(license === 'ISC') {
        return '[ISC License](https://www.isc.org/licenses/)'
    } else if(license === 'none')
    return ``
}

// license permissions
function renderSectionsLinks(license) {
    if(license === 'MIT') {
        return `A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`
    } else if(license === 'Apache') {
        return `A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`
    } else if(license === 'GNU') {
        return `Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.`
    } else if(license === 'ISC') {
        return `A permissive license lets people do anything with your code with proper attribution and without warranty. The ISC license is functionally equivalent to the BSD 2-Clause and MIT licenses, removing some language that is no longer necessary.`
    } else if(license === 'none') {
        return ``
      }
}

function generateMarkdown(data) {
    return `# ${data.title}
    ${renderLicenseBadge(data.license)}
    ## Table of Contents
    [Description](#description)
    [Installation](#installation)
    [Usage](#usage)
    [License](#license)
    [Questions](#questions)

    ## Description
    ${data.description}

    ## Installation
    ${data.installation}

    ## Usage
    ${data.usage}

    ## License
    ${renderLicenseLinks(data.license)}
    ${renderSectionsLinks(data.license)}

    ## Questions
    ${data.questions}
    `;
}

module.exports = generateMarkdown;