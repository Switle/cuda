function burger() {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu');
    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
    });

}

burger();

function diagrams() {
    const diagramCircles = document.querySelectorAll('.diagram__circle_color');
    const diagramPercent = document.querySelectorAll('.num');
    for (let i = 0; i < diagramCircles.length; i++) {
        diagramCircles[i].style.strokeDasharray = `${diagramPercent[i].textContent} 100`;

    }
}

diagrams();

function tabs() {
    const tabs = document.querySelectorAll('.tabs');
    for (let i = 0; i < tabs.length; i++) {
        const tabsButtons = tabs[i].querySelectorAll('.tabs__button');
        const tabsContents = tabs[i].querySelectorAll('.tabs__content');

        for (let i = 0; i < tabsButtons.length; i++) {
            tabsButtons[i].addEventListener('click', () => {
                tabsButtons.forEach(element => {
                    element.classList.remove('active');
                });
                tabsContents.forEach(element => {
                    element.classList.remove('active');
                });
                tabsButtons[i].classList.add('active');
                tabsContents[i].classList.add('active');
            });
        }
    }
}

tabs();