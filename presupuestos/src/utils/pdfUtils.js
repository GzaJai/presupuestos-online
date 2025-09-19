import { PDFDocument } from 'pdf-lib';
import { getDate, getShortDate, getExpireDate } from './timeUtils';
import { saveAs } from 'file-saver';
import { ivaConditions } from './apiUtils';

const getPdfName = () => {
    const date = getDate().toString();
    const name = 'presupuesto-' + date.slice(-6);
    return name;
};

const formatBudgetNum = (budgetId) => {
    let budgetNum = String(budgetId);
    while (budgetNum.length < 10) {
        budgetNum = '0' + budgetNum;
    }
    return budgetNum
}

// pdf form fields
// budget-number | issued-date | expiration-date | seller-cuit | business-name | big-business-name | business-address | client-cuit | client-name | iva-condition | client-address | my-signature | total


export async function fillForm(budget, clientData) {    

    const clientIvaCondition = ivaConditions.find(
    (option) => option.value === clientData.ivaCondition
    )?.label || null;    

    const templateUrl = '../../new-template-form.pdf'
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
    pdfForm.getTextField('budget-number').setText(formatBudgetNum(budget.id));
    pdfForm.getTextField('issued-date').setText(getShortDate());
    pdfForm.getTextField('expiration-date').setText(getExpireDate(10));
    pdfForm.getTextField('seller-cuit').setText(String(27255869774));
    pdfForm.getTextField('business-address').setText('Polonio Montenegro 17');
    pdfForm.getTextField('client-cuit').setText(String(clientData.cuit));
    pdfForm.getTextField('client-name').setText(clientData.name);
    pdfForm.getTextField('iva-condition').setText(clientIvaCondition);
    pdfForm.getTextField('client-address').setText(clientData.address);
    pdfForm.getTextField('total').setText('$' + String(budget.total));
    pdfForm.getTextField('my-signature').setText('Yui One');
    
    buildRows(budget.items, pdfForm)
    
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
        pdfForm.getTextField('item-detail-'+i).setText(row.description)
        pdfForm.getTextField('item-q-'+i).setText(String(row.quantity))
        pdfForm.getTextField('item-price-'+i).setText('$' + String(row.salePrice))
        pdfForm.getTextField('subtotal-'+i).setText('$' + String(row.quantity * row.salePrice))
    })
}
