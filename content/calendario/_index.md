---
title: "Calendario Eventi"
date: 2024-12-13
description: "Tutti gli eventi, tornei e appuntamenti del circolo"
---

<div class="calendar-intro">
    <p class="lead">Consulta il calendario per rimanere aggiornato su tutti gli eventi, tornei e appuntamenti del Circolo Scacchi Arcotorre.</p>
</div>

<div class="calendar-container">
    <iframe src="https://calendar.google.com/calendar/embed?src=arcotorre%40gmail.com&ctz=Europe%2FRome" 
            style="border: 0" 
            width="100%" 
            height="600" 
            frameborder="0" 
            scrolling="no">
    </iframe>
</div>

<div class="calendar-info">
    <h2>📅 Come Partecipare</h2>
    <p>Per iscriverti agli eventi e ai tornei, contatta la segreteria del circolo via email o telefono.</p>
    
    <div class="info-cards">
        <div class="info-card">
            <span class="info-icon">📞</span>
            <h3>Telefono</h3>
            <p>Da definire</p>
        </div>
        <div class="info-card">
            <span class="info-icon">✉️</span>
            <h3>Email</h3>
            <p><a href="mailto:arcotorre@gmail.com">arcotorre@gmail.com</a></p>
        </div>
        <div class="info-card">
            <span class="info-icon">🏢</span>
            <h3>Sede</h3>
            <p>Chieri (TO)</p>
        </div>
    </div>
</div>

<style>
.calendar-intro {
    text-align: center;
    margin-bottom: 2rem;
}

.lead {
    font-size: 1.2rem;
    color: var(--color-muted);
    max-width: 800px;
    margin: 0 auto;
}

.calendar-container {
    background: white;
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    margin-bottom: 3rem;
}

.calendar-container iframe {
    border-radius: 8px;
    display: block;
    margin: 0 auto;
}

.calendar-info {
    background: linear-gradient(135deg, var(--chieri-red) 0%, var(--chieri-red-dark) 100%);
    color: white;
    padding: 2.5rem;
    border-radius: 12px;
    text-align: center;
}

.calendar-info h2 {
    margin-bottom: 1rem;
    font-size: 1.8rem;
}

.info-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
}

.info-card {
    background: rgba(255, 255, 255, 0.1);
    padding: 1.5rem;
    border-radius: 8px;
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease, background 0.3s ease;
}

.info-card:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.15);
}

.info-icon {
    font-size: 2.5rem;
    display: block;
    margin-bottom: 0.5rem;
}

.info-card h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    color: var(--chieri-gold);
}

.info-card p {
    margin: 0;
    opacity: 0.95;
}

.info-card a {
    color: white;
    text-decoration: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    transition: border-color 0.3s ease;
}

.info-card a:hover {
    border-bottom-color: var(--chieri-gold);
}

/* Responsive */
@media (max-width: 768px) {
    .calendar-container {
        padding: 1rem;
    }
    
    .calendar-container iframe {
        height: 500px !important;
    }
    
    .calendar-info {
        padding: 1.5rem;
    }
    
    .info-cards {
        grid-template-columns: 1fr;
        gap: 1rem;
    }
}

@media (max-width: 480px) {
    .calendar-container iframe {
        height: 450px !important;
    }
    
    .lead {
        font-size: 1rem;
    }
}
</style>
