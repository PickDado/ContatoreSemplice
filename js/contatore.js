
        let num = 0;

        function minum(){
            let elm = document.querySelector(".display");
            if(isFinite(num)){
                num-=1;
                elm.innerHTML=num
            }
            else elm.innerHTML="limiti superati";}

            function plus(){
            let elm = document.querySelector(".display");
            if(isFinite(num)){
                num+=1;
                elm.innerHTML=num
            }
            else elm.innerHTML="limiti superati";}

            function reset(){
                num=0;
                let elm = document.querySelector(".display");
                elm.innerHTML=0;

            }        
