function Fibonacci() {
    Fibonacci.of = function(n){
        var a = 0;
        var b = 1;
        var c = 1;
        if(n == 1 || n == 2 ){
            return 1
        }
        for(var i = 2; i <= n; i++){
            c = a + b;
            a = b;
            b = c;
        }
        return c;
    }
}
var instance = Fibonacci();
for(i = 1; i <=200; i++){
    console.log(Fibonacci.of(i))
}
