// For Form Page Login Tabs
// const tabs = document.querySelectorAll('.login__tab');
// const panels = document.querySelectorAll('.login__panel');

// tabs.forEach(tab => {
//     tab.addEventListener('click', () => {
//         const target = tab.dataset.tab;

//         tabs.forEach(tab => {
//             tab.classList.remove('login__tab--active');
//         });

//         panels.forEach(panel => {
//             panel.classList.remove('login__panel--active');
//         });

//         tab.classList.add('login__tab--active');
//         document.getElementById(target).classList.add('login__panel--active');
//     });
// });

window.addEventListener("DOMContentLoaded", () => {

    // =========================
    // Tabs
    // =========================
    const tabs = document.querySelectorAll(".login__tab");
    const panels = document.querySelectorAll(".login__panel");

    function switchTab(target) {

        const currentPanel = document.querySelector(".login__panel--active");
        const nextPanel = document.getElementById(target);

        if (!nextPanel || currentPanel === nextPanel) return;

        // Update active tab
        tabs.forEach(tab => {
            tab.classList.toggle(
                "login__tab--active",
                tab.dataset.tab === target
            );
        });

        // Fade out current panel
        currentPanel.style.opacity = "0";

        currentPanel.addEventListener("transitionend", function handler() {

            currentPanel.removeEventListener("transitionend", handler);

            currentPanel.classList.remove("login__panel--active");
            currentPanel.style.display = "none";

            nextPanel.style.display = "block";

            // Force browser reflow
            nextPanel.offsetHeight;

            nextPanel.classList.add("login__panel--active");
            nextPanel.style.opacity = "1";

        }, { once: true });
    }

    // Click on tabs
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            switchTab(tab.dataset.tab);
        });
    });

    // Login -> Register
    const goToRegister = document.getElementById("goToRegister");

    if (goToRegister) {
        goToRegister.addEventListener("click", e => {
            e.preventDefault();
            switchTab("register");
        });
    }

    // Register -> Login
    const goToLogin = document.getElementById("goToLogin");

    if (goToLogin) {
        goToLogin.addEventListener("click", e => {
            e.preventDefault();
            switchTab("login");
        });
    }

    // =========================
    // Pristine Validation
    // =========================
    const form = document.getElementById("form1");

    if (form) {

        const pristine = new Pristine(form, {
            classTo: "login__field",
            errorClass: "login__field--error",
            successClass: "login__field--success",
            errorTextParent: "login__field",
            errorTextTag: "small",
            errorTextClass: "login__error"
        });

        form.addEventListener("submit", e => {

            e.preventDefault();

            if (pristine.validate()) {
                console.log("Form is valid!");
                // form.submit();
            }

        });

    }

});



// For Form Validation
window.onload = function () {
   var form = document.getElementById("form1");
   var pristine = new Pristine(form);
   form.addEventListener('submit', function (e) {
      e.preventDefault();
      var valid = pristine.validate();
      //alert('Form is valid: ' + valid);

   });
};