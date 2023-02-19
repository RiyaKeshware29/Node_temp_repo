const {readFile,writeFile} = require('fs');
console.log('Start');
readFile('./content/first.txt','utf-8',(err,res)=>{
    if (err) {
        console.log(err);
        return;
    }
    console.log('The task is going on..');
    const first = res;
    readFile('./content/second.txt','utf-8',(err,res)=>{
        if (err) {
            console.log(err);
            return;
        }
        console.log('The task is still going on..');
        const second = res;
        writeFile(
            './content/result-async.txt',
            `My result text is again : ${first} , ${second}`,
            {flag : `a`}, // 'flag' for not overriding the text 
            (err,res)=>{
                if (err) {
                    console.log(err);
                    return;
                }
                console.log(res);
            console.log('The task is done');
            })
    })
});
console.log('Strating the next one');