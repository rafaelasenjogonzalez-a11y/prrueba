// ===== AGENDA EDITABLE =====
// Añade o cambia eventos aquí y guarda el archivo.
const events = [
  // {date:"12 OCT", title:"Feria / Fiesta", place:"Sevilla", tag:"OPEN FORMAT"},
  // {date:"25 OCT", title:"Evento privado", place:"Andalucía", tag:"DJ + ANIMACIÓN"}
];
const box = document.getElementById("events");
box.innerHTML = events.length ? events.map(e=>`<div class="event"><div class="day">${e.date}</div><div class="info"><b>${e.title}</b><small>${e.place}</small></div><div class="tag">${e.tag}</div></div>`).join("") : `<div class="event"><div class="day">+</div><div class="info"><b>Próximamente nuevas fechas</b><small>La agenda se actualiza periódicamente.</small></div><div class="tag">ABIERTA</div></div>`;