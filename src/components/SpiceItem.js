import React from 'react'

class SpiceItem extends React.Component {

  render() {
    console.log('SpiceItem Props: ', this.props)
    return (
      <div className="spice-item">
        <img src={this.props.spice.image} alt={"replace me with a TITLE"} />
        <div className="details">
          <h2>{this.props.spice.title}</h2>
          <p>{this.props.spice.description}</p>
          <em>{this.props.spice.notes}</em>
        </div>
      </div>
    )
  }
}

export default SpiceItem