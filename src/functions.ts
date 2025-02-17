/**
 * Consumes a single temperature in Fahrenheit (a number) and converts to Celsius
 * using this formula:
 *      C = (F - 32) * 5/9
 */
export function fahrenheitToCelius(temperature: number): number {
    let final = ((temperature - 32) * 5) / 9;
    return final;
}

/**
 * Consumes three numbers and produces their sum. BUT you should only add a number
 * if the number is greater than zero.
 */
export function add3(first: number, second: number, third: number): number {
    let finalCount = 0;

    if (first > 0) {
        finalCount += first;
    }
    if (second > 0) {
        finalCount += second;
    }
    if (third > 0) {
        finalCount += third;
    }

    return finalCount;
}

/**
 * Consumes a string and produces the same string in UPPERCASE and with an exclamation
 * mark added to the end.
 */
export function shout(message: string): string {
    let newString = message.toUpperCase() + "!";
    return newString;
}

/**
 * Consumes a string (a message) and returns a boolean if the string ends in a question
 * mark. Do not use an `if` statement in solving this question.
 */
export function isQuestion(message: string): boolean {
    // let mssg = message;
    // if (mssg.endsWith("?")) {
    //     return true;
    // } else {
    //     return false;
    // }

    //OR WITHOUT USING IF WE CAN DO

    return message.endsWith("?");
}

/**
 * Consumes a word (a string) and returns either `true`, `false`, or `null`. If the string
 * is "yes" (upper or lower case), then return `true`. If the string is "no" (again, either
 * upper or lower case), then return `false`. Otherwise, return `null`.
 */
export function convertYesNo(word: string): boolean | null {
    // let str = word.toLowerCase();
    // let str2 = word.toUpperCase();

    // if (str || str2 == "yes") {
    //     return true;
    // } else if (str || str2 == "no") {
    //     return false;
    // } else {
    //     return null;
    // }

    if (word.toLowerCase() == "yes") {
        return true;
    } else if (word.toLowerCase() == "no") {
        return false;
    } else {
        return null;
    }
}
