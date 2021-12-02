
const fetchCurrencies =  () => {
    
    const url = "https://jsonplaceholder.typicode.com/todos";
    return fetch(url).then(res => res.json()).then(data => {
        // do somthin with data
       return data.map(({ id, title}) => {
            return {
                id,
                label: title
            }
        })
      

    }).catch(err => console.log('Erro ', {err}))
return currencies;
    // setTimeout(() => currencies, 3000)
}

const populateOptions = async element => {
    const currencyData = await  fetchCurrencies();
    currencyData.forEach(({ id, label }) => {
      const option = document.createElement("option");
      option.setAttribute("value", id);
      option.innerText = label;

      element.appendChild(option);
    });

}
const onSubmit = (from, to, input) => {
    const srcCurrency= from.value,
    targetCurrency = to.value, 
    amount = input.value

    // Validation passd

    // Find raet f
    const rate = 480

    const conversion = Number.parseFloat(amount) * rate
const formatedConversion = Intl.NumberFormat('en-US').format(conversion)
    const convOutput = `<p> Result: ${formatedConversion} </p>
    <p> Rate: ${rate} </p>
    `;
    const output = document.querySelector("#conversion");
    output.innerHTML = convOutput;

    console.log(srcCurrency, targetCurrency, amount)
}
window.onload = function () {
    const form = document.querySelector("#cc-form");
    const from = document.querySelector("#from")
    const to = document.querySelector("#to")
    const input = document.querySelector("#amount")
    populateOptions(to)
    populateOptions(from)
    form.addEventListener("submit", (e) => {
        e.preventDefault()

      onSubmit(from , to, input );
    });
  
}
const id = setTimeout(() => console.log("ho"), 1000);
console.log('logging...')
console.info('info...')
console.error('error...')
console.warn('warn...')
console.time(id)

// const userId = Math.floor(Math.random() * 1000000000000);
// localStorage.setItem("AUTH_USER", JSON.stringify(userId));

loggedInUser = localStorage.getItem("AUTH_USER");
console.log('User ', loggedInUser)