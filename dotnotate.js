function objToStringDotNnotation(obj, res, currentKey) {
    Object.keys(obj).forEach(key => {
        const value = obj[key];
        const newKey = (currentKey ? currentKey + "." + key : key);
        if (obj[key] && obj[key].constructor === Object) {
            return objToStringDotNnotation(value, res = res, newKey);
        } else {
            res[newKey] = value;
        }

    })
    return res;
}
function objNotateToString(obj) {
    data = objToStringDotNnotation(obj, {})
    return data
}

module.exports = objNotateToString;