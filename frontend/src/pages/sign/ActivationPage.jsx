import React, { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { verifyUser } from "../../apicalls/users";
import Swal from "sweetalert2";
import "../../style/activationPage.css";

const ActivationPage = () => {
  const { activationCode } = useParams();
  const navigate = useNavigate(); // Use the useNavigate hook from React Router

  useEffect(() => {
    const activateUser = async () => {
      if (activationCode) {
        try {
          await verifyUser(activationCode);
          const result = await Swal.fire({
            title: "Verification Réussie",
            html: "Votre compte doit être accessible maintenant <span style='font-size: 27px;color:green;'>☺</span>",
            icon: "success",
            confirmButtonText: "D'accord",
          });
          if (result.isConfirmed) {
            navigate("/connexion"); // Navigate to login on confirmation
          }
        } catch (error) {
          console.error("Verification failed:", error);
          await Swal.fire({
            title: "Error!",
            text: "Une erreur s'est produite lors de la vérification du code d'activation.",
            icon: "error",
          });
          navigate("/connexion"); // Navigate to login after showing error
        }
      }
    };
    activateUser();
  }, [activationCode, navigate]);

  return (
    <>
      <div className="activationPage">
        <Link to={"/connexion"}>
          <button>Accédez à votre compte</button>
        </Link>
      </div>
    </>
  );
};

export default ActivationPage;
