

function populateBoard(size){

    let color = 'black';
    let gridSize = size * size;
    let grid = document.querySelector('.grid');

    let remove = grid.querySelectorAll('div');
    remove.forEach((div)=> div.remove())

    grid.style.gridTemplateColumns = `repeat(${size} ,1fr)`;
    grid.style.gridTemplateRows = `repeat(${size} ,1fr)`;

    for(let i = 0; i< gridSize; i++){
        let square = document.createElement('div');
        square.style.backgroundColor = 'grey';
        grid.insertAdjacentElement('beforeend',square);
        square.addEventListener('mouseover', ()=>{
        square.style.backgroundColor = color;


    let reset = document.querySelector('.reset');
            reset.addEventListener('click',()=>{     
            square.style.backgroundColor = 'grey';});

    let blue = document.querySelector('.blue');
            blue.addEventListener('click',()=>{
                return  color = 'blue';});

    let black = document.querySelector('.black');
            black.addEventListener('click',()=>{
                return  color = 'black';});

    let orange = document.querySelector('.orange');
            orange.addEventListener('click',()=>{
                return  color = 'orange';});
    let random = document.querySelector('.random');
            random.addEventListener('click',()=>{
                let r = Math.random() * 256;
                let g = Math.random() * 256;
                let b = Math.random() * 256;
                return color = `rgb(${r},${g},${b})`; });
    let erase = document.querySelector('.erase');
            erase.addEventListener('click', () =>{
                return color = 'grey';




            });
            

        
        



    })}
};





function changeSize(input){
    populateBoard(input);
}


