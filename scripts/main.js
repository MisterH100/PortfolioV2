const navToggle = document.querySelector(".header__bars");
const headerLogo = document.querySelector(".header__heading");
const navMenu = document.querySelector(".nav");
const navItems = document.querySelectorAll(".nav__item");
const navLinks = document.querySelectorAll("li a");

//toggle nav when nav bars are clicked
navToggle.addEventListener("click", () => {
	if(navToggle.classList.contains("fa-bars")){
		
		navToggle.classList.remove("fa-bars");
		navToggle.classList.add("fa-xmark");
		navMenu.classList.add("nav__toggle");
	}
	else{
		navToggle.classList.remove("fa-xmark");
		navToggle.classList.add("fa-bars");
		navMenu.classList.remove("nav__toggle");
	}
});

//toggle nav when nav items are clicked
navItems.forEach((item) =>{
	item.addEventListener("click", () =>{
		navToggle.classList.add("fa-bars");
		navMenu.classList.remove("nav__toggle");
		
	});

});

// scroll to
navLinks.forEach(link =>{ 
link.addEventListener("click", () =>{
	link.href = link.href;
});
})

//intersection observers
const homeHeading = document.querySelector(".home__heading");
const homeParagraph = document.querySelector(".home__paragraph");

const servicesHeading = document.querySelector(".services__heading");
const servicesSubHeading = document.querySelector(".services__sub-heading");

const servicesArticles = document.querySelectorAll(".services__article");

const portfolioHeading = document.querySelector(".portfolio__heading");
const portfolioSubHeading = document.querySelector(".portfolio__sub-heading");

const contactHeading = document.querySelector(".contact__heading");
const contactSubHeading = document.querySelector(".contact__sub-heading");

//heading
const headingObserver = new IntersectionObserver(entries =>{
	entries.forEach(entry =>{
	entry.target.classList.toggle("fade-in-entrance", entry.isIntersecting)
	if (entry.isIntersecting) headingObserver.unobserve(entry.target);
	})
},
{threshold: 0.5,}
)

//paragraph
const paragraphObserver = new IntersectionObserver(entries =>{
	entries.forEach(entry =>{
	entry.target.classList.toggle("fade-in-entrance", entry.isIntersecting)
	if (entry.isIntersecting) paragraphObserver.unobserve(entry.target);
	})
},
{threshold: 0.5,}
)
//cards
const cardObserver = new IntersectionObserver(entries =>{
	entries.forEach(entry =>{
	entry.target.classList.toggle("zoom-in-entrace", entry.isIntersecting)
	if (entry.isIntersecting) cardObserver.unobserve(entry.target);
	})
},
{threshold: 0.5,}
)

function startObserver(){
headingObserver.observe(homeHeading);
paragraphObserver.observe(homeParagraph);

headingObserver.observe(servicesHeading);
headingObserver.observe(servicesSubHeading);

servicesArticles.forEach(servicesArticle =>{
	cardObserver.observe(servicesArticle);
})


headingObserver.observe(portfolioHeading);
headingObserver.observe(portfolioSubHeading);

headingObserver.observe(contactHeading);
headingObserver.observe(contactSubHeading);
}


startObserver();

headerLogo.addEventListener("click", () =>{
	startObserver();
})

navLinks.forEach(link =>{ 
link.addEventListener("click", () =>{
 startObserver();	
});
})

