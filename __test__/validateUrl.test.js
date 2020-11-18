import { validateUrl } from '../src/client/js/formHandler';

//Test valid URL input in regex url form:

describe('validateUrl function', () => {
    test('check if  input is a url or not', () => {

        const value = "https://worldessays.com/blog/500-words-essay-sample.html";
        
        expect(validateUrl(value)).toBe(true);
        
    });

});
describe('validateUrl function', () => {
    test('check if  input is a url or not', () => {

        const value = "I love Salsa http/din-ding.";
        
        expect(validateUrl(value)).toBe(false);
        
    });

});