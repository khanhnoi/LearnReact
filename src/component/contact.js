import React, { Component } from 'react';

import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state ={
      isRedirect: false,
      data:props.data,
      // name:"",
      // email:"",
      // select: 0
    }
    
  }

  submitForm = (event)=>{
    event.preventDefault(); // hàm stop không cho chuyển trang
    const obj ={};
    obj.email=this.state.email;
    obj.name=this.state.name;
    obj.select=this.state.select;
    obj.file=this.state.file;
    this.props.addDataFuc(obj)
    this.setState({
      isRedirect: !this.state.isRedirect     
    }    
    )    
  }
  isChange= (event)=>{
    const name = event.target.name;
    const value= event.target.value;
     // console.log(event.target.files)
      this.setState({
        [name]:value,

      })
     // setArr([,,,arr, newValue])
  }  
  isChangeFile= (event)=>{
     // console.log(event.target.files)
      this.setState({
       file: event.target.files[0].name
      })
      
  }  
    render() {
      console.log(this.state);
      if(this.state.isRedirect)
      {
        return <Redirect
        to="/"
      />
      }
      else
        return (
        //   <Lienhe isChange={(event)=>this.isChange(event)}
        //   isChangeFile={(event)=>this.isChangeFile(event)}
        //   submitForm={(event)=>this.submitForm(event)}/>
        // );
        <Col sm="12" md={{ size: 8, offset: 2    }}>
            <Form>
      <FormGroup row>
        <Label for="exampleEmail" sm={2}>Email</Label>
        <Col sm={10}>
          <Input onChange={(event)=>this.isChange(event)} type="email" name="email" id="exampleEmail" placeholder="nqkhanh1998@gmail.com" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleName" sm={2}>Name</Label>
        <Col sm={10}>
          <Input onChange={(event)=>this.isChange(event)} type="text" name="name" id="exampleNamed" placeholder="Khánh Nòi" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleSelect" sm={2}>Select</Label>
        <Col sm={10}>
          <Input onChange={(event)=>this.isChange(event)} type="select" name="select" id="exampleSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </Col>
      </FormGroup>
      
      {/* <FormGroup row>
        <Label for="exampleText" sm={2}>Text Area</Label>
        <Col sm={10}>
          <Input type="textarea" name="text" id="exampleText" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleFile" sm={2}>File</Label>
        <Col sm={10}>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            This is some placeholder block-level help text for the above input.
            It's a bit lighter and easily wraps to a new line.
          </FormText>
        </Col>
      </FormGroup>
      <FormGroup tag="fieldset" row>
        <legend className="col-form-label col-sm-2">Radio Buttons</legend>
        <Col sm={10}>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio2" />{' '}
              Option one is this and that—be sure to include why it's great
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio2" />{' '}
              Option two can be something else and selecting it will deselect option one
            </Label>
          </FormGroup>
          <FormGroup check disabled>
            <Label check>
              <Input type="radio" name="radio2" disabled />{' '}
              Option three is disabled
            </Label>
          </FormGroup>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="checkbox2" sm={2}>Checkbox</Label>
        <Col sm={{ size: 10 }}>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" id="checkbox2" />{' '}
              Check me out
            </Label>
          </FormGroup>
        </Col>
      </FormGroup>*/}
      <FormGroup row>
        <Label for="exampleFile" sm={2}>File</Label>
        <Col sm={10}>
          <Input onChange={(event)=>this.isChangeFile(event)} type="file" name="file" id="exampleFile" />
          
        </Col>
      </FormGroup>

      <FormGroup check row>
        <Col sm={{ size: 10, offset: 2 }}>
            
                <Button onClick={(event)=>this.submitForm(event)
            //   , (data)=>this.setDataFuc(data)
                }>Thêm</Button>
            
          
        </Col>
      </FormGroup> 
    </Form>
    </Col>
        )
    }
}

export default Contact;