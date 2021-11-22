const slides = document.querySelectorAll('.slide');
function slidesPlugin(activeSlide = 0)
{
slides[activeSlide].classList.add('active')


for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClasses()
        slide.classList.add('active')
    })
}

function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    }  )
}
}

let j = -1;

let id = setInterval(function() {
	j++;
    slides[4].classList.remove('active')
    slides[3].classList.remove('active')
    slides[2].classList.remove('active')
    slides[1].classList.remove('active')
    slides[0].classList.remove('active')
	
	if (j === 5) {
		j = -1;
	} else {
		slidesPlugin(j);  
	}
}, 5000);



for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClasses()
        slide.classList.add('active')
    })
}

function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    }  )
}