function parseInt(string) {
  let words = string.replace(/-/g, " - ");
  words = words.replace(/ and /g, " ")
  words = words.split(" ");
  console.log(words);
  return +words.reduce((result, word, index) => {
    if (word == "hundred" && index == words.length - 1 && words.length == 2) {
      return result + "00";
    }
    if (word == "hundred" && index == words.length - 2 && words.length == 3) {
      return result + "0";
    }
    switch (word) {
      case "one":
        return result + "1";

      case "two":
        return result + "2";

      case "three":
        return result + "3";

      case "three":
        return result + "3";

      case "four":
        return result + "4";

      case "five":
        return result + "5";

      case "six":
        return result + "6";

      case "seven":
        return result + "7";

      case "eight":
        return result + "8";

      case "nine":
        return result + "9";

      case "ten":
        return result + "10";

      case "eleven":
        return result + "11";

      case "twelve":
        return result + "12";

      case "thirteen":
        return result + "13";

      case "fourteen":
        return result + "14";

      case "fifteen":
        return result + "15";

      case "sixteen":
        return result + "16";

      case "seventeen":
        return result + "17";

      case "eighteen":
        return result + "18";

      case "nineteen":
        return result + "19";

      case "twenty":
        return result + "20";

      case "thirty":
        return result + "30";

      case "forty":
        return result + "40";

      case "fifty":
        return result + "50";

      case "sixty":
        return result + "60";

      case "seventy":
        return result + "70";

      case "eighty":
        return result + "80";

      case "ninety":
        return result + "90";

      case "-":
        return result = result.slice(0, -1)

      default:
        return result + "";
    }
  }, "")
}

console.log(parseInt("one hundred twenty-three"));
console.log(parseInt("two hundred forty-six"));
console.log(parseInt("one hundred one"));
console.log(parseInt("one hundred and one"));