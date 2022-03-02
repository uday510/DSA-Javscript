let coins = [5, 7, 1, 1, 2, 3, 22];

//! O(nlogn) | space O(1)

function findCoin(coins) {
    coins.sort( (a, b) => a - b);
    let coinChange = 0;

    for(let i = 0; i < coins.length; i++) {
        if (coins[i] > coinChange + 1) {
            return coinChange + 1;
        }
        coinChange += coins[i];
    }
    return coinChange + 1;
}



console.log(findCoin(coins));