var dot = require("../index")
var chai = require("chai");
var test_data = require("./data")

expect = chai.expect

describe("dotnotate object tests", function () {
    it("should return an object after turning a nested object in a dot notation", function () {
        const obj = dot(test_data.data);
        expect(obj).to.eql(test_data.data_results)

    });
    it("should return an empty object if empty object is passed in", function () {
        const obj = dot(test_data.empty_obj);
        expect(obj).to.eql(test_data.empty_obj)

    });
    it("should return dot notated object regardless if one attribute has an array as a value", function () {
        const obj = dot(test_data.array_value);
        expect(obj).to.eql(test_data.array_value_result)

    });
})
