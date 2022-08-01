function solution(n, arr) {
    let answer,
        max = Number.MIN_SAFE_INTEGER;
    for (let i of arr) {
        let sum = 0,
            tmp = i;
        while (tmp) {
            sum += tmp % 10;
            tmp = Math.floor(tmp / 10);
        }
        if (sum > max) {
            max = sum;
            answer = i;
        } else if (sum === max) {
            if (i > answer) answer = i;
        }
    }
    return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];

console.log(solution(7, arr));

function solution2(n, arr2) {
    let answer2,
        max = Number.MIN_SAFE_INTEGER;
    for (let i of arr2) {
        let sum = i
            .toString()
            .split("")
            .reduce((a, b) => a + Number(b), 0);
        if (sum > max) {
            max = sum;
            answer2 = i;
        } else if (sum === max) {
            if (i > answer2) answer2 = i;
        }
    }
    return answer2;
}

let arr2 = [128, 460, 603, 40, 521, 137, 123];

console.log(solution2(7, arr2));
