import $ from 'jquery';

function init() {
    $('.slider').slick({
        slidesToShow: 4,
        prevArrow: '.section__button_left',
        nextArrow: '.section__button_right'
    });
}

class TabItem { 
    constructor(link, content) { 
        this.link = link; 
        this.content = content; 
    } 
     
    onClick(callback) { 
        this.link.addEventListener('click', () => callback()); 
    } 
     
    activate() { 
        this._toggle(true);   
    } 
     
    deactivate() { 
        this._toggle(false); 
    } 
     
    _toggle(activate) { 
        this.link.classList.toggle('active', activate); 
        this.content.classList.toggle('active', activate); 
    } 
}
  
class TabsManager { 
    constructor(tabsElem) { 
        this.tabs = []; 
        this.activeTab = null; 

        this.init(tabsElem);     
        this.activateTab(this.tabs[0]); 
    } 
     
    init(tabsElem) { 
        const links = tabsElem.querySelectorAll('.tabs__links li'); 
        const contents = tabsElem.querySelectorAll('.tabs__item'); 

        for (let i = 0; i < links.length; i++) { 
            const tab = new TabItem(links[i], contents[i]); 
            this.tabs.push(tab); 

            tab.onClick(() => this.activateTab(tab));   
        } 
    } 
     
    activateTab(tab) { 
        if (this.activeTab) { 
            this.activeTab.deactivate(); 
        } 
        this.activeTab = tab; 
        this.activeTab.activate(); 
    } 
} 
  
window.onload = function() { 
    // Работа с табами
    const tabsElem = document.getElementById('myTabs'); 
    new TabsManager(tabsElem);
    
    // Мобильное меню
    hambBtnOpen.addEventListener('click', () => { 
        mobileMenu.classList.add('hamb__menu_visible'); 
    }); 

    hambBtnClose.addEventListener('click', () => { 
        mobileMenu.classList.remove('hamb__menu_visible'); 
    });
    
    const mobileMenu = document.querySelector("#mobileMenu");
    const mobileMenuItems = mobileMenu.querySelectorAll("ul > li");
    for (let mobileMenuItem of mobileMenuItems) {
        mobileMenuItem.addEventListener('click', () => { 
            mobileMenu.classList.remove('hamb__menu_visible'); 
        });
    };

    // Плавный скролл
    document.addEventListener('scroll', event => { 
        console.log(event.target.scrollTop) 
    }); 

    const smoothScrollLinks = document.querySelectorAll('.navigation__link'); 

    for (let link of smoothScrollLinks) { 
        link.addEventListener('click', event => { 
            event.preventDefault(); 

            const target = event.target; 
            const elementToScroll = document.querySelector(target.getAttribute('href')); 
            elementToScroll.scrollIntoView({ behavior: 'smooth', block: 'end'}); 
        }); 
    } 

    $(document).ready(init);    
}

