const {readFileSync,writeFileSync} = require('fs');
console.log('Start');
// readFileSync()
const first = readFileSync('./content/first.txt','utf-8');
const second = readFileSync('./content/second.txt','utf-8');

console.log(first,second);

// writeFileSync()
writeFileSync(
    './content/result.txt', // new file path
    `This is final result text : ${first},${second}`, // new file content
    {flag : `a`} // 'flag' for not overriding the text 
)
console.log('done with the task');
console.log('moving to the next one');

// setTimeout(() => {
//     const result = readFileSync('./content/result.txt','utf-8');
//     console.log(result);
// }, 1000);


