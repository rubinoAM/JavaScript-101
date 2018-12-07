function hideMadlibs(){
    madlibContainer = document.getElementById("madlib-container");
    madlibContainer.style.display = "none";
}

function revealMadlibs(){
    for (i=1; i<19; i++){
        this["ans"+i] = document.getElementById("answer-"+i);
        this["ans"+i+"Val"] = this["ans"+i].value;
        this["blnk"+i] = document.getElementById("blank-"+i);
        this["blnk"+i].innerHTML = this["ans"+i+"Val"];
    }

    inputContainer = document.getElementById("input-container");
    inputContainer.style.display = "none";
    madlibContainer.style.display = "block";
}