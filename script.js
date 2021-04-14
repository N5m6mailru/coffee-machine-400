    "use strict";
    const balance = document.getElementById("balance-coffee");
   

 
    let taskButtons = document.querySelectorAll(".coffee-item");
    for(let button of taskButtons) {
        taskButtons.onclick = function(){
            let name = this.getAttribute("name");
            let cost = Number(this.getAttribute("cost"));
            let change_balance = balance.value - cost;
            if (change_balance <= 0) balance_end()
            else balance_ok();
        }
    }
  

 