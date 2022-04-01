const jokeContainer = document.querySelector(".container")
const box = document.querySelector(".box")

const initJoke = async()=> {
    await getJoke()
    
}

const getJoke= async()=>{
    let url = `https://v2.jokeapi.dev/joke/Any`
    let res = await fetch(url)
    let data = await res.json()
    if(data.type == "twopart") {
        dataTwo(data)
    }
    else{
        dataSingle(data)
    }


}
const dataTwo = (joke)=>{

    const setup = joke.setup
    const delivery = joke.delivery

    const jokeEl = document.createElement("div")
    jokeEl.classList.add("box")

    jokeEl.innerHTML = `
    <h3 id="joke-category">Category</h3>
    <h4 id="joke-setup">${setup}</h4>
    <p id="joke-delivery">${delivery}</p>
    <p id="safe">Safe</p>
    
    `
    jokeContainer.appendChild(jokeEl)


sdssd
}
const dataSingle = (joke)=>{
    console.log(joke.joke + "SINGLE")


}
const deleteJoke = ()=>{
    jokeContainer.innerHTML = ""

}
    const deleteJoke1 = ()=>{
       
        jokeContainer.removeChild(jokeContainer.firstChild)
        
}


