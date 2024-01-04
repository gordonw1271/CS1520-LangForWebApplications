function main_driver() {
    const ferarri = ["Red","White","Yellow"];
    const lambo = ["Blue","Green","Yellow"];
    const mustang = ["Black", "Silver", "White"];

    let cars = document.getElementById("cars");
    let color = document.getElementById("color");

    let noInsurance = document.getElementById("noInsurance");
    let insurance = document.getElementById("threeYearInsurance");

    color.innerHTML = "";
    ferarri.forEach(function (optionText, index) {
        const option = document.createElement("option");
        option.value = `option${index + 1}`;
        option.text = optionText;
        color.add(option);
    });

    cars.addEventListener("change",changeColors);
    color.addEventListener("change",changePicture);

    noInsurance.addEventListener("change",changeDesc);
    insurance.addEventListener("change",changeDesc);
}

function changeDesc(){
    let noInsurance = document.getElementById("noInsurance");
    let insurance = document.getElementById("threeYearInsurance");
    let desc = document.getElementById("desc");
    let cars = document.getElementById("cars");
    let color = document.getElementById("color");

    if(cars.value === "Ferrari"){
        if(color.value === "option1"){
            if (insurance.checked) {
                desc.value = "Red Ferrari\nThe car's name encapsulates the true significance of all that has been achieved in terms of performance. The reference to the 90th anniversary of the foundation of Scuderia Ferrari underscores the strong link that has always existed between Ferrari's track and road cars.\nPrice:$100,000\nInsurance Price:$30,000"
            } else if (noInsurance.checked) {
                desc.value = "Red Ferrari\nThe car's name encapsulates the true significance of all that has been achieved in terms of performance. The reference to the 90th anniversary of the foundation of Scuderia Ferrari underscores the strong link that has always existed between Ferrari's track and road cars.\nPrice:$100,000\nInsurance Price:$0"
            }
        }else if(color.value === "option2"){
            if (insurance.checked) {
                desc.value = "White Ferrari\nThis car is the most modern of all the Ferrari Cars. It is accelerates from 0-60 in 2.5 seconds. This car comes in a beatiful white color, lether seats, premium materials and great suspension.\nPrice:$150,000\nInsurance Price:$45,000"
            } else if (noInsurance.checked) {
                desc.value = "White Ferrari\nThis car is the most modern of all the Ferrari Cars. It is accelerates from 0-60 in 2.5 seconds. This car comes in a beatiful white color, lether seats, premium materials and great suspension.\nPrice:$150,000\nInsurance Price:$0"
            }
        }else if(color.value === "option3"){
            if (insurance.checked) {
                desc.value = "Yellow Ferrari\nThis is a super fast car in a beautiful yellow color. Made with premium materials. This car also comes with a great sound systems, cool wheels and much much more\nPrice:$120,000\nInsurance Price:$36,000"
            } else if (noInsurance.checked) {
                desc.value = "Yellow Ferrari\nThis is a super fast car in a beautiful yellow color. Made with premium materials. This car also comes with a great sound systems, cool wheels and much much more\nPrice:$120,000\nInsurance Price:$0"
            }
        }
    }else if(cars.value === "Lamborghini"){
        if(color.value === "option1"){
            if (insurance.checked) {
                desc.value = "Blue Lamborghini\nSimilar to its predacesor, this Lamborghni comes in an amazong blue color. The focus of this car is speed. This is evident as this car is one of the fastest in the world!\nPrice:$140,000\nInsurance Price:$42,000"
            } else if (noInsurance.checked) {
                desc.value = "Blue Lamborghini\nSimilar to its predacesor, this Lamborghni comes in an amazong blue color. The focus of this car is speed. This is evident as this car is one of the fastest in the world!\nPrice:$140,000\nInsurance Price:$0"
            }
        }else if(color.value === "option2"){
            if (insurance.checked) {
                desc.value = "Green Lamborghini\nThis green Lamborghini is one of the best cars on the market. The team at Lamborghini wanted to make a super comfertable car and delivered with this car.\nPrice:$125,000\nInsurance Price:$34,500"
            } else if (noInsurance.checked) {
                desc.value = "Green Lamborghini\nThis green Lamborghini is one of the best cars on the market. The team at Lamborghini wanted to make a super comfertable car and delivered with this car.\nPrice:$115,000\nInsurance Price:$0"
            }
        }else if(color.value === "option3"){
            if (insurance.checked) {
                desc.value = "This car is a budget friendly option for those who want a Lamborghini. However, this car is still very high end and includes many of the same features that the more expensive cars have.\nPrice:$70,000\nInsurance Price:$21,000";
            } else if (noInsurance.checked) {
                desc.value = "This car is a budget friendly option for those who want a Lamborghini. However, this car is still very high end and includes many of the same features that the more expensive cars have.\nPrice:$70,000\nInsurance Price:$0";
            }
        }
    }else if(cars.value === "Mustang"){
        if(color.value === "option1"){
            if (insurance.checked) {
                desc.value = "";
                desc.value = "Black Mustang\nThis is the fastest car that mustang produces. Its speed rivals the fastest cars from Ferrari and Lamborghini. It goes 0-60 in 3 seconds. Comes in a sleek black color\nPrice:$120,000\nInsurance Price:$36,000"
            } else if (noInsurance.checked) {
                desc.value = "";
                desc.value = "Black Mustang\nThis is the fastest car that mustang produces. Its speed rivals the fastest cars from Ferrari and Lamborghini. It goes 0-60 in 3 seconds. Comes in a sleek black color\nPrice:$120,000\nInsurance Price:$0"
            }
        }else if(color.value === "option2"){
            if (insurance.checked) {
                desc.value = "Silver Mustang\nThis car is the cheapest car that mustang offers. This car was made to be driven everyday and prioritizes comfort. This car includes very comfortable leather seats and great suspension\nPrice:$50,000\nInsurance Price:$15,000"
            } else if (noInsurance.checked) {
                desc.value = "Silver Mustang\nThis car is the cheapest car that mustang offers. This car was made to be driven everyday and prioritizes comfort. This car includes very comfortable leather seats and great suspension\nPrice:$50,000\nInsurance Price:$0"
            }
        }else if(color.value === "option3"){
            if (insurance.checked) {
                desc.value = "White Mustang\nThis car is the a great overall car for buyers looking for mustang. It combines the best features from the black and silver Mustangs. This car is both fast and comfortable. \nPrice:$70,000\nInsurance Price:$21,000"
            } else if (noInsurance.checked) {
                desc.value = "White Mustang\nThis car is the a great overall car for buyers looking for mustang. It combines the best features from the black and silver Mustangs. This car is both fast and comfortable. \nPrice:$70,000\nInsurance Price:$0"
            }
        }
    }
}

