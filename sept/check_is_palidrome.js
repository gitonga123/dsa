function isPalindrome(s) {
    for (let index = 0; index < Math.floor(s.length / 2); index++) {
        if (s[index] !== s[s.length - index - 1]) {
            return false;
        }
    }

    return true;
}

const indexToRemove = (s) => {
    for (let i = 0; i < Math.floor(s.length / 2); i++) {
        if (s[i] !== s[s.length - i - 1]) {
            const tmp = s.substring(0, i) + s.substring(i + 1)
            if (isPalindrome(tmp)) {
                return i
            } else {
                return s.length - i - 1
            }
        }
    }

    return -1
}

console.log(indexToRemove("quyjjdcgsvvsgcdjjyuzq"));
