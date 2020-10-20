'use strict';

/**
 * @param num 整数
 * @return 17で割り切れるかどうか
 */
function isMultipleOfSeventeen(num){
    return num % 17 === 0;
}   

module.exports = {
    isMultipleOfSeventeen
}