function changePicture(){
    let selectedValue = color.value;
    let imageSources = "";
    if(cars.value === "Ferrari"){
        imageSources = {
            option1: "images/Ferrari/redFerrari.jpeg",
            option2: "images/Ferrari/whiteFerrari.jpeg",
            option3: "images/Ferrari/yellowFerrari.jpeg",
        };
    }else if(cars.value === "Lamborghini"){
        imageSources = {
            option1: "images/Lambo/blueLambo.jpeg",
            option2: "images/Lambo/greenLambo.jpeg",
            option3: "images/Lambo/yellowLambo.jpeg",
        };
    }else if(cars.value === "Mustang"){
        imageSources = {
            option1: "images/Mustang/blackMustang.webp",
            option2: "images/Mustang/silverMustang.jpeg",
            option3: "images/Mustang/whiteMustang.jpg",
        };
    }
    // Update the image source based on the selected value
    image.src = imageSources[selectedValue];
    changeDesc();
}

function changeColors(){
    const ferarri = ["Red","White","Yellow"];
    const lambo = ["Blue","Green","Yellow"];
    const mustang = ["Black", "Silver", "White"];
    if(cars.value === "Ferrari"){
        color.innerHTML = "";
        ferarri.forEach(function (optionText, index) {
            const option = document.createElement("option");
            option.value = `option${index + 1}`;
            option.text = optionText;
            color.add(option);
        });
    }else if(cars.value === "Lamborghini"){
        color.innerHTML = "";
        lambo.forEach(function (optionText, index) {
            const option = document.createElement("option");
            option.value = `option${index + 1}`;
            option.text = optionText;
            color.add(option);
        });
    }else if(cars.value === "Mustang"){
        color.innerHTML = "";
        mustang.forEach(function (optionText, index) {
            const option = document.createElement("option");
            option.value = `option${index + 1}`;
            option.text = optionText;
            color.add(option);
        });
    }
    changePicture();
    changeDesc();
}