const assert = require('assert')
const thumbWar = require('../thumb-war')
const utils = require('../utils')

const originalGetWinner = utils.getWinner

// The line below mocks the getWinner function
utils.getWinner = (p1, p2) => p1

const winner = thumbWar('Kent C. Dodds', 'Ken Wheeler')
assert.strictEqual(winner, 'Kent C. Dodds')

// cleanup - re-assign the getWinner to its original 
// This method is called monkey patching - overwriting it and then making
// it deterministic

utils.getWinner = originalGetWinner