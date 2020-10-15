exports.Initialize = function Initialize(){
    return {name: "PRINT", argumentCount: 1, blockCommand: true};
}

exports.Operation = function Operation(arguments){
    if(arguments[0].type != 2 && arguments[0].type != 3 && arguments[0].type != 4){
        console.error("ERROR: Command PRINT was not given a printable value");
        return;
    }
    console.log("> " + arguments[0].value);
    return {};
}