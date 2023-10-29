function doConvert(event)   {

    console.log("button clicked");
    event.preventDefault();

    let myNumber = document.querySelector("#myNumber").value.trim()
    

    console.log(myNumber);
    

    let result = Number(myNumber) * 272.3;
    console.log(result);

    let message = `If we change ${myNumber} Marla into Square foot then we will get = ${result} sq.ft.`;

    document.querySelector("#resultBox").innerHTML = message;

}