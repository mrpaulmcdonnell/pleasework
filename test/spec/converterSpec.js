describe("My Converter", function() {
    it("should convert first number and second number", function () {
        expect(Converter1.AddTwoNumbers( 4, 6).toBe(10);
    })
     it("4 + string should be an error", function() {

        expect (function() {Converter1.AddTwoNumbers(4,"xyz")}).toThrow(new Error("Not a number"));
    })
    
     it("string + 6 should be an error", function() {

        expect (function() {Converter1.AddTwoNumbers("xyz", 6)}).toThrow(new Error("Not a number"));
    })
    
     it("string + string should be an error", function() {

        expect (function() {Converter1.AddTwoNumbers("xyz", "abc")}).toThrow(new Error("Not a number"));
    })

     it("should convert first number and second number", function () {
        expect(Converter2.SubtractTwoNumbers( 10, 6).toBe(4);
    })
     it("10 + string should be an error", function() {

        expect (function() {Converter2.SubtractTwoNumbers(10,"xyz")}).toThrow(new Error("Not a number"));
    })
    
     it("string + 6 should be an error", function() {

        expect (function() {Converter2.SubtractTwoNumbers("xyz", 6)}).toThrow(new Error("Not a number"));
    })
    
     it("string + string should be an error", function() {

        expect (function() {Converter.AddTwoNumbers("xyz", "abc")}).toThrow(new Error("Not a number"));
    })

     it("should convert first number and second number", function () {
        expect(Converter3.MultiplyTwoNumbers( 5, 2).toBe(10);
    })
     it("5 + string should be an error", function() {

        expect (function() {Converter3.MultiplyTwoNumbers(5,"xyz")}).toThrow(new Error("Not a number"));
    })
    
     it("string + 2 should be an error", function() {

        expect (function() {Converter3.MultiplyTwoNumbers("xyz", 2)}).toThrow(new Error("Not a number"));
    })
    
     it("string + string should be an error", function() {

        expect (function() {Converter3.MultiplyTwoNumbers("xyz", "abc")}).toThrow(new Error("Not a number"));
    })

     it("should convert first number and second number", function () {
        expect(Converter4.DivideTwoNumbers( 6, 2).toBe(3);
    })
     it("6 + string should be an error", function() {

        expect (function() {Converter4.DivideTwoNumbers(6,"xyz")}).toThrow(new Error("Not a number"));
    })
    
     it("string + 2 should be an error", function() {

        expect (function() {Converter4.DivideTwoNumbers("xyz", 2)}).toThrow(new Error("Not a number"));
    })
    
     it("string + string should be an error", function() {

        expect (function() {Converter4.DivideTwoNumbers("xyz", "abc")}).toThrow(new Error("Not a number"));
    })
     it("6 + 0 should be an error", function() {

        expect (function() {Converter4.DivideTwoNumbers(6, 0)}).toThrow(new Error("Indivisible"));
    })
})