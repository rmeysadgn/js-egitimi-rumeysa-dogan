const girdi = prompt("Bir sayı gir:");
const sayi = Number(girdi);

if (sayi == 0){
    console.log("“Girilen sayı sıfırdır.”");
}
else if(sayi > 0){
    console.log(`${sayi} pozitif bir sayıdır.`);
}
else if(sayi < 0){
    console.log(`${sayi} negatif bir sayıdır.`);
}
else{
    console.log("Lütfen geçerli bir sayı giriniz.");
}
