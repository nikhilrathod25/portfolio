
/* Configuration Modal Logic */
function toggleSettings() {
    const modal = document.querySelector('.settings-modal');
    if (modal) {
        modal.classList.toggle('open');
    }
}

function setActiveStyle(color) {
    // Update Primary Color
    document.documentElement.style.setProperty('--primary', color);

    // Update Gradient
    document.documentElement.style.setProperty('--primary-gradient', `linear-gradient(135deg, ${color} 0%, ${color} 100%)`);

    // Update Border Hover
    document.documentElement.style.setProperty('--border-hover', color);

    // NOTE: Do not close the modal automatically, user might want to try multiple colors
}
