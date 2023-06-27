window.addEventListener('DOMContentLoaded', () => {

	document.querySelectorAll('a[href^="#"').forEach(link => {

		link.addEventListener('click', function(e) {
			 e.preventDefault();
  
			 let href = this.getAttribute('href').substring(1);
  
			 const scrollTarget = document.getElementById(href);
  
			 //const topOffset = document.querySelector('.scrollto').offsetHeight;
			 const topOffset = 0; // если не нужен отступ сверху 
			 const elementPosition = scrollTarget.getBoundingClientRect().top;
			 const offsetPosition = elementPosition - topOffset;
  
			 window.scrollBy({
				  top: offsetPosition,
				  behavior: 'smooth'
			 });
		});
  });

  

	 const mobileBtn = document.querySelector('.mobile-btn');
	 const modal =  document.querySelector('.mobile__modal');

	 mobileBtn.addEventListener('click', () => {
	  
	  if(modal.classList.contains('hide-modal')){
		  modal.classList.remove('hide-modal');
		  modal.classList.add('show-modal');
	  } else {
		  modal.classList.remove('show-modal');
		  modal.classList.add('hide-modal');
	  }
	 }); 


	//-----------Скрывающийся хэддер-----------\\
	let lastScroll = 0;
	const defaultOffset = 200,
			header = document.querySelector('.mobile'),
			scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop,
			containHide = () => header.classList.contains('hide');

	window.addEventListener('scroll', () =>{
		if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
			header.classList.add('hide');
			modal.classList.remove('show-modal');
			modal.classList.add('hide-modal');
		}
		else if (scrollPosition() < lastScroll && containHide() && scrollPosition() > defaultOffset){
			header.classList.remove('hide');
			
		}
		lastScroll = scrollPosition();
	})		


});	