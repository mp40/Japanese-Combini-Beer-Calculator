const {
  expect
} = require('chai')

const {
  describe,
  it
} = require('mocha')

const {
  test
} = require('..')

describe('tests', () => {
  it('should prove test environment is set up', () => {
    expect(test()).to.equal('working')
  })
})
