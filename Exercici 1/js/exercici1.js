var word;
document.addEventListener('DOMContentLoaded', (event) =>{
    let array_words = ["cotxe", "casa", "ordinador", "muntanya"];
    let elements = document.getElementsByClassName("barreja");
    let span = elements[0];

    let mixed_word = "";

    setParaula(array_words, span, mixed_word);

    document.addEventListener("submit", (e)=> {
        e.preventDefault();
        
        let input = document.getElementsByTagName("input")[0];
        let resultat = document.getElementById("resultat");

        if(word === input.value){
            resultat.style.color = "green"
            resultat.innerHTML = "has guanyat!!!!!";
        }else{
            resultat.style.color = "red";
            resultat.innerHTML = "has perdut!!!!!";
        }            
    })
})
function setParaula(array, span, mixed_word){
    let r_number = Math.floor(Math.random()*array.length);
    word = array[r_number];
    console.log(word);
    mixed_word = word.shuffle();
    console.log(span);
    span.innerHTML = mixed_word;
}