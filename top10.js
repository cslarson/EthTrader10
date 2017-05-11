const Promise = require("bluebird");
const rp = require("request-promise");
const ERC20_SYMBOLS = ["GNO","REP","GNT","DGD","ICN","SNGLS","MKR","1ST","SJCX","RLC","MLN","TRST","SWT","PLU","WINGS","GUP","NXC","VSL","ROUND","XAUR","TKN"]

Promise.filter(rp("https://api.coinmarketcap.com/v1/ticker/").then(JSON.parse), item=>ERC20_SYMBOLS.includes(item.symbol))
.then(tokens=>tokens.sort((a,b)=>(parseFloat(b.market_cap_usd) - parseFloat(a.market_cap_usd))).slice(0,10))
.then(console.log);
