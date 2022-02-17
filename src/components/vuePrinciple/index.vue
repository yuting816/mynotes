/* eslint-disable no-irregular-whitespace */
/* eslint-disable no-irregular-whitespace */
<template>
    <div>11</div>
</template>

<script>
// async function test() {
//     let count = 0;
//     let clear 
//     return new Promise((resolve, reject) => {
//         clear = setInterval(() => {
//             count += 100;
//             if (count === 500) {
//                 console.log('1');
//                 clearInterval(clear)
//                 resolve();
//             }
//             console.log('count', count);
//         }, 1000);
//     })

// }

// async function main() {
//     await test();
//     console.log('2');
// }

// main()

let count = 0;
async function simulation() {
    count++;
    console.log('count', count);

    if (count === 5) {
        return 'success';
    }

    return 'pending';
}

async function query() {
    const code = await simulation();
    return new Promise(resolve => {
        if (code === 'success') {
            resolve(code);
        }
        if (code === 'pending') {
            setTimeout(() => {
                resolve(query());
            }, 1000);
        }
    });
}


async function main() {
    await query();
    console.log(2);
}

main();

</script>