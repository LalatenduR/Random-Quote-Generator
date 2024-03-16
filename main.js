//generate
//placeq

const quote=()=>{
    const url = 'https://famous-quotes4.p.rapidapi.com/random?category=all&count=2';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7da05822f2msh0ad6baa91cb3119p1f6ac1jsnd0162bf8a6bc',
		'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com'
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
