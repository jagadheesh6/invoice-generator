import React,{Component} from 'react'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas'


import cat from '../assets/cat.jpg'
//Style
import '../css/Form.css'
import '../css/Invoice.css'





class Form extends Component{


    state = {
showInvoice:false
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


download=()=>{
    const input = document.getElementById('download');
    html2canvas(input)
        .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('2', 'mm', [1000, 500]);
        pdf.addImage(imgData, 'JPEG', 0, 0);
        // pdf.output('dataurlnewwindow');
        pdf.save("download.pdf");
        })
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
        <div className="main-invoice">
            
        <div className="invoice-box" id="download" >
               
            <table cellPadding={0} cellSpacing={0}>
                <tbody><tr className="top">
                    <td colSpan={2}>
                        <table>
                            <tbody><tr>
                                <td className="title">
                                    <img src={cat} alt="logo" style={{ width: '100%', maxWidth: '300px' }} />
                                </td>
                                <td>
                       <h1>Invoice</h1>
                      </td>
                            </tr>
                            </tbody></table>
                    </td>
                </tr>
                    <tr className="information">
                        <td colSpan={2}>
                            <table>
                                <tbody><tr>
                                    <td>
                                        Invoice To:{this.data.name}<br />
                        GST No: {this.data.customergst}<br />
                        Sunnyville, CA 12345
                      </td>
                                    <td>
                                        Invoice Date: {this.data.date}<br />
                        Invoice No : {this.data.invoice}<br />
                        GST No: {this.data.customergst}
                        HSN / SAC Code : {this.data.code}
                      </td>
                                </tr>
                                </tbody></table>
                        </td>
                    </tr>
                    <tr className="heading">
                        <td>
                            Payment Method
              </td>
                
                        <td>
                            Check #
              </td>
                    </tr>
                    <tr className="details">
                        <td>
                            Check
              </td>
                        <td>
                            1000
              </td>
                    </tr>
                    <tr className="heading">
                        <td>
                            Item
              </td>
                        <td>
                            Price
              </td>
                    </tr>
                    <tr className="item">
                        <td>
                            Website design
              </td>
                        <td>
                            $300.00
              </td>
                    </tr>
                    <tr className="item">
                        <td>
                            Hosting (3 months)
              </td>
                        <td>
                            $75.00
              </td>
                    </tr>
                    <tr className="item last">
                        <td>
                            Domain name (1 year)
              </td>
                        <td>
                            $10.00
                </td>
                    </tr>
                    <tr className="total">
                        <td />
                        <td>
                            Total: $385.00
                  </td>
                    </tr>
                </tbody></table>
               
        </div>
            

        <button id="button" onClick={this.download}>Download Invoice</button>
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