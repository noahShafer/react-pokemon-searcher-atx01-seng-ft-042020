import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  constructor() {
    super()
    this.state = {
      img: ""
    }
  }

  toggleImage = () => {
    this.setState({
      img: this.state.img == this.props.pokemon.sprites.front ? this.props.pokemon.sprites.back : this.props.pokemon.sprites.front
    })
  }

  componentDidMount() {
    this.setState({img: this.props.pokemon.sprites.front})
  }


  render() {
    return (
      <Card onClick={() => this.toggleImage()}>
        <div>
          <div className="image">
            <img src={this.state.img} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
