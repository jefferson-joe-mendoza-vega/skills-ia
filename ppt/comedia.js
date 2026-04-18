// Importar la librería (asegúrate de tenerla instalada: npm install pptxgenjs)
const pptxgen = require("pptxgenjs");

// Inicializar la presentación
let pres = new pptxgen();

// Layout moderno (16:9)
pres.layout = "LAYOUT_16x9";

// Paleta elegida: "naturaleza" (del JSON proporcionado)
const colors = {
  primary: "2C5F2D",   // Verde oscuro
  secondary: "97BC62", // Verde claro
  accent: "F5F5F5",    // Gris muy claro/Blanco sucio
  textDark: "212121",
  white: "FFFFFF"
};

/* =====================================================================
   SLIDE 1: PORTADA (Fondo oscuro, centrado, visualmente impactante)
   ===================================================================== */
let slide1 = pres.addSlide();
slide1.background = { color: colors.primary };

// Elemento decorativo sutil (Óvalo transparente de fondo)
slide1.addShape(pres.shapes.OVAL, { 
  x: 7.5, y: -1, w: 5, h: 5, 
  fill: { color: colors.secondary }, 
  transparency: 80 
});

// Título principal (36-44pt)
slide1.addText("El Mundo de las Vacas", { 
  x: 0.5, y: 2.2, w: 9, h: 1, 
  fontSize: 44, 
  color: colors.white, 
  bold: true, 
  align: "center" 
});

// Subtítulo (20-24pt)
slide1.addText("Pilares de la agricultura y la naturaleza", { 
  x: 0.5, y: 3.2, w: 9, h: 1, 
  fontSize: 22, 
  color: colors.secondary, 
  align: "center" 
});


/* =====================================================================
   SLIDE 2: CONTENIDO EN TARJETAS (Fondo claro, layout de 2 columnas)
   ===================================================================== */
let slide2 = pres.addSlide();
slide2.background = { color: colors.accent };

// Título de la diapositiva
slide2.addText("Datos Curiosos y Anatomía", { 
  x: 0.5, y: 0.5, w: 9, h: 0.8, 
  fontSize: 36, 
  color: colors.primary, 
  bold: true 
});

// TARJETA 1 (Rectángulo redondeado con sombra)
slide2.addShape(pres.shapes.ROUNDED_RECTANGLE, { 
  x: 0.5, y: 1.6, w: 4.2, h: 3.2, 
  fill: { color: colors.white }, 
  shadow: { type: "outer", blur: 8, offset: 3, angle: 135, color: "000000", opacity: 0.1 }, 
  rectRadius: 0.1 
});

slide2.addText("Visión Periférica", { 
  x: 0.8, y: 1.9, w: 3.6, h: 0.5, 
  fontSize: 20, 
  color: colors.primary, 
  bold: true 
});

slide2.addText("Tienen una visión de casi 360 grados. Esto les permite detectar depredadores desde prácticamente cualquier ángulo sin mover la cabeza.", { 
  x: 0.8, y: 2.5, w: 3.6, h: 2, 
  fontSize: 16, 
  color: colors.textDark, 
  valign: "top" 
});

// TARJETA 2 (Rectángulo redondeado con sombra)
slide2.addShape(pres.shapes.ROUNDED_RECTANGLE, { 
  x: 5.3, y: 1.6, w: 4.2, h: 3.2, 
  fill: { color: colors.white }, 
  shadow: { type: "outer", blur: 8, offset: 3, angle: 135, color: "000000", opacity: 0.1 }, 
  rectRadius: 0.1 
});

slide2.addText("Estómago Especializado", { 
  x: 5.6, y: 1.9, w: 3.6, h: 0.5, 
  fontSize: 20, 
  color: colors.primary, 
  bold: true 
});

slide2.addText("Su estómago tiene cuatro compartimentos (rumen, retículo, omaso y abomaso) diseñados para fermentar y digerir el pasto eficientemente.", { 
  x: 5.6, y: 2.5, w: 3.6, h: 2, 
  fontSize: 16, 
  color: colors.textDark, 
  valign: "top" 
});


/* =====================================================================
   SLIDE 3: VISUALIZACIÓN DE DATOS (Doughnut Chart + Callout)
   ===================================================================== */
let slide3 = pres.addSlide();
slide3.background = { color: colors.white };

slide3.addText("Composición de la Dieta Bovina", { 
  x: 0.5, y: 0.5, w: 9, h: 0.8, 
  fontSize: 36, 
  color: colors.primary, 
  bold: true 
});

// Gráfico de dona para proporciones
let chartData = [{
  name: "Dieta",
  labels: ["Forraje y Pasto", "Cereales/Granos", "Vitaminas y Minerales"],
  values: [75, 20, 5]
}];

slide3.addChart(pres.charts.DOUGHNUT, chartData, { 
  x: 0.5, y: 1.6, w: 4.5, h: 3.5, 
  showLegend: true, 
  legendPos: "b", 
  chartColors: [colors.primary, colors.secondary, "B85042"], // Añadido un acento terracota para contraste
  showPercent: true,
  dataLabelColor: colors.white
});

// Stat Callout (Tarjeta destacada para un dato numérico)
slide3.addShape(pres.shapes.RECTANGLE, { 
  x: 5.5, y: 1.8, w: 4, h: 2.8, 
  fill: { color: colors.accent } 
});

// Texto enriquecido para destacar el número
slide3.addText([
  { text: "8", options: { fontSize: 44, bold: true, color: colors.primary, breakLine: true } },
  { text: "Horas al día", options: { fontSize: 20, bold: true, color: colors.secondary, breakLine: true } },
  { text: "\nEs el tiempo promedio que una vaca pasa masticando (rumiando) su alimento para procesarlo correctamente.", options: { fontSize: 16, color: colors.textDark } }
], { 
  x: 5.8, y: 2.0, w: 3.4, h: 2.4, 
  align: "center", 
  valign: "middle" 
});


/* =====================================================================
   SLIDE 4: CIERRE (Fondo oscuro, retorno al impacto visual)
   ===================================================================== */
let slide4 = pres.addSlide();
slide4.background = { color: colors.primary };

slide4.addText("Gracias por su atención", { 
  x: 0.5, y: 2.2, w: 9, h: 1, 
  fontSize: 44, 
  color: colors.white, 
  bold: true, 
  align: "center" 
});

// Línea decorativa sutil
slide4.addShape(pres.shapes.LINE, { 
  x: 4, y: 3.2, w: 2, h: 0, 
  line: { color: colors.secondary, width: 3 } 
});

// Guardar el archivo
pres.writeFile({ fileName: "Presentacion_Vacas.pptx" });