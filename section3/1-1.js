function solution(s) {
    let answer = "YES";
    s = s.toLowerCase();
    if (s.split("").reverse().join("") !== s) return "No";

    return answer;
}

let text = "goooG";

console.log(solution(text));
