const pokemonselectionlist = document.querySelectorAll('.pokemon')
const cardpokemon = document.querySelectorAll('.pokemon-card')

pokemonselectionlist.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        
        const pokemonCardOpen = document.querySelector('.open')
        pokemonCardOpen.classList.remove('open')

        const selectedPokemonid = pokemon.attributes.id.value

        const pokemonCardidToOpen = selectedPokemonid + '-card'
        const pokemonCardToOpen = document.getElementById(pokemonCardidToOpen)
        pokemonCardToOpen.classList.add('open')

        const activePokemonInTheList = document.querySelector('.active')
        activePokemonInTheList.classList.remove('active')

        const pokemonSelectedFromTheList = document.getElementById(selectedPokemonid)
        pokemonSelectedFromTheList.classList.add('active')
    })
})