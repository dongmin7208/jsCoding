function solution(arr) {
    let n = arr.length;
    let answer = Array.from({ length: n }, () => 1);
    //1로 초화 다켰음.
    for (let i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            if (arr[j] > arr[i]) answer[i]++;
        }
    }
    return answer;
}

let arr = [87, 89, 92, 100, 76];

console.log(solution(arr));
