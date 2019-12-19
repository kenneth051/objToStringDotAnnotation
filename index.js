function objToStringDotNnotation(obj, res, currentKey) {
    Object.keys(obj).forEach(key => {
        const newKey = (currentKey ? currentKey + "." + key : key);
        if (obj[key] && obj[key].constructor === Object) {
            objToStringDotNnotation(obj[key], res, newKey);
        } else {
            res[newKey] = obj[key];
        }
    })
    return res;
}
function objNotateToString(obj) {
    data = objToStringDotNnotation(obj, {})
    return data;
}

module.exports = {objNotateToString};