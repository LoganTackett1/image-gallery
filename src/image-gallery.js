// eslint-disable-next-line no-unused-vars
import css from './image-gallery.css';

function mod(a,b) { 
    let x = a;
    while (x < 0) { 
        x += b;
    }
    return x % b;
}

function newImageGallery(imageList) {
    const container = document.createElement('div');
    container.classList.add('container');

    const content = document.createElement('div');
    content.classList.add('content');
    content.style.backgroundImage = `url(${imageList[0]})`;
    container.appendChild(content);

    const dots = document.createElement('div');
    dots.classList.add('dots');
    container.appendChild(dots);

    const state = {
        pImageList: [...imageList],
        pCurrent: 0,
        get current() { 
            return this.pCurrent;
        },
        set current(value) {
            document.getElementById(this.pCurrent).classList.remove('active');
            document.getElementById(value).classList.add('active');

            content.style.backgroundImage = `url(${imageList[value]})`;

            this.pCurrent = value;
        }

    }

    for (let i = 0; i < imageList.length; i += 1) { 
        const dot = document.createElement('button');
        dot.classList.add('dot');
        dot.id = i;
        dots.appendChild(dot);

        if (i === 0) { 
            dot.classList.add('active');
        }

        dot.addEventListener('click', () => {
            state.current = dot.id;
        });
    }

    const leftArrow = document.createElement('button');
    leftArrow.classList.add('left-arrow');
    leftArrow.textContent = "<";
    content.appendChild(leftArrow);

    leftArrow.addEventListener('click', () => { 
        state.current = mod((state.current - 1),imageList.length);
    });

    const rightArrow = document.createElement('button');
    rightArrow.classList.add('right-arrow');
    rightArrow.textContent = ">";
    content.appendChild(rightArrow);

    rightArrow.addEventListener('click', () => { 
        state.current = mod((state.current + 1),imageList.length);
    });

    const dotList = Array.from(dots.children);
    window.addEventListener("DOMContentLoaded", () => {
        dotList.forEach(dot => {
            const x = Math.floor(dots.offsetHeight / 2);
            // eslint-disable-next-line no-param-reassign
            dot.style.width = `${x}px`;
            // eslint-disable-next-line no-param-reassign
            dot.style.height = `${x}px`;
            // eslint-disable-next-line no-param-reassign
            dot.style.borderRadius = `${Math.floor(x / 2)}px`;
        });
    });

    window.addEventListener('resize', () => { 
        dotList.forEach(dot => {
            const x = Math.floor(dots.offsetHeight / 2);
            // eslint-disable-next-line no-param-reassign
            dot.style.width = `${x}px`;
            // eslint-disable-next-line no-param-reassign
            dot.style.height = `${x}px`;
            // eslint-disable-next-line no-param-reassign
            dot.style.borderRadius = `${Math.floor(x / 2)}px`;
        });
    });

    return container;
}

export default newImageGallery;
