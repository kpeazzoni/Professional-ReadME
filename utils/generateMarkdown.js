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
  * [Testing](#testing)
  * [Contributing](#contributing)
  * [Misc](#misc)
  * [Credits](#credits)
  * [Questions](#questions)
  
  ${renderLicenseLink(data.license)}
  
  ## Installation
  ### How do you install this application?\n
  ${data.installation}

  ## Usage
  ### How do you use this application?\n
  ${data.usage}

  ## Testing
  ### How do you test this application?\n
  ${data.testing}

  ## Contributing
  ### How can someone contribute to this application?\n
  ${data.contributing}

  ## Misc
  ### Who wrote the application?\n
  ${data.author}
  ### What is the GitHub username?\n
  ${data.username}
  ### What is your email?\n
  ${data.email}

  ## Credits
  ### List the people who contributed to your project:\n
  ${data.credit}


  ${renderLicenseSection(data.license)}

  ## Questions
  If you have any questions about this application, email me at ${data.email}.
  If you want to see more of my work, visit my GitHub page at [${data.username}](https://github.com/${data.username})

`;
}

module.exports = generateMarkdown;
