const downBtn = document.querySelector('.down-button')
const upBtn = document.querySelector('.up-button')
const sidebar = document.querySelector('.sidebar')

const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

let activeSlideIndex = 0

upBtn.addEventListener('click', () => {
	changeSlide('up')
})

downBtn.addEventListener('click', () => {
	changeSlide('down')
})

// Перелистывание слайдов по клавишам стрелок вверх или вниз с подсветкой кнопки
document.addEventListener('keydown', event => {
	if (event.key === 'ArrowUp') {
		changeSlide('up')
		upBtn.style.color = '#222'
		setTimeout(() => (upBtn.style.color = '#aaa'), 500)
	} else if (event.key === 'ArrowDown') {
		changeSlide('down')
		downBtn.style.color = '#222'
		setTimeout(() => (downBtn.style.color = '#aaa'), 500)
	}
})

function changeSlide(direction) {
	if (direction === 'up') {
		activeSlideIndex++
		if (activeSlideIndex === slidesCount) {
			activeSlideIndex = 0
		}
	} else if (direction === 'down') {
		activeSlideIndex--
		if (activeSlideIndex < 0) {
			activeSlideIndex = slidesCount - 1
		}
	}

	height = mainSlide.clientHeight
	mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
	sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}
