---
title: "Quiz Settimanale"
date: 2024-12-14
description: "Risolvi il diagramma della settimana e scala la classifica!"
---

# 🧩 Quiz della Settimana

*Nuovo quiz ogni sabato • Soluzioni entro venerdì*

---

## Quiz #1 - 14 Dicembre 2024

**Il Nero muove e vince**

<div style="text-align: center; margin: 2rem 0;">
    <img src="/images/quiz/quiz-1.png" alt="Diagramma Quiz #1" style="max-width: 600px; width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
</div>

*Posizione dopo la mossa del Bianco*

---

📅 **Scadenza:** Venerdì 20 Dicembre 2024, ore 23:59  
⏱️ **Tempo rimanente:** <span id="countdown">7 giorni</span>

---

## 📝 Invia la tua soluzione

Scrivi la sequenza di mosse in notazione algebrica (es. "1...Dxh2+ 2.Rxh2 Th8#")

<div style="text-align: center; margin: 2rem 0;">
    <a href="https://docs.google.com/forms/d/e/1FAIpQLScMsqR7HyHbra2nug5ptrQ6szBMoENDKzUjLjdlp5liDg9k9w/viewform" 
       target="_blank" 
       rel="noopener noreferrer"
       style="display: inline-block; background: linear-gradient(135deg, #c41e3a, #9a1830); color: white; padding: 1rem 2rem; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 1.1rem;">
        📨 INVIA LA TUA SOLUZIONE
    </a>
</div>

*Si apre in una nuova scheda. Inserisci nome e soluzione.*

---

## 📊 Sistema di punteggio

| Punteggio | Descrizione |
|-----------|-------------|
| 🥇 **3 punti** | Soluzione perfetta e completa |
| 🥈 **2 punti** | Soluzione giusta ma parziale |
| 🥉 **1 punto** | Solo la prima mossa corretta |
| **0 punti** | Soluzione errata o non inviata |

---

## 🏆 Classifiche

- [📈 Classifica per Punteggio](/quiz/classifica-punti/)
- [🎯 Classifica per Partecipazioni](/quiz/classifica-partecipazioni/)
- [📚 Archivio Quiz Precedenti](/quiz/archivio/)

---

## 💡 Come funziona

1. **Sabato** viene pubblicato un nuovo diagramma
2. Hai **tempo fino a venerdì** per inviare la tua soluzione
3. **Sabato successivo** viene pubblicata la soluzione corretta
4. I punti vengono assegnati e le classifiche aggiornate

<script>
function updateCountdown() {
    const deadline = new Date('2024-12-20T23:59:59');
    const now = new Date();
    const diff = deadline - now;
    
    if (diff <= 0) {
        document.getElementById('countdown').textContent = 'Quiz chiuso';
        return;
    }
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    document.getElementById('countdown').textContent = days + ' giorni, ' + hours + ' ore';
}

updateCountdown();
setInterval(updateCountdown, 60000);
</script>
