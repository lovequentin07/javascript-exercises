const sumAll = function(int1, int2) {
    if (typeof(int1) == 'number' && typeof(int2) == 'number' && int1 >= 0 && int2 >= 0){
        let answer = 0;
        if (int1 > int2){
            let temp = int1;
            int1 = int2;
            int2 = temp;
        }
        for (let i=0; i<=int2; i++){
            answer += i;
        }
        for (let i=0; i<int1; i++){
            answer -= i;
        }
        return answer;
    } else {
        return 'ERROR';
    }

}

module.exports = sumAll
