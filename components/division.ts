/**
 * Function that returns the division of two numbers stored in (num1) over (num2).
 * @function divid
 * @param {string | number} num1 - The numerator.
 * @param {string | number} num2 - The denominator.
 * @returns {number} - The result of the division, or NaN if inputs are invalid.
 */
const divid = (num1: string | number, num2: string | number): number => {
    const n1 = parseInt(num1 as string);
    const n2 = parseInt(num2 as string);
    if (!isNaN(n1) && !isNaN(n2)) {
        return n1 / n2;
    } else {
        return NaN;
    }
};

export default divid;
