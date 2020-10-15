exports.Initialize = function Initialize(){
    return {name: "GOTO", argumentCount: 1, blockCommand: true};
}

exports.Operation = function Operation(arguments){
    if(arguments[0].type != 2){
        console.error("ERROR: Command GOTO was not given a number");
        return;
    }
    return {nextLine: arguments[0].value};
}