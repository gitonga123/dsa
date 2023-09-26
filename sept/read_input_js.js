function main() {

    var T = parseInt(readLine());
    for (i = 0; i < T; i++) {
        var age = parseInt(readLine());
        var p = new Person(age);
        p.amIOld();
        for (j = 0; j < 3; j++) {
            p.yearPasses();

        }
        p.amIOld();
        console.log("");
    }
}