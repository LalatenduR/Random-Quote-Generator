//generate
//placeq

const quote=()=>{
    const url = 'https://famous-quotes4.p.rapidapi.com/random?category=all&count=2';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '',
		'X-RapidAPI-Host': ''
	}
};

fetch(url,options)
    .then(Response=>Response.json())
    .then((Response)=>{
        const quoteElement = document.getElementById("placeq");
        const quoteText = Response[0].text;
        quoteElement.textContent = quoteText;

        
    })
    .catch(err=>console.error(err));
}

generate.addEventListener("click",(e)=>{
    e.preventDefault();
    quote();
})
