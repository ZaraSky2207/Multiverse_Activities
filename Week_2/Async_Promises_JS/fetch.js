import fetch from 'node-fetch'


fetch('https://pokeapi.co/api/v2/pokemon/93').then((res) => {
    return res.json()
}).then((data) => {
    console.log(data.name)
}).catch(() => {
    console.log('pokemon not found')
})