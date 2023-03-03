// now this is for modules that export a single functon
//    module.exports = function(){
//     return 'hello';
//    }

// a module that exports multiple functions
module.exports = {
    SayHello: function(){
        return 'hello';
    },
    SayGoodbye: function(){
        return 'Goodbye';
    },
    add: function(x,y){
        return x+y;
    }
}