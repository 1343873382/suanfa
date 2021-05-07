// 给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 回文串 。返回 s 所有可能的分割方案
var partition = function(s) {
    let arr = []

    function backTree(n, path) {
        if (n === s.length) {
            arr.push(path)
        } else {
            for (let j = 1; j <= s.length - n; j++) {
                let t = s.substr(n, j)
                if (t === t.split("").reverse().join("")) {
                    backTree(n + j, path.concat(s.substr(n, j)))
                }
            }
        }



    }
    backTree(0, [])
    return arr
};
// 给定一个非空字符串 s 和一个包含非空单词列表的字典 wordDict，
// 在字符串中增加空格来构建一个句子，使得句子中所有的单词都在词典中。返回所有这些可能的句子。

var wordBreak = function(s, wordDict) {
    let arr = []

    function backTree(n, path) {
        if (n === s.length) {
            arr.push(path)
        } else {
            for (let i = 1; i <= s.length - n; i++) {

                if (wordDict.indexOf(s.substr(n, i)) !== -1) {
                    if (n !== 0) { backTree(n + i, path + " " + s.substr(n, i)) } else {
                        backTree(n + i, path + s.substr(n, i))
                    }
                }
            }
        }
    }
    backTree(0, "")
    return arr
};