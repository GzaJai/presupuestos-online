import { PDFDocument } from 'pdf-lib';
import { getDate } from './timeUtils';
import { saveAs } from 'file-saver';

const getPdfName = () => {
    const date = getDate().toString();
    const name = 'presupuesto-' + date.slice(-6);
    return name;
};


export async function fillForm() {

    const templateUrl = '../../template-prueba.pdf'
    const existingPdfBytes = await fetch(templateUrl)
    .then((res)=>res.arrayBuffer());
    
    const tempatePdf = await PDFDocument.load(existingPdfBytes);
    
    const pdfForm = tempatePdf.getForm();
    
    const nameField = pdfForm.getTextField('Text1')
    const dateField = pdfForm.getTextField('Text2')
    
    nameField.setText('Libreria Silver')
    dateField.setText('04-12-24')
    
    const pdfBytes = await tempatePdf.save();

    const blob = new Blob([pdfBytes], { type: "application/pdf" });
    saveAs(blob, 'queseyo.pdf')

}