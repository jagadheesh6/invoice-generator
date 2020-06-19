import React,{Component} from 'react'


import cat from '../assets/cat.jpg'
//Style
import '../css/Form.css'
import '../css/Invoice.css'

class Form extends Component{


    state = {
showInvoice:true
    }

     data={
         invoice:"",
         date:"",
         name:"",
         citygst:"",
         customergst:"",
         code:"",
         address:""
     }

changeHandler=(event)=>{
const {value,name}=event.target
const newData={
    ...this.data,
    [name]:value
}
this.data=newData
}



    submit = () => {
        this.setState({showInvoice:true})
        console.log(this.data)
    }

    render(){



let form=null
if(!this.state.showInvoice){
    form=(
        <div className="Form">
            <h1>Invoice Generator</h1>

            <div className="main">
                <div className="box1">

                    <input type="text" id="input1" name="invoice" placeholder="Invoice No" onChange={this.changeHandler}></input>

                    <input type="date" id="input2" name="date" onChange={this.changeHandler}></input>
                </div>


                <div className="box1">

                    <input type="text" id="input1" name="name" placeholder="Customer Name" onChange={this.changeHandler}></input>

                    <input type="text" id="input2" name="citygst" placeholder="City Page GST Number" onChange={this.changeHandler}></input>
                </div>

                <div className="box1">

                    <input type="text" id="input1" name="customergst" placeholder="Customer GST Number" onChange={this.changeHandler}></input>

                    <input type="text" id="input2" name="code" placeholder="HNS/SAC Code" onChange={this.changeHandler}></input>

                </div>

                <div className="box1">

                    <input type="text" id="address" name="address" placeholder="Client Address" onChange={this.changeHandler}></input>



                </div>






            </div>
            <div className="btn">
                <button onClick={this.submit}>Create Invoice</button>
            </div>

        </div>
    )
}



let invoice=null
if(this.state.showInvoice){
    invoice=(
        <div className="invoice">
            <img src={cat}></img>
            <span>
                <h2>Invoice</h2>
            </span>
        </div>
    )
}

        return(

        <div>
            {form}
            {invoice}
        </div>
      
            
          
        )
    }
}


export default Form