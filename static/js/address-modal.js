var modal4 = document.getElementById("id03")
var btn_1=document.getElementById('btn-address1')
var btn_2 = document.getElementById('btn-address2')
var address_image = document.getElementById('address-id')
var address_link=document.getElementById('address-btn')

btn_1.onclick = function () {
    modal4.style.display = "block";    
    address_image.src = "static/images/address-rysgal.png"
    address_link.href="https://www.google.com/maps/place/%D0%90%D0%BA%D1%86%D0%B8%D0%BE%D0%BD%D0%B5%D1%80%D0%BD%D1%8B%D0%B9+%D0%BA%D0%BE%D0%BC%D0%BC%D0%B5%D1%80%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9+%D0%B1%D0%B0%D0%BD%D0%BA+%22%D0%A0%D1%8B%D1%81%D0%B3%D0%B0%D0%BB%22/@37.9113799,58.3952805,17z/data=!4m14!1m7!3m6!1s0x3f6ffda3b66fd7bd:0x9972eaeb5e8692c5!2zMTk0NiwgQW5rYXJhIFN0IDIzLCBBc2hnYWJhdCwg0KLRg9GA0LrQvNC10L3QuNGB0YLQsNC9!3b1!8m2!3d37.9113757!4d58.3978554!3m5!1s0x3f6ffda2498bd61f:0x6c3160d0695102d0!8m2!3d37.9108043!4d58.3972321!16s%2Fg%2F11gdkj_32z?hl=RU"
};

btn_2.onclick = function () {
    modal4.style.display = "block";    
    address_image.src = "static/images/address-orlan.png"
    address_link.href="https://www.google.com/maps/place/%D0%9A%D0%B0%D0%B4%D1%80%D0%BE%D0%B2%D0%BE%D0%B5+%D0%B0%D0%B3%D0%B5%D0%BD%D1%82%D1%81%D1%82%D0%B2%D0%BE+%22%D0%9E%D1%80%D0%BB%D0%B0%D0%BD%22/@37.9409532,58.3877441,19z/data=!4m6!3m5!1s0x3f6fff0a154a0059:0xcd676ded8894e1d2!8m2!3d37.9409531!4d58.3888706!16s%2Fg%2F11lkd00q3g?hl=en&entry=ttu"
};
