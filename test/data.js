const data = {
    obj: "obj",
    nested_once: { first: "first" },
    nested_twice: {
        twice: { inner_nest: { second: "second" } }
    },
    nested_thrice: {
        thrice: { second_nest: { tripple_nest: { tripple: "thrice" }, three: "three" } }
    }
}
const empty_obj = {}

const data_results = {
    obj: 'obj',
    'nested_once.first': 'first',
    'nested_twice.twice.inner_nest.second': 'second',
    'nested_thrice.thrice.second_nest.tripple_nest.tripple': 'thrice',
    'nested_thrice.thrice.second_nest.three': 'three'
}

const array_value = {
    obj: "obj",
    nested_once: { first: "first" },
    nested_twice: {
        twice: { inner_nest: [1, 2, 3, 4, 5] }
    }
}

const array_value_result = {
    obj: 'obj',
    'nested_once.first': 'first',
    'nested_twice.twice.inner_nest': [1, 2, 3, 4, 5]
}

module.exports = { data, data_results, empty_obj, array_value, array_value_result }