import React from "react";
import Breadcrumbs from "../components/breadCrumbs/Breadcrumbs";
import "..//style/contact.css";

const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
  };
  const map =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3194.0673301033394!2d10.180716174953576!3d36.816906466759086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd34629d986af7%3A0x84059a4baf90e9a4!2sBTS%20BANK%20%3A%20Banque%20Tunisienne%20de%20Solidarit%C3%A9!5e0!3m2!1sfr!2stn!4v1710080916361!5m2!1sfr!2stn" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade';
  return (
    <>
      <div className="container">
        <Breadcrumbs />
        <div className="contact">
          <div className="map">
            <iframe src={map}></iframe>
          </div>
          <div className="contact__bts">
            <div className="place">
              <div className="contact__icon">
                <i class="ri-map-pin-fill"></i>
              </div>
              <div className="contact__content">
                <p>
                  <span>Addresse:</span> 56 Ave Mohamed V, Tunis 1002
                </p>
              </div>
            </div>

            <div className="phone">
              <div className="contact__icon">
                <i class="ri-phone-fill"></i>
              </div>
              <div className="contact__content">
                <p>
                  <span>Téléphone:</span> + 216 71 844 040
                </p>
              </div>
            </div>

            <div className="email">
              <div className="contact__icon">
                <i class="ri-send-plane-fill"></i>
              </div>
              <div className="contact__content">
                <p>
                  <span>Email:</span> samaali.h@bts.com.tn
                </p>
              </div>
            </div>

            <div className="website">
              <div className="contact__icon">
                <i class="ri-earth-fill"></i>
              </div>
              <div className="contact__content">
                <p>
                  <span>Site Web:</span> www.bts.com.tn
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
