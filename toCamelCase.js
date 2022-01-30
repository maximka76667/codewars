// https://www.codewars.com/kata/517abf86da9663f1d2000003

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str) {
  return str ? str.split(/-|_/).map((w, i) => (i > 0 ? w[0].toUpperCase() : w[0]) + w.slice(1)).join('') : str;
}