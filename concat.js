exports.Initialize = function Initialize(){
    return {name: "CONCAT", argumentCount: 2, blockCommand: false};
}

exports.Operation = function Operation(arguments){
    if((arguments[0].type != 2 && arguments[0].type != 3) || (arguments[1].type != 2 && arguments[1].type != 3)){
        console.error("ERROR: Command CONCAT was not given two strings/numbers");
        return;
    }
    return {return: {type: 2, value: arguments[0].value + "" + arguments[1].value}};
}