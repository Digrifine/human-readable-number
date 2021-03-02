module.exports = function toReadable(number) {
    vocOfUnits = {
        0: "",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };
    var string = "";
    if (number == 0) {
        return "zero";
    }
    hundreds = Math.floor(number / 100);
    if (hundreds != 0) {
        string = string + vocOfUnits[hundreds] + " hundred";
    }
    tens = number - hundreds * 100;
    console.log(tens);
    if (tens != 0) {
        if (tens <= 20 || tens % 10 == 0) {
            if (hundreds != 0) {
                string = string + " " + vocOfUnits[tens];
            } else if (hundreds == 0) {
                string = string + vocOfUnits[tens];
            }
        } else if (tens > 20 && tens % 10 != 0) {
            tens_2 = Math.floor(tens / 10);
            if (hundreds != 0) {
                string = string + " " + vocOfUnits[tens_2 * 10];
            } else if (hundreds == 0) {
                string = string + vocOfUnits[tens_2 * 10];
            }
            units = tens - tens_2 * 10;
            string = string + " " + vocOfUnits[units];
        }
    }
    return string;
};
