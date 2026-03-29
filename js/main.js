// ========== LANGUAGE TOGGLE ==========
const langToggle = document.getElementById('langToggle');
const langLabel = langToggle.querySelector('.lang-toggle__label');
let currentLang = localStorage.getItem('lang') || 'en';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);

    const html = document.documentElement;
    html.setAttribute('lang', lang);
    html.setAttribute('dir', lang === 'he' ? 'rtl' : 'ltr');

    // Update toggle button label
    langLabel.textContent = lang === 'en' ? 'HE' : 'EN';

    // Update body font
    document.body.style.fontFamily = lang === 'he'
        ? "'Heebo', sans-serif"
        : "'Inter', sans-serif";

    // Swap all text content
    document.querySelectorAll('[data-en]').forEach(function(el) {
        el.textContent = el.getAttribute('data-' + lang);
    });

    // Swap placeholders
    document.querySelectorAll('[data-placeholder-en]').forEach(function(el) {
        el.placeholder = el.getAttribute('data-placeholder-' + lang);
    });
}

langToggle.addEventListener('click', function() {
    setLanguage(currentLang === 'en' ? 'he' : 'en');
});

// Apply saved language on load
if (currentLang !== 'en') {
    setLanguage(currentLang);
}

// ========== MOBILE MENU TOGGLE ==========
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', function() {
    navMenu.classList.toggle('open');
    const icon = navToggle.querySelector('i');
    if (navMenu.classList.contains('open')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close menu when clicking a link
navMenu.querySelectorAll('.navbar__link').forEach(function(link) {
    link.addEventListener('click', function() {
        navMenu.classList.remove('open');
        var icon = navToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// ========== ACTIVE NAV LINK ON SCROLL ==========
var sections = document.querySelectorAll('section[id]');

function updateActiveLink() {
    var scrollY = window.scrollY + 100;

    sections.forEach(function(section) {
        var top = section.offsetTop;
        var height = section.offsetHeight;
        var id = section.getAttribute('id');

        if (scrollY >= top && scrollY < top + height) {
            document.querySelectorAll('.navbar__link').forEach(function(link) {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + id) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveLink);

// ========== NAVBAR SHADOW ON SCROLL ==========
window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 10) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
    }
});

// ========== CONTACT FORM ==========
var contactForms = document.querySelectorAll('form[action*="formspree.io"]');

contactForms.forEach(function(form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        var submitBtn = form.querySelector('button[type="submit"], .btn--primary, .form__submit');
        var originalText = submitBtn ? submitBtn.textContent : '';
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.textContent = currentLang === 'he' ? 'שולח...' : 'Sending...';
        }

        fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
            headers: { 'Accept': 'application/json' }
        }).then(function(response) {
            if (response.ok) {
                var msg = currentLang === 'he'
                    ? 'תודה! ההודעה שלך נשלחה בהצלחה.'
                    : 'Thank you! Your message has been sent successfully.';
                alert(msg);
                form.reset();
            } else {
                var msg = currentLang === 'he'
                    ? 'שגיאה בשליחה. אנא נסה שוב.'
                    : 'Something went wrong. Please try again.';
                alert(msg);
            }
        }).catch(function() {
            var msg = currentLang === 'he'
                ? 'שגיאה בשליחה. אנא נסה שוב.'
                : 'Something went wrong. Please try again.';
            alert(msg);
        }).finally(function() {
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
            }
        });
    });
});

// ========== FAQ ACCORDION ==========
var faqItems = document.querySelectorAll('.faq-item__question');

faqItems.forEach(function(btn) {
    btn.addEventListener('click', function() {
        var item = btn.closest('.faq-item');
        var isOpen = item.classList.contains('open');

        // Close all other items
        document.querySelectorAll('.faq-item.open').forEach(function(openItem) {
            openItem.classList.remove('open');
            openItem.querySelector('.faq-item__question').setAttribute('aria-expanded', 'false');
        });

        // Toggle current item
        if (!isOpen) {
            item.classList.add('open');
            btn.setAttribute('aria-expanded', 'true');
        }
    });
});

// ========== SCROLL ANIMATIONS ==========
function animateOnScroll() {
    var elements = document.querySelectorAll('.service-card, .stat, .about__content, .about__image, .contact-info-card, .faq-item, .service-detail__content');
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(function(el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

animateOnScroll();
