const girdi = prompt("Yaşınızı giriniz:");
const yas = Number(girdi);

// if(yas >= 18 && yas < 120){
//     console.log("Reşitsiniz.");
// }
// else if(0<yas && yas<18){
//     console.log("Reşit değilsiniz.");
// }
// else{
//     console.log("Geçerli sayı giriniz.")
// }

const mesaj =
  yas >= 18 && yas < 120 ? "Reşitsiniz." : yas > 0 && yas < 18 ? "Reşit değilsiniz." : "Geçerli sayı giriniz.";
  console.log(mesaj);