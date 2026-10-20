let birinciSayi = parseInt(prompt("1. sayıyı giriniz: "));
let ikinciSayi = parseInt(prompt("2. sayıyı giriniz: "));
let islem = prompt("İşlemi giriniz: ");
let sonuc;

switch (islem) {
    case "+":
      sonuc=birinciSayi + ikinciSayi;
      console.log(`${birinciSayi} ${islem} ${ikinciSayi} = ${sonuc}`);
      break;
    case "-":
      sonuc=birinciSayi - ikinciSayi;
      console.log(`${birinciSayi} ${islem} ${ikinciSayi} = ${sonuc}`);
      break;
    case "*":
      sonuc=birinciSayi * ikinciSayi;
      console.log(`${birinciSayi} ${islem} ${ikinciSayi} = ${sonuc}`);
      break;
    case "/":
      if(ikinciSayi===0){
      console.log("Hata: Sıfıra bölme yapılamaz.");
      } else{
      sonuc=birinciSayi / ikinciSayi;
      console.log(`${birinciSayi} ${islem} ${ikinciSayi} = ${sonuc}`);
      }
      break;

    case "%":
      sonuc=birinciSayi % ikinciSayi;
      console.log(`${birinciSayi} ${islem} ${ikinciSayi} = ${sonuc}`);
      break;
    case "**":
      sonuc=birinciSayi ** ikinciSayi;
    default:
        console.log("Geçersiz operatör.");
}

