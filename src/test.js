import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
export default function pdf() {
    // html2canvas(document.body,(
    //          onrendered:function(canvas)=>{
    //     var img=canvas.toDataURL("image/png");
    //     var doc = new jsPDF();
    //     doc.addImage(img,'JPEG',20,20);
    //     doc.save('test.pdf')
    html2canvas(document.body,{
        render:function (canvas) {
            var img=canvas.toDataURL("images/png");
            var doc = new jsPDF();
            doc.addImage(img,'JPEG',20,20);
            doc.save('test.pdf')
        }
});
console.log('function called')
}