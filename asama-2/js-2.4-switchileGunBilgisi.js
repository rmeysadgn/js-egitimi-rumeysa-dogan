const girdi = prompt("1 ile 7 arasında bir sayı giriniz:");
const sayi = Number(girdi);
  
let gun;

  switch (sayi) {
    case 1:
      gun = "Pazartesi";
      break;
    case 2:
      gun = "Salı";
      break;
    case 3:
      gun = "Çarşamba";
      break;
    case 4:
      gun = "Perşembe";
      break;
    case 5:
      gun = "Cuma";
      break;
    case 6:
      gun = "Cumartesi";
      break;
    case 7:
      gun = "Pazar";
      break;
    default:
      gun = null;
  }

  if (gun === null) {
    console.log("Lütfen 1 ile 7 arasında bir sayı giriniz.");
  } 


   switch (sayi) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        tur = "Hafta içi";
        break;
      case 6:
      case 7:
        tur = "Hafta sonu";
        break;
    }

    console.log(`${sayi}. gün ${gun} (${tur})`);
