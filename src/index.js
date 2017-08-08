'use strict'

function match(array, segments, case_insensitive) {
    if (case_insensitive) {
        array = array.map((el) => {
            return el.toLowerCase()
        })
    }

    // The indices of the used elements in the array
    let used = []

    return segments.reduce((matches, segment) => {
        if (case_insensitive) {
            segment = segment.map((el) => {
                return el.toLowerCase()
            })
        }

        let index = array.indexOf(segment[0])

        // The indices of the segment in the array. That is for each segment,
        // the index in the array of the first element of the segment.
        const indices = []

        while (index > -1) {
            // The indices in the array of each segment elem
            const indices_of_segment_elems = []

            let i = 0
            let res = segment.every((elem) => {
                let idx_of_segment_elem = index + i

                if (used.includes(idx_of_segment_elem)) {
                    return false
                }

                indices_of_segment_elems.push(idx_of_segment_elem)
                i += 1
                return elem == array[idx_of_segment_elem]
            })

            if (res) {
                indices.push(index)
                used = used.concat(indices_of_segment_elems)
            }

            index = array.indexOf(segment[0], index + 1)
        }

        if (indices.length) {
            matches.push({segment, indices})
        }

        return matches
    }, [])
}

module.exports = {
    match
}
