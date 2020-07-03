let ul = document.querySelector('ol');
function newListItem() {
    let li = document.createElement('li');
    li.setAttribute('id', 'todo');
    let tickBox = document.createElement('input');
    tickBox.setAttribute('type', 'checkbox');
    tickBox.setAttribute('class', 'tick');
    tickBox.addEventListener('click', playSound);
    li.appendChild(tickBox);

//creaiing a delete btn
    let delBtn = document.createElement('button');
    delBtn.innerHTML = 'Delete';
    delBtn.setAttribute('class', 'del');
    delBtn.addEventListener('click', deleteItem);
  
//selecting input element for performing events on it
    let input = document.getElementById('inputValue').value;
    let p = document.createElement('p');
    p.setAttribute('class', 'racing');
    p.innerHTML = input;
    if (input === '') {
        alert("You must write something!");
      } else {

        li.appendChild(p);
        li.appendChild(delBtn);
        ul.appendChild(li);
    
      }
      document.getElementById('inputValue').value = '';

  
  
    
}

//button to add task in list
let buttonNew = document.querySelector('button');
buttonNew.addEventListener('click', newListItem);

//for deleting a task from lsit
function deleteItem() {
    let delBtn = document.getElementsByClassName('del');
    for (let i = 0; i < delBtn.length; i++) {
        delBtn[i].addEventListener('click',rmv);
    }
}
        function rmv() {
            let parent = this.parentElement
            parent.style.display = "none";
            
        }


//line through property works after second time clicking, i have tried alot but didnt get it
//plays sound when task is clicked
function playSound() {
    var selectedText = document.getElementsByClassName('tick');
    for (let i = 0; i < selectedText.length; i++) {
        selectedText[i].addEventListener('click', styleText);

        function styleText(e) {
            let c = e.target.nextElementSibling;
            if (selectedText[i].checked) {
                c.style.textDecoration = 'line-through';
                ul.appendChild(c.parentNode);
            } else {
                c.style.textDecoration = 'none';
            }

        }
   
        var chksound = new Audio('https://instrumentalfx.co/wp-content/upload/11/Ding-Sound-Effect.mp3');
        chksound.play();
    }
}


