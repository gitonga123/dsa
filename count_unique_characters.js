function areChractersUnique(s) {



    // An integer to store presence/absence

    // of 26 characters using its 32 bits.
    for (var i = 0; i < s.length - 1; i++) {

        if (s.charAt(i) == s.charAt(i + 1)) {

            return false;

        }

    }

    return true; 

}

console.log(areChractersUnique('abcb'));