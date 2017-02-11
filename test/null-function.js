'use strict'

const chai = require('chai')
const nullFunction = require('../lib/null-function')

const assert = chai.assert

describe('null-function', function () {

    it('should return a null function', function () {
        assert.strictEqual(nullFunction.toString(), 'function () {}')
    })

})