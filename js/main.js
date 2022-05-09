/*====Menu====*/
const showMenu = (toggleId, navId)=>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
           nav.classList.toggle('show')
        })     
    }
}
showMenu('nav-toggle','nav-menu')

/*----Remove menu----*/
const navLink = document.querySelectorAll('.nav__link'),
       navMenu = document.getElementById('nav-menu')

function linkAction(){
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction)) /*esto es para que la barra se despliegue hacia el costado*/

/*--Scroll sections active link---*/
const sections = document.querySelectorAll('section[id]')
window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current=>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*='+ sectionId +']').classList.add('active')
        } else{ 
        document.querySelector('.nav__menu a[href*='+ sectionId +']').classList.remove('active')
        }   
    })
}

/*-----Change header color-----*/
window.onscroll = ()=>{
    const nav = document.getElementById('header')
    if(this.scrollY >=200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}

/*------Carrousel-------*/
'use strict'

const big    = document.querySelector('.big')
const point     = document.querySelectorAll('.point')

//Cuando de click en un punto:
   //Sabre la posicion de ese punto
   //Aplicare un transform translateX al punto grande
   //Quitare la clase activo a todos los puntos
   //Añadire la clase activo al punto en que hice click

   //Recorrer los puntos
   point.forEach( ( cadaPunto , i )=> {
       // Asigno un CLICK a cadaPunto
       point[i].addEventListener('click',()=>{

        // Guardo la posición de ese punto
        let posicion  = i
        // Calculo el espacio que debe DESPLAZARSE el GRANDE
        let operacion = posicion * -50

        // Muevo el big
        big.style.transform = `translateX(${ operacion }%)`

        // Recorro todos los puntos
        point.forEach( ( cadaPunto , i )=>{
        // Quito la clase activa a TODOS los puntos
            point[i].classList.remove('active')
        })
        // Añado la clase activa en el punto que hice CLICK
        point[i].classList.add('active')

        })
    })
           

          
        //toma el grande, dentro de su style mete el transform
           //posicion del array sera 0 y transformX es 0
           //posicion del array sera 1 y transformX es -50% (se desplaza un 50%)
           //porque la operacion es = posicion*-50 (se toma la posicion y se la multiplica por -50) 0*-50=0 1*-50=-50
    
