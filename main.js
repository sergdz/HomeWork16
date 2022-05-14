

let a = document.querySelector(".input__text");
let b = document.querySelector(".input__button");
let c = document.querySelector(".text");

b.addEventListener('click',  () => {
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
        c.style.color = "white";
        c.style.fontSize = "30px";


       

        
        chekbox.addEventListener('click', () => {
            if (chekbox.checked ) {//сделать обоботчик на один див когда клик добавить тексту клас и его зачеркнуть
                c.style.textDecoration = 'line-through';
                c.style.textDecorationColor = 'black';
                
            } else {
                c.style.textDecoration = 'none';
            }
        });
        c.appendChild(div);
        div.appendChild(chekbox);
       
        
    }
    
});











class TodoList {
    constructor(items) {
        this.items = [];
    }

    add(params) {
        const newTodoItem = new TodoItem(params);
        this.items.push(newTodoItem);
    }

        completeAll(id) {
            const toDo = this.items.find((item) => item.id === id);
            toDo.done = true;
    }
}
class TodoItem {
    constructor(id, title, description, done) {
        this.id = id;
        this.title = Text;
        this.description = prompt("Краткое описание");
        this.done = false;
    }
}
const newList = new TodoList();


newList.add(1);
newList.add(2);
newList.add(3);
newList.completeAll(2);
console.log(newList.items);