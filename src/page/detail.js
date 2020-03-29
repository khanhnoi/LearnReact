import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row,Container,Col
  } from 'reactstrap';
  
import { withRouter } from "react-router-dom";
import db from '../db/db.json';
import {Context} from '../contexts/cart';
class Detail extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.props.match.params.id.toString());
        console.log(db);
        return(
            db.Products.map((value)=>{
                if(value.id.toString()===this.props.match.params.id.toString()){
                    console.log(value.id.toString())
                    return (
                        <Row>
                    <Col sm="12" md={{ size: 8, offset: 2    }}>
                    <Card>
                    <CardImg top width="100%" src={value.imgUrl} alt="Card image cap" />
                    <CardBody>
                      <CardTitle>Card title</CardTitle>
                      <CardSubtitle>Card subtitle</CardSubtitle>
                      <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                      
                      <Context.Consumer>
                      {({addToCart})=>
                      <Button 
                      onClick={()=>addToCart(value)}
                  >
                        Add To Cart 
                        </Button>
                        }
                    
                    </Context.Consumer>
                    </CardBody>
                  </Card>
                    </Col>
                  </Row>
                        
                    );
                }
                
            })
        )
        
      
        
    }
}

export default withRouter(Detail);