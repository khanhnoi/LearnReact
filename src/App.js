import React , { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TopMenu from './component/TopMenu';
import Product from './page/product';
import Count from './component/count'
import {CartProvider} from './contexts/cart';

import db from './db/db.json';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Detail from './page/detail';
import Contact from './component/contact';
import Dslienhe from './component/dslienhe';

function App() {
  // You can use Hooks here!
  const [data, setData] = useState(db.users);
    const addDataFuc =(db)=>{
      const temp= data;
      temp.push(db)
      setData(temp);
      console.log("da ket noi voi app tu class con")
    }
    // setDataFuc={(data)=>this.setDataFuc(data)}
 // console.log("data1:"+data);
  return (
    <CartProvider>
     
    <Router>
      <div className="App">
       <TopMenu/>
       <Route exact  path="/" >
        <Dslienhe data={data} />
      </Route>   
       <Route exact path="/product">
        <Product   />
        {/* <Detail/> */}
      </Route>
      <Route exact path="/count">
        <Count >
          {(data)=><h1>{data.count}</h1>}
        </Count>
        <Count >
          {({count})=><h2  >{count}</h2>}
        </Count>
      </Route>
      <Route path="/product/:slug.:id" >
        <Detail/>
      </Route>
     
      <Route path="/contact" >
        <Contact addDataFuc={(data)=>addDataFuc(data)} data={data} />
      </Route>

    </div>
    </Router>
    
    </CartProvider>
    
  );
}

export default App;
