"use strict";
 const balance = document.getElementById("balance-coffee");
 
 function task(){
    let taskButtons = document.querySelectorAll(".coffee-item");
    taskButtons.onclick = function(){
        let name = this.getAttribute("name");
        let cost = Number(this.getAttribute("cost"));
        let change_balance = balance.value - cost;
        if (change_balance <= 0) balance_end()
        else balance_ok();
    }
 }
 