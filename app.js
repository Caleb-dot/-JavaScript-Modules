

import fs from "fs"

import {welcome} from "./welcome";


welcome.sayHello()
;

import { add, subtract } from './mathModule.js';
import { toUpperCase, toLowerCase } from './stringModule.js';

console.log('Add: ', add(5, 3));
console.log('Subtract: ', subtract(10, 4));

console.log('Uppercase: ', toUpperCase('hello'));
console.log('Lowercase: ', toLowerCase('WORLD'));

import multiply, { add, subtract } from './mathModule.js';
import { toUpperCase, toLowerCase } from './stringModule.js';

console.log('Add: ', add(5, 3));
console.log('Subtract: ', subtract(10, 4)); 
console.log('Multiply: ', multiply(4, 5));
console.log('Uppercase: ', toUpperCase('hello')); 
console.log('Lowercase: ', toLowerCase('WORLD'));

export function add(a, b) {
    return a + b;
}
export function subtract(a, b) {
    return a - b;
}
import { add, subtract } from './mathModule.js';

console.log(add(5, 3));        // Output: 8
console.log(subtract(5, 3))

export function add(a, b) {
    return a + b;
}
export function subtract(a, b) {
    return a - b; }
    export default function multiply(a, b) {
        return a * b;
        }
        import multiply, { add, subtract } from './mathModule.js';


console.log('Add: ', add(5, 3)); // prints 8
console.log('Subtract: ', subtract(10, 4)); // prints 6
console.log('Multiply: ', multiply(6, 7));

import { toUpperCase } from './stringModule.js';
export function add(a, b) {
    return a + b;
    }
    export function addAndLogUpper(a, b) {
        const result = add(a, b);
        console.log(toUpperCase(result.toString())); }

        export function subtract(a, b) {
            return a - b;
            }

            export default function multiply(a, b) {
                return a * b;
                }
                import multiply, { add, subtract, addAndLogUpper } from './mathModule.js';

                addAndLogUpper(10, 20); // Output: 30 in uppercase (i.e., '30')

                console.log('Multiply: ', multiply(4, 5))

                export function findMax(arr) {
                    if (arr.length === 0) return undefined; 
                return Math.max(.arr);
                }
                export function reverseArray(arr) {
                    return arr.slice().reverse(); ; 
                }import { findMax, reverseArray } from './arrayModule.js';
                
                const numbers = [3, 1, 4, 1, 5, 9];
                
                console.log('Max value: ', findMax(numbers)); // Output: Max value: 9
                
                console.log('Reversed array: ', reverseArray(numbers));
