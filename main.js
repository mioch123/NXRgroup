/* ============================================
   NXR Group — Main JavaScript
   ============================================ */

/* --------------------------------------------------
   TRANSLATIONS
-------------------------------------------------- */
const translations = {
  fi: {
    'skip-link': 'Siirry pääsisältöön',
    'nav.home': 'Etusivu',
    'nav.about': 'Meistä',
    'nav.services': 'Palvelut',
    'nav.diamond': 'Timantti työt',
    'nav.construction': 'Rakentaminen ja remontointi',
    'nav.consulting': 'Konsultointi',
    'nav.contact': 'Yhteystiedot',
    'nav.cta': 'Ota yhteyttä',
    'intro.scroll': 'Vieritä alas',
    'hero.slogan': 'Kodinkorjaus ja rakentaminen',
    'hero.title1': 'Kodin huolto–',
    'hero.title2': 'luotettavasti',
    'hero.title3': 'ja ammattitaidolla.',
    'hero.subtitle': 'Tarjoamme kattavat kotipalvelut remonteista asennuksiin ja konsultointiin. Yksi yhteydenotto riittää – me hoidamme loput.',
    'hero.explore': 'Tutustu palveluihin',
    'about.label': 'Meistä',
    'about.title': 'Kokemusta, ammattitaitoa ja aitoa välittämistä',
    'about.body': 'NXR Group on perustettu tarjoamaan kokonaisvaltaista apua kodin kunnossapitoon ja kehittämiseen. Meidän tiimimme koostuu kokeneista ammattilaisista, jotka ymmärtävät asiakkaan tarpeet ja toimittavat laadukasta työtä – ajallaan ja sovitulla hinnalla.',
    'about.stat1': 'Vuotta kokemusta',
    'about.stat2': 'Tyytyväistä asiakasta',
    'about.stat3': 'Tyytyväisyystakuu',
    'about.badge': 'Asiakasarvio',
    'read-more': 'Lue lisää',
    'services.label': 'PALVELUT',
    'services.title': 'Ammattitaitoiset palvelut yhdestä paikasta',
    'services.subtitle': 'Tarjoamme timanttityöt, rakentamisen ja remontoinnin sekä konsultoinnin – laadukkaasti ja sovitussa aikataulussa.',
    'services.diamond.desc': 'Ammattitaitoiset timantti- ja purkutyöt uudisrakentamiseen ja saneerauskohteisiin – tarkasti ja turvallisesti.',
    'services.construction.desc': 'Monipuoliset rakennus- ja remontointipalvelut suunnittelusta viimeistelyyn – laadukkaasti ja aikataulussa.',
    'services.consulting.desc': 'Epäselvä tilanne tai isompi projekti suunnitteilla? Autamme kartoittamaan tarpeet, suunnittelemaan työn ja arvioimaan kustannukset.',
    'testimonials.label': 'Asiakkaiden kokemukset',
    'testimonials.title': 'Mitä asiakkaamme sanovat?',
    'testimonials.subtitle': 'Tyytyväiset asiakkaat ovat työmme paras mittari.',
    'testimonial1.quote': 'Erittäin luotettava ja ammattitaitoinen palvelu. Kaikki sovitut työt tehtiin ajallaan ja laadukkaasti. Suosittelen lämpimästi.',
    'testimonial2.quote': 'Keittiöremontti sujui täydellisesti. Selkeä kommunikaatio ja lopputulos ylitti odotukset. Kiitos NXR Group!',
    'testimonial3.quote': 'Poraus- ja asennustyöt hoituvat nopeasti. Hinnoittelu oli läpinäkyvää eikä yllätyksiä tullut. Käytän jatkossakin.',
    'contact.label': 'Ota yhteyttä',
    'contact.title': 'Kuinka voimme auttaa sinua?',
    'contact.subtitle': 'Täytä lomake tai ota yhteyttä suoraan. Vastaamme kaikkiin yhteydenottoihin 24 tunnin kuluessa.',
    'contact.info-title': 'Yhteystiedot',
    'contact.whatsapp': 'Ota yhteyttä WhatsAppissa',
    'form.name': 'Nimi',
    'form.name-placeholder': 'Etunimi Sukunimi',
    'form.name-error': 'Kirjoita nimesi.',
    'form.phone': 'Puhelinnumero',
    'form.email': 'Sähköposti',
    'form.email-placeholder': 'sinä@esimerkki.fi',
    'form.email-error': 'Kirjoita kelvollinen sähköpostiosoite.',
    'form.service': 'Palvelu',
    'form.service-placeholder': 'Valitse palvelu...',
    'service.opt1': 'Kodin huolto ja korjaukset',
    'service.opt2': 'Poraukset ja asennukset',
    'service.opt3': 'Vaihdot ja korjaukset',
    'service.opt4': 'Rakentaminen ja pieniremontit',
    'service.opt5': 'Konsultointi',
    'service.opt6': 'Muu',
    'form.message': 'Viesti',
    'form.message-placeholder': 'Kerro meille tarpeistasi...',
    'form.message-error': 'Kirjoita viestisi.',
    'form.gdpr': 'Hyväksyn tietojeni käsittelyn yhteydenottoa varten.',
    'form.privacy-link': 'Lue tietosuojaselosteemme.',
    'form.gdpr-error': 'Hyväksy tietosuojaseloste jatkaaksesi.',
    'form.submit': 'Lähetä viesti',
    'form.submitting': 'Lähetetään...',
    'form.success': '✓ Kiitos yhteydenotostasi! Otamme sinuun yhteyttä pian.',
    'footer.quicklinks': 'Pikavalikko',
    'footer.copyright': '© 2025 NXR Group. Kaikki oikeudet pidätetään.',
    'footer.privacy': 'Tietosuojaseloste',
  },
  en: {
    'skip-link': 'Skip to main content',
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.diamond': 'Diamond Works',
    'nav.construction': 'Construction & Renovation',
    'nav.consulting': 'Consulting',
    'nav.contact': 'Contact',
    'nav.cta': 'Contact us',
    'intro.scroll': 'Scroll down',
    'hero.slogan': 'Home repair and construction',
    'hero.title1': 'Home maintenance –',
    'hero.title2': 'reliably',
    'hero.title3': 'and professionally.',
    'hero.subtitle': 'We provide comprehensive home services from renovations to installations and consulting. One call is enough – we handle the rest.',
    'hero.explore': 'Explore services',
    'about.label': 'About us',
    'about.title': 'Experience, expertise and genuine care',
    'about.body': 'NXR Group was founded to provide comprehensive support for home maintenance and improvement. Our team consists of experienced professionals who understand client needs and deliver quality work – on time and at the agreed price.',
    'about.stat1': 'Years of experience',
    'about.stat2': 'Satisfied customers',
    'about.stat3': 'Satisfaction guarantee',
    'about.badge': 'Customer rating',
    'read-more': 'Read more',
    'services.label': 'SERVICES',
    'services.title': 'Professional services from one place',
    'services.subtitle': 'We offer diamond works, construction and renovation, and consulting – with quality and on schedule.',
    'services.diamond.desc': 'Professional diamond drilling and demolition works for new construction and renovation projects – precisely and safely.',
    'services.construction.desc': 'Versatile construction and renovation services from planning to finishing – with quality and on schedule.',
    'services.consulting.desc': 'Unclear situation or a bigger project in mind? We help map out needs, plan the work and estimate costs.',
    'testimonials.label': 'Customer reviews',
    'testimonials.title': 'What do our customers say?',
    'testimonials.subtitle': 'Satisfied customers are the best measure of our work.',
    'testimonial1.quote': 'Extremely reliable and professional service. All agreed work was done on time and with high quality. Highly recommended.',
    'testimonial2.quote': 'The kitchen renovation went perfectly. Clear communication and the result exceeded expectations. Thank you NXR Group!',
    'testimonial3.quote': 'Drilling and installation work done quickly. Pricing was transparent and there were no surprises. Will use again.',
    'contact.label': 'Contact',
    'contact.title': 'How can we help you?',
    'contact.subtitle': 'Fill out the form or contact us directly. We respond to all enquiries within 24 hours.',
    'contact.info-title': 'Contact information',
    'contact.whatsapp': 'Contact us on WhatsApp',
    'form.name': 'Name',
    'form.name-placeholder': 'First name Last name',
    'form.name-error': 'Please enter your name.',
    'form.phone': 'Phone number',
    'form.email': 'Email',
    'form.email-placeholder': 'you@example.com',
    'form.email-error': 'Please enter a valid email address.',
    'form.service': 'Service',
    'form.service-placeholder': 'Select a service...',
    'service.opt1': 'Home maintenance and repairs',
    'service.opt2': 'Drilling and installations',
    'service.opt3': 'Replacements and repairs',
    'service.opt4': 'Construction and minor renovations',
    'service.opt5': 'Consulting',
    'service.opt6': 'Other',
    'form.message': 'Message',
    'form.message-placeholder': 'Tell us about your needs...',
    'form.message-error': 'Please write your message.',
    'form.gdpr': 'I consent to my data being processed for the purpose of this enquiry.',
    'form.privacy-link': 'Read our privacy policy.',
    'form.gdpr-error': 'Please accept the privacy policy to continue.',
    'form.submit': 'Send message',
    'form.submitting': 'Sending...',
    'form.success': '✓ Thank you for your message! We will get back to you shortly.',
    'footer.quicklinks': 'Quick links',
    'footer.copyright': '© 2025 NXR Group. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
  },
  sv: {
    'skip-link': 'Hoppa till huvudinnehållet',
    'nav.home': 'Hem',
    'nav.about': 'Om oss',
    'nav.services': 'Tjänster',
    'nav.diamond': 'Diamantarbeten',
    'nav.construction': 'Byggande och renovering',
    'nav.consulting': 'Konsultation',
    'nav.contact': 'Kontakt',
    'nav.cta': 'Kontakta oss',
    'intro.scroll': 'Scrolla ner',
    'hero.slogan': 'Hemreparation och byggande',
    'hero.title1': 'Hemunderhåll –',
    'hero.title2': 'pålitligt',
    'hero.title3': 'och professionellt.',
    'hero.subtitle': 'Vi erbjuder heltäckande hemtjänster från renoveringar till installationer och konsultation. Ett samtal räcker – vi sköter resten.',
    'hero.explore': 'Utforska tjänster',
    'about.label': 'Om oss',
    'about.title': 'Erfarenhet, kompetens och genuint engagemang',
    'about.body': 'NXR Group grundades för att erbjuda heltäckande stöd för hemunderhåll och förbättring. Vårt team består av erfarna proffs som förstår kundens behov och levererar kvalitetsarbete – i tid och till överenskommet pris.',
    'about.stat1': 'Års erfarenhet',
    'about.stat2': 'Nöjda kunder',
    'about.stat3': 'Nöjdhetsgaranti',
    'about.badge': 'Kundbetyg',
    'read-more': 'Läs mer',
    'services.label': 'TJÄNSTER',
    'services.title': 'Professionella tjänster från ett ställe',
    'services.subtitle': 'Vi erbjuder diamantarbeten, byggande och renovering samt konsultation – med kvalitet och i tid.',
    'services.diamond.desc': 'Professionella diamantborrnings- och rivningsarbeten för nybyggen och renoveringsprojekt – exakt och säkert.',
    'services.construction.desc': 'Mångsidiga bygg- och renoveringstjänster från planering till färdigställande – med kvalitet och i tid.',
    'services.consulting.desc': 'Oklart läge eller ett större projekt på gång? Vi hjälper till att kartlägga behov, planera arbetet och uppskatta kostnader.',
    'testimonials.label': 'Kundrecensioner',
    'testimonials.title': 'Vad säger våra kunder?',
    'testimonials.subtitle': 'Nöjda kunder är det bästa måttet på vårt arbete.',
    'testimonial1.quote': 'Extremt pålitlig och professionell service. Allt avtalat arbete gjordes i tid och med hög kvalitet. Varmt rekommenderat.',
    'testimonial2.quote': 'Köksrenoveringen gick perfekt. Tydlig kommunikation och resultatet överträffade förväntningarna. Tack NXR Group!',
    'testimonial3.quote': 'Borrnings- och installationsarbeten gjorda snabbt. Priserna var transparenta och inga överraskningar uppstod. Kommer att använda igen.',
    'contact.label': 'Kontakt',
    'contact.title': 'Hur kan vi hjälpa dig?',
    'contact.subtitle': 'Fyll i formuläret eller kontakta oss direkt. Vi svarar på alla förfrågningar inom 24 timmar.',
    'contact.info-title': 'Kontaktuppgifter',
    'contact.whatsapp': 'Kontakta oss på WhatsApp',
    'form.name': 'Namn',
    'form.name-placeholder': 'Förnamn Efternamn',
    'form.name-error': 'Ange ditt namn.',
    'form.phone': 'Telefonnummer',
    'form.email': 'E-post',
    'form.email-placeholder': 'du@exempel.se',
    'form.email-error': 'Ange en giltig e-postadress.',
    'form.service': 'Tjänst',
    'form.service-placeholder': 'Välj en tjänst...',
    'service.opt1': 'Hemunderhåll och reparationer',
    'service.opt2': 'Borrning och installationer',
    'service.opt3': 'Byten och reparationer',
    'service.opt4': 'Byggande och mindre renoveringar',
    'service.opt5': 'Konsultation',
    'service.opt6': 'Övrigt',
    'form.message': 'Meddelande',
    'form.message-placeholder': 'Berätta om dina behov...',
    'form.message-error': 'Skriv ditt meddelande.',
    'form.gdpr': 'Jag samtycker till att mina uppgifter behandlas för denna förfrågan.',
    'form.privacy-link': 'Läs vår integritetspolicy.',
    'form.gdpr-error': 'Vänligen godkänn integritetspolicyn för att fortsätta.',
    'form.submit': 'Skicka meddelande',
    'form.submitting': 'Skickar...',
    'form.success': '✓ Tack för ditt meddelande! Vi återkommer till dig inom kort.',
    'footer.quicklinks': 'Snabblänkar',
    'footer.copyright': '© 2025 NXR Group. Alla rättigheter förbehållna.',
    'footer.privacy': 'Integritetspolicy',
  }
};

