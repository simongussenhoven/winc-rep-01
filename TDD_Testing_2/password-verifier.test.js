const {
    hasRightLength,
    isNotNull,
    hasUpperCase,
    hasLowerCase,
    hasDigit,
    verifyPassword
} = require("./password-verifier.js");

test("Check if is right length", function () {
    expect(hasRightLength("abc")).toBe(true)
})

test("Check if is right length", function () {
    expect(hasRightLength("abcdefghij")).toBe(false)
})

test("Check if is not null", function () {
    expect(isNotNull(null)).toBe(false)
})

test("Check if contains uppercase", function () {
    expect(hasUpperCase("Abc123")).toBe(true)
})

test("Check if contains uppercase", function () {
    expect(hasUpperCase("wachtwoordje")).toBe(false)
})

test("Check if contains lowercase", function () {
    expect(hasLowerCase("acb123")).toBe(true)
})

test("Check if contains lowercase", function () {
    expect(hasLowerCase("FCAJAX!")).toBe(false)
})

test("Check if contains number", function () {
    expect(hasDigit("wimpieisdebeste")).toBe(false)
})

test("Check if contains number", function () {
    expect(hasDigit("acb123")).toBe(true)
})

test("Check if password passes", function () {
    expect(verifyPassword("acb123")).toBe(true)
})
test("Check if is rejected because null", function () {
    expect(verifyPassword("")).toBe(false)
})
test("Check if is rejected because of no capitals and no digits", function () {
    expect(verifyPassword("welkomwelkom")).toBe(false)
})
test("Check if is accepted due to", function () {
    expect(verifyPassword("welkom01!")).toBe(true)
})
test("Check if is rejected due to no lowercase letters", function () {
    expect(verifyPassword("WELKOM1234")).toBe(false)
})