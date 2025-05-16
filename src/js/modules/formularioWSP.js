document.getElementById('reservaForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Obtener valores del formulario
    const servicio = document.getElementById('servicio').value;
    const profesional = document.getElementById('profesional').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;
    const nombre = document.getElementById('nombre').value;
    const telefonoCliente = document.getElementById('telefono').value;
    
    // Número FIJO de tu negocio (cambia esto por tu número real)
    const telefonoNegocio = "56988934851"; // Ejemplo: México (+52) 1234567890
    
    // Crear mensaje estructurado
 const mensaje = `*Nueva Reserva*\n\n
    *Servicio:* ${servicio}\n
    *Profesional:* ${profesional}\n
    *Fecha:* ${fecha}\n
    *Hora:* ${hora}\n\n
    *Datos del cliente*\n
    Nombre: ${nombre}\n
    Teléfono: ${telefonoCliente}`;
    
    // Generar enlace de WhatsApp (con el número del NEGOCIO)
    const enlaceWhatsApp = `https://wa.me/${telefonoNegocio}?text=${encodeURIComponent(mensaje)}`;
    
    // Abrir en nueva pestaña
    window.open(enlaceWhatsApp, '_blank');
});