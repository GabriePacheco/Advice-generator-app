var cargeAdvance = () => {
    let number = document.getElementById("number");
    let description = document.querySelector('#description');
    let button = document.querySelector('#button');
    button.classList.add('carging');
    
    fetch('https://api.adviceslip.com/advice')
    .then( res => res.json() )
    .then( data => {
        console.log(data);
        number.innerHTML = data.slip.id;
        description.innerHTML = `"${data.slip.advice}"`;
        button.classList.remove('carging');
    })

}

cargeAdvance();

//Refresh button
button.addEventListener('click', () => {
    cargeAdvance();
})
