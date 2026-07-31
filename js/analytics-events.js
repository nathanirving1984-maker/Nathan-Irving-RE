// Fires GA4 events and Google Ads conversions for lead forms and phone/email clicks.
(function () {
  // ---------------------------------------------------------------------------
  // Google Ads conversion tracking.
  //
  // Fill these in from Google Ads > Goals > Conversions. Open a conversion action,
  // choose "Install the tag yourself", and copy the send_to value it shows:
  //
  //     gtag('event', 'conversion', {'send_to': 'AW-1234567890/AbC-D_efGhIjKlMn'});
  //                                              ^conversion ID  ^conversion label
  //
  // The conversion ID is the same for every action on the account; each action has
  // its own label. Until ADS_CONVERSION_ID is set, nothing below sends to Ads and
  // GA4 tracking continues as normal. Leave an individual label as '' to skip it.
  // ---------------------------------------------------------------------------
  var ADS_CONVERSION_ID = ''; // e.g. 'AW-1234567890'
  var ADS_LABELS = {
    lead_form: '',   // form submissions (all four Formspree forms)
    phone_click: '', // clicks on tel: links
    email_click: ''  // clicks on mailto: links
  };

  var adsEnabled = /^AW-[\w-]+$/.test(ADS_CONVERSION_ID);

  // Register the Ads destination on the existing Google tag so it picks up the
  // gclid from the landing page URL and sets the conversion linker cookie.
  if (adsEnabled && typeof gtag === 'function') {
    gtag('config', ADS_CONVERSION_ID);
  }

  function fireAdsConversion(labelKey) {
    if (!adsEnabled || typeof gtag !== 'function') return;

    var label = ADS_LABELS[labelKey];
    if (!label) return;

    gtag('event', 'conversion', {
      send_to: ADS_CONVERSION_ID + '/' + label
    });
  }

  function fireConversionEvent(formName) {
    if (typeof gtag === 'function') {
      gtag('event', 'generate_lead', {
        form_name: formName,
        page_location: window.location.href
      });
    }
    fireAdsConversion('lead_form');
  }

  function handleFormSubmit(form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var statusEl = form.querySelector('.form-status');
      var submitBtn = form.querySelector('button[type="submit"]');
      var formName = form.getAttribute('data-form-name') || 'form';

      if (submitBtn) submitBtn.disabled = true;
      if (statusEl) {
        statusEl.textContent = 'Sending...';
        statusEl.style.color = '';
      }

      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      }).then(function (response) {
        if (!response.ok) throw new Error('Submission failed');
        fireConversionEvent(formName);
        if (statusEl) {
          statusEl.textContent = "Thanks — your message is on its way. Nathan will be in touch soon.";
          statusEl.style.color = '#2e7d32';
        }
        form.reset();
      }).catch(function () {
        if (statusEl) {
          statusEl.textContent = 'Something went wrong. Please try again or call (415) 209-4864.';
          statusEl.style.color = '#b3261e';
        }
      }).finally(function () {
        if (submitBtn) submitBtn.disabled = false;
      });
    });
  }

  document.querySelectorAll('form[data-form-name]').forEach(handleFormSubmit);

  function trackClicks(selector, eventName, adsLabelKey) {
    document.querySelectorAll(selector).forEach(function (el) {
      el.addEventListener('click', function () {
        if (typeof gtag === 'function') {
          gtag('event', eventName, { page_location: window.location.href });
        }
        fireAdsConversion(adsLabelKey);
      });
    });
  }

  trackClicks('a[href^="tel:"]', 'phone_click', 'phone_click');
  trackClicks('a[href^="mailto:"]', 'email_click', 'email_click');
})();
