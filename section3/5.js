function solution(s) {
    let answer = "";
    let cnt = 1;
    s = s + " ";
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === s[i + 1]) cnt++;
        else {
            answer += s[i];
            if (cnt > 1) answer += String(cnt);
            cnt = 1;
        }
    }
    return answer;
}

let text = "KKBSSSSSSSE";

console.log(solution(text));
// [
//     1001, 1002, 1003,
//     1004, 1005, 1006,
//     1007, 1006, 1005,
//     1004, 1003, 1002,
//     1001
//   ]
