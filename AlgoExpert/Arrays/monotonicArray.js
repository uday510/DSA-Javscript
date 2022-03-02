let array = [-1, -5, -10, -1100, -900, -1101, -1102, -9001];


for (let i = 0; i <= array.length - 2; i++) {
    if (((array[i] <= 0 && array[i + 1] < 0)) || (array[i] >= 0 && array[i + 1] > 0)) {
        continue;
    }
else {
    console.log(false);
    break;
}
}