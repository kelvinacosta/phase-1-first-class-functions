function receivesAFunction(callback){
    return callback();
}
function returnsANamedFunction(){
    return function myName(){

    }
}
function returnsAnAnonymousFunction(){
    return function (){
        
    }
}