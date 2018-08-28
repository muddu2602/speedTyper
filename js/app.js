window.addEventListener('load' , init)


const levels = {
    easy:5 , 
    medium : 5 , 
    hard : 5
}
//Globals variables
let time = levels.medium;
let score = 0 ; 
let isplaying ;

//DOM Elements
const wordInput = document.querySelector('#word-input')
const currentWord = document.querySelector('#current-word')
const scoreDisplay = document.querySelector('#score')
const timeDisplay = document.querySelector('#time')
const message = document.querySelector('#message')
const seconds = document.querySelector('#seconds')


 const words = ['stewardesses' , 'caresses' , 'pizzazz ' , 'qewtuop'  , 'bezazzes' , 'playwright' , 'convalesce' , 'convalesce' , 'pharaoh' , 'millennium' ,  'handkerchief' , 'cazzie' , 'document' , 'Lorem' ,'ipsum' , 'dolor' , 'consectetur' , 'adipisicing' , 'elit' , 'Molestias' , 'harum' , 'recusandae' , 'pariatur' , 'praesentium' , 'sapiente' , 'perspiciatis' , 'error' , 'reiciendis' , 'culpa' , 'nesciunt' , 'nihil' , 'consectetur' , 'illum' , 'dolores' ]

 //Initialize Game
 function init(){
     showWord(words);

     //Start game on word INput
     wordInput.addEventListener('input' , startMatch)
    //  Call Countdown every time
    setInterval( countDown , 1000)
    setInterval(checkStatus , 50)
 }
 function startMatch(){
     if(matchWords()){
       isplaying = true;
       time = 6;
       showWord(words);
       wordInput.value = '';
       score++
     }
     if(score === -1){
        scoreDisplay.innerHTML = 0

     }else{
        scoreDisplay.innerHTML = score

     }
 }

 function matchWords(){

    if(wordInput.value === currentWord.innerHTML){
        message.innerHTML = 'Correct!!!'
        return true
     } else {
         message.innerHTML = ''
         return false
     }

 }



 function showWord(words){
     //Generate Random Array INdex
     const randIndex = Math.floor(Math.random() * words.length)
     //Outout a random word
     currentWord.innerHTML = words[randIndex]
 }
 function countDown(){
     //Make Sure Time is not run out
     if(time > 0 ){
         //Decrement
         time--;
     }
     else if(time === 0) {
         isplaying = false
     }
     //Show Time
     timeDisplay.innerHTML = time;


     }
     
//Check Game Status
     function checkStatus(){
        if(!isplaying && time === 0 ){
            message.innerHTML = 'Game Over !!!'
            score = -1
        }
 }