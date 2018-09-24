const expect = require('expect');

var {Users} = require('./users');

describe('Users', () => {
    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Mike',
            room: 'Node course'
        }, {
            id: '2',
            name: 'Jen',
            room: 'React course'
        }, {
            id: '3',
            name: 'Bernard',
            room: 'Node course'
        }];
    });

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Test user',
            room: 'The testing room'
        };
        var res = users.addUser(user.id, user.name, user.room);
        expect(users.users).toEqual([user]);
    });

    it('should return names for node course', () => {
        var userList = users.getUserList('Node course');

        expect(userList).toEqual(['Mike', 'Bernard']);
    });

    it('should return names for react course', () => {
        var userList = users.getUserList('React course');

        expect(userList).toEqual(['Jen']);
    });

    it('should remove a user', function () {
        var user = users.removeUser('1');
        expect(user.id).toBe('1');
        expect(users.users.length).toBe(2);
        expect(users).toMatchObject({
            users: [{
                id: '2',
                name: 'Jen',
                room: 'React course'
            }, {
                id: '3',
                name: 'Bernard',
                room: 'Node course'
            }]
        });
    });

    it('should not remove a user', function () {
        var user = users.removeUser('4');
        expect(user).toBeFalsy();
        expect(users.users.length).toBe(3);
    });

    it('should find a user', function () {
        var userId = '2';
        var user = users.getUser(userId);

        expect(user.id).toBe('2');
    });

    it('should not find a user', function () {
        var userId = '4';
        var user = users.getUser(userId);

        expect(user).toBeFalsy();
    });
});

