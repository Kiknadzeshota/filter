const input = document.querySelector("input")
const a = document.querySelectorAll("a")
input.addEventListener("keyup", function() {
    let searchString = this.value;
    let regExp = new RegExp(searchString, 'g');
    a.forEach((elem) => {
        elem.style.display = "none"
        let searchText = elem.innerText; 
        let result = searchText.match(regExp); 

        if(result){
        let newSpan = `<span>${searchString}</span>`
        let newText = searchText.replace(regExp, newSpan);
        elem.innerHTML = newText
        }
        if(searchString == result){
            elem.style.display = "block"
        }
        if(searchString == ""){
            elem.style.display = "block"
        }
    });
})