
let averageTem = [];
averageTem[0] = [];
averageTem[0][0] = 72;
averageTem[0][1] = 75;
averageTem[0][2] = 79;
averageTem[0][3] = 79;
averageTem[0][4] = 72;
averageTem[0][5] = 78;
averageTem[0][6] = 81;
averageTem[0][7] = 70;

averageTem[1] = [];
averageTem[1][0] = 65;
averageTem[1][1] = 70;
averageTem[1][2] = 68;
averageTem[1][3] = 61;
averageTem[1][4] = 68;
averageTem[1][5] = 62;
averageTem[1][6] = 65;
averageTem[1][7] = 69;

const printMatrix = (averageTem) => {
    for (var i = 0; i < averageTem.length; i++) {
        for (var j = 0; j < averageTem[i].length; j++) {
            console.log(averageTem[i][j]);
        }
    }
}

printMatrix(averageTem);