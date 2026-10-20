let CalisanAdi=prompt("Çalışan adını giriniz: ");
let HaftalikSaat = parseInt(prompt("Haftalık çalışma saati: "));
let saatlikUcret = parseInt(prompt("Saatlik ücret: : "));
let prim = parseInt(prompt("Prim (yoksa 0 girilir): "));

console.log("Çalışan Adı: "+CalisanAdi);
console.log("Çalışma Saati: "+HaftalikSaat);
console.log("Saatlik Ücret: "+saatlikUcret);
console.log("Prim: "+prim);

if(HaftalikSaat<0 || saatlikUcret<0 || prim<0){
    console.log("Geçersiz giriş");
}
else {
let NormalMaas=0;
if(0<HaftalikSaat && HaftalikSaat<=40){
    NormalMaas=saatlikUcret*HaftalikSaat;
}
else if(40<HaftalikSaat){
    NormalMaas=40*saatlikUcret;
}
else{
    console.log("Geçersiz.");
}
console.log("Normal maaş: "+NormalMaas);

if(saatlikUcret<0){
    console.log("Geçersiz.");
}

if(prim<0){
    console.log("Geçersiz.");
}




let fazlaMesaiUcreti=0;
if(0<HaftalikSaat && HaftalikSaat<=40){
    fazlaMesaiUcreti=0*HaftalikSaat;
}else if(40<HaftalikSaat){
    fazlaMesaiUcreti=(HaftalikSaat-40)*(saatlikUcret*1.5);
}
else{
    console.log("Geçersiz.");
}
console.log("Fazla Mesai Ücreti: "+fazlaMesaiUcreti);



let brutMaas = NormalMaas+fazlaMesaiUcreti+prim;
console.log("Brüt Maaş: "+brutMaas);



let vergi=0;
if(brutMaas<=8000){
    vergi=brutMaas*0.1;
}
else if(brutMaas>8000){
    vergi=brutMaas*0.2;
}
console.log("Vergi: "+vergi);



let NetMaas = brutMaas-vergi;
console.log("Net Maaş: "+NetMaas);

}