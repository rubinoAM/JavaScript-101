var std_alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var cip_alphabet = ["n","o","p","q","r","s","t","u","v","w","x","y","z","a","b","c","d","e","f","g","h","i","j","k","l","m"];

function convert(){
    var plainText = document.getElementById('plain-text').value;
    var convertText = "";

    for (var j=0; j<plainText.length; j++){
        var str = plainText[j];
        console.log("HELP");
        for (var i=0;i<std_alphabet.length;i++){
            console.log(str + std_alphabet[i]);
            if (str == std_alphabet[i]){
                str = cip_alphabet[i];
                convertText += str;
                console.log("woof");
                break;
            }
        }
    }
    document.getElementById('cipher-text').value = convertText;
}