
lucide.createIcons();


var menuOpen = document.getElementById('menuOpen');
var menuClose = document.getElementById('menuClose');
var mobileMenu = document.getElementById('mobileMenu');
var mobLinks = document.querySelectorAll('.mobLink');

menuOpen.addEventListener('click', function () {
  mobileMenu.classList.add('open');
});

menuClose.addEventListener('click', function () {
  mobileMenu.classList.remove('open');
});

mobLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    mobileMenu.classList.remove('open');
  });
});


var navbar = document.getElementById('navbar');
window.addEventListener('scroll', function () {
  if (window.scrollY > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


var allSections = document.querySelectorAll('section[id]');
var allNavLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', function () {
  var current = '';
  allSections.forEach(function (sec) {
    if (window.scrollY >= sec.offsetTop - 120) {
      current = sec.getAttribute('id');
    }
  });
  allNavLinks.forEach(function (link) {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});


var revealEls = document.querySelectorAll('.reveal');
var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');

      
      var fills = entry.target.querySelectorAll('.fill');
      fills.forEach(function (fill) {
        var w = fill.getAttribute('data-w');
        setTimeout(function () {
          fill.style.width = w + '%';
        }, 200);
      });

      observer.unobserve(entry.target);
    }
  });
}, {
  rootMargin: '0px 0px -60px 0px',
  threshold: 0.1
});

revealEls.forEach(function (el) {
  observer.observe(el);
});


var form = document.getElementById('contactForm');
var toast = document.getElementById('toast');
var toastMsg = document.getElementById('toastMsg');
var submitBtn = document.getElementById('submitBtn');

function showToast(msg, isError) {
  toastMsg.textContent = msg;
  toast.style.borderColor = isError ? 'rgba(239,68,68,0.3)' : 'rgba(0,255,196,0.3)';
  toast.classList.add('show');
  setTimeout(function () {
    toast.classList.remove('show');
  }, 4000);
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  var name = document.getElementById('fName').value.trim();
  var email = document.getElementById('fEmail').value.trim();
  var subject = document.getElementById('fSubject').value.trim();
  var message = document.getElementById('fMessage').value.trim();

  if (!name || !email || !subject || !message) {
    showToast('Please fill in all fields.', true);
    return;
  }

  var originalHTML = submitBtn.innerHTML;
  submitBtn.innerHTML = 'Sending...';
  submitBtn.disabled = true;

  setTimeout(function () {
    showToast('Message sent! Pradeep will get back to you soon.', false);
    form.reset();
    submitBtn.innerHTML = originalHTML;
    submitBtn.disabled = false;
    lucide.createIcons();
  }, 1500);
});


document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    var target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});