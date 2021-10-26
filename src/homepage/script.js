console.log("Loaded for homepage");

function changeNavBar() {
    const headerWrapper = document.getElementById("header_wrapper");
    if(this.scrollY > 10){
        headerWrapper.classList.add('fixed_bar');
    } else {
        headerWrapper.classList.remove('fixed_bar');
    }
}

window.addEventListener('scroll', changeNavBar, false);