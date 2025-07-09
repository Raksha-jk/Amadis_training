let random;
let attempt=0;
function generateNumber(){
    random= Math.floor(Math.random() * 100) + 1;
    console.log(random);
    let gentextEl=document.querySelector(".gentext");
    gentextEl.innerText="A random number has been generated between 1 and 100.";
}
let count=5;
function test(){
    let attemptEl=document.querySelector(".attempt");


    switch(count){
        case 5:
            compare();
            break;
        case 4:
        case 3:
        case 2:
            giveClue();
            break;
        default:
            lastFn();
    }
    console.log(--count);
    if(count>0 && count<=5){
    attemptEl.innerText="Attempt : " + count;
    }
    else if(count===0){   
        attemptEl.innerText="Attempt : " + count;
    }
}

function compare(){
    let inputEl=document.querySelector(".input");
    let inputElValue=parseInt(inputEl.value);
    let scoreEl=document.querySelector(".score");

    console.log(inputElValue);

    let textEl=document.querySelector(".text");
    
    
    if(random === inputElValue){
        textEl.innerText="You guessed it right! ";
        scoreEl.innerText = "Score : 100 " ;

     }
    else if(random >=1 && random<=20){
        textEl.innerText = " The number is between 1 and 20.";
        
    }
    else if(random >=21 && random<=40){
        textEl.innerText = " The number is between 21 and 40.";
    
    }
    else if(random >=41 && random<=60){
        textEl.innerText = " The number is between 41 and 60.";
  
    }
    else if(random >=61 && random<=80){
        textEl.innerText = " The number is between 61 and 80.";
    
    }
    else if(random >=81 && random<=100){
        textEl.innerText = " The number is between 81 and 100.";
   
    }

    }
    
function giveClue(){
    let inputEl=document.querySelector(".input");
    let inputElValue=parseInt(inputEl.value);
    let textEl=document.querySelector(".text");
    let cluetxtEl=document.querySelector(".clue-text");
    let scoreEl=document.querySelector(".score");

    if(random === inputElValue){
        textEl.innerText="You guessed it right! ";
        scoreEl.innerText = "Score : 75 " ;
        cluetxtEl.innerText=""
    }
    else if(random >=1 && random<=20){
        textEl.innerText = " The number is between 1 and 20.";
        if(inputElValue > random ){
            cluetxtEl.innerText = " Low!";            
        }
        else{
            cluetxtEl.innerText = " High!";
        }
    }
    else if(random >=21 && random<=40){
        textEl.innerText = " The number is between 21 and 40.";
        if(inputElValue > random){
            cluetxtEl.innerText = " Low!";            
        }
        else{
            cluetxtEl.innerText = " High!";
        }
    }
    else if(random >=41 && random<=60){
        textEl.innerText = " The number is between 41 and 60.";
        if(inputElValue > random){
            cluetxtEl.innerText = " Low!";            
        }
        else{
            cluetxtEl.innerText = " High!";
        }
    }
    else if(random >=61 && random<=80){
        textEl.innerText = " The number is between 61 and 80.";
        if(inputElValue > random){
            cluetxtEl.innerText = " Low!";            
        }
        else{
            cluetxtEl.innerText = " High!";
        }
    }
    else if(random >=81 && random<=100){
        textEl.innerText = " The number is between 81 and 100.";
        if(inputElValue > random){
            cluetxtEl.innerText = " Low!";            
        }
        else{
            cluetxtEl.innerText = " High!";
        }
    }
}

function lastFn(){
    let inputEl=document.querySelector(".input");
    let inputElValue=parseInt(inputEl.value);
    let textEl=document.querySelector(".text");
    let scoreEl=document.querySelector(".score");
    let cluetxtEl=document.querySelector(".clue-text");


    if(random === inputElValue){
        textEl.innerText="You guessed it right! ";
        scoreEl.innerText = "Score : 50 " ;
        cluetxtEl.innerText="";

    }
    else{
        textEl.innerText="You guessed it wrong! The number was "+ random ;
        cluetxtEl.innerText="";
    }
}
