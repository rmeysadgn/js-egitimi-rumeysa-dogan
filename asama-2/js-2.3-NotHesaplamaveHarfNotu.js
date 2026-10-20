const girdi = prompt("Vize notunu giriniz:");
const vize = Number(girdi);

const girdi1 = prompt("Final notunu giriniz:");
const final = Number(girdi1);

console.log(`Vize: ${vize} Final: ${final}`);


const ort= (vize*0.4) + (final*0.6) ;

console.log(`Ortalamanız ${ort}`);


if(0<=ort && ort<=29){
    console.log("Harf Notunuz: FF");
}
else if(30<=ort && ort<=39){
    console.log("Harf Notunuz: DD");
}
else if(40<=ort && ort<=49){
    console.log("Harf Notunuz: DC");
}
else if(50<=ort && ort<=59){
    console.log("Harf Notunuz: CC");
}
else if(60<=ort && ort<=69){
    console.log("Harf Notunuz: CB");
}
else if(70<=ort && ort<=79){
    console.log("Harf Notunuz: BB");
}
else if(80<=ort && ort<=89){
    console.log("Harf Notunuz: BA");
}
else if(90<=ort && ort<=100){
    console.log("Harf Notunuz: AA");
}
else{
    console.log("Geçersiz!");
}

if((0<ort && ort<50) && (0<final && final<50)){
    console.log("Kaldınız.");
}
else if((ort>=50 && ort<=100) && (0<final && final<50)){
    console.log("Kaldınız.");
}
else if((ort>=50 && ort<=100) && (final>=50 && final<=100)){
    console.log("Geçtiniz.");
}
else{
    console.log("Geçersiz.");
}

