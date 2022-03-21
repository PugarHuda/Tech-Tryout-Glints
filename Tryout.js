// create a function that accept two string parameter
// your function should be able to determine the first parameter is anagram with from the second parameter vice versa
// anagram will happen if the amount of each letter from first parameter is exactly equal with the second parameter and vice versa
// examples:
// anagram('aaz', 'zza') => false
// anagram('anagram', 'nagaram')) => true

function anagram(str1, str2) {
    let n1 = str1.length;
    let n2 = str2.length;

    if (n1 != n2) return false;

    // str1.sort();
    // str2.sort();
    let obj1 = {};
    for (let i = 0; i < n1; i++) {
        obj1[str1[i]] = 1;
        console.log(str1[i]);
        console.log(obj1);

        // if obj1[str1[i]] == {}{

        // }
    }

    return true;
}
// let str1 = ["t", "e", "s", "t"];
// let str2 = ["t", "t", "e", "w"];

// if (str1 === str2) {
//     console.log("True");
// } else {
//     console.log("False");
// }
anagram("aaz", "zza");