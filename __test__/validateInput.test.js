import { validateInput } from '../src/client/js/formHandler';

//Test valid URL input in regex url form:

describe('validateInput function', () => {
    test('check if  input is letters only or not', () => {

        const value = "London";
        
        expect(validateUrl(value)).toBe(true);
        
    });

});
describe('validateInput function', () => {
    test('check if  input is letters only', () => {

        const value = "I love Salsa http/din-ding.";
        
        expect(validateUrl(value)).toBe(false);
        
    });

});