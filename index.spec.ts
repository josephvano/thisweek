import expect from "expect";
import {sample} from "./index";

describe("sample", function () {
    it("should pass", function () {
        // Act
        const result = sample();

        // Assert
        expect(result).toEqual(true);
    });
});