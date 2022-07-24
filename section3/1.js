function solution(s) {
    let answer = "YES";
    s = s.toLowerCase();
    console.log(s);
    let len = s.length;
    for (let i = 0; i < Math.floor(len / 2); i++) {
        if (s[i] !== s[len - i - 1]) return "No";
    }

    return answer;
}

let text = "goodg";

console.log(solution(text));
