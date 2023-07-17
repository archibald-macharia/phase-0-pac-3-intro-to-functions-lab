//receives a string argument and returns it in uppercase

function shout(string){
return string.toUpperCase();
}
console.log(shout("jimmy"));

//receives a string argument and returns it in lowercase
function whisper(string){
    return string.toLowerCase();
}
console.log(whisper("JACK"));

//LogShout Function that takes a string argument and logs it into caps
function logShout(string){
    const spy = console.log(string.toUpperCase());
   return spy;
}
logShout('hello');

//logWhisper Function that takes a string argument and logs it into lower case
function logWhisper(string){
    const spy = console.log(string.toLowerCase());
   return spy;
}
logWhisper('HELLO');

function sayHiToHeadphonedRoommate(string){
    if (string == string.toLowerCase()){
        return "I can't hear you!";
    }else if (string == string.toUpperCase()){
        return "YES INDEED!";
    }else if (string == "Let's have dinner together!"){
        return "I would love to!";
    }
    
}
sayHiToHeadphonedRoommate("hello");