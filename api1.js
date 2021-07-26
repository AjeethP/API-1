fetch("https://restcountries.eu/rest/v2/regionalbloc/eu")
.then((data)=>{
    console.log(data);
    return data.json();
})
.then((countriesdata)=>{
    let countrieslist=document.createElement("div");
    countrieslist.className=("container")
    countriesdata.forEach((datas) => {
        let countries=document.createElement("div")
        countries.className=("country-container")
        countries.innerHTML=`
        <div class="details">
        <img class="flags" src="${datas.flag}"></img>
        <h2 class="name"><u>${datas.name}<u></h2>
        <p><span class="heading">Capital:</span>${datas.capital}</p>
        <p><span class="heading">Region:</span>${datas.region}</p>
        <p><span class="heading">Population:</span>${datas.population}</p>
        <div>`
        countrieslist.append(countries)
    });
    document.body.append(countrieslist)
})