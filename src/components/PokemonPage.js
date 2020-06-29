import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  constructor() {
    super()
    this.state = {
      searchText: "",
      pokemon: []
    }
  }

  fetchPokemon = () => {
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(json => this.setState({pokemon: json}))
  }

  onSearchChanged = (e) => {
    this.setState({searchText: e.target.value})
  }

  onFormSubmit = (e) => {
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: e.target.name.value,
        hp: e.target.hp.value,
        sprites: {
          front: e.target.frontUrl.value,
          back: e.target.backUrl.value
        }
      }),
    }).then(res => res.json()).then(json => {
      let pokemon = this.state.pokemon;
      pokemon.push(json)
      this.setState({...this.state.pokemon, pokemon: pokemon})
    })
  }

  componentDidMount() {
    this.fetchPokemon()
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm onFormSubmit={this.onFormSubmit} />
        <br />
        <Search onChange={this.onSearchChanged} />
        <br />
        <PokemonCollection pokemon={this.state.pokemon.filter(p => p.name.includes(this.state.searchText))}/>
      </Container>
    )
  }
}

export default PokemonPage
