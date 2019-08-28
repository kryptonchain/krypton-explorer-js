var api = 'https://explorer.kryptonchain.org/node-api';
var donationAddress = "";
var blockTargetInterval = 60; // enter the block interval in seconds
var coinUnits = 1000000;  // enter in the amount of atomic units in 1 coin, eg. 100 shells = 1 trtl
var totalSupply = 100000000000000; // enter the total supply in atomic units
var symbol = 'ZOD'; // enter the coin's ticker
var refreshDelay = 30000;

// pools stats by MainCoins
var networkStat = {
    "zod": [
        ["public.kryptonchain.org", "https://public.kryptonchain.org/api"],
        ["zod.envypool.com", "https://zod.envypool.com:8119"]
    ]
};

var networkStat2 = {
    "zod": [
        [""]
    ]
};
