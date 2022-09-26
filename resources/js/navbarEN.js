/**
* Template Name: Restaurantly - v3.1.0
* Template URL: https://bootstrapmade.com/restaurantly-restaurant-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
    "use strict";
  
    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
      el = el.trim()
      if (all) {
        return [...document.querySelectorAll(el)]
      } else {
        return document.querySelector(el)
      }
    }
  
    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
      let selectEl = select(el, all)
      if (selectEl) {
        if (all) {
          selectEl.forEach(e => e.addEventListener(type, listener))
        } else {
          selectEl.addEventListener(type, listener)
        }
      }
    }
  
    /**
     * Easy on scroll event listener 
     */
    const onscroll = (el, listener) => {
      el.addEventListener('scroll', listener)
    }
  
    /**
     * Navbar links active state on scroll
     */
    let navbarlinks = select('#navbar .scrollto', true)
    const navbarlinksActive = () => {
      let position = window.scrollY + 200
      // console.log(position);
      navbarlinks.forEach(navbarlink => {
        if (!navbarlink.hash) return
        let section = select(navbarlink.hash)
        if (!section) return
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          navbarlink.classList.add('active')
        } else {
          navbarlink.classList.remove('active')
        }
      })
    }
    window.addEventListener('load', navbarlinksActive)
    onscroll(document, navbarlinksActive)
  
    /**
     * Scrolls to an element with header offset
     */
    const scrollto = (el) => {
      let header = select('#header')
      let offset = header.offsetHeight
  
      let elementPos = select(el).offsetTop
      window.scrollTo({
        top: elementPos - offset,
        behavior: 'smooth'
      })
    }
  
    /**
     * Toggle .header-scrolled class to #header when page is scrolled
     */
    let selectHeader = select('#header')
    let selectTopbar = select('#topbar')
    if (selectHeader) {
      const headerScrolled = () => {
        if (window.scrollY > 100) {
          selectHeader.classList.add('header-scrolled')
          if (selectTopbar) {
            selectTopbar.classList.add('topbar-scrolled')
          }
        } else {
          selectHeader.classList.remove('header-scrolled')
          if (selectTopbar) {
            selectTopbar.classList.remove('topbar-scrolled')
          }
        }
      }
      window.addEventListener('load', headerScrolled)
      onscroll(document, headerScrolled)
    }
  
    /**
     * Back to top button
     */
    let backtotop = select('.back-to-top')
    if (backtotop) {
      const toggleBacktotop = () => {
        if (window.scrollY > 100) {
          backtotop.classList.add('active')
        } else {
          backtotop.classList.remove('active')
        }
      }
      window.addEventListener('load', toggleBacktotop)
      onscroll(document, toggleBacktotop)
    }
  
    /**
     * Mobile nav toggle
     */
    on('click', '.mobile-nav-toggle', function(e) {
      select('#navbar').classList.toggle('navbar-mobile')
      this.classList.toggle('bi-list')
      this.classList.toggle('bi-x')
    })
  
    /**
     * Mobile nav dropdowns activate
     */
    on('click', '.navbar .dropdown > a', function(e) {
      if (select('#navbar').classList.contains('navbar-mobile')) {
        e.preventDefault()
        this.nextElementSibling.classList.toggle('dropdown-active')
      }
    }, true)
  
    /**
     * Scrool with ofset on links with a class name .scrollto
     */
    on('click', '.scrollto', function(e) {
      if (select(this.hash)) {
        e.preventDefault()
  
        let navbar = select('#navbar')
        if (navbar.classList.contains('navbar-mobile')) {
          navbar.classList.remove('navbar-mobile')
          let navbarToggle = select('.mobile-nav-toggle')
          navbarToggle.classList.toggle('bi-list')
          navbarToggle.classList.toggle('bi-x')
        }
        scrollto(this.hash)
      }
    }, true)
  
    /**
     * Scroll with ofset on page load with hash links in the url
     */
    window.addEventListener('load', () => {
      if (window.location.hash) {
        if (select(window.location.hash)) {
          scrollto(window.location.hash)
        }
      }
    });
  
    /**
     * Preloader
     */
    let preloader = select('#preloader');
    if (preloader) {
      window.addEventListener('load', () => {
        preloader.remove()
      });
    }
  
    // Why Us Section
    
    let whyUsBox = document.querySelectorAll('.whyUsBox');
    // console.log(whyUsBox);
    
    function handleIntersection(entries) {
      entries.map( (entry, index) => {
          // console.log(entry);
          if(entry.isIntersecting) {
              entry.target.classList.remove('opacity-0');
              entry.target.classList.add('delay-animation');
              entry.target.style.animationDelay = `${++index/2}s`;
          }
      })
    }
    
    let observer = new IntersectionObserver(handleIntersection);
    
    whyUsBox.forEach(target => {
      observer.observe(target)
    })

  
  
    // INTERAZIONE JSON MENU(FETCH):
  
    fetch('/menuEN.json')
    .then(response => response.json())
    .then(data => {
      let categories =[];
      let filterAll = document.querySelector('.filter-all');
      let filterSeaStarter = document.querySelector('.filter-seaStarters');
      let filterLeadStarters = document.querySelector('.filter-leadStarters');
      let filterFirstCourse = document.querySelector('.filter-firstCourse')
      let filterSecondCourse = document.querySelector('.filter-secondCourse');
      let filterBaby = document.querySelector('.filter-baby');
      let filterContour = document.querySelector('.filter-contour');
      let filterSweat = document.querySelector('.filter-sweat')
      let menuContainer = document.querySelector('.menu-container');
  
      // creazione categorie:
      function setCategories() {
        data.forEach(el => {
          if(!categories.includes(el)) {
            categories.push(el)
          }
        })
  
        // Creazione box menu:
        menuContainer.innerHTML='';
        let categoria = [];
        categories.forEach(category => {
          let div = document.createElement('div');
          if(!categoria.includes(category.category)){
            categoria.push(category.category);
            if(category.category == "leadStarters"){
              let categoryContainer = document.createElement('div')
            categoryContainer.classList.add('mt-5')

              categoryContainer.innerHTML = `<h5>STARTERS FROM THE LAND</h5>`
              menuContainer.appendChild(categoryContainer);
            }
            else if(category.category == 'seaStarter'){
              let categoryContainer = document.createElement('div')
            categoryContainer.classList.add('mt-5')

              categoryContainer.innerHTML = `<h5>STARTERS FROM THE SEA</h5>`
              menuContainer.appendChild(categoryContainer);

            }
          else if(category.category == 'firstCourse'){
            let categoryContainer = document.createElement('div')
            categoryContainer.classList.add('mt-5')

              categoryContainer.innerHTML = `<h5>PASTA</h5>`
              menuContainer.appendChild(categoryContainer);
              
          }
          else if(category.category == 'secondCourse'){
            let categoryContainer = document.createElement('div')
            categoryContainer.classList.add('mt-5')

              categoryContainer.innerHTML = `<h5>MEAT AND FISH</h5>`
              menuContainer.appendChild(categoryContainer);
              
          }            
          else if(category.category == 'contour'){
            let categoryContainer = document.createElement('div')
            categoryContainer.classList.add('mt-5')
              categoryContainer.innerHTML = `<h5>SIDE</h5>`
              menuContainer.appendChild(categoryContainer);
              
          }            
          else if(category.category == 'baby'){
            let categoryContainer = document.createElement('div')
            categoryContainer.classList.add('mt-5')
              categoryContainer.innerHTML = `<h5>KIDS MENU</h5>`
              menuContainer.appendChild(categoryContainer);
              
          }            
          else if(category.category == 'sweat'){
            let categoryContainer = document.createElement('div')
            categoryContainer.classList.add('mt-5')
              categoryContainer.innerHTML = `<h5>NEAPOLITAN DESSERTS</h5>`
              menuContainer.appendChild(categoryContainer);
              
          }            
        }
          
          div.classList.add('col-lg-6', 'menu-item', 'menuCard', 'animate__animated', 'animate__fadeInLeft');
          div.innerHTML = `
          <img src= ${category.img} class="menu-img" alt="${category.name}">
          <div class="menu-content">
          <span class="category">${category.name}</span><span>${category.price}</span>
          </div>
          <div class="menu-ingredients">
          ${category.description}
          </div>
          `;
          menuContainer.appendChild(div);
        })
      }
      
      // Filtro per categorie
      
      function setCategory(buttonValue) {
        menuContainer.innerHTML='';
        let filtered = [];
        data.forEach(el => {
          if(el.category == buttonValue){
            filtered.push(el)
          }
        })
        filtered.forEach(category => {
          let div = document.createElement('div');
         
          div.classList.add('col-lg-6', 'menu-item', 'menuCard', 'animate__animated', 'animate__fadeInLeft');
          div.innerHTML = `
          <img src= ${category.img} class="menu-img" alt="${category.name}">
          <div class="menu-content">
          <span class="category">${category.name}</span><span>${category.price}</span>
          </div>
          <div class="menu-ingredients">
          ${category.description}
          </div>
          `;
          menuContainer.appendChild(div);
        })
      }

      let isClicked = true;

      // Filtro per antipasti mare

      filterSeaStarter.addEventListener('click', ()=>{
        if(document.querySelector('.filter-active')){
          document.querySelector('.filter-active').classList.remove('filter-active')
        }
        filterSeaStarter.classList.add('filter-active')
         let counter = 0;
         let interval = setInterval(()=>{
           counter++;
          let menuCard = document.querySelectorAll('.menuCard');
          menuCard.forEach(el=>{
            el.classList.add('animate__fadeOutDown')
          })
          if(counter == 2){
            let buttonValue = 'seaStarter'
             setCategory(buttonValue);
             clearInterval(interval);
          }
         },500)
       })
     
       //Filtro per antipasti terra
  
      filterLeadStarters.addEventListener('click', () => {
        if(document.querySelector('.filter-active') != null){
          document.querySelector('.filter-active').classList.remove('filter-active')
        }
        filterLeadStarters.classList.add('filter-active')
        let counter = 0;
        let interval = setInterval(()=>{
          counter++;
         let menuCard = document.querySelectorAll('.menuCard');
         menuCard.forEach(el=>{
           el.classList.add('animate__fadeOutDown')
         })
         if(counter == 2){
           let buttonValue = 'leadStarters'
            setCategory(buttonValue);
            clearInterval(interval);
         }
        },500)
      })

      // Filtro per primo piatto
  
      filterFirstCourse.addEventListener('click', () => {
        if(document.querySelector('.filter-active') != null){
          document.querySelector('.filter-active').classList.remove('filter-active')
        }
        filterFirstCourse.classList.add('filter-active')
        let counter = 0;
        let interval = setInterval(()=>{
          counter++;
         let menuCard = document.querySelectorAll('.menuCard');
         menuCard.forEach(el=>{
           el.classList.add('animate__fadeOutDown')
         })
         if(counter == 2){
           let buttonValue = 'firstCourse'
            setCategory(buttonValue);
            clearInterval(interval);
         }
        },500)
      })

      // Filtro per secondo piatto

      filterSecondCourse.addEventListener('click', () => {
        if(document.querySelector('.filter-active') != null){
          document.querySelector('.filter-active').classList.remove('filter-active')
        }
        filterSecondCourse.classList.add('filter-active')
        let counter = 0;
        let interval = setInterval(()=>{
          counter++;
         let menuCard = document.querySelectorAll('.menuCard');
         menuCard.forEach(el=>{
           el.classList.add('animate__fadeOutDown')
         })
         if(counter == 2){
           let buttonValue = 'secondCourse'
            setCategory(buttonValue);
            clearInterval(interval);
         }
        },500)
      })

      // Filtro per bambini

      filterBaby.addEventListener('click', () => {
        if(document.querySelector('.filter-active') != null){
          document.querySelector('.filter-active').classList.remove('filter-active')
        }
        filterBaby.classList.add('filter-active')
        let counter = 0;
        let interval = setInterval(()=>{
          counter++;
         let menuCard = document.querySelectorAll('.menuCard');
         menuCard.forEach(el=>{
           el.classList.add('animate__fadeOutDown')
         })
         if(counter == 2){
           let buttonValue = 'baby'
            setCategory(buttonValue);
            clearInterval(interval);
         }
        },500)
      })

      // Filtro per contorni

      filterContour.addEventListener('click', () => {
        if(document.querySelector('.filter-active') != null){
          document.querySelector('.filter-active').classList.remove('filter-active')
        }
        filterContour.classList.add('filter-active')
        let counter = 0;
        let interval = setInterval(()=>{
          counter++;
         let menuCard = document.querySelectorAll('.menuCard');
         menuCard.forEach(el=>{
           el.classList.add('animate__fadeOutDown')
         })
         if(counter == 2){
           let buttonValue = 'contour'
            setCategory(buttonValue);
            clearInterval(interval);
         }
        },500)
      })

      // Filtro per dolci

      filterSweat.addEventListener('click', () => {
        if(document.querySelector('.filter-active') != null){
          document.querySelector('.filter-active').classList.remove('filter-active')
        }
        filterSweat.classList.add('filter-active')
        let counter = 0;
        let interval = setInterval(()=>{
          counter++;
         let menuCard = document.querySelectorAll('.menuCard');
         menuCard.forEach(el=>{
           el.classList.add('animate__fadeOutDown')
         })
         if(counter == 2){
           let buttonValue = 'sweat'
            setCategory(buttonValue);
            clearInterval(interval);
         }
        },500)
      })

      // Filtro tutte le categorie

      filterAll.addEventListener('click', () => {
        if(document.querySelector('.filter-active') != null){
          document.querySelector('.filter-active').classList.remove('filter-active')
        }
        filterAll.classList.add('filter-active')
        let counter = 0;
        let interval = setInterval(()=>{
          counter++;
         let menuCard = document.querySelectorAll('.menuCard');
         menuCard.forEach(el=>{
           el.classList.add('animate__fadeOutDown')
         })
         if(counter == 2){
            setCategories();
            clearInterval(interval);
         }
        },500)    
      })
      setCategories();
     let anchor = document.querySelectorAll(".menu .menu-container a")
     anchor.forEach(el=>
      el.addEventListener('click',()=>{
        event.preventDefault();
      }))
    })

  
  })()
  