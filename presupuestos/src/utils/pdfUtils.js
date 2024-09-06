import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { getDate } from './timeUtils';

const getPdfName = () => {
    const date = getDate().toString()
    const name = 'presupuesto-' + date.slice(-6)
    return name
}

const waitForImages = (container) => {
    const images = container.querySelectorAll('img');
    const promises = Array.from(images).map(img => {
        return new Promise(resolve => {
            if (img.complete) {
                resolve();
            } else {
                img.onload = resolve;
                img.onerror = resolve;
            }
        });
    });
    return Promise.all(promises);
};


export const downloadPdf = (contentRef) => {
    if (contentRef.current) {
        waitForImages(contentRef.current).then(() => {
            html2canvas(contentRef.current, { scale: 2 }).then(canvas => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF('p', 'mm', 'a4');
                const imgWidth = 210;
                const pageHeight = 295;
                const imgHeight = canvas.height * imgWidth / canvas.width;
                const scaleFactor = .7;

                const scaledImgWidth = imgWidth / scaleFactor;
                const scaledImgHeight = imgHeight / scaleFactor;
                const scaledPageHeight = pageHeight / scaleFactor;

                const xOffset = (imgWidth - scaledImgWidth) / 2;
                let heightLeft = scaledImgHeight;
                let position = 0;

                pdf.addImage(imgData, 'PNG', xOffset, position, scaledImgWidth, scaledImgHeight);
                heightLeft -= scaledPageHeight;

                while (heightLeft >= 0) {
                    position = heightLeft - scaledImgHeight;
                    pdf.addPage();
                    pdf.addImage(imgData, 'PNG', xOffset, position, scaledImgWidth, scaledImgHeight);
                    heightLeft -= scaledPageHeight;
                }

                pdf.save(getPdfName());
            });
        });
    }
};
