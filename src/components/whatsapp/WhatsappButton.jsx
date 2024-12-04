import React, { useState } from 'react';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';
import './WhatsappButton.css';

const WhatsappButton = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const phoneNumber = '5511969238993'; 
    const message = 'Opa, quer trocar uma ideia?';

    const handleWhatsAppClick = () => {
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className={`whatsapp-button ${isExpanded ? 'expanded' : ''}`}>
            {isExpanded ? (
                <div className="whatsapp-content">
                    <button className="close-button" onClick={() => setIsExpanded(false)}>
                        <FaTimes />
                    </button>
                    <h3>Bora trocar um papo</h3>
                    <p>Clique no botão pra falar com a gente</p>
                    <button className="chat-button" onClick={handleWhatsAppClick}>
                        <FaWhatsapp /> Iniciar Conversa
                    </button>
                </div>
            ) : (
                <button className="whatsapp-icon" onClick={() => setIsExpanded(true)}>
                    <FaWhatsapp />
                </button>
            )}
        </div>
    );
};

export default WhatsappButton;
