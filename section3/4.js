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
            answer.push(p);
        } else {
            p++;
            answer[i] = Math.min(answer[i], p);
        }
    }
    return answer;
}

let text = "g)en2T0s8eSoft";

console.log(solution(text));
