const form = document.querySelector('form'),
    Name = document.querySelector('.name'),
    Prise = document.querySelector('.prise'),
    Btn = document.querySelector('.form-btn'),
    idBox = document.querySelector('.id-box'),
    menuUl = document.querySelector('.list');





form.addEventListener('submit', (e) => {
    e.preventDefault();


    if (Name.value && Prise.value) {
        if (localStorage.hasOwnProperty(idBox.value)) {
            localValue = {
                name: Name.value,
                prise: Prise.value
            }

        } else {

            localValue = {
                name: Name.value,
                prise: Prise.value
            }

            idBox.value = Date.now();
        }


        localStorage.setItem(idBox.value, JSON.stringify(localValue))


        console.log(localValue);
        renderFun();
        form.reset();
        idBox.value = '';
    } else {
        const warning = document.createElement('h5');
        warning.textContent = '!!!!!!!!!!!!!';
        form.appendChild(warning);

        setTimeout(() => {
            warning.textContent = '';
        }, 1000);
    }



})


function renderFun() {
    menuUl.textContent = '';



    for (const key in localStorage) {


        if (localStorage.hasOwnProperty(key)) {


            const ulLi = document.createElement('li');
            ulLi.textContent = [...(Object.values(JSON.parse(localStorage.getItem(key))))];


            ulLi.addEventListener('click', () => {
                ulLi.classList.toggle('for-ul');
                editBtn.classList.toggle('edit-btn');
            })

            console.log(...Object.values(JSON.parse(localStorage.getItem(key))));
            menuUl.appendChild(ulLi);


            const editBtn = document.createElement('button');
            editBtn.textContent = 'edit';

            ulLi.appendChild(editBtn);



            editBtn.addEventListener('click', () => {
                Name.value = Object.values(JSON.parse(localStorage.getItem(key)))[0];
                Prise.value = Object.values(JSON.parse(localStorage.getItem(key)))[1];
                idBox.value = key;
            })


            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'delete';
            ulLi.appendChild(deleteBtn);


            deleteBtn.addEventListener('click', () => {
                localStorage.removeItem(key);
                renderFun();
            })




        }

    }






}
renderFun();






































// form.addEventListener('submit', (e) => {
//     e.preventDefault();



//     if (idBox.value) {
//         inputValue = JSON.parse(localStorage.getItem(idBox.value))
//         inputValue.name = Name.value;
//         inputValue.prise = Prise.value;
//     } else {
//         inputValue = { name: Name.value, prise: Prise.value }

//         idBox.value = Date.now();


//     }
//     localStorage.setItem(idBox.value, JSON.stringify(inputValue));


//     form.reset();
//     render();



// })

// function render() {
//     menuUl.innerHTML = '';

//     for (const key in localStorage) {
//         if (localStorage.hasOwnProperty(key)) {
//             inputValue = JSON.parse(localStorage.getItem(key))

//             const ulLi = document.createElement('li');

//             ulLi.innerHTML = `<span>Name: ${inputValue.name}</span><span>Prise: ${inputValue.prise}</span>`;
//             menuUl.appendChild(ulLi);

//             const deliteBtn = document.createElement('button');
//             deliteBtn.textContent = 'delite';
//             ulLi.appendChild(deliteBtn);


//             const removeBtn = document.createElement('button');
//             removeBtn.textContent = 'remove';
//             ulLi.appendChild(removeBtn);



//             deliteBtn.addEventListener('click', () => {

//                 Name.value = inputValue.name;
//                 Prise.value = inputValue.prise;
//                 idBox.value = key;
//             })


//             removeBtn.addEventListener('click', () => {
//                 localStorage.removeItem(key);
//                 render();

//             })



//         }

//     }
// }














// const x = 123;
// localStorage.setItem(1, x);




































// const form = document.querySelector('.form'),
//     name = document.querySelector('#name'),
//     price = document.querySelector('#price'),
//     itemId = document.querySelector('#itemId'),
//     itemList = document.querySelector('.itemList');


// form.addEventListener('submit', (e) => {


//     e.preventDefault();

//     if (itemId.value) {

//         item = JSON.parse(localStorage.getItem(itemId.value));
//         item.name = name.value;
//         item.price = price.value

//     } else {

//         item = {
//             name: name.value,
//             price: price.value
//         }
//         itemId.value = Date.now();
//     }

//     localStorage.setItem(itemId.value, JSON.stringify(item));
//     form.reset();

//     render();
// })


// function render() {

//     itemList.innerHTML = ''

//     for (const key in localStorage) {
//         if (localStorage.hasOwnProperty(key)) {
//             const item = JSON.parse(localStorage.getItem(key))
//             const li = document.createElement('li');
//             li.innerHTML = `<span>Name: ${item.name}</span> <span>Price: $${item.price}</span>`;
//             itemList.appendChild(li);

//             const editButton = document.createElement('button');
//             editButton.textContent = 'Edit';
//             li.appendChild(editButton);

//             editButton.addEventListener('click', () => {
//                 name.value = item.name;
//                 price.value = item.price;
//                 itemId.value = key;
//             })
//         }
//     }
// }

// render()