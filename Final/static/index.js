function main_driver() {

    let big_mac = document.getElementById("big_mac");
    let cheeseburger = document.getElementById("cheeseburger");
    let quarter_pounder = document.getElementById("quarter_pounder");
    let fries = document.getElementById("fries");
    let coke = document.getElementById("coke");
    let dr_pepper = document.getElementById("dr_pepper");
    let fanta = document.getElementById("fanta");
    let sprite = document.getElementById("sprite");
    let cappuccino = document.getElementById("cappuccino");
    let caramel_macchiato = document.getElementById("caramel_macchiato");
    let iced_mocha = document.getElementById("iced_mocha");
    let mocha_latte = document.getElementById("mocha_latte");
    let apple_pie = document.getElementById("apple_pie");
    let cookie = document.getElementById("cookie");
    let sundae = document.getElementById("sundae");
    let mcflurry = document.getElementById("mcflurry");

    big_mac.addEventListener("change",addOrder);
    cheeseburger.addEventListener("change",addOrder);
    quarter_pounder.addEventListener("change",addOrder);
    fries.addEventListener("change",addOrder);
    coke.addEventListener("change",addOrder);
    dr_pepper.addEventListener("change",addOrder);
    fanta.addEventListener("change",addOrder);
    sprite.addEventListener("change",addOrder);
    cappuccino.addEventListener("change",addOrder);
    caramel_macchiato.addEventListener("change",addOrder);
    iced_mocha.addEventListener("change",addOrder);
    mocha_latte.addEventListener("change",addOrder);
    apple_pie.addEventListener("change",addOrder);
    cookie.addEventListener("change",addOrder);
    sundae.addEventListener("change",addOrder);
    mcflurry.addEventListener("change",addOrder);
}

function addOrder(){
    
    let big_mac = document.getElementById("big_mac");
    let cheeseburger = document.getElementById("cheeseburger");
    let quarter_pounder = document.getElementById("quarter_pounder");
    let fries = document.getElementById("fries");
    let coke = document.getElementById("coke");
    let dr_pepper = document.getElementById("dr_pepper");
    let fanta = document.getElementById("fanta");
    let sprite = document.getElementById("sprite");
    let cappuccino = document.getElementById("cappuccino");
    let caramel_macchiato = document.getElementById("caramel_macchiato");
    let iced_mocha = document.getElementById("iced_mocha");
    let mocha_latte = document.getElementById("mocha_latte");
    let apple_pie = document.getElementById("apple_pie");
    let cookie = document.getElementById("cookie");
    let sundae = document.getElementById("sundae");
    let mcflurry = document.getElementById("mcflurry");
    let order = document.getElementById("order");
    order.value = "";

    if(big_mac.value > 0){
        order.value += big_mac.value+"  Big Mac(s)   $" + big_mac.value*6+"\n";
    }
    if(cheeseburger.value > 0){
        order.value += cheeseburger.value+"  Cheeseburger(s)   $" + cheeseburger.value*4+"\n";
    }
    if(quarter_pounder.value > 0){
        order.value += quarter_pounder.value+"  Quarter Pounder(s)   $" + quarter_pounder.value*5+"\n";
    }
    if(fries.value > 0){
        order.value += fries.value+"  Frie(s)   $" + fries.value*3+"\n";
    }
    if(coke.value > 0){
        order.value += coke.value+" Coke(s)   $" + coke.value*2+"\n";
    }
    if(dr_pepper.value > 0){
        order.value += dr_pepper.value+" Dr.Pepper(s)   $" + dr_pepper.value*2+"\n";
    }
    if(fanta.value > 0){
        order.value += fanta.value+" Fanta(s)   $" + fanta.value*2+"\n";
    }
    if(sprite.value > 0){
        order.value += sprite.value+" Sprite(s)   $" + sprite.value*2+"\n";
    }
    if(cappuccino.value > 0){
        order.value += cappuccino.value+" Cappucino(s)   $" + cappuccino.value*3+"\n";
    }
    if(caramel_macchiato.value > 0){
        order.value += caramel_macchiato.value+" Caramel Macchiato(s)   $" + caramel_macchiato.value*3.5+"\n";
    }
    if(iced_mocha.value > 0){
        order.value += iced_mocha.value+" Ice Mocha(s)   $" + iced_mocha.value*2+"\n";
    }
    if(mocha_latte.value > 0){
        order.value += mocha_latte.value+" Mocha Latte(s)   $" + mocha_latte.value*3.5+"\n";
    }
    if(apple_pie.value > 0){
        order.value += apple_pie.value+" Apple Pie(s)   $" + apple_pie.value*1.5+"\n";
    }
    if(cookie.value > 0){
        order.value += cookie.value+" Cookie(s)   $" + cookie.value*1+"\n";
    }
    if(sundae.value > 0){
        order.value += sundae.value+" Sundae(s)   $" + sundae.value*2.5+"\n";
    }
    if(mcflurry.value > 0){
        order.value += mcflurry.value+" McFlurry(s)   $" + mcflurry.value*3+"\n";
    }
}