/* --------------------------------------------------
   LANGUAGE SWITCHER
-------------------------------------------------- */
let currentLang = localStorage.getItem('nxr-lang') || 'fi';

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('nxr-lang', lang);
  document.documentElement.lang = lang;

  const t = translations[lang];

  // Text content elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.textContent = t[key];
    }
  });

  // Placeholder attributes
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) {
      el.placeholder = t[key];
    }
  });

  // Update dropdown button label
  const langLabel = document.getElementById('lang-label');
  const langFlag  = document.getElementById('lang-flag');
  const langMap = { fi: ['FI', '🇫🇮'], en: ['EN', '🇬🇧'], sv: ['SV', '🇸🇪'] };
  if (langLabel && langFlag && langMap[lang]) {
    langLabel.textContent = langMap[lang][0];
    langFlag.textContent  = langMap[lang][1];
  }

  // Mark active option in dropdown
  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.classList.toggle('lang-option--active', opt.dataset.lang === lang);
  });

  // Update hamburger aria-labels
  const hamburger = document.getElementById('hamburger');
  if (hamburger) {
    const isOpen = hamburger.classList.contains('open');
    const closeLabel = { fi: 'Sulje valikko', en: 'Close menu', sv: 'Stäng meny' };
    const openLabel  = { fi: 'Avaa valikko',  en: 'Open menu',  sv: 'Öppna meny' };
    hamburger.setAttribute('aria-label', isOpen ? closeLabel[lang] : openLabel[lang]);
  }
}

