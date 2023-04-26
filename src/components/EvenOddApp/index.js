// Write your code here
import {Component} from 'react'

class EvenOddApp extends Component {
  state = {
    count: 0,
  }

  countChange = () => {
      const {count} = this.state 
      <h1 className="header">Count {count}</h1>
    
      if (count%2 == 0) {
           return 
               <p className="description">Count is Even</p>
      } else {
          return 
          <p className="description">Count is Odd</p>
      }
      
  }
  render() {
    return (
      <div className="bg-container">
        <div className="card-container">
        
        <button className="Increment-btn" type="button" {countChange()} >Increment</button>
        <p className="text">*Increase By Random Number Between 0 to 100</p>

        </div>
      </div>
    )
  }
}
export default  EvenOddApp