//your JS code here. If required.
const openModalBtn = document.getElementById('openModal');
const modalOpen = document.getElementById('modalOpenNew');
const closeBtn = document.getElementById('close-modalNew');

openModalBtn.onclick = () => {
	modalOpen.style.display = 'block';
};

closeBtn.onclick = () => {
	modalOpen.style.display = 'none;'
};


window.onclick = (event) => {
	if(event.target === modalOpen){
		modalOpen.style.display = "none";
	}
};