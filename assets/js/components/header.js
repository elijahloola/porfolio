/**
 * Header Component
 * Gère le chargement et le comportement du header
 */

export function loadHeader() {
    const header = document.querySelector('[data-component="header"]');
    
    if (!header) return;
    
    header.innerHTML = `
        <div class="header-content">
            <img src="assets/img/profile.jpg" alt="Elie Loola" class="profile-pic" loading="lazy">
            <h1>Elie Loola</h1>
            <p class="tagline">Développeur Flutter & Informaticien Polyvalent</p>
            
            <div class="contact-info">
                <div class="contact-item">
                    <i class="fas fa-phone"></i>
                    <span>Tél : 243 824348142</span>
                </div>
                <div class="contact-item">
                    <i class="fas fa-envelope"></i>
                    <span>Mail : elijahloola@gmail.com</span>
                </div>
                <div class="contact-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>Ville de Kinshasa</span>
                </div>
            </div>
            
            <div class="social-links">
                <a href="#" target="_blank" title="LinkedIn"><i class="fab fa-linkedin"></i></a>
                <a href="https://play.google.com/store/apps/dev?id=4959152404596968962&hl=fr" target="_blank" title="Play Store"><i class="fab fa-google-play"></i></a>
                <a href="#" target="_blank" title="GitHub"><i class="fab fa-github"></i></a>
            </div>
        </div>
    `;
}