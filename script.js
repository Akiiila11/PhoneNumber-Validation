const btn = document.getElementById("button");

btn.addEventListener("click" , () => {
    const inputNum = document.getElementById("number").value;

    const api = fetch(`https://phonevalidation.abstractapi.com/v1/?api_key=05110cf63d354bf5be4ca3d5e008e8d9&phone=${inputNum}`);
    // When the response comes back, turn it into JSON
    api.then((data) => data.json())
    // When the JSON is ready, show it or put it on the page
    .then((ele) => {
        
    // the actual phone number
    const phone = document.getElementById("phone");
    phone.innerText = ele.phone;

    // true/false (is it real?)
    const valid = document.getElementById("valid");
    valid.innerText = ele.valid;

    // Internatinal format
    const international = document.getElementById("internationl-format");
    international.innerText = ele.format.international;

    // Local format
    const local = document.getElementById("local-format");
    local.innerText = ele.format.local;

    // country code 
    const code = document.getElementById("country-code");
    code.innerText = ele.country.code;

    // country name 
    const countryName = document.getElementById("country-name");
    countryName.innerText = ele.country.name
    // country prefix
    const prefix = document.getElementById("country-prefix");
    prefix.innerText = ele.country.prefix ;

    // country location
    const location = document.getElementById("location");
    location.innerText = ele.location;

    // Type
    const type = document.getElementById("type");
    type.innerText = ele.type;

    // carrier
    const carrier = document.getElementById("network-carrier");
    carrier.innerText = ele.carrier;

    });
});