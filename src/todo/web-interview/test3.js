
for(let i=1; i<=9; i++) {
    let result = '';
    for(let j=1; j<=i; j++) {
        result += `${i} * ${j} = ${i*j} `;
    }
    console.log(result);
}