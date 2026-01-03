const main = document.querySelector('.main');
const grid = document.querySelector('.grid');
const sliderBar = document.querySelector('.sliderBar');
const sliderBarRect = sliderBar.getBoundingClientRect();
const slider = document.querySelector('.slider');
const sliderRect = slider.getBoundingClientRect();
let cellRect;
let cellId = 1;

const hiddenDOts = [];
let isDragging = false;

for (let row = 1; row< 6; row ++){
  for (let col = 1; col < 6; col ++){
    const cell = document.createElement('div');
    cell.classList.add('cell');
    //cell.id = `cell_${cellId}`;
    cellId ++;
    cell.textContent = cell.id;
    cellRect = cell.getBoundingClientRect();
    grid.appendChild(cell);

    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.id = `dot_${cellId - 1}`;

    if (dot.id === ('dot_1') ||
	dot.id === ('dot_5') ||
	dot.id === ('dot_7') ||
	dot.id === ('dot_8') ||
	dot.id === ('dot_9') ||
	dot.id === ('dot_12') ||
	dot.id === ('dot_13') ||
	dot.id === ('dot_14') ||
	dot.id === ('dot_17') ||
	dot.id === ('dot_18') ||
	dot.id === ('dot_19') ||
	dot.id === ('dot_21') ||
	dot.id === ('dot_25')
       ) {dot.style.opacity = `0`;}

    if (dot.id === 'dot_2'){
	  //dot.style.left = `10px`;
	  dot.style.bottom = `${-10}px`;
	}
    if (dot.id === 'dot_4'){
	  dot.style.bottom = `${-10}px`;
        }
    if (dot.id === 'dot_6') {
	  dot.style.right = `${-10}px`;
  	}
    if (dot.id === 'dot_10'){
    	  dot.style.left = `${-10}px`;
	}
    if (dot.id === 'dot_16'){
	  dot.style.right = `${-10}px`;
        }
    if (dot.id === 'dot_20'){
	  dot.style.left = `${-10}px`;
        }
    if (dot.id === 'dot_22'){
	  dot.style.top = `${-10}px`;
        }
    if (dot.id === 'dot_24'){
	  dot.style.top = `${-10}px`;
        }
    cell.appendChild(dot);
  }
}

slider.addEventListener('mousedown',()=>{
  isDragging = true;
})

window.addEventListener('mouseup',()=>{
  isDragging = false;
})

slider.addEventListener('mousemove',(e)=>{
  if (!isDragging) { return; }

    const minMove = sliderRect.width / 2;
    const maxMove = sliderBarRect.width - (sliderRect.width / 2) - 3;
    let mouseX = e.clientX - sliderBarRect.left;
    clampedMouseX = Math.min(Math.max(minMove, mouseX),maxMove)

    slider.style.left = `${clampedMouseX - sliderRect.width / 2}px`;

    const sliderPosition = clampedMouseX - minMove;
    const sliderRange = maxMove - minMove;
    const rotation = (sliderPosition / sliderRange) * 360;
    grid.style.transform = `rotate(${rotation}deg)`;
})
