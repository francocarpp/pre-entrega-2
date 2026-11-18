let totalAcumulado = 0;
let activo = true;

console.log("🌿 Iniciando simulador de cotización...");

while (activo) {
    let opcion = prompt(
        "Elegí un producto:\n" +
        "1. Sahumerios ($1500)\n" +
        "2. Varillas Saphirus ($2200)\n" +
        "3. Bombas energéticas ($3000)\n" +
        "Escribe 'ESC' para salir."
    );

    if (opcion === null || opcion.toUpperCase() === "ESC") {
        activo = false;
        break;
    }

    let precio = 0;
    let producto = "";

    switch (opcion) {
        case "1":
            producto = "Sahumerios";
            precio = 1500;
            break;
        case "2":
            producto = "Varillas Saphirus";
            precio = 2200;
            break;
        case "3":
            producto = "Bombas energéticas";
            precio = 3000;
            break;
        default:
            console.warn("⚠️ Opción inválida.");
            continue;
    }

    let cantidad = parseInt(prompt(`Cantidad de ${producto}:`));

    if (isNaN(cantidad) || cantidad <= 0) {
        console.error("❌ Cantidad no válida.");
    } else {
        let subtotal = precio * cantidad;

        if (cantidad >= 10) {
            subtotal *= 0.85;
            console.log("🎉 ¡Descuento del 15% aplicado!");
        }

        totalAcumulado += subtotal;
        console.log(`✅ Agregado: ${cantidad}x ${producto} | Subtotal: $${subtotal}`);
    }

    let seguir = prompt("¿Agregar otro producto? (escribe 'NO' para terminar)");
    if (seguir && seguir.toUpperCase() === "NO") {
        activo = false;
    }
}

console.log("--------------------------------");
console.log(` Total final de la compra: $${totalAcumulado}`);
console.log("¡Gracias por usar el simulador!");
console.log("--------------------------------");