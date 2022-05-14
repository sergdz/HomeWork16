

let a = document.querySelector(".input__text");
let b = document.querySelector(".input__button");
let c = document.querySelector(".text");

b.addEventListener('click', function () {
    if (a.value) {
        const div = document.createElement('div');
        div.setAttribute("class", "text__item");
        div.style.display = "flex";
        div.style.width = "flex";
        div.style.justifyContent = "space-between";
        div.style.padding = "10px";
        div.style.border = "1px solid";
        div.style.background = "grey";
        div.style.minHeight = "20px";
        let chekbox = document.createElement("input");
        chekbox.setAttribute("type", "checkbox");
        chekbox.setAttribute("class", "chekbox__item");
       
        
             
        div.textContent = a.value;
        const text = document.querySelector('.text__item');
        text.style.color = "white";
        text.style.fontSize = "30px";


       

        
        chekbox.addEventListener('click', () => {
            if (chekbox.checked ) {//сделать обоботчик на один див когда клик добавить тексту клас и его зачеркнуть
                text.style.textDecoration = 'line-through';
                text.style.textDecorationColor = 'black';
                
            } else {
                text.style.textDecoration = 'none';
            }
        });
        text.appendChild(div);
        div.appendChild(chekbox);
       
        
    }
    
});











