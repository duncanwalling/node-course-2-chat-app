const expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () =>{

        var from = 'testUser';
        var text = 'Test message';

        var message = generateMessage(from,text);
        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({
            from,
            text
        });
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () =>{

        var from = 'testUser';
        var latitude = 50;
        var longitude = 2;
        var url = "https://www.google.co.uk/maps?q=50,2";

        var message = generateLocationMessage(from,latitude,longitude);
        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({from, url});
    });
});