async function getData(){
    try{
        const responseCountries = await fetch("https://restcountries.com/v3.1/all");
        const resultCountries = await responseCountries.json();

        resultCountries.forEach(function (item, index){
            const officialName = document.createElement("li");
            const container = document.getElementById("container");

            officialName.innerText = item.name.official;
            officialName.classList.add("list-group-item");
            container.appendChild(officialName);
        })
         


    }
    catch (error){
        console.log(error);
    }
}
getData();