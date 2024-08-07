import {delay} from "helpers"


const formatDate = date =>
   `${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')} ${String(
      date.getSeconds(),
   ).padStart(2, '0')}.${String(date.getMilliseconds()).padStart(3, '0')}`

export async function fetchPokemon(name, opts = {delay: 0, signal: null}) {

   console.log(arguments);

   const pokemonQuery = `
    query PokemonInfo($name: String) {
      pokemon(name: $name) {
        id
        number
        name
        image
        attacks {
          special {
            name
            type
            damage
          }
        }
      }
    }
  `

   await delay(opts.delay);
   
   return window
      .fetch('https://graphql-pokemon2.vercel.app/', {
         // learn more about this API here: https://graphql-pokemon2.vercel.app/
         method: 'POST',
         headers: {
            'content-type': 'application/json;charset=UTF-8',
         },
         body: JSON.stringify({
            query: pokemonQuery,
            variables: {name: name.toLowerCase()},
         }),
         signal: opts.signal,
      })
      .then(async response => {
         
         const {data} = await response.json()
         if (response.ok) {
            const pokemon = data?.pokemon
            if (pokemon) {
               pokemon.fetchedAt = formatDate(new Date())
               return pokemon
            } else {
               return Promise.reject(new Error(`No pokemon with the name "${name}"`))
            }
         } else {
            // handle the graphql errors
            const error = {
               message: data?.errors?.map(e => e.message).join('\n'),
            }
            return Promise.reject(error)
         }
      })
}