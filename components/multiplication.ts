/**
 * Function that returns the multiplication of two numbers stored in (num1) and (num2).
 * @function multiply
 * @param {string | number} num1 - The first number to multiply.
 * @param {string | number} num2 - The second number to multiply.
 * @returns {number} - The result of the multiplication, or NaN if inputs are invalid.
 */

 function multiply(d: number , no2: number ) {
    const n1 = d;
    const n2 = no2;
    if (!isNaN(n1) && !isNaN(n2)) {
        return n1 * n2;
    } else {
        return NaN;
    }
}