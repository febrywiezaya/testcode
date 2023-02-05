function tes() {
    let a = 10;
    let b = 20;
    console.log('a awal =' + a);
    console.log('b awal =' + b);

    [a,b] = [b,a];
    console.log('a akhir =' + a);
    console.log('b akhir =' + b);
}

tes();