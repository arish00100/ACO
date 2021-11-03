console.log("Loaded for homepage");

function changeNavBar() {
  const headerWrapper = document.getElementById("header_wrapper");
  if (this.scrollY > 10) {
    headerWrapper.classList.add("fixed_bar");
  } else {
    headerWrapper.classList.remove("fixed_bar");
  }
}

document.getElementById("service_button").addEventListener("click", () => {
  console.log("Clicked");
  document
    .getElementById("service_wrapper")
    .scrollIntoView({ block: "start", behavior: "smooth" });
});

window.addEventListener("scroll", changeNavBar, false);

const xhr = new XMLHttpRequest();

$(document).ready(function () {
  $.ajax({
    url: "data.json",
    success: function (data) {
      for (let i = 0; i < data.length; i++) {
        $(".pet-section").append(` <div class="pet-adoption">
        <div class="img">
          <img
            src=${data[i].img}
            alt="img"
          />
        </div>
        <div class="info">
        <h4>${data[i].name}</h4>
        <p>Gender : ${data[i].Gender}</p>
        <p>City : ${data[i].City}</p>
        <p>Join Date : ${data[i].JoinDate}</p>
        <p>Status : ${data[i].Status}</p>
        </div>
      </div>`);
      }
    },
  });
});
