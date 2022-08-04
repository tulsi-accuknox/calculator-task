
let string = "";
let buttons = document.querySelectorAll('.btn');

// ================================= ARRAY FOR EVERY BUTTON =====================================

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) =>{

     // ================================= ANS BUTTON =====================================

        if(e.target.innerHTML == 'ans'){
            try{
                string = eval(string);
            document.querySelector('input').value = string;  
            }    
            
            catch{
                alert("invalid Input")
            }
        }


        // ================================= ENTER BUTTON =====================================

        else if(e.target.innerHTML == 'ENTER'){
            try{
                string = eval(string);
            document.querySelector('input').value = string;  
            }    
            
            catch{
                alert("invalid Input")
            }
        }

        // ================================= CLEAR BUTTON =====================================

        else if(e.target.innerHTML == 'clear'){
            string = "";
            document.querySelector('input').value = string;   
        }

        else if(e.target.innerHTML == '√'){
            
            document.querySelector('input').value = Math.sqrt(string); 
           
        }


        // ================================= DEL BUTTON =====================================


         else if(e.target.innerHTML == 'del'){
            document.querySelector('input').value = string;   
            string = string.slice(0,-1);
            
        }

        // ================================= ALL BUTTONS =====================================


        else{
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;

        }
    })
})