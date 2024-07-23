let inputBox = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = '';

buttons.forEach(element =>{
    element.addEventListener('click',(b)=>{

        if(b.target.innerHTML == '='){
            string = eval(string);
            inputBox.value = string;
        }
        else if(b.target.innerHTML == 'AC'){
            string = '' ;
            inputBox.value = string;
        }
        else if(b.target.innerHTML == 'DEL'){
            string = string.substring(0,string.length-1);
            inputBox.value = string;
        }
        else if(b.target.id =='plusminus'){
            string = -eval(string);
            inputBox.value = string;
        }
        else{
            string += b.target.innerHTML;
            inputBox.value = string;
        }
    })
})