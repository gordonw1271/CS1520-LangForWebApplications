window.addEventListener("load", addEventListeners);

var blogURL = new URL("http://localhost:8000/blogs");

function addEventListeners() {
    let viewAllBlogsButton = document.getElementById("viewAllBlogEntriesButton");
    viewAllBlogsButton.addEventListener("click", retrieveAndDisplayAllBlogEntries);

    let viewABlogButton = document.getElementById("getOneBlogEntryButton");
    viewABlogButton.addEventListener("click", retrieveAndDisplayOneBlogEntry);

    let addNewBlogButton = document.getElementById("addNewBlogButton");
    addNewBlogButton.addEventListener("click", addOneBlogEntry);

    let updateExistingBlogButton = document.getElementById("updateExistingBlogButton");
    updateExistingBlogButton.addEventListener("click", updateExistingBlog);

    // ADD EVENT LISTENER FOR THE DELETE BUTTON HERE
    let deleteExistingBlogButton = document.getElementById("deleteExistingBlogButton");
    deleteExistingBlogButton.addEventListener("click", deleteExistingBlog);
}

async function retrieveAndDisplayAllBlogEntries() {
    // issuing an HTTP Get request to get all the blogs
    let blogs = await httpGetRequest(blogURL);

    // cleaning up the output display for the new data
    let resultsElement = document.getElementById("resultsId");
    resultsElement.innerHTML = "";

    // looping over all the blogs and creating the necessary HTML elements
    for(let blog of blogs){
        let nameElement = document.createElement("h2");
        nameElement.innerHTML = `${blog.id} - ${blog.brand}`;

        let priceElement = document.createElement("h3");
        priceElement.innerHTML = `$${blog.price}`

        resultsElement.append(nameElement,priceElement);
    }
}

async function retrieveAndDisplayOneBlogEntry() {
    // getting the number of the blog to be deleted
    let onePhoneElement = document.getElementById("phoneNumberTextInput");
    let onePhone = onePhoneElement.value;

    let phone = await httpGetRequest(`${blogURL}/${onePhone}`);

    let resultsElement = document.getElementById("resultsId");
    resultsElement.innerHTML = "";

    let nameElement = document.createElement("p");
    nameElement.innerHTML = `${phone.id} - ${phone.brand}`;
    let priceElement = document.createElement("p");
    priceElement.innerHTML = `$${phone.price}`
    let screenElement = document.createElement("p");
    screenElement.innerHTML = `${phone.screen} inches`
    let pixelElement = document.createElement("p");
    pixelElement.innerHTML = `${phone.pixels}`
    let resElement = document.createElement("p");
    resElement.innerHTML = `${phone.resolution} PPI`
    let storageElement = document.createElement("p");
    storageElement.innerHTML = `${phone.storage} GB`
    let ramElement = document.createElement("p");
    ramElement.innerHTML = `${phone.ram} GB`
    let batteryElement = document.createElement("p");
    batteryElement.innerHTML = `${phone.battery} mah`
    let weightElement = document.createElement("p");
    weightElement.innerHTML = `${phone.weight} ounces`

    resultsElement.append(nameElement,priceElement,screenElement,pixelElement,resElement,storageElement,ramElement,batteryElement,weightElement);


    // emptying the display area
    onePhoneElement.value = "";
}

async function addOneBlogEntry() {
    // getting a hold on the blog elements title, author, and article from the page
    let newBlogBrandElement = document.getElementById("insertNewBlogBrandTextInput");
    let newBlogPriceElement = document.getElementById("insertNewBlogPriceTextInput");
    let newBlogScreenSizeTextInput = document.getElementById("insertNewBlogScreenSizeTextInput");
    let newPixel = document.getElementById("insertNewBlogPixelTextInput");
    let newScreenRes = document.getElementById("insertNewBlogResolutionTextInput");
    let newStorage = document.getElementById("insertNewBlogStorageTextInput");
    let newRAM = document.getElementById("insertNewBlogRAMTextInput");
    let newBattery = document.getElementById("insertNewBlogBatteryTextInput");
    let newWeight = document.getElementById("insertNewBlogWeightTextInput");
    // getting a hold in their values
    let brand = newBlogBrandElement.value;
    let price = newBlogPriceElement.value;
    let screenSize = newBlogScreenSizeTextInput.value;
    let pixel = newPixel.value;
    let screenRes = newScreenRes.value;
    let storage = newStorage.value;
    let ram = newRAM.value;
    let battery = newBattery.value;
    let weight = newWeight.value;

    // creating a blog object
    let newBlog = {};
    newBlog["brand"] = brand;
    newBlog["price"] = price;
    newBlog["article"] = screenSize;
    newBlog["pixels"] = pixel;;
    newBlog["resolution"] = screenRes;
    newBlog["storage"] = storage;
    newBlog["ram"] = ram;
    newBlog["battery"] = battery;
    newBlog["weight"] = weight;

    // issuing an HTTP Post Request
    await httpPostRequest(blogURL,newBlog);

    // emptying the display area
    newBlogBrandElement.value = "";
    newBlogPriceElement.value = "";
    newBlogScreenSizeTextInput.value = "";
    newPixel.value = "";
    newScreenRes.value = "";
    newStorage.value = "";
    newRAM.value ="";
    newBattery.value ="";
    newWeight.value="";
}

