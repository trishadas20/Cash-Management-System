const prompt=require("prompt-sync")({sigint: true });
var moneypaid=prompt("Amount paid:");
var total=prompt("Enter product value:");
total=parseFloat(total).toFixed(2);
moneypaid=parseFloat(moneypaid).toFixed(2);
var change=(moneypaid-total).toFixed(2);
console.log("Due:"+total+"/paid:"+moneypaid+"/change:"+change)
//2000
var to_return=Math.floor(change/2000);
change=(change%2000).toFixed(2);
to_return>0?console.log("2000 Notes:"+to_return):0;
//500
var to_return=Math.floor(change/500);
change=(change%500).toFixed(2);
to_return>0?console.log("500 Notes:"+to_return):0;
//200
var to_return=Math.floor(change/200);
change=(change%200).toFixed(2);
to_return>0?console.log("200 Notes:"+to_return):0;
//100
var to_return=Math.floor(change/100);
change=(change%100).toFixed(2);
to_return>0?console.log("100 Notes:"+to_return):0;
//50
var to_return=Math.floor(change/50);
change=(change%50).toFixed(2);
to_return>0?console.log("50 Notes:"+to_return):0;
//20
var to_return=Math.floor(change/20);
change=(change%20).toFixed(2);
to_return>0?console.log("20 Notes:"+to_return):0;
//10
var to_return=Math.floor(change/10);
change=(change%10).toFixed(2);
to_return>0?console.log("10 Notes:"+to_return):0;
//5 rupee coins
var to_return=Math.floor(change/5);
change=(change%5).toFixed(2);
to_return>0?console.log("5 rupee coins:"+to_return):0;
//2 rupee coins
var to_return=Math.floor(change/2);
change=(change%2).toFixed(2);
to_return>0?console.log("2 rupee coins:"+to_return):0;
//1 rupee coins
var to_return=Math.floor(change/1);
change=(change%1).toFixed(2);
to_return>0?console.log("1 rupee coins:"+to_return):0;
//50 paisa
var to_return=Math.floor(change/0.50);
change=(change%0.50).toFixed(2);
to_return>0?console.log("0.50 paisa:"+to_return):0;


