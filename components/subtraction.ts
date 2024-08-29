/**
 * Subtracts num2 from num1.
 * @function sub
 * @param {string | number} num1 - The first number.
 * @param {string | number} num2 - The second number.
 * @returns {number} - The result of the subtraction, or NaN if inputs are invalid.
 */
export default function sub(num1: string | number, num2: string | number): number {
    const n1 = parseFloat(num1 as string);
    const n2 = parseFloat(num2 as string);
    if (!isNaN(n1) && !isNaN(n2)) {
        return n1 - n2;
    } else {
        return NaN;
    }
}