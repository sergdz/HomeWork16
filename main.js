

let inputForm = document.querySelector(".input__text");
let inputButton = document.querySelector(".input__button");
let textForm = document.querySelector(".text");

inputButton.addEventListener('click', () => {
    
    if (inputForm.value) {
        const div = document.createElement('div');
        div.setAttribute('class', " text__item");
        const deleteButton = document.createElement('input');
        deleteButton.setAttribute('type', 'button' );
        deleteButton.setAttribute('value', 'Удалить' );
        deleteButton.setAttribute('class', 'input__button' );
        deleteButton.style.cursor = 'pointer';
        const checkbox = document.createElement("input");
        checkbox.setAttribute('type', "checkbox");
        checkbox.setAttribute('class', "input__checkbox");
        checkbox.style.cursor = 'pointer';
        const textItem = document.createElement("p");
        textItem.textContent = inputForm.value;
        textForm.appendChild(div);
        div.appendChild(checkbox);
        div.appendChild(textItem);
        div.appendChild(deleteButton);
        deleteButton.addEventListener('click', () => {
             div.style.display = 'none';
        });
        
    }   
});