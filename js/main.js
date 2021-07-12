// Выпадающий список
var country = $(".form__country");
var countryList = $('.country__list');
var countryBtn = $('.country-btn');
var countryCurrent = $('.country-current__elem');

countryBtn.click(function(e){
    countryList.fadeToggle();
    $(this).toggleClass('isactive')
});

countryList.on('click', '.country__elem', function(){
    var th = $(this);
    var thText = th.text();
    countryCurrent
    .text(thText)
    .attr('href', 'sizes__list--mobile:'+thText+'');
    countryList.fadeOut();
    countryBtn.removeClass('isactive');
});

$(document).mouseup(function (e){
    if (!country.is(e.target)
    && country.has(e.target).length === 0) {
        countryList.fadeOut();
        countryBtn.removeClass('isactive');
    }
});

// Аккордеон
const accordeonTitle = document.querySelectorAll('[data-name="accordeon-title"]');

accordeonTitle.forEach(function (item) {
    item.addEventListener('click', showAccordeon);
});

function showAccordeon() {
    this.classList.toggle('show');
    let loock = this.nextElementSibling;
    if (loock.style.maxHeight){
    loock.style.maxHeight = null;
    } else {
        loock.style.maxHeight = loock.scrollHeight + "px";
    }
}

const ratingCard = document.querySelectorAll('.accordeon-item');
if(ratingCard) {
    for (let card of ratingCard) {
        const cardLearnMoreBtn = card.querySelector('.accordeon-item-header');
        const learnMoreImg = card.querySelector('.accordeon__title-img');

        cardLearnMoreBtn.addEventListener('click', function(){
            learnMoreImg.classList.toggle('accordeon__title-img--active');
        })
    }
}

// карусель 
$(document).ready(function(){
    var reviewsCarousel = $("#reviews__items-wrap");

    // HERO CAROUSEL
    function reviewsCarouselInit() {
        if($('body').children(reviewsCarousel) && $(window).width() < 1000){
            reviewsCarousel.owlCarousel({
                margin: 10,
                center: true,
                loop: true,
                nav: false,
                pagination: true,   
                dots: true,
                responsiveClass:true,
                responsiveBaseElement:"body",
                responsive:{
                    0:{
                        items:1
                    }
                }
            });
        }else{
            reviewsCarousel.trigger('destroy.owl.carousel')
        }; 
    };

    reviewsCarouselInit();
    $(window).resize(function(){
        reviewsCarouselInit();
    });
}); 

