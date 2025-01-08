var typed2 = new Typed('.text', {
    strings: [,'Developer--', 'Freelancer--', 'Engineer--'],
    typespeed: 7000,
    backspeed: 7000,
    cursorChar:'',
    loop: true,
})
var typed2 = new Typed('.hero_text', {
    strings: [,'Data Scientist--', 'ML Engineer--', 'NLP Engineer--'],
    typespeed: 7000,
    backspeed: 7000,
    cursorChar:'',
    loop: true,
})

// Add event listener to each nav link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const id = link.getAttribute('href');
        const section = document.querySelector(id);
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Add event listener to repo button
document.querySelectorAll('.repo-btn').forEach(button => {
    button.addEventListener('click', event => {
        event.preventDefault();
        window.open('https://github.com/your-username/your-repo-name', '_blank');
    });
});
let bar = document.querySelector('.bars');
let side_bar = document.querySelector('.side_bar');

bar.addEventListener('click', () => {
    side_bar.classList.toggle('show_side_bar');
});

const socialIcons = document.querySelectorAll('.social_icon i');

socialIcons.forEach(icon => {
    const link = icon.getAttribute('data-link');
    icon.addEventListener('click', () => {
        window.open(link, '_blank');
    });
});

const viewWorkBtn = document.getElementById('view-work-btn');
const contactMeBtn = document.getElementById('contact-me-btn');
const read1Btn = document.getElementById('read1');
const read2Btn = document.getElementById('read2');

viewWorkBtn.addEventListener('click', () => {
    window.open('https://github.com/ISmokeData?tab=repositories', '_blank');
});

contactMeBtn.addEventListener('click', () => {
    window.open('https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlHDclHClMsvmLxppRLkfxnmJmPxTtmWfWGkcqBszlpMHmFpKFljDzpTcjTZppfshscRDB', '_blank');
});
read1Btn.addEventListener('click', () => {
    window.open('https://medium.com/@vermadhanraj015/getting-started-with-neural-networks-a-30-000-foot-view-for-beginners-e80e01a02256', '_blank');
});
read2Btn.addEventListener('click', () => {
    window.open('https://medium.com/@vermadhanraj015/mnist-data-classification-using-tensorflow-1a0ebf2a178f', '_blank');
});



const downloadLink = document.getElementById('download-resume');

downloadLink.addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?id=197sZuHjzsM04M3GOtaI-YeeR62E0bh9x&export=download';
    link.download = 'Your Resume.pdf';
    link.click();
});