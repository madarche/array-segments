'use strict'

// const expect = require('must')
require('must')

const array_segments = require('../..')

describe('array-segments', () => {

    it('matches', () => {
        const res = array_segments.match(
            ['a', 'b', 'c', 'd', 'e', 'f', 'a', 'z', 'a', 'b'],
            [
                ['c', 'd', 'e'],
                ['b', 'c', 'd', 'e'],
                ['a', 'z'],
                ['a', 'b'],
                ['a']
            ])
        res.must.be.eql([
            {segment: ['c', 'd', 'e'], indices: [2]},
            {segment: ['a', 'z'], indices: [6]},
            {segment: ['a', 'b'], indices: [0, 8]}
        ])
    })

    it('matches case insensitively', () => {
        const res = array_segments.match(
            ['a', 'b', 'c', 'D', 'E', 'f', 'a', 'z', 'a', 'b'],
            [
                ['C', 'd', 'E'],
                ['b', 'c', 'd', 'e'],
                ['a', 'z'],
                ['a', 'b'],
                ['a']
            ],
            {ignore_case: true})
        res.must.be.eql([
            {segment: ['c', 'd', 'e'], indices: [2]},
            {segment: ['a', 'z'], indices: [6]},
            {segment: ['a', 'b'], indices: [0, 8]}
        ])
    })

})
