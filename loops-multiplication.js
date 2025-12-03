let n = prompt("Enter number: ");
n = Number(n);
if (n >= 1) {
    for (let i = 1; i <= n; i++) {
        console.log(`${n} * ${i} = ${n * i}`);
    }
}
else {
    console.log("invalid number");
}