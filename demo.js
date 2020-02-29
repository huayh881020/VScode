function test(){
    console.log("华敏")
}
function testpull(){
    console.log("华敏007")
}
function unique(arr) {
    let newArr = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
        let repeat = false;
        for (let j = 0; j < newArr.length; j++) {
            if (arr[i] === newArr[j]) {
                repeat = true;
                break;
            } else {

            }
        }
        if (!repeat) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(unique([1, 1, 2, 3, 5, 3, 1, 5, 6, 7, 4]));


function unique3(arr) {
    var obj = {}
    var newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (!obj[arr[i]]) {
            obj[arr[i]] = 1
            newArr.push(arr[i])
        }
    }
    return newArr
}
console.log(unique2([1, 1, 2, 3, 5, 3, 1, 5, 6, 7, 4]));

————————————————
版权声明：本文为CSDN博主「sun6sian」的原创文章，遵循 CC 4.0 BY - SA 版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/weixin_42412046/article/details/81459294
