/**
 * Function that performs addition of two numbers stored in (num1) and (num2).
 * @function floatAddition
 * @param {string | number} num1 - First number to add
 * @param {string | number} num2 - Second number to add
 * @returns {number} - The result of the addition, or NaN if inputs are invalid.
 */
export const floatAddition = (num1: string | number, num2: string | number): number => {
    const n1 = parseFloat(num1 as string);
    const n2 = parseFloat(num2 as string);
    if (!isNaN(n1) && !isNaN(n2)) {
        return n1 + n2;
    } else {
        return NaN;
    }
};



// /**
//  * another function that make addition of two numbers stocked in (n1) and (n2)
//  * @function floatAddition
//  * @param {number} num1 - First number to add
//  * @param {number} num2 - Second number to
//  * @returns {number}
//  */
// export const floatAddition = (num1, num2) => {
//     const n1 = parseFloat(num1);
//     const n2 = parseFloat(num2);
//     if (!isNaN(n1) && !isNaN(n2)) {
//         return n1 + n2;
//     } else {
//         return NaN;
//     }
// };