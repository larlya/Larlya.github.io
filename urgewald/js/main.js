/* Urgewald Bewerbungswebsite – Slide + Carousel logic */

function openTab(evt, tabId) {
  var i, tabContent, tabBtns;
  tabContent = document.querySelectorAll('.tab-content');
  for (i = 0; i < tabContent.length; i++) tabContent[i].classList.remove('active');
  tabBtns = document.querySelectorAll('.tab-btn');
  for (i = 0; i < tabBtns.length; i++) {
    tabBtns[i].classList.remove('active');
    tabBtns[i].setAttribute('aria-selected', 'false');
  }
  var panel = document.getElementById(tabId);
  if (panel) panel.classList.add('active');
  if (evt && evt.currentTarget) {
    evt.currentTarget.classList.add('active');
    evt.currentTarget.setAttribute('aria-selected', 'true');
  }
}

(function () {
  'use strict';

  /* ========== Slides (Sektion 2) ========== */
  var slidesContainer = document.querySelector('.slides-viewport');
  var slides = document.querySelectorAll('.slide');
  var slidesDotsEl = document.getElementById('slidesDots');
  var slidesPrevBtn = document.getElementById('slidesPrev');
  var slidesNextBtn = document.getElementById('slidesNext');
  var slidesProgressBar = document.getElementById('slidesProgressBar');
  var totalSlides = slides.length;
  var currentSlide = 0;
  var touchStartX = 0;
  var touchEndX = 0;

  function goToSlide(index) {
    if (index < 0) index = 0;
    if (index >= totalSlides) index = totalSlides - 1;
    currentSlide = index;
    slides.forEach(function (slide, i) {
      slide.classList.remove('active', 'prev-out');
      if (i === currentSlide) slide.classList.add('active');
      else if (i < currentSlide) slide.classList.add('prev-out');
    });
    updateDots();
    updateProgress();
  }

  function updateDots() {
    if (!slidesDotsEl) return;
    var dots = slidesDotsEl.querySelectorAll('.slides-dot');
    dots.forEach(function (dot, i) {
      dot.classList.toggle('active', i === currentSlide);
      dot.setAttribute('aria-selected', i === currentSlide);
    });
  }

  function updateProgress() {
    if (!slidesProgressBar) return;
    var pct = ((currentSlide + 1) / totalSlides) * 100;
    slidesProgressBar.style.width = pct + '%';
    var progressWrap = slidesProgressBar.parentElement;
    if (progressWrap) {
      progressWrap.setAttribute('aria-valuenow', currentSlide + 1);
    }
  }

  function createDots() {
    if (!slidesDotsEl || totalSlides === 0) return;
    slidesDotsEl.innerHTML = '';
    for (var i = 0; i < totalSlides; i++) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'slides-dot' + (i === 0 ? ' active' : '');
      btn.setAttribute('aria-label', 'Slide ' + (i + 1));
      btn.setAttribute('aria-selected', i === 0);
      btn.setAttribute('role', 'tab');
      (function (idx) {
        btn.addEventListener('click', function () { goToSlide(idx); });
      })(i);
      slidesDotsEl.appendChild(btn);
    }
  }

  if (slidesContainer && totalSlides > 0) {
    createDots();
    updateProgress();
    if (slidesPrevBtn) slidesPrevBtn.addEventListener('click', function () { goToSlide(currentSlide - 1); });
    if (slidesNextBtn) slidesNextBtn.addEventListener('click', function () { goToSlide(currentSlide + 1); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') { goToSlide(currentSlide - 1); e.preventDefault(); }
      if (e.key === 'ArrowRight') { goToSlide(currentSlide + 1); e.preventDefault(); }
    });
    slidesContainer.addEventListener('touchstart', function (e) {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    slidesContainer.addEventListener('touchend', function (e) {
      touchEndX = e.changedTouches[0].screenX;
      var diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) goToSlide(currentSlide + 1);
        else goToSlide(currentSlide - 1);
      }
    }, { passive: true });
  }

  /* ========== Carousel (Sektion 3) ========== */
  var carouselTrack = document.querySelector('.carousel-track');
  var carouselPrev = document.getElementById('carouselPrev');
  var carouselNext = document.getElementById('carouselNext');
  var carouselDots = document.getElementById('carouselDots');
  var carouselCards = document.querySelectorAll('.carousel-card');
  var carouselTotal = carouselCards.length;
  var carouselIndex = 0;

  function goToCarouselIndex(index) {
    if (!carouselTrack || index < 0 || index >= carouselTotal) return;
    carouselIndex = index;
    carouselTrack.style.transform = 'translateX(-' + carouselIndex * 100 + '%)';
    updateCarouselDots();
    pauseReelsExceptInCard(carouselIndex);
  }

  function pauseReelsExceptInCard(visibleCardIndex) {
    carouselCards.forEach(function (card, i) {
      if (i === visibleCardIndex) return;
      var video = card.querySelector('[data-reel-video]');
      var overlay = card.querySelector('[data-reel-play]');
      if (video) {
        video.pause();
        if (overlay) overlay.classList.remove('is-hidden');
      }
    });
  }

  function updateCarouselDots() {
    if (!carouselDots) return;
    var dots = carouselDots.querySelectorAll('.carousel-dot');
    dots.forEach(function (dot, i) {
      dot.classList.toggle('active', i === carouselIndex);
      dot.setAttribute('aria-selected', i === carouselIndex);
    });
  }

  function createCarouselDots() {
    if (!carouselDots || carouselTotal === 0) return;
    carouselDots.innerHTML = '';
    for (var j = 0; j < carouselTotal; j++) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'carousel-dot' + (j === 0 ? ' active' : '');
      btn.setAttribute('aria-label', 'Post ' + (j + 1));
      btn.setAttribute('aria-selected', j === 0);
      (function (idx) {
        btn.addEventListener('click', function () { goToCarouselIndex(idx); });
      })(j);
      carouselDots.appendChild(btn);
    }
  }

  if (carouselTrack && carouselTotal > 0) {
    createCarouselDots();
    carouselTrack.style.transform = 'translateX(0)';
    if (carouselPrev) carouselPrev.addEventListener('click', function () { goToCarouselIndex(carouselIndex - 1); });
    if (carouselNext) carouselNext.addEventListener('click', function () { goToCarouselIndex(carouselIndex + 1); });
  }

  /* ========== Inner Carousel (Carousel-Post mit 5 Bildern) ========== */
  var innerCarousels = document.querySelectorAll('.post-mockup-carousel');
  innerCarousels.forEach(function (wrap) {
    var track = wrap.querySelector('[data-inner-carousel]');
    var dotsContainer = wrap.querySelector('[data-inner-dots]');
    var prevBtn = wrap.querySelector('.inner-carousel-prev');
    var nextBtn = wrap.querySelector('.inner-carousel-next');
    if (!track || !dotsContainer) return;
    var imgs = track.querySelectorAll('img');
    var total = imgs.length;
    var idx = 0;
    function setInnerSlide(i) {
      if (i < 0) i = 0;
      if (i >= total) i = total - 1;
      idx = i;
      track.style.transform = 'translateX(-' + idx * 100 + '%)';
      var dots = dotsContainer.querySelectorAll('.inner-carousel-dot');
      dots.forEach(function (d, k) {
        d.classList.toggle('active', k === idx);
      });
    }
    for (var d = 0; d < total; d++) {
      var dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'inner-carousel-dot' + (d === 0 ? ' active' : '');
      dot.setAttribute('aria-label', 'Bild ' + (d + 1) + ' von ' + total);
      (function (i) { dot.addEventListener('click', function () { setInnerSlide(i); }); })(d);
      dotsContainer.appendChild(dot);
    }
    if (prevBtn) prevBtn.addEventListener('click', function () { setInnerSlide(idx - 1); });
    if (nextBtn) nextBtn.addEventListener('click', function () { setInnerSlide(idx + 1); });
    setInnerSlide(0);
  });

  /* ========== Caption ausklappbar ========== */
  document.querySelectorAll('[data-caption-toggle]').forEach(function (btn) {
    var caption = btn.closest('[data-caption]');
    var captionText = caption ? caption.querySelector('.caption-text') : null;
    if (!caption) return;
    btn.addEventListener('click', function () {
      var isExpanded = caption.classList.toggle('is-expanded');
      btn.textContent = isExpanded ? 'Weniger' : 'Mehr anzeigen';
      if (!isExpanded && captionText) captionText.scrollTop = 0;
    });
  });

  /* ========== Like-Button ========== */
  document.querySelectorAll('[data-post-like]').forEach(function (btn) {
    var icon = btn.querySelector('.like-icon');
    if (!icon) return;
    btn.addEventListener('click', function () {
      var isLiked = btn.classList.toggle('is-liked');
      icon.textContent = isLiked ? '♥' : '♡';
      icon.setAttribute('aria-label', isLiked ? 'Gefällt mir (aktiv)' : 'Gefällt mir');
    });
  });

  /* ========== Reel-Video mit Ton (Play-Overlay) ========== */
  document.querySelectorAll('[data-reel-play]').forEach(function (btn) {
    var wrap = btn.closest('.post-mockup-media-reel');
    var video = wrap ? wrap.querySelector('[data-reel-video]') : null;
    if (!video) return;
    btn.addEventListener('click', function () {
      video.play();
      btn.classList.add('is-hidden');
    });
    video.addEventListener('pause', function () {
      btn.classList.remove('is-hidden');
    });
  });

  /* ========== Scroll Reveal (IntersectionObserver) ========== */
  var revealEls = document.querySelectorAll('.section-hero, .section-slides, .section-carousel, .section-closing, .info-card, .slide-card, .carousel-card, .closing-actions');
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, { rootMargin: '0px 0px -40px 0px', threshold: 0.1 });
  revealEls.forEach(function (el) { observer.observe(el); });
})();
