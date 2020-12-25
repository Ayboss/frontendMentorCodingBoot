//when you click on the navigation 
//remove the present picture and animate the next
const prevBtn = document.querySelector('.button__left');
const nextBtn = document.querySelector('.button__right');
const textElement = document.querySelector('.message');
const imageElement = document.querySelector('.images__box');
const authorElement = document.querySelector('.message__author');
const titleElement = document.querySelector('.message__title');

let state = 0;

const data = [
    {
        text:"&#8220;i've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. i'm now in the job of my dreams and so excited about the future&#8221;.",
        image:'images/image-tanya.jpg',
        author:'Tanya Sinclair',
        title: 'UX Engineer'
    },
    {
        text:"&#8220;If you want to lay the best foundation possible i'd recommend taking this course. The depth the instructors go into is incredible. I now fell confident about starting up as a professional developer&#8221;.",
        image:'images/image-john.jpg',
        author:'John Tarkpor',
        title: 'Junior Front-end Developer'
    }
]

function slideInNew(action){
    if(action === 'prev'){
        if(state === 0){
            state = data.length -1;
        }else{
            state = state - 1;
        }
    }else{
        if(state === data.length -1){
            state = 0;
        }else{
            state = state + 1;
        }
    }
    textElement.removeChild(textElement.children[0])
    imageElement.removeChild(imageElement.children[0])
    textElement.insertAdjacentHTML('afterbegin',`<p class='message__text animate'>${data[state].text}</p>`);
    imageElement.insertAdjacentHTML('afterbegin',`<img alt='john' class='images__image animateImage' src='${data[state].image}'>`);
    authorElement.textContent = data[state].author;
    titleElement.textContent = data[state].title;
}
prevBtn.addEventListener('click',function(){
  slideInNew('prev');  
})
nextBtn.addEventListener('click',function(){
    slideInNew('next');
}) 