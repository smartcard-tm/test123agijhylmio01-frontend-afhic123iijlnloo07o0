const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            console.log(entry)
            if (entry.isIntersecting) {
                entry.target.classList.add('animate1')
            }
    });
});

const divPartners = document.querySelectorAll('.partners')
const divApplicants = document.querySelectorAll('.applicants')
const divSepStat = document.querySelectorAll('.sep-stat')
const footerSocial = document.querySelectorAll('.footer-social')

divPartners.forEach((el) => observer.observe(el));
divApplicants.forEach((el1) => observer.observe(el1));
divSepStat.forEach((el2) => observer.observe(el2));
footerSocial.forEach((el4) => observer.observe(el4));
