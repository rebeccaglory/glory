///////// soal 1 \\\\\\\\\\\\\

function pertumbuhanpenduduk(p0,persen,imigran,target){
    var a=p0;
    var tahun =0
    while(a<target){
        a= (a*(1+(persen/100)))+imigran
        a = Math.round(a)
        tahun++
    }
    return tahun
}
console.log(pertumbuhanpenduduk(1000,2,50,1600))

///// soal 2 \\\\\\
function triangle (n) {
    var a = n*(n-1) + 1 // nilai awal tiap baris
    var b = 0
    if (a > 1) {
        for (let i = 0 ; i < n; i++) {
            b += a
            a+=2
        }
        return b
    }
    return a
}
console.log(triangle(4))

// var output = ''
//     for (i = 1; i< 10; i++) {
//         for ( j = 1; j < 10 - i; j++) {
//             output += " "
//         }
//         for (k = 1; k <= i; k++) {
//             output += (k + " ")
//         }
//         output += '\n'
//     }
// console.log(output)

///// soal 3 \\\\\

function tiket(antrian){
    var a25 = 0
    var a50 = 0;
    for(var i = 0;i<antrian.length;i++){
      if(antrian[i] == 25){
        a25 += 1;
      }
      if(antrian[i] == 50){
        a25 -= 1; a50 += 1;
      }
      if(antrian[i] == 100){
        if(a50 == 0 && a25 >= 3){
          a25 -= 3;
        }else{
          a25 -= 1; a50 -= 1;
        }
      }
      if(a25 < 0 || a50 < 0){
         return 'NO';
      }
    }
    return 'YES';
  }
  console.log(tiket([25,25,50,100,100]))