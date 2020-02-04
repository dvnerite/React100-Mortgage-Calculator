import React from 'react';
export default class App extends React.Component {
  // your Javascript goes here

  constructor(props) {
    super(props);

    this.state = {
      rate: '',
      balance: '',
      output: '',
      term: 15,
      monthlyPayment: '0',
  }

    this.handleCalculation = this.handleCalculation.bind(this)
    this.handleBalanceChange = this.handleBalanceChange.bind(this)
    this.handleRateChange = this.handleRateChange.bind(this)
    this.handleTermChange = this.handleTermChange.bind(this)
  }

  handleBalanceChange(event) {
    this.setState ({
      balance: event.target.value})
  }
  handleRateChange(event) {
    this.setState ({
       rate: event.target.value})
  }
  handleTermChange(event) {
    this.setState ({
      term: Number(event.target.value)})
  }

  handleCalculation(event) {
    let rate = Number(this.state.rate)/100/12;
    console.log(`rate`, rate);
    let balance = Number(this.state.balance);
    console.log(`balance`, balance);
    let term = Number(this.state.term)*12;
    console.log(`term`, term);
    let paymentDue = ((balance * rate) / (1 - (Math.pow((1 + rate) , term * -1)))).toFixed(2);

      this.setState({submit: paymentDue});
    
    console.log(`paymentDue`, paymentDue);

    this.setState({
      output: `$${paymentDue} is your monthly payment.`
    });
   
  }

    render() {
     return (
      
  <div className='container'>
       
    <h3>Mortgage Calculator</h3>

    <label>Loan Balance</label>
    <input name='balance' type='number' placeholder='0' value={this.state.balance} onChange={this.handleBalanceChange}></input>
    <br></br>
     
    <label>Interest Rate</label>
    <input name='rate' type='number' placeholder='0' step='0.01' value={this.state.rate} onChange={this.handleRateChange}></input>
    <br></br>
      

    <label>Loan Term</label>
      <select name="term" value={this.state.term} onChange={this.handleTermChange}>
        <option value= "15">15 year</option>
				<option value="30">30 year</option>
      </select>
    <br></br>
    
    <button name ='submit' onClick={this.handleCalculation}>Submit</button>
    <div name='output' id="output" value={this.setState}>  {this.state.output} </div>
      
    </div>
    );
  }
 }