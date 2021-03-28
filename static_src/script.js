export function script() {
    console.log('Это файл script.js');
 }
 
 
import { script } from './script';

script();
console.log('А это index.js');

