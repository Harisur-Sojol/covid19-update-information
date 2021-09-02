const errorResult = document.getElementById('error-result')
const searchCountry = () => {
    const input = document.getElementById('input-feild')
    const inputText = input.value
    input.value = ""
    if (inputText.length == 0) {
        alert('Priya you have to search by country name !!!')
    }
    else if (inputText.length > 0) {
        const url = `https://api.covid19api.com/total/country/${inputText}`
        fetch(url)
            .then(res => res.json())
            .then(data => displayCountryCases(data))
            .catch(error => displayError(error))

    }
}
const displayCountryCases = countryCases => {
    const showResult = document.getElementById('show-details')
    showResult.textContent = '';
    errorResult.textContent = '';
    const div = document.createElement('div')
    countryCases.forEach(country => {
        div.innerHTML = `
        <h4 class="bg-info">country: ${country.Country}</h4>
        <h4 class="bg-info my-2">Total Affected: ${country.Confirmed}</h4>
        <h4 class="bg-info my-2">Recovered: ${country.Active}
        <h4 class="bg-info">Total Deaths: ${country.Deaths}</h4>
        // <h4 class="bg-info">Date: ${country.Date}</h4>

        `
        showResult.appendChild(div)

    })
}
const displayError = () => {
    errorResult.textContent = '';
    const div = document.createElement('div');
    div.innerHTML =
    `
<div class="card mx-auto" style="width: 18rem;">
<div class="card-body">
<h5 class="card-title">No Result Found</h5>
<p class="card-text">You have searched that not found</p>
</div>
</div>
`
errorResult.appendChild(div)
}

