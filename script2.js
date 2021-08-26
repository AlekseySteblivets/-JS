const obj = {
    viktor: ['apple', 'grape', 'orange', 'apple', 'banana'],
    kate: ['grape', 'orange', 'apple', 'grape', 'banana']
};

// console.log(obj['viktor']);

function calc() {
    // запрещено обращаться на прямую к obj.viktor или object.kate

    const result = {};
    for (key in obj) {
        console.log(key);
        console.log(obj[key]);
        const value = obj[key]


        const summ = value.reduce((acc, value) => {
            if (acc[value]) {
                console.log(acc[value]);

                return { ...acc, [value]: acc[value] + 1 }
            }
            console.log([value]);
            return { ...acc, [value]: 1 }
        }, {});
        result[key] = summ
        console.log([value]);
    }

    return result;

}



console.log(calc());

//result of calc method should be equal to
// {
//     viktor: {
//         apple: 2,
//         grape: 1,
//         orange: 1,
//         banana: 1,
//     },
//     kate: {
//         apple: 1,
//         grape: 2,
//         orange: 1,
//         banana: 1,
//     },
// }
