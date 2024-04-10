import React, { useEffect } from "react";
import { jsPDF } from "jspdf";
import moment from "moment";
import "moment/locale/fr";

const LettreFournisseur = ({ notification }) => {
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
    pdf.text("Lettre Fournisseur", 105, 20, null, null, "center");

    // Initial setup for text
    pdf.setTextColor(0, 0, 0);
    pdf.setFontSize(12); // Adjusted for better readability
    let currentY = 40; // Initial Y position
    let currentX = 20; // Initial X position

    // Dynamic date of letter creation, assuming notification.createdAt represents this
    const dateOfLetter = moment(notification.createdAt).format("DD MMMM YYYY");

    const letterBody = `
Cher Fournisseur,

Nous vous écrivons pour confirmer l'approbation du produit "${notification.data.name}", catégorie "${notification.data.category}", au prix de ${notification.data.price}€. Cette approbation est effective à partir du ${dateOfLetter}.

Description du produit : ${notification.data.description}

Nous souhaitons procéder à l'approvisionnement de ce produit conformément aux termes convenus. Veuillez nous fournir les détails nécessaires concernant les prochaines étapes de cette transaction.

Cordialement,
[Le nom du client]

Signature de l'acheteur: .....................................
Date: ${dateOfLetter}
    `;

    // Using splitTextToSize to ensure the text fits within the PDF width and handles line breaking
    const lines = pdf.splitTextToSize(letterBody, 170);
    pdf.text(lines, currentX, currentY);

    pdf.save("Lettre Fournisseur.pdf");
  };

  return null;
};

export default LettreFournisseur;
