const expect = require('expect');

var {isRealString} = require('./validation');

describe('isRealString', () => {
    it('should reject no string values', () =>{
        var res = isRealString(57);
        expect(res).toBe(false);
    });

    it('should reject string with only spaces', () => {
        var res = isRealString('   ');
        expect(res).toBe(false);
    });

    it('should allow string with non-space characters', () => {
        var res = isRealString('Testing string');
        expect(res).toBe(true);
    });
});

