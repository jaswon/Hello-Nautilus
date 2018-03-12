import { genHistogram, reverseString } from './utils'

const assert = require('assert');
const _ = require('lodash')

describe("genHistogram", function() {
  it("handles empty strings", function () {
    let res = genHistogram("")
    assert.equal(_.keys(res).length,0)
  })
  it("handles unique characters", function () {
    let res = genHistogram("abcdefg")
    assert(_.values(res).every(i => i == 1))
  })
  it("handles repeated characters", function () {
    let res = genHistogram("aaabbbccc")
    assert(_.values(res).every(i => i == 3))
  })
  it("handles strings with non-alphabetic characters", function () {
    let check = { '0':1, '$':1, '#':1, ',':1, 'a':1 } 
    assert(_.isEqual(check, genHistogram("0$a,#")))
  })
})

describe("reverseString", function() {
  it("handles empty string", function () {
    assert.equal(reverseString(""),"")
  })
  it("handles odd length strings", function () {
    assert.equal(reverseString("hello"),"olleh")
  })
  it("handles even length strings", function () {
    assert.equal(reverseString("hello world!"), "!dlrow olleh")
  })
})
