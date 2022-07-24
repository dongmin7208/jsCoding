function solution(s) {
    let answer = "YES";
    s = s.toLowerCase().replace(/[^a-z]/g, "");
    if (s.split("").reverse().join("") !== s) return "No";

    return answer;
}

let text =
    "found7, time: DOMParserSupportedType; Yduts; ElementInternals, 7Dnuof";

console.log(solution(text));
