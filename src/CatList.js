// write your CatList component here

import React, { Component } from 'react';

class CatList extends Component {
  debugger
  renderCats = () => {
    return this.props.catPics.map(cat => <img key={cat.id} src={cat.url} />)
  }

  render() {
    return(
      <div>
        {this.renderCats()}
      </div>
    )
  }

}

export default CatList;