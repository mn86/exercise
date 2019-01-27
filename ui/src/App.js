import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AppHeader from "./components/AppHeader";
import CustomersList from "./components/CustomersList";
import CustomerDetails from "./components/CustomerDetails";
import OrderDetails from "./components/OrderDetails";
import CreationForms from "./components/CreationForms";


class App extends Component {

  render() {
    return (
      <div className="App">
        <AppHeader/>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={CustomersList}/>
                <Route exact path="/test" component={CreationForms}/>
                <Route path="/customer/:customerId" render={(props) => (
                    <CustomerDetails key={props.match.params.customerId} {...props} />)
                }/>
                <Route path="/order/:orderId" render={(props) => (
                    <OrderDetails key={props.match.params.orderId} {...props} />)
                }/>
            </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
