<script>
    function validateForm() {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var tel = document.getElementById('tel').value;
        var service = document.getElementById('service').value;
        var comments = document.getElementById('comments').value;
        var reference = document.querySelector('input[name="reference"]:checked');
        var subscribe = document.getElementById('subscribe').checked ? "Sí" : "No";

        var telPattern = /^\d{10}$/;

        if (name === "" || email === "" || tel === "" || service === "" || comments === "" || !reference) {
            alert("Por favor, complete todos los campos obligatorios.");
            return false;
        }

        if (!telPattern.test(tel)) {
            alert("Por favor, ingrese un número de teléfono válido de 10 dígitos.");
            return false;
        }

        console.log("Nombre: " + name);
        console.log("Email: " + email);
        console.log("Teléfono: " + tel);
        console.log("Servicio de interés: " + service);
        console.log("¿Desea recibir nuestras ofertas?: " + subscribe);
        console.log("¿Cómo nos conoció?: " + reference.value);
        console.log("Comentario: " + comments);

        return true;
    }
</script>