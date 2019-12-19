[![Build Status](https://travis-ci.org/kenneth051/objectdotnotate.svg?branch=master)](https://travis-ci.org/kenneth051/objectdotnotate)

[![Coverage Status](https://coveralls.io/repos/github/kenneth051/objectdotnotate/badge.svg?branch=fix-coverllas)](https://coveralls.io/github/kenneth051/objectdotnotate?branch=fix-coverllas)

# Object To String Dot Notation
Javascript function that turns nested json objects into dotted strings with their corresponding values it takes in an object and returns an object with string notation of all nested objects . This comes in handy when you are filtering a mongo db query using a nested object or a smiple object.

Example

      data = {
          obj: "obj",
          nested_once: { first: "first" },
          nested_twice: {
              twice: { inner_nest: { second: "second" } }
          },
          nested_thrice: {
              thrice: { second_nest: { tripple_nest: { tripple: "thrice" }, three: "three" } }
          }
      }

//call the relevant method to convert our object 

        returnedObj = objNotateToString(data)

//returnedObj output

      {
        obj: 'obj',
        'nested_once.first': 'first',
        'nested_twice.twice.inner_nest.second': 'second',
        'nested_thrice.thrice.second_nest.tripple_nest.tripple': 'thrice',
        'nested_thrice.thrice.second_nest.three': 'three'
      }

**If an object passed in has an array value, Then the output will be as below**
example

    data={
        obj: "obj",
            nested_once: { first: "first" },
            nested_twice: {
                twice: { inner_nest: [1,2,3,4,5] }
            }
    }
    
conversion

    returnedObj = objNotateToString(data)

output

    {
      obj: 'obj',
      'nested_once.first': 'first',
      'nested_twice.twice.inner_nest': [ 1, 2, 3, 4, 5 ]
    }

The returned object can easily be looped over while filtering a query.

**Don't pass in an array of objects.**
