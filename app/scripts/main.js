console.log('Mark Silverwood - marksilverwood.com');
var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
var msc_show = document.getElementById('msc-show');
var msc_hide = document.getElementById('msc-hide');
var honsr_show = document.getElementById('hons-res-show');
var honsr_hide = document.getElementById('hons-res-hide');
var honsd_show = document.getElementById('hons-des-show');
var honsd_hide = document.getElementById('hons-des-hide');

var sub_show = document.getElementById('subjects-show');
var sub_hide = document.getElementById('subjects-hide');

var toggler = function(e, info, show, hide) {
  e.preventDefault();
  document.getElementById(info).classList.toggle('hide');
  show.classList.toggle('hide');
  hide.classList.toggle('hide');
};

msc_show.addEventListener('click', function(e) {
    toggler(e, 'msc-abstract', msc_show, msc_hide);
});
msc_hide.addEventListener('click', function(e) {
    toggler(e, 'msc-abstract', msc_show, msc_hide);
});

honsr_show.addEventListener('click', function(e) {
    toggler(e, 'hons-res-abstract', honsr_show, honsr_hide);
});
honsr_hide.addEventListener('click', function(e) {
    toggler(e, 'hons-res-abstract', honsr_show, honsr_hide);
});

honsd_show.addEventListener('click', function(e) {
    toggler(e, 'hons-des-abstract', honsd_show, honsd_hide);
});
honsd_hide.addEventListener('click', function(e) {
    toggler(e, 'hons-des-abstract', honsd_show, honsd_hide);
});

sub_show.addEventListener('click', function(e) {
    toggler(e, 'bsc-subjects', sub_show, sub_hide);
});
sub_hide.addEventListener('click', function(e) {
    toggler(e, 'bsc-subjects', sub_show, sub_hide);
});


var last_known_scroll_position = 0;
var ticking = false;
var c1a = document.querySelector('.c1a');
var c1c = document.querySelector('.c1c');
var c2a = document.querySelector('.c2a');
var c2c = document.querySelector('.c2c');
var c3a = document.querySelector('.c3a');
var c3c = document.querySelector('.c3c');
var c4a = document.querySelector('.c4a');
var c4c = document.querySelector('.c4c');
var c5a = document.querySelector('.c5a');
var c5c = document.querySelector('.c5c');

function backFixer(el1, el2) {
  var bodyRect = document.body.getBoundingClientRect(),
    elemRect = el1.getBoundingClientRect(),
    scroll = document.querySelector('html').scrollTop,
    offset   = elemRect.top - bodyRect.top;
  el2.style.backgroundPositionY = ((-1 * offset) + scroll) + 'px';
}

function backFix() {
  backFixer(c1a,c1c);
  backFixer(c2a,c2c);
  backFixer(c3a,c3c);
  backFixer(c4a,c4c);
  backFixer(c5a,c5c);
}

if (isFirefox) {
  console.warn('Detected Firefox, implementing background transform bug fix');
  window.onresize = backFix;
  window.addEventListener('scroll', function(e) {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        backFix();
        ticking = false;
      });
    }
    ticking = true;
  });
  backFix();
}

window.sr = ScrollReveal().reveal('.special', {reset: true, delay: 200}, 100);
