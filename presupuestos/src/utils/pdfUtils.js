import { PDFDocument } from 'pdf-lib';
import domtoimage from 'dom-to-image';
import { getDate } from './timeUtils';

const getPdfName = () => {
    const date = getDate().toString();
    const name = 'presupuesto-' + date.slice(-6);
    return name;
};

export const downloadPdf = async (contentRef) => {
    if (contentRef.current) {
        try {
            const dataUrl = await domtoimage.toPng(contentRef.current);
            const pdfDoc = await PDFDocument.create();
            const page = pdfDoc.addPage([210 * 2.83, 295 * 2.83]);
            const img = await pdfDoc.embedPng(dataUrl);
            const imgWidth = img.width;
            const imgHeight = img.height;
            const pageWidth = page.getWidth();
            const pageHeight = page.getHeight();

            const scaledWidth = pageWidth;
            let scale = scaledWidth / imgWidth;
            const scaleFactor = 1.2;
            scale *= scaleFactor;
            const scaledHeight = imgHeight * scale;
            const xOffset = (pageWidth - (imgWidth * scale)) / 2;
            const marginTop = 20;
            const yOffset = pageHeight - scaledHeight - marginTop;

            page.drawImage(img, {
                x: xOffset,
                y: yOffset,
                width: imgWidth * scale,
                height: scaledHeight,
            });

            const pdfBytes = await pdfDoc.save();
            const blob = new Blob([pdfBytes], { type: 'application/pdf' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = getPdfName() + '.pdf';
            link.click();
        } catch (error) {
            console.error('Error generating PDF:', error);
        }
    }
};