document.addEventListener('DOMContentLoaded', () => {

  // Apply saved language on load
  applyLanguage(currentLang);

  // Language dropdown toggle
  const langToggle   = document.getElementById('lang-toggle');
  const langDropdown = document.getElementById('lang-dropdown');

  if (langToggle && langDropdown) {
    langToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = langDropdown.classList.toggle('open');
      langToggle.setAttribute('aria-expanded', isOpen);
    });

    langDropdown.querySelectorAll('.lang-option').forEach(opt => {
      opt.addEventListener('click', () => {
        applyLanguage(opt.dataset.lang);
        langDropdown.classList.remove('open');
        langToggle.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('click', (e) => {
      if (!langToggle.closest('.lang-dropdown-wrapper').contains(e.target)) {
        langDropdown.classList.remove('open');
        langToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // --------------------------------------------------
  // 1. NAVBAR: shadow on scroll + active link tracking
  // --------------------------------------------------
  const navbar   = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.navbar__links a, .navbar__mobile a:not(.btn)');
  const sections = document.querySelectorAll('section[id]');

  const introScreen = document.getElementById('intro');

  const onScroll = () => {
    const introHeight = introScreen ? introScreen.offsetHeight : 0;
    const pastIntro   = window.scrollY > introHeight - 80;
    navbar.classList.toggle('navbar--transparent', !pastIntro && !!introScreen);
    navbar.classList.toggle('scrolled', pastIntro && window.scrollY > introHeight - 20);

    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // --------------------------------------------------
  // 2. HAMBURGER MENU toggle
  // --------------------------------------------------
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
    const closeLabel = { fi: 'Sulje valikko', en: 'Close menu', sv: 'Stäng meny' };
    const openLabel  = { fi: 'Avaa valikko',  en: 'Open menu',  sv: 'Öppna meny' };
    hamburger.setAttribute('aria-label', isOpen ? closeLabel[currentLang] : openLabel[currentLang]);
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      const openLabel = { fi: 'Avaa valikko', en: 'Open menu', sv: 'Öppna meny' };
      hamburger.setAttribute('aria-label', openLabel[currentLang] || 'Open menu');
    });
  });

  document.addEventListener('click', e => {
    if (!navbar.contains(e.target)) {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });

  // --------------------------------------------------
  // 3. SMOOTH SCROLL for all anchor links
  // --------------------------------------------------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();

      const navbarHeight = navbar.offsetHeight;
      const targetTop    = target.getBoundingClientRect().top + window.scrollY - navbarHeight;

      window.scrollTo({ top: targetTop, behavior: 'smooth' });
    });
  });

  // --------------------------------------------------
  // 4. SCROLL REVEAL via Intersection Observer
  // --------------------------------------------------
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // --------------------------------------------------
  // 5. CONTACT FORM validation
  // --------------------------------------------------
  const form = document.getElementById('contact-form');
  if (!form) return;

  const formSuccess = document.getElementById('form-success');

  const setError = (groupId, show) => {
    const group = document.getElementById(groupId);
    const error = document.getElementById(`error-${groupId.replace('group-', '')}`);
    if (!group || !error) return;
    group.classList.toggle('has-error', show);
    error.style.display = show ? 'block' : 'none';
  };

  const validateForm = () => {
    let valid = true;

    const nimi = form.querySelector('#nimi');
    const nimiOk = nimi.value.trim().length >= 2;
    setError('group-nimi', !nimiOk);
    if (!nimiOk) valid = false;

    const puhelin = form.querySelector('#puhelin');
    const puhelinOk = /^\+?[\d\s\-]{6,}$/.test(puhelin.value.trim());
    setError('group-puhelin', !puhelinOk);
    if (!puhelinOk) valid = false;

    const email = form.querySelector('#email');
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
    setError('group-email', !emailOk);
    if (!emailOk) valid = false;

    const viesti = form.querySelector('#viesti');
    const viestiOk = viesti.value.trim().length >= 5;
    setError('group-viesti', !viestiOk);
    if (!viestiOk) valid = false;

    const gdpr = form.querySelector('#gdpr');
    const gdprError = document.getElementById('error-gdpr');
    const gdprOk = gdpr.checked;
    gdprError.style.display = gdprOk ? 'none' : 'block';
    if (!gdprOk) valid = false;

    return valid;
  };

  ['nimi', 'puhelin', 'email', 'viesti'].forEach(fieldId => {
    const field = form.querySelector(`#${fieldId}`);
    if (!field) return;
    field.addEventListener('blur', () => {
      const groupId = `group-${fieldId}`;
      if (fieldId === 'nimi') {
        setError(groupId, field.value.trim().length < 2);
      } else if (fieldId === 'puhelin') {
        setError(groupId, !/^\+?[\d\s\-]{6,}$/.test(field.value.trim()));
      } else if (fieldId === 'email') {
        setError(groupId, !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim()));
      } else if (fieldId === 'viesti') {
        setError(groupId, field.value.trim().length < 5);
      }
    });
  });

  form.addEventListener('submit', e => {
    e.preventDefault();

    if (!validateForm()) return;

    const submitBtn = form.querySelector('[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.querySelector('[data-i18n]').textContent = translations[currentLang]['form.submitting'];

    setTimeout(() => {
      form.reset();
      submitBtn.disabled = false;
      submitBtn.querySelector('[data-i18n]').textContent = translations[currentLang]['form.submit'];
      formSuccess.textContent = translations[currentLang]['form.success'];
      formSuccess.classList.add('show');
      formSuccess.focus();

      setTimeout(() => formSuccess.classList.remove('show'), 8000);
    }, 900);
  });

});
