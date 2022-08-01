function solution(s, t) {
    let answer = [];
    let p = 1000;
    for (let x of s) {
        if (x === t) {
            p = 0;
            answer.push(p);
        } else {
            p++;
            answer.push(p);
        }
    }
    p = 1000;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === t) {
            p = 0;
            answer[i] = 0;
        } else {
            p++;
            answer[i] = Math.min(answer[i], p);
        }
    }
    return answer;
}

let text = "teachermode e";

console.log(solution(text));
// [
//     1001, 1002, 1003,
//     1004, 1005, 1006,
//     1007, 1006, 1005,
//     1004, 1003, 1002,
//     1001
//   ]
