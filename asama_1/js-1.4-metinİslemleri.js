const hamAd = " aHmEt yILMAZ ";
const kelimeler = hamAd.trim().split(/\s+/);

function kelimeDuzelt(kelime) {
  const ilkHarf = kelime.charAt(0).toLocaleUpperCase("tr-TR");
  const kalani = kelime.slice(1).toLocaleLowerCase("tr-TR");
  return ilkHarf + kalani;
}

function turkceKarakterleriCevir(metin) {
  return metin
    .replaceAll("ı", "i")
    .replaceAll("ş", "s")
    .replaceAll("ç","c")
    .replaceAll("ğ","g")
    .replaceAll("ö","o")
    .replaceAll("ü","u");
}

const ad = kelimeDuzelt(kelimeler[0]);
const soyad = kelimeDuzelt(kelimeler[1]);


const kullaniciAdi = turkceKarakterleriCevir(
  `${ad.toLocaleLowerCase("tr-TR")}.${soyad.toLocaleLowerCase("tr-TR")}`
);
const eposta = `${kullaniciAdi}@sirket.com`;


console.log(`Ad Soyad: ${ad} ${soyad}`);
console.log(`Karakter Sayısı (boşluksuz): ${ad.length + soyad.length}`);
console.log(`Baş Harfler: ${ad.charAt(0)}.${soyad.charAt(0)}.`);
console.log(`Kullanıcı Adı: ${kullaniciAdi}`);
console.log(`E-posta: ${eposta}`);
