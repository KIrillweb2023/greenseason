document.addEventListener('DOMContentLoaded', () =>{
        const tab = document.querySelectorAll('.tabheader__item');
        const tabcontent = document.querySelectorAll('.tabcontent');
        const parentItemsTab = document.querySelector('.tabheader__items');



        function showTabs(){
            tabcontent.forEach(item =>{
                item.classList.add('hide');
                item.classList.remove('show');
            });
            tab.forEach(item =>{
                item.classList.remove('tabheader__item_active');
            });
        }
        function hideTab(i = 0){
            tabcontent[i].classList.add('show', 'fade');
            tabcontent[i].classList.remove('hide');
            tab[i].classList.add('tabheader__item_active');
        }
        showTabs();
        hideTab();

        parentItemsTab.addEventListener('click', (e) =>{
            const target = e.target;
            if(target && target.classList.contains('tabheader__item')){
                tab.forEach((item, i) =>{
                    if(target == item){
                        showTabs();
                        hideTab(i);
                    }
                });
            }
        });

});
document.addEventListener('DOMContentLoaded', () =>{

    const slider = document.querySelector('.carousel__slider');

const prev = document.querySelector('.carousel__slider-prev');
const next = document.querySelector('.carousel__slider-next');

const sliderWrapper = document.querySelector('.carousel__slider-wrapper');
const sliderInner = document.querySelector('.carousel__slider-inner');

const slide = document.querySelectorAll('.carousel__slide');

const width = window.getComputedStyle(sliderWrapper).width;

const section = document.querySelector('.carousel');


let index = 1;
let offset = 0;

sliderInner.style.width = 100 * slide.length + '%';
sliderInner.style.display = 'flex';
sliderInner.style.transition = '0.6s all';
sliderWrapper.style.overflow = 'hidden';

slide.forEach(img =>{
    img.style.width = width;
});

const indicator = document.createElement('ol');
const dots = [];
indicator.style.cssText = `
        display: flex;
        justify-content: center;
        list-style: none;
        margin-top: 10px;
    `;
    section.append(indicator);
    for(let i = 0; i < slide.length; i++){
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.style.cssText = `
        width: 10px;
        height: 10px;
        margin-right: 3px;
        margin-left: 3px;
        border-radius: 10px;
        cursor: pointer;
        opacity: .5;
        background-color: #C2C4D2;
        transition: opacity .6s ease;
        `;
        if(i == 0){
            dot.style.opacity = 5;
            dot.style.backgroundColor = 'rgba(65, 159, 55)';
            dot.style.width = '20px';
        }
        indicator.append(dot);
        dots.push(dot);
    }

slider.style.position = 'relative';
function transleteReturn(inner){
    return inner.style.transform = `translateX(-${offset}px)`;
}


next.addEventListener('click', () =>{
    if(offset == +width.slice(0, width.length - 2) * (slide.length - 1)){
        offset = 0;
    } else {
        offset += +width.slice(0, width.length - 2);
    }
   
    transleteReturn(sliderInner);
    


    if(index == slide.length){
        index = 1;
    } else {
        index++;
    }

    dots.forEach(dot =>{
        dot.style.opacity = '.5';
        dot.style.width = '10px';
        dot.style.backgroundColor = '#C2C4D2';
        dot.style.transition = '0.6s all';
    });
    dots[index - 1].style.opacity = 1;
    dots[index - 1].style.width = '20px';
    dots[index - 1].style.backgroundColor = 'rgba(65, 159, 55)';
});
prev.addEventListener('click', () =>{
    if(offset == 0){
        offset = +width.slice(0, width.length - 2) * (slide.length - 1);
    } else {
        offset -= +width.slice(0, width.length - 2);
    }

    transleteReturn(sliderInner);
    
    if(index == 1){
        index = slide.length;
    } else {
        index--;
    }

    dots.forEach(dot =>{
        dot.style.opacity = '.5';
        dot.style.width = '10px';
        dot.style.backgroundColor = '#C2C4D2';
        dot.style.transition = '0.6s all';
    });
    dots[index - 1].style.opacity = 1;
    dots[index - 1].style.width = '20px';
    dots[index - 1].style.backgroundColor = 'rgba(65, 159, 55)';
});

dots.forEach(dot =>{
    dot.addEventListener('click', (event) =>{
        const mainSlide = event.target.getAttribute('data-slide-to');

        index = mainSlide;
        offset = +width.slice(0, width.length - 2) * (mainSlide - 1);

        transleteReturn(sliderInner);

        dots.forEach(dot =>{
            dot.style.opacity = '.5';
            dot.style.width = '10px';
            dot.style.backgroundColor = '#C2C4D2';
            dot.style.transition = '0.6s all';
        });
        dots[index - 1].style.opacity = 1;
        dots[index - 1].style.width = '20px';
        dots[index - 1].style.backgroundColor = 'rgba(65, 159, 55)';
    });
});
    
});

const openMenu = document.querySelector('.open');
const menu = document.querySelector('.menu');
const close = document.querySelector('.menu__close');

openMenu.addEventListener('click', () =>{
    menu.classList.add('active');
});
close.addEventListener('click', () =>{
    menu.classList.remove('active');
});









