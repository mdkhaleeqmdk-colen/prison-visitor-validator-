// Prison Visitor Access Validator
// Civil Service Technical Task Example
// This program validates if a visitor can enter a prison based on rules

const visitors = require("./visitors.json");

// Rule: Age must be 18+ and valid ID must be present
function validateVisitor(visitor) {
  if (visitor.age < 18) {
    return `${visitor.name}: FAIL - Under age`;
  }

  if (!visitor.hasID) {
    return `${visitor.name}: FAIL - No ID provided`;
  }

  return `${visitor.name}: PASS - Access granted`;
}

function runValidation() {
  console.log("Checking visitor eligibility...\n");

  visitors.forEach((visitor) => {
    const result = validateVisitor(visitor);
    console.log(result);
  });
}

runValidation();
