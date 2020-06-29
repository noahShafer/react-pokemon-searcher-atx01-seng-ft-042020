import React from 'react'

export default class Search extends React.Component {
  
  render() {
    return (
      <div className="ui search">
        <div className="ui icon input">
          <input onChange={this.props.onChange} className="prompt"/>
          <i className="search icon" />
        </div>
      </div>
    )
  }
}