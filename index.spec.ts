import {expect} from "chai";
import {sample} from "./index";

describe("sample", function () {
    it("should pass", function () {
        // Act
        const result = sample();

        // Assert
        expect(result).to.equal(true);
    });
});
