let a = ["Jazz", "Blues"];
a.push("Rock-n-Roll");
a[Math.floor((a.length - 1)/2)] = "Classical";
console.log(a.shift());
a.unshift("Rap", "Reggae");