async function updateExistingBlog() {
    // getting a hold on the blog number to be updated
    let updatingExistingPhoneElement = document.getElementById("updateExistingPhoneTextInput");

    let updatePhoneBrandElement = document.getElementById("updateExistingBlogBrandTextInput");
    let updatePhonePriceElement = document.getElementById("updateExistingBlogPriceTextInput");
    let updatePhoneScreenElement = document.getElementById("updateExistingBlogScreenTextInput");
    let updatePhonePixelElement = document.getElementById("updateExistingBlogPixelTextInput");
    let updatePhoneResElement = document.getElementById("updateExistingBlogResTextInput");
    let updatePhoneStorageElement = document.getElementById("updateExistingBlogStorageTextInput");
    let updatePhoneRamElement = document.getElementById("updateExistingBlogRamTextInput");
    let updatePhoneBatteryElement = document.getElementById("updateExistingBlogBatteryTextInput");
    let updatePhoneWeightElement = document.getElementById("updateExistingBlogWeightTextInput");

    let updatingExistingPhone = updatingExistingPhoneElement.value;
    let updatePhoneBrand = updatePhoneBrandElement.value;
    let updatePhonePrice = updatePhonePriceElement.value;
    let updatePhoneScreen = updatePhoneScreenElement.value;
    let updatePhonePixel = updatePhonePixelElement.value;
    let updatePhoneRes = updatePhoneResElement.value;
    let updatePhoneStorage = updatePhoneStorageElement.value;
    let updatePhoneRam = updatePhoneRamElement.value;
    let updatePhoneBattery = updatePhoneBatteryElement.value;
    let updatePhoneWeight = updatePhoneWeightElement.value;

    let updateBlog = {};
    if(updatePhoneBrand!=""){
        updateBlog["brand"] = updatePhoneBrand;
    }
    if(updatePhonePrice!=""){
        updateBlog["price"] = updatePhonePrice;
    }
    if(updatePhoneScreen!=""){
        updateBlog["screen"] = updatePhoneScreen;
    }
    if(updatePhonePixel!=""){
        updateBlog["pixels"] = updatePhonePixel;
    }
    if(updatePhoneRes!=""){
        updateBlog["resolution"] = updatePhoneRes;
    }
    if(updatePhoneStorage!=""){
        updateBlog["storage"] = updatePhoneStorage;
    }
    if(updatePhoneRam!=""){
        updateBlog["ram"] = updatePhoneRam;
    }
    if(updatePhoneBattery!=""){
        updateBlog["battery"] = updatePhoneBattery;
    }
    if(updatePhoneWeight!=""){
        updateBlog["weight"] = updatePhoneWeight;
    }

    await httpPatchRequest(`${blogURL}/${updatingExistingPhone}`,updateBlog)

    updatingExistingPhoneElement.value = "";
    updatePhoneBrandElement.value = "";
    updatePhonePriceElement.value = "";
    updatePhoneScreenElement.value = "";
    updatePhonePixelElement.value = "";
    updatePhoneResElement.value = "";
    updatePhoneStorageElement.value = "";
    updatePhoneRamElement.value = "";
    updatePhoneBatteryElement.value = "";
    updatePhoneWeightElement.value = "";
}

async function deleteExistingBlog() {
    // getting the number of the blog to be deleted
    let deleteExistingPhoneNumberElement = document.getElementById("deleteExistingPhoneNumberTextInput");
    let deleteExistingPhoneNumber = deleteExistingPhoneNumberElement.value;

    // issuing a delete request for that given blog number
    await httpDeleteRequest(`${blogURL}/${deleteExistingPhoneNumber}`)

    // emptying the display area
    deleteExistingPhoneNumberElement.value = "";

}

async function httpGetRequest(theUrl) {
    return await fetch(theUrl)
        .then(response => {
            return response.json();
        })
        .then(data => {
            return data;
        })
        .catch(error => console.error('Error:', error));
};

async function httpPostRequest(theUrl, newBlog) {
    return await fetch(theUrl, {
        method: 'POST',
        body: JSON.stringify(newBlog),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
    })
    .catch(error => console.error('Error:', error));
}

async function httpPatchRequest(theUrl, updatedField) {
    return await fetch(theUrl, {
        method: 'PATCH',
        body: JSON.stringify(updatedField),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
    })
    .catch(error => console.error('Error:', error));
}

async function httpDeleteRequest(theUrl) {
    return await fetch(theUrl, {
        method: 'DELETE'})
    .catch(error => console.error('Error:', error));
}
