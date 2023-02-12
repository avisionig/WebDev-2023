function spamCheck(s){
    if(s.toUpperCase().includes("XXX") || s.toLowerCase().includes("viagra")){
        return true;
    } else{
        return false;
    }
}

console.log(spamCheck("innocent rabbit"));