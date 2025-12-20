const fs = require('fs');

// 1. Lemos o arquivo e usamos .split('\n') para separar os valores por quebra de linha
// .split(/\s+/) é ainda melhor, pois separa por qualquer espaço em branco (espaço ou enter)
const input = fs.readFileSync('/dev/stdin', 'utf8').split(/\s+/);

function sum() {
    // 2. Pegamos o primeiro valor e o segundo valor do array gerado pelo split
    let A = parseInt(input[0]);
    let B = parseInt(input[1]);
    
    let result = A + B;
    
    // 3. A saída deve ser exatamente "SOMA = X"
    console.log(`SOMA = ${result}`);
}

sum();