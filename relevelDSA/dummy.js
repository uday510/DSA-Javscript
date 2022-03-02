let reader = require('readline');

var input;
let readline = reader.createInterface( {
    input: process.stdin
    // output: process.stdout
});

var a = readline.question('what is your name ? ', (ans) => {
    b(ans);
    readline.close();
});
function b(a) {
    var str = a.length - 1;
    var bool = 1;
    var i = 0;
    while ( i < str) {
        let count = parseInt(a.charAt(i)) + parseInt(a.charAt(i + 1));
        console.log(count);
        if (count >= 10) {
            if(count === ( (parseInt(a.charAt(i + 2)) + (parseInt(a.charAt(i + 3)))) )){
                i = i + 2;
                str = str - 2;
                  continue;
        }
        else {
        bool = 0;
        break;
    }
        }
        else {
            if (count === ( (parseInt(a.charAt(i + 2))))) {
                // i = i + 1;
                str = str - 1;
                continue;
            }
            else {
        bool = 0;
        break;
        }
}
    }
if (bool) {
    console.log(true) 
} else console.log(false);
}
