document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault(); // Prevenir el envío por defecto del formulario

    // Obtener valores de los campos de entrada
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        // Enviar solicitud POST al backend con las credenciales
        const response = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        // Verificar la respuesta del backend
        if (response.ok) {
            // Ocultar la sección de login y mostrar el dashboard
            document.getElementById('loginSection').style.display = 'none';
            document.getElementById('dashboardSection').style.display = 'block';
            document.getElementById('errorMsg').style.display = 'none';
        } else {
            // Si las credenciales son incorrectas, muestra un mensaje de error
            document.getElementById('errorMsg').style.display = 'block';
        }
    } catch (error) {
        console.error('Error al conectar con el backend:', error);
        document.getElementById('errorMsg').textContent = 'Error al conectar con el servidor.';
        document.getElementById('errorMsg').style.display = 'block';
    }
});

// Función para cerrar sesión y regresar al formulario de login
function logout() {
    document.getElementById('dashboardSection').style.display = 'none';
    document.getElementById('loginSection').style.display = 'block';
    document.getElementById('loginForm').reset(); // Limpia los campos del formulario
    document.getElementById('errorMsg').style.display = 'none';
}
