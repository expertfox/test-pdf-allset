import React from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import html2canvas from 'html2canvas'
const { jsPDF } = require("jspdf");


const onConvert = () =>{
  const input = document.getElementById('divToPrint');
  html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
          orientation: "portrait",
          unit: "in",
          //format: [8.27  , 11.69  ] //inch sizes of an A4

        });

        pdf.addImage(imgData, 'JPEG', 0, 0);
        pdf.save("download.pdf");
      })
  ;
}


function App() {
  return (
      <>
        <div className="App">
          <button className = "btn btn-primary" onClick={onConvert}>Download Pdf</button>
        </div>
            <br/><br/>

            <div  id="divToPrint" className="" style={{width : 780}}>
                <div  style={{marginLeft:10}}>
                    <br/>
                    <h3 className="text-center"> Sample Text Document </h3>
                    <form>
                        <div className="form-row" >
                            <div className="form-group col-md-6">
                                <label htmlFor="inputEmail4">Email</label>
                                <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputPassword4">Password</label>
                                <input type="password" className="form-control" id="inputPassword4" placeholder="Password"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputAddress">Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputAddress2">Address 2</label>
                            <input type="text" className="form-control" id="inputAddress2"
                                   placeholder="Apartment, studio, or floor"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputAddress">Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputAddress2">Address 2</label>
                            <input type="text" className="form-control" id="inputAddress2"
                                   placeholder="Apartment, studio, or floor"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputAddress">Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputAddress2">Address 2</label>
                            <input type="text" className="form-control" id="inputAddress2"
                                   placeholder="Apartment, studio, or floor"/>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputCity">City</label>
                                <input type="text" className="form-control" id="inputCity"/>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="inputState">State</label>
                                <select id="inputState" className="form-control">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div className="form-group col-md-2">
                                <label htmlFor="inputZip">Zip</label>
                                <input type="text" className="form-control" id="inputZip"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck"/>
                                <label className="form-check-label" htmlFor="gridCheck">
                                    Check me out
                                </label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Sign in</button>
                    </form>
                </div>
            </div>


      </>
  );
}

export default App;
