// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `<img src="https://img.shields.io/badge/license-${license}-blue.svg" alt="GitHub License">`;
  }
  return " ";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None")  {
    return `* [License](#license)`;
  }
  return " ";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None")  {
    return `## License\nThis project is licensed under the: ${license} license.`
}
return " ";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
 ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}  
  
  
  ## Table of Contents  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  ${renderLicenseLink(data.license)}
  
  ## Installation

  ## Usage

  ${renderLicenseSection(data.license)}

  ## Questions
  If you have any questions about this application, email me at ${data.email}.
  If you want to see more of my work, visit my GitHub page at [${data.username}](https://github.com/${data.username})

`;
}

module.exports = generateMarkdown;
