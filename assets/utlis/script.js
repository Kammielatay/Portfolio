// inserting photo of myself 
let imageOfMe = $('<img>');
imageOfMe.addClass('photo-of-me');
imageOfMe.attr('src', "assets/images/photo-of-me.png");
imageOfMe.attr('alt', "photo of me on a New York Stoop")

$('.div-photo').append(imageOfMe)

// inserting text via jquery
$('.header').text('Hello There!');

$('.first-paragraph').text('Welcome to my portfolio. I am so happy that you are here. My name is Kameshia but I often go by Kammie. I am currently enrolled in the University of Arizona Coding Bootcamp. I made the decicion to learn to become a Web Developer during the first lockdown of the Coronavirus and it was one of the best decisions for my life. This time last year, I never would have imagined that I would be here, building an entire responsive website from scratch.');

$('.second-paragraph').text("Check out more by clicking the button below and I'll take you on a journey of my 2020 or head stright over to my ");

// creating link for project page
let projectLink = $('<a>');
projectLink.attr('href', "portfolio.html");
projectLink.addClass('homepage');
projectLink.text('projects.');

// appending that link to the second paragraph
$('.second-paragraph').append(projectLink);

// creating links for LinkedIn website and contact page for 3rd paragraph
let linkedinLink = $('<a>');
linkedinLink.attr('href', 'https://www.linkedin.com/in/kameshiaingram/');
linkedinLink.addClass('homepage');
linkedinLink.text('LinkedIn')

let contactLink = $('<a>');
contactLink.attr('href', 'contact.html');
contactLink.addClass('homepage');
contactLink.text('contact page')

$('.third-paragraph').text("I'd love to hear from you. Reach out via ").append(linkedinLink).append(" or go to my ").append(contactLink).append(" to leave me a message. I look forward to connecting with you.")


// linking button to about page 
function aboutPage() {
    location.href = "about.html"
}

$('.about-btn').on('click', aboutPage);

