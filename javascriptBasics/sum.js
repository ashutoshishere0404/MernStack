/*
function readNumber() {
    while(true) {
        let number = +prompt("Enter a value?",0);
        if(number == null || undefined) return null;
        else if(number == NaN) continue;
        else {
            return number;
            break;
        }
    }
}
alert(readNumber());
*/

function ucFirst(str) {
    let res = str[0].toUpperCase() + str.slice(1,str.length);
    return res;
}

function checkSpam(str) {
    let upper = str.toUpperCase();
    if( upper.includes("VIAGRA") || upper.includes("XXX")) return true;
    return false;
}
// alert(ucFirst("john") == "John");
function extractCurrencyValue(str) {
    return Number(str.slice(1));
}

alert( extractCurrencyValue('$128') === 120 ); // true

alert( checkSpam('buy ViAgRA now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam("innocent rabbit") );