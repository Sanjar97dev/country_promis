const _countryUrl = 'https://restcountries.com/v3.1/all ';

const ulTag = document.querySelector('ul')
const input = document.querySelector('input')
const btn = document.querySelector('button')

function getUsers(){
    fetch(_countryUrl)
    .then(response=>response.json())
    .then(data=>{country = data;
    showUsers(data)
    console.log(data);
    })
   
}




function showUsers(arr){
    for (const country of arr) {
        ulTag.innerHTML+=`<li>
        <h1>${country.name.common}</h1>
        <h1>${country.flag}</h1>
        <h2>Area: ${country.area}</h2>
        <h2>Capital: ${country.capital   }</h2>
        <h3>Region: ${country.region}</h3>
        <h3>Population:${country.population}</h3> 
        </li>`
    }
    
}


input.onchange = () => {
    const countFilter = country.filter(item => item.name.common.toLowerCase().includes(input.value.toLowerCase()));
    setTimeout(() => {
      if (countFilter.length > 0) {
        showUsers(countFilter);
      } else {
        ulTag.innerHTML = '<li>No matching countries found</li>';
      }
    }, 2000);
  };

btn.onclick=()=>{
    const ulList = ulTag.querySelector('li')
    
        if (!ulList) {
            setTimeout(() => {
            getUsers()
        }, 2000);
        } else {
            ulTag.innerHTML=''
        }
}

