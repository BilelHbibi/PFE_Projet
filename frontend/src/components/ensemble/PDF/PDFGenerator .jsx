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
    pdf.setFontSize(16);
    pdf.setFont("helvetica", "bold");
    pdf.text("Contrat de Vente", 105, 20, null, null, "center");

    // Initial setup for text
    pdf.setTextColor(0, 0, 0);
    pdf.setFontSize(16);
    let currentY = 40; // Initial Y position
    let currentX = 20; // Initial X position

    // Define segments of text with their respective styles
    const segments = [
      { text: "Ce document atteste que le vendeur, ", style: "normal" },
      { text: notification.data.sellerName, style: "bold" },
      { text: ", a officiellement accepté l'offre d'achat proposée par l'acheteur, ", style: "normal" },
      { text: notification.data.buyerName, style: "bold" },
      { text: `, concernant le produit "${notification.data.productName}". Le montant convenu pour cette transaction est de `, style: "normal" },
      { text: `${notification.data.bidAmount}`},
      { text: `. L'accord a été finalisé le ${moment(notification.data.createAt).format("DD MMMM YYYY")}. Par la présente, les deux parties s'engagent à honorer tous les termes établis dans cet accord. Ils reconnaissent également que toute modification ou ajustement de cet accord nécessite un consentement mutuel écrit et la signature de chacune des parties concernées.`, style: "normal" }
    ];

    // Process each segment, applying styles and handling line wrapping
    segments.forEach(({ text, style }) => {
      pdf.setFont("helvetica", style === "bold" ? "bold" : "normal");

      const words = text.split(' ');
      words.forEach(word => {
        const wordWidth = pdf.getStringUnitWidth(word + ' ') * pdf.internal.getFontSize() / pdf.internal.scaleFactor;
        if (currentX + wordWidth > 190) { // Check if adding the next word exceeds the page width
          currentX = 20; // Reset X to the left margin
          currentY += 10; // Move down to the next line
        }
        pdf.text(word + ' ', currentX, currentY, { baseline: 'top' });
        currentX += wordWidth;
      });
    });

    // Move to the next line for signatures
    currentY += 40;

    // Add signatures, adjusting positions as needed
    pdf.setFont("helvetica", "normal");
    pdf.text(`Signature de l'acheteur: ${notification.data.buyerName}`, 20, currentY);
    currentY += 10;
    pdf.text("Date: ..................", 20, currentY);
    currentY += 20;
    pdf.text(`Signature du vendeur: ${notification.data.sellerName}`, 20, currentY);
    currentY += 10;
    pdf.text("Date: ..................", 20, currentY);

    pdf.save("Contrat_de_Vente.pdf");
  };

  return null;
};

export default PDFGenerator;
