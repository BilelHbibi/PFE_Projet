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
    const pdf = new jsPDF();
    moment.locale("fr"); // Set the locale for date formatting

    pdf.setTextColor("#D74121");
    pdf.setFontSize(17);
    pdf.setFont("helvetica", "bold");
    pdf.text("Lettre Fournisseur", 105, 20, null, null, "center");

    pdf.setTextColor(0, 0, 0);
    pdf.setFontSize(14);
    let currentY = 40; // Initial Y position
    let currentX = 20; // Initial X position
    const lineHeight = 9; // Adjusted line height for less space between lines
    const paragraphSpacing = 3; // Reduced additional space between paragraphs

    const segments = [
      {
        text: "Objet : Confirmation de l'approbation du produit et intégration au catalogue \n",
        style: "bold",
      },
      {
        text: `Cher Fournisseur ,`,
        style: "normal",
      },
      {
        text: `Nous avons le plaisir de vous informer que votre produit ${notification.data.name} , a été examiné et approuvé par l'administration de la BTS Bank. Cette approbation marque une étape cruciale pour votre présence sur notre plateforme.\n\nNous sommes ravis de vous annoncer que votre produit est désormais listé dans notre catalogue en ligne, accessible à notre vaste réseau de clients et partenaires. L'inclusion de votre produit dans notre catalogue a été effectuée en tenant compte de tous les standards de qualité et de conformité que notre plateforme garantit à ses utilisateurs.\n\nPour toutes informations complémentaires ou pour discuter des prochaines étapes, n'hésitez pas à nous contacter. Nous sommes là pour vous soutenir tout au long de ce processus.\n\nCordialement,\nBTS Bank`,
        style: "normal",
      },
      {
        text: "Signature de l'administrateur: .....................................\nDate:"+moment(notification.createdAt).format("DD MMMM YYYY"),
        style: "normal",
      },
    ];

    segments.forEach(({ text, style }) => {
      pdf.setFont("helvetica", style === "bold" ? "bold" : "normal");
      const lines = pdf.splitTextToSize(text, 170); // Break text into lines that fit the width of the page
      lines.forEach((line) => {
        pdf.text(line, currentX, currentY);
        currentY += lineHeight; // Use a uniform line height increment after each line
      });
      currentY += paragraphSpacing; // Apply a reduced spacing after each segment for paragraph separation
    });

    pdf.save("Lettre_Fournisseur.pdf");
  };

  return null;
};

export default LettreFournisseur;
