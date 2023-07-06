


function populateBoard(size){

    let color= 'black';
    let gridSize = size * size;
    let grid = document.querySelector('.grid');

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
            
        
            square.style.backgroundColor = 'grey';
        });

        let blue = document.querySelector('.blue');
            blue.addEventListener('click',()=>{
            return  color = 'blue';});

        let black = document.querySelector('.black');
            black.addEventListener('click',()=>{
                return  color = 'black';});
    

        
        



    })}
};





function changeSize(input){
    populateBoard(input);
}


