// for (let i = 1; i <= 100; i++) {
//     if ((i % 3 == 0) && (i % 5 == 0)) {
//         console.log('Fizzbuzz');
//     } else if ((i % 3 == 0)) {
//         console.log('Fizz');
//     } else if ((i % 5 == 0)) {
//         console.log('buzz');
//     } else {
//         console.log(i);
//     }
// }

for (let i = 1; i <= 100; i++) {
    var output = '';

    if (i % 3 == 0) output += 'Fizz'
    if (i % 5 == 0) output += 'Buzz'



    if (output == '') output = i

    console.log(output);
}