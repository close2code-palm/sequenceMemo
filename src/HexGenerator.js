export function generateStr(strLength, possibleChars = possibleCharHex) { let out = ''
    for (let i = 0; i < strLength; i++) {
        let nextChar = getRandomChar(possibleChars)
        out += nextChar
    }
    return out
}


let possibleCharHex = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'a', 'b', 'c', 'd', 'e', 'f']


function getRandomChar(charSet) {
    return charSet[Math.floor(Math.random() * charSet.length)]
}
