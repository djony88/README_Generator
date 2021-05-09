// license badge
function renderLicenseBadge(license) {
if(license === 'MIT'){
    return `[MIT](https://img.shields.io/badge/license-MIT-brightgreen)`
} else if(license === 'Apache'){
    return '[Apache](https://img.shields.io/badge/license-Apache%202.0-blue)'    
} else if(license === 'GNU'){
    return `[GNU](https://img.shields.io/badge/license-GNU%20General%20Public-lightgrey)`
} else if(license === 'ISC'){
    return `[ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
} else if(license === 'N/A'){
    return ``
}
}