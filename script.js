// Cambiar entre pestaña de login o registro
function setAuthMode(mode) {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");
  const btnLogin = document.getElementById("btnLoginTab");
  const btnRegister = document.getElementById("btnRegisterTab");

  if (mode === "login") {
    loginForm.classList.remove("hidden");
    registerForm.classList.add("hidden");
    btnLogin.classList.add("active");
    btnRegister.classList.remove("active");
  } else {
    loginForm.classList.add("hidden");
    registerForm.classList.remove("hidden");
    btnLogin.classList.remove("active");
    btnRegister.classList.add("active");
  }
}

// Mostrar pantalla de auth desde el header
function showAuth(type) {
  document.getElementById("authScreen").style.display = "flex";
  document.getElementById("bankApp").classList.add("hidden");
  document.body.classList.remove("logged-in");
  setAuthMode(type); // "login" o "register"
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Entrar a la app del banco (después de login/registro)
function enterBank() {
  document.getElementById("authScreen").style.display = "none";
  document.getElementById("bankApp").classList.remove("hidden");
  document.body.classList.add("logged-in");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Scroll a una sección de la app
function scrollToSection(id) {
  const app = document.getElementById("bankApp");
  if (app.classList.contains("hidden")) return; // si aún no está logueado

  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

// Utilidad para mostrar mensajes
function showMessage(el, text, type) {
  el.textContent = text;
  el.style.display = "block";
  el.classList.remove("success", "error");
  el.classList.add(type); // "success" o "error"
}

document.addEventListener("DOMContentLoaded", () => {
  // LOGIN
  const loginForm = document.getElementById("loginForm");
  const loginMsg = document.getElementById("loginMessage");

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    if (!email || !password) {
      showMessage(loginMsg, "Completa todos los campos.", "error");
      return;
    }

    showMessage(loginMsg, "Inicio de sesión correcto (simulado).", "success");

    setTimeout(() => {
      enterBank();
    }, 700);
  });

  // REGISTRO
  const registerForm = document.getElementById("registerForm");
  const registerMsg = document.getElementById("registerMessage");

  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("registerName").value.trim();
    const email = document.getElementById("registerEmail").value.trim();
    const pass1 = document.getElementById("registerPassword").value;
    const pass2 = document.getElementById("registerPassword2").value;
    const terms = document.getElementById("terms").checked;

    if (!name || !email || !pass1 || !pass2) {
      showMessage(registerMsg, "Completa todos los campos.", "error");
      return;
    }

    if (pass1.length < 8) {
      showMessage(registerMsg, "La contraseña debe tener mínimo 8 caracteres.", "error");
      return;
    }

    if (pass1 !== pass2) {
      showMessage(registerMsg, "Las contraseñas no coinciden.", "error");
      return;
    }

    if (!terms) {
      showMessage(registerMsg, "Debes aceptar los términos.", "error");
      return;
    }

    showMessage(registerMsg, "Registro completado (simulado).", "success");

    setTimeout(() => {
      enterBank();
    }, 700);
  });

  // TRANSFERENCIA
  const transferForm = document.getElementById("transferForm");
  const transferSuccess = document.getElementById("transferSuccess");

  transferForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Aquí podrías hacer validaciones adicionales si quieres
    transferSuccess.style.display = "block";

    setTimeout(() => {
      transferForm.reset();
    }, 400);

    setTimeout(() => {
      transferSuccess.style.display = "none";
    }, 3500);
  });
});
