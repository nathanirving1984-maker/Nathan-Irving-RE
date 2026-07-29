// Fires GA4 conversion events for lead forms and phone/email clicks.
(function () {
  function fireConversionEvent(formName) {
    if (typeof gtag === 'function') {
      gtag('event', 'generate_lead', {
        form_name: formName,
        page_location: window.location.href
      });
    }
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

  function trackClicks(selector, eventName) {
    document.querySelectorAll(selector).forEach(function (el) {
      el.addEventListener('click', function () {
        if (typeof gtag === 'function') {
          gtag('event', eventName, { page_location: window.location.href });
        }
      });
    });
  }

  trackClicks('a[href^="tel:"]', 'phone_click');
  trackClicks('a[href^="mailto:"]', 'email_click');
})();
