import React from 'react'

class DigitalClicker extends React.Component {
  constructor() {
    super()
    this.state = {
      timesClicked: 0
    }
  }

  addClick = () => {
    this.setState({
      timesClicked: this.state.timesClicked+=1
    })
  }

  render(){
    return (
      <button onClick={this.addClick}>{this.state.timesClicked}</button>
    )
  }
}

export default DigitalClicker
