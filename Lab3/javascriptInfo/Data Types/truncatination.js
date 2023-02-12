function truncate(s, maxlen){
    if(s.length > maxlen) return s.slice(0, maxlen - 1) + "...";
    return s;
}

console.log(truncate("What I'd like to tell on this topic is:", 20));

console.log(truncate("Hi everyone!", 20));