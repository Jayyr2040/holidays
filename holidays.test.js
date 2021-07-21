const {describe,it,expect,test} = require('@jest')

describe("holidays", () => {
    it('should be able to list all holidays', () => {
        // arrange
       // const x = 1;
       // const y =2;
       // const add = (x,y) > x + y
        cy.visit("http://localhost:3003/holidays/seed")

        const Holiday = {
            find: (criteria, callback) => {  // call the holiday.find in the controllers/holidays.js
                callback(undefined, [{name: "New Year"}, {name: "Christmas"}])
            }
        }
        // act
        // const result = add(x,y)
        cy.visit("http://localhost:3003/holidays") // look for no of json items in /holidays

        //assert
        expect(result).toBe(5);
    })
})

