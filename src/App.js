import React , {Component} from 'react';
import "./App.css"
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
class App extends Component{
  constructor(props) {
    super(props);
  }

  printDocument() {
    const input = document.getElementById('divToPrint');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 0, 0);
        pdf.save("download.pdf");
      })
    ;
  }
    render(){
        return(
          <div>
          <div className="mb5">
            
          </div>
          <div id="divToPrint" className="mt4" style={{  backgroundColor: '#f5f5f5',
            width: '210mm',
            minHeight: '297mm',
            marginLeft: 'auto',
            marginRight: 'auto'}}>
           <form>
             <label>name</label><br/>
             <input type="text" placeholder="please enter your name"/>
             <button onClick={this.printDocument}>Submit</button>
           </form>
          </div>
        </div>
        )
    }
}
export default App;