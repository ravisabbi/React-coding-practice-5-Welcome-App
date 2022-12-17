// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false, text: 'Subscribe'}

  onSubscribe = () => {
    this.setState(prevState => {
      if (prevState.isSubscribed) {
        return {isSubscribed: false, text: 'Subscribe'}
      }
      return {isSubscribed: true, text: 'Subscribed'}
    })
  }

  renderSubscribeBtn = () => {
    const {isSubscribed, text} = this.state
    return isSubscribed ? (
      <button
        type="button"
        className="subscribe-btn"
        onClick={this.onSubscribe}
      >
        {text}
      </button>
    ) : (
      <button
        type="button"
        className="subscribe-btn"
        onClick={this.onSubscribe}
      >
        {text}
      </button>
    )
  }

  render() {
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        {this.renderSubscribeBtn()}
      </div>
    )
  }
}

export default Welcome
