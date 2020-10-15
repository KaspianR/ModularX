exports.Initialize = function Initialize(){
    return {name: "ADD", argumentCount: 2, blockCommand: false};
}

exports.Operation = function Operation(arguments){
    if(arguments[0].type != 2 || arguments[1].type != 2){
        console.error("ERROR: Command ADD was not given two numbers");
        return;
    }
    return {return: {type: 3, value: arguments[0].value + arguments[1].value}};
}