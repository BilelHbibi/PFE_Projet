import React, { useEffect } from "react";
import { jsPDF } from "jspdf";
import moment from "moment";
import "moment/locale/fr";

const PDFGenerator = ({ notification }) => {
  useEffect(() => {
    if (notification) {
      generatePDF();
    }
  }, [notification]);

  const generatePDF = () => {
    moment.locale("fr");
    const pdf = new jsPDF();

    pdf.setTextColor("#D74121");
    pdf.setFontSize(20);
    pdf.setFont("helvetica", "bold");
    pdf.text("Contrat de Vente", 105, 20, null, null, "center");

    pdf.setTextColor(0, 0, 0);
    pdf.setFontSize(16);
    let currentY = 40; 
    const leftMargin = 20;
    const rightMargin = 190;
    const lineHeight = 10;

    const segments = [
      { text: "Ce document atteste que le vendeur, ", style: "normal" },
      { text: notification.data.sellerName, style: "bold" },
      { text: ", a officiellement accepté l'offre d'achat proposée par l'acheteur, ", style: "normal" },
      { text: notification.data.buyerName, style: "bold" },
      { text: `, concernant le produit "${notification.data.productName}". Le montant convenu pour cette transaction est de `, style: "normal" },
      { text: `${notification.data.bidAmount}`, style: "bold" },
      { text: `. L'accord a été finalisé le ${moment(notification.data.createAt).format("DD MMMM YYYY")}. Par la présente, les deux parties s'engagent à honorer tous les termes établis dans cet accord. Ils reconnaissent également que toute modification ou ajustement de cet accord nécessite un consentement mutuel écrit et la signature de chacune des parties concernées.`, style: "normal" }
    ];

    const justifyText = (text, y) => {
      const words = text.split(' ');
      let line = '';
      let lineWidth = 0;
      const spaceWidth = pdf.getStringUnitWidth(' ') * pdf.internal.getFontSize() / pdf.internal.scaleFactor;

      words.forEach((word, index) => {
        const wordWidth = pdf.getStringUnitWidth(word) * pdf.internal.getFontSize() / pdf.internal.scaleFactor;
        if (leftMargin + lineWidth + wordWidth + spaceWidth > rightMargin) {
          const extraSpace = (rightMargin - leftMargin - lineWidth) / (line.split(' ').length - 1);
          const justifiedLine = line.split(' ').map((w, i, arr) => (i < arr.length - 1 ? w + ' '.repeat(extraSpace) : w)).join(' ');
          pdf.text(justifiedLine, leftMargin, y);
          y += lineHeight;
          line = '';
          lineWidth = 0;
        }
        line += word + ' ';
        lineWidth += wordWidth + spaceWidth;
      });

      if (line) {
        pdf.text(line.trim(), leftMargin, y);
      }

      return y;
    };

    let paragraph = '';
    segments.forEach(({ text, style }) => {
      pdf.setFont("helvetica", style === "bold" ? "bold" : "normal");
      paragraph += text;
    });

    currentY = justifyText(paragraph, currentY);

    currentY += 40;

    pdf.setFont("helvetica", "normal");
    pdf.text(`Signature de l'acheteur: ${notification.data.buyerName}`, leftMargin, currentY);
    currentY += 10;
    pdf.text("Date: ..................", leftMargin, currentY);
    currentY += 20;
    pdf.text(`Signature du vendeur: ${notification.data.sellerName}`, leftMargin, currentY);
    currentY += 10;
    pdf.text("Date: ..................", leftMargin, currentY);

    pdf.save("Contrat_de_Vente.pdf");
  };

  return null;
};

export default PDFGenerator;
