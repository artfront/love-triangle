/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
        var arrRight = [];
        var count = 0;
        for (var l = 0; l < preferences.length; l++) {
            arrRight[l+1]=preferences[l];
        }
        for (var i = 1; i < arrRight.length; i++) {
            for (var j = 1; j < arrRight.length; j++) {
                for (var k = 1; k < arrRight.length; k++) {
                    if ((j===arrRight[i])&&(k===arrRight[j])&&(i===arrRight[k])&&(arrRight[j]!==arrRight[k])) {count++;}
                }
            }
        }
        return count/3;
};
