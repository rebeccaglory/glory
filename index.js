//////// nomor 1 \\\\\\\
// function persen(a){
//      b= a*20/100
//      return a+b
// }
// console.log(persen(10))

// function a(num){
//     var output = 0
//     for(var a=1 ; a<= num ; a++)
//     console.log(output)
// }
// a(4)
// // function lelang(c){
// //     if(a()%4){
// //         return 
// //     }
// // }

var arr = [25,10,5,1]
function cekkoin(koin){
    var output = 0
    for(var a=1 ; a<= koin ; a++){
        if(koin%25 === 0){
            return 1
        }else if(koin%10 === 0){
            return 1
        }else if(koin%5 === 0){
            return 1
        }
    output += 3
    }
}
console.log(cekkoin(50))


///////// nomor 1 \\\\\\\\\\\\\\
function kelipatanempat(num){
        var hasil = 10000
        for(var i = 1 ; i< num; i++){
            if(i % 4 === 0){
                b = hasil*20/100
                console.log(b)
            }else{
                c = hasil*10/100
                console.log(c)
            }
            if(hasil === 0 ){
                break;
            }
        }
    }

function cekkoin(koin){
    var arr = [25,10,5,1]
    output = 0
    for(var i = 0 ; i<arr.length ; i++){
        output ++
    }
}
console.log(cekkoin(100))