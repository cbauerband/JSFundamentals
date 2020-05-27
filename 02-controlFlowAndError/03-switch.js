//Switch

let friend = "Tom";
switch (friend) {
    case "Tom":
        console.log("Hey Tom, when are you coming over?");
        break;
    case "Ken":
        console.log("Hey Ken, are you bringing punch to the party?");
        break;
    case "Alex":
        console.log("Hey Alex, are you bringing the games?");
        break;
    default:
        console.log(`I'm sorry ${friend}, but do I know you?`);
}

let yep = true;
switch (typeof yep == 'string' || typeof yep == 'boolean'){
    case true:
    console.log('yep is a string or a boolean');
    break;
    default: 
    console.log("Yep is not a string or boolean");
}