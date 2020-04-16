// Mobile Menu
const btn = document.querySelector('.mobile-menu-btn');
const mobileNav = document.querySelector('.mobile-nav');

//Click the mobile menu btn and toggle mobile-nav
btn.addEventListener('click', () => {
    mobileNav.classList.toggle('show');
});
// Mobile menu end

//Alert
const alertBanner = document.getElementById("alert");
// create the html for the banner
alertBanner.innerHTML =
    `
<div class="alert-banner">
<p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks
to complete</p>
<p class="alert-banner-close">x</p>
</div>
`

alertBanner.addEventListener('click', e => {
    const element = e.target;
    console.log(element);
    
    if (element.classList.contains("alert-banner-close")) {
        alert.style.display = "none"
    }
});