const par = (a) => {
    if (a % 2 === 0) {
        return "par"
        console.log(`${a} es divisible por 2 (es un número par).`);
    } else {
        return "impar"
        console.log(`${a} no es divisible por 2 (es un número impar).`);
    }

    return ""
} 

module.exports = par;