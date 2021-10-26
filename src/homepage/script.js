console.log("Loaded for homepage");

function changeNavBar() {
    const headerWrapper = document.getElementById("header_wrapper");
    if(this.scrollY > 10){
        headerWrapper.classList.add('fixed_bar');
    } else {
        headerWrapper.classList.remove('fixed_bar');
    }
}

document.getElementById('service_button').addEventListener('click', () => {
    console.log('Clicked')
    document.getElementById('service_wrapper').scrollIntoView({ block: 'start',  behavior: 'smooth' });
});

window.addEventListener('scroll', changeNavBar, false);