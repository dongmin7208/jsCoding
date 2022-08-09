/*
첫 번째 줄에 반 학생 수 N(1<=N<=20)과 M(1<=M<=10)이 주어진다.
두 번째 줄부터 M개의 줄에 걸쳐 수학테스트 결과가 학생번호로 주어진다. 학생번호가 제일 앞에서부터 1등, 2등 ,,,M등 순으로표현됨
만약 한줄에 M=4이고, 테스트 결과가 3412로 입력되었다면 3번 학생이 1등 4번 학생이 2등 1번 학생이 3등 2번 학생이 4등을의미함.

출력설명:
첫 번째 줄에 짝을 만들 수 있는 총 경우를 출력합니다.
*/

function solution(test) {
    let answer;
    let tmp = [];
    m = test.length;
    n = test[0].length;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            let cnt = 0;
            for (let k = 0; k < m; k++) {
                let pi = 0,
                    pj = 0;
                for (let s = 0; s < n; s++) {
                    if (test[k][s] === i) pi = s;
                    if (test[k][s] === j) pj = s;
                }
                if (pi < pj) cnt++;
            }
            if (cnt === m) {
                tmp.push([i, j]);
                answer++;
            }
        }
    }
    console.log(tmp);
    return answer;
}

let arr = [
    [3, 4, 1, 2],
    [4, 3, 2, 1],
    [3, 1, 4, 2],
];
console.log(solution(arr));
