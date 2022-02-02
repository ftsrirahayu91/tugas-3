
class kegiatan{
    constructor(pagi, siang, malam){
        this.pagi = pagi;
        this.siang = siang;
        this.malam = malam;
    }
    sarapan(makan){
        if (makan == "enak"){
            console.log("Nyam", "Nyam", "Nyam");
        }
        else {
            console.log("wleeeee");
        }
    }
    mandi(mandiii){
        if (mandiii == "dingin"){
            console.log("UHhhhhhh");
        }
        else {
            console.log("brrrrr");
        }
    }
    tidur(bobo){
        if (bobo == "mimpi"){
            console.log("hm", "hm");
        }
        else {
            console.log(huhauaha);
        }
    }
}
var sehari1 = new kegiatan("pagi", "siang", "malam")
sehari1.mandi("dingin")
