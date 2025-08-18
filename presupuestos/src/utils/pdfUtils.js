import { PDFDocument } from 'pdf-lib';
import { getDate } from './timeUtils';
import { saveAs } from 'file-saver';

const getPdfName = () => {
    const date = getDate().toString();
    const name = 'presupuesto-' + date.slice(-6);
    return name;
};

// pdf form fields
// budget-number | issued-date | expiration-date | seller-cuit | business-name | big-business-name | business-address | client-cuit | client-name | iva-condition | client-address | my-signature | total


export async function fillForm(rows, total, clientData) {

    const templateUrl = '../../template-presupuesto-form.pdf'
    const existingPdfBytes = await fetch(templateUrl)
    .then((res)=>res.arrayBuffer());
    
    const tempatePdf = await PDFDocument.load(existingPdfBytes);
    
    const pdfForm = tempatePdf.getForm();

    tempatePdf.setTitle('Presupuesto Libreria Silver')
    
    pdfForm.getTextField('business-name').setFontSize(10);
    pdfForm.getTextField('budget-number').setFontSize(10);
    pdfForm.getTextField('issued-date').setFontSize(10);
    pdfForm.getTextField('expiration-date').setFontSize(10);
    pdfForm.getTextField('seller-cuit').setFontSize(10);
    pdfForm.getTextField('business-address').setFontSize(10);
    pdfForm.getTextField('client-cuit').setFontSize(10);
    pdfForm.getTextField('client-name').setFontSize(10);
    pdfForm.getTextField('iva-condition').setFontSize(10);
    pdfForm.getTextField('client-address').setFontSize(10);

    pdfForm.getTextField('business-name').setText("Libreria Silver");
    pdfForm.getTextField('big-business-name').setText("Libreria Silver");
    pdfForm.getTextField('budget-number').setText(String(1));
    pdfForm.getTextField('issued-date').setText('06-12-24');
    pdfForm.getTextField('expiration-date').setText('16-12-24');
    pdfForm.getTextField('seller-cuit').setText(String(20123456781));
    pdfForm.getTextField('business-address').setText('Old Street 123, Mendoza, Argentina');
    pdfForm.getTextField('client-cuit').setText(String(clientData.cuit));
    pdfForm.getTextField('client-name').setText(clientData.name);
    pdfForm.getTextField('iva-condition').setText(clientData.iva);
    pdfForm.getTextField('client-address').setText(clientData.address);
    pdfForm.getTextField('total').setText('$' + String(total));
    pdfForm.getTextField('my-signature').setText('Gonzalo Jaime');
    
    buildRows(rows, pdfForm)
    
    pdfForm.flatten()
    const pdfBytes = await tempatePdf.save();

    const blob = new Blob([pdfBytes], { type: "application/pdf" });
    saveAs(blob, getPdfName() + '.pdf')

}

export const buildRows = (rows, pdfForm) => {
    // item-code-1 | item-detail-1 | item-q-1 | item-price-1 | subtotal-1
    rows.map((row, index)=>{
        const i = index + 1
        pdfForm.getTextField('item-code-'+i).setText('')
        pdfForm.getTextField('item-detail-'+i).setText(row.detail)
        pdfForm.getTextField('item-q-'+i).setText(String(row.quantity))
        pdfForm.getTextField('item-price-'+i).setText('$' + String(row.price))
        pdfForm.getTextField('subtotal-'+i).setText('$' + String(row.total))
    })

}