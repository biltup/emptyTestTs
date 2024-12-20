import {MyApp} from "../src/impl/myApp";

describe('UserService Tests', () => {

    beforeEach(() => {
        console.log("Run before every test");
    });

    test('some test description', () => {
        new MyApp().testLog();
    });

});


