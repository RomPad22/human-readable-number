module.exports = function toReadable(number) {
    let units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    let tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let hundreds = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred']
    if (number < 20) return (units[number]);
    if (number < 100) {
        let result = tens[Math.floor(number / 10) - 2];
        if (number % 10 !== 0) result += ' ' + units[number % 10];
        return result;
    } else {
        let result = hundreds[Math.floor(number / 100) - 1];
        if ((number % 100 !== 0 || number % 10 !== 0) && number % 100 < 20) {
            result += ' ' + units[number % 100];
        } else if (number % 10 !== 0 && number % 100 >= 20) {
            result += ' ' + tens[Math.floor(number % 100 / 10) - 2] + ' ' + units[number % 10];
        } else if (number % 100 !== 0 && number % 10 === 0) {
            result += ' ' + tens[Math.floor(number % 100 / 10) - 2];
        }
        return result;
    }
}