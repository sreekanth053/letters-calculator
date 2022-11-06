// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {count: ''}

  changeInput = event => {
    const {value} = event.target

    this.setState({count: value})
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div className="card-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <div className="input-phrase-container">
            <label className="para" htmlFor="phraseText">
              Enter the phrase
            </label>
            <input
              className="input"
              id="phraseText"
              onChange={this.changeInput}
              placeholder="Enter the phrase"
              type="text"
              value={count}
            />
          </div>
          <div className="buttons">
            <button type="button" className="btn">
              <p className="text">No.of letters: {count.length}</p>
            </button>
          </div>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="img"
        />
      </div>
    )
  }
}
export default LettersCalculator
