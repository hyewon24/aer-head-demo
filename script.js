'use strict';
const players = Array.from(document.querySelectorAll('audio'));
players.forEach(player => {
  player.addEventListener('play', () => {
    players.forEach(other => { if (other !== player) other.pause(); });
  });
  player.addEventListener('error', () => {
    document.getElementById('audio-status').textContent = 'Could not load: ' + player.getAttribute('aria-label');
    if (!player.nextElementSibling?.classList.contains('audio-error')) {
      const note = document.createElement('p');
      note.className = 'audio-error';
      note.textContent = 'Audio unavailable. Reload the page to try again.';
      player.after(note);
    }
  });
});
document.querySelectorAll('details').forEach(group => {
  group.addEventListener('toggle', () => {
    if (!group.open) group.querySelectorAll('audio').forEach(player => player.pause());
  });
});
