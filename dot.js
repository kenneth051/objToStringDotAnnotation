function ObjToStringDotAnnotation(obj, res, currentKey) {
    Object.keys(obj).forEach(key => {
        const value = obj[key];
        const newKey = (currentKey ? currentKey + "." + key : key);
        if (obj[key] && obj[key].constructor === Object) {
            return ObjToStringDotAnnotation(value, res = res, newKey);
        } else {
            res[newKey] = value;
        }

    })
    return res;
}

// input
a = {
    human: {
        man: {
            girl: "girl", father: "father", woman: {
                woman: "mother"
            }
        }
    },
    try: "try"
}

ObjToStringDotAnnotation(a, {});
//output
// {
//     'human.man.girl': 'girl',
//         'human.man.father': 'father',
//             'human.man.woman.woman': 'mother',
//   'try': 'try'
// }

// Note
//Validation is needed to ensure the right data is passed