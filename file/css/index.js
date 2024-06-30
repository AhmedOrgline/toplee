/* function remainder(n, m){
    let result1; 
    let word = '';
    if(n < m){
        [n , m] = [m , n];
        result1 = n-parseInt(n/m)*m;
        word +=`${result1}` + ' , The order the arguments are passed should not matter';
        return word;
    }
    else if(m === 0 || n === 0){
        return word += 'Divide by zero should return NaN'
    }
    else{
        result1 = n-parseInt(n/m)*m;
        word += `Returned value should be the value left over after dividing as much as possible. For input n = ${n}, m = ${m}`;
        return result1.toString() +" , "+ word;
    }
} */

let  remainder = (n , m) => { return n > m? n%m : m%n}
console.log(remainder(5 , 17))