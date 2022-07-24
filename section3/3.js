function solution(s) {
    let answer = 0;
    for (let i of s) {
        if (!isNaN(i)) answer = answer * 10 + Number(i);
    }

    return answer;
}

let text = "g)en2T0s8eSoft";

console.log(solution(text));
