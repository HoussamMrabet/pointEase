import React from 'react';
import savings from "../../assets/home/saving.svg";
import devices from "../../assets/home/Devices.svg";
import chatbot from "../../assets/home/chat_bot.svg";

function Cards() {
  return (
    <div>
      <div className="card-group">
  <div className="card">
    <br/>
              <img
                src={devices}
                alt="devices"
                className="card-img-top"

              />
     <div className="card-body">
      <h5 className="card-title">Une compatibilité universelle</h5>
      <p className="card-text">Notre POS est compatible avec tous les appareils, pour une utilisation facile et sans tracas.</p>
    </div>
  </div>
  <div className="card">

              <img
                src={savings}
                alt="savings"
                className="card-img-top"
              />
    <div className="card-body">
      <h5 className="card-title">Services gratuits</h5>
      <p className="card-text">Profitez de nos services gratuitement, sans frais cachés ni coûts supplémentaires.</p>
    </div>
  </div>
  <div className="card">
  <br/>
              <img
                src={chatbot}
                alt="chatbot"
                className="card-img-top"
              />
    <div className="card-body">
      <h5 className="card-title">Service clientèle</h5>
      <p className="card-text">Notre service clientèle est disponible 24h / 24 et 7j / 7 pour répondre à tous vos besoins.</p>

    </div>
  </div>
</div>
    
    </div>
  )
}

export default Cards;
