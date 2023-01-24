let tvEstaLigada = true;

function power (){
    if(tvEstaLigada){
        desligar()
    }else{
        ligar ()
    }
}

function power(){
    if(tvEstaLigada){
        alert("resligando tv")
        tvEstaLigada=false
    }
}


