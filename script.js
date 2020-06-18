var dataInput = document.querySelector('input[type="text"]');
var ulSpisok = document.getElementById('list');
var spans = document.getElementsByTagName('span');
var saveBtn = document.getElementById('save');
var clearBtn = document.getElementById('clear');
var infoBtn = document.getElementById('info');
var liSpisok = document.getElementsByTagName('p');

function deleteTodo() {
    for (let span of spans) {
        span.addEventListener('click', function () {
            span.parentElement.remove();
            event.preventDefault();
        })
    }
}

function doneTodo() {
    for (let li of liSpisok) {
        li.onclick = function () {
            li.classList.toggle('liCross');
        }
        // li.addEventListener('click', function(){
        //     li.classList.toggle('liCross');
        //     event.preventDefault();
        // })


        // li.style.textDecoration = 'none';
        // li.addEventListener('click', function(){
        //     if(li.style.textDecoration === 'none'){
        //         li.style.textDecoration = 'line-through';
        //     } else {
        //         li.style.textDecoration = 'none';
        //     }
        //     // li.style.textDecoration = 'line-through';
        //     event.preventDefault();
        // })
    }
}

function loadTodo() {
    if (localStorage.getItem('todoApplication')) {
        ulSpisok.innerHTML = localStorage.getItem('todoApplication');
        deleteTodo();
        doneTodo();
    }
};

//addEventListener - обработчик события с последующим вызовом функции

dataInput.addEventListener('keypress', function (keyPressed) {
    if (keyPressed.which === 13) {
        if (dataInput.value !== '' && dataInput.value.trim() > 0) {
            var newLi = document.createElement('li');
            var newSpan = document.createElement('span');
            newSpan.innerHTML = 'Delete ';

            var date = new Date();
            var month = date.getMonth() + 1;
            var newdate = ' ' + date.getDate() + '.'
                + (month < 10 ? '0' : '') + month + '.'
                + date.getFullYear();

            var newTodo = document.createElement('p');
            newTodo.innerHTML = this.value + ' | ' + newdate;
            this.value = '';
            // var newTodo = this.value; //собираем текущие данные из input
            // this.value = '';

            ulSpisok.appendChild(newLi).append(newSpan, '| ', newTodo);

            deleteTodo();
            doneTodo();
        } else {
            alert('Введите задачу!');
        }
    }
});

saveBtn.addEventListener('click', function () {
    localStorage.setItem('todoApplication', ulSpisok.innerHTML);
});

clearBtn.addEventListener('click', function () {
    // ulSpisok.innerHTML = '';
    // localStorage.setItem('todoApplication', ulSpisok.innerHTML);
    localStorage.removeItem('todoApplication');
});

infoBtn.addEventListener('click', function () {
    alert('Привет! Меня зовут Карина - и я разработчик данного приложения.');
});


deleteTodo();
loadTodo();
doneTodo();