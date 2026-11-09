---
name: Stive Lamatta
description: Programa de una noche en el domo. Órbita amarilla sobre yeso negro, sin cristal ni resplandor.
colors:
    trace: '#e4f04a'
    trace-deep: '#d4e03a'
    plaster: '#0c0c0a'
    sky: '#000000'
    ink: '#14140f'
    paper: '#f4f0d8'
    body: '#e7e2c8'
    quiet: '#cfc8a4'
    line: '#2a2a22'
typography:
    display:
        fontFamily: 'Besley, Iowan Old Style, Palatino Linotype, serif'
        fontSize: 'clamp(2.6rem, 6vw, 4.75rem)'
        fontWeight: 700
        lineHeight: 0.92
        letterSpacing: '-0.03em'
    headline:
        fontFamily: 'Besley, Iowan Old Style, Palatino Linotype, serif'
        fontSize: 'clamp(2rem, 4.2vw, 3.35rem)'
        fontWeight: 700
        lineHeight: 1.02
        letterSpacing: '-0.03em'
    title:
        fontFamily: 'Besley, Iowan Old Style, Palatino Linotype, serif'
        fontSize: '1.35rem'
        fontWeight: 700
        lineHeight: 1.2
        letterSpacing: '-0.02em'
    body:
        fontFamily: 'Literata, Iowan Old Style, Palatino Linotype, serif'
        fontSize: '1.0625rem'
        fontWeight: 400
        lineHeight: 1.65
        letterSpacing: '0em'
    label:
        fontFamily: 'Besley, Iowan Old Style, Palatino Linotype, serif'
        fontSize: '0.95rem'
        fontWeight: 500
        lineHeight: 1.3
        letterSpacing: '0em'
    math:
        fontFamily: 'STIX Two Text, Literata, serif'
        fontSize: 'clamp(1.35rem, 3vw, 2.35rem)'
        fontWeight: 400
        lineHeight: 1.35
        letterSpacing: '-0.02em'
rounded:
    none: '0px'
spacing:
    '2': '0.5rem'
    '3': '0.75rem'
    '4': '1rem'
    '5': '1.5rem'
    '6': '2.5rem'
    '7': '4rem'
    '8': '6.5rem'
components:
    button-primary:
        backgroundColor: '{colors.ink}'
        textColor: '{colors.trace}'
        rounded: '{rounded.none}'
        padding: '0.65rem 1.1rem'
    button-primary-hover:
        backgroundColor: '#000000'
        textColor: '{colors.trace}'
        rounded: '{rounded.none}'
        padding: '0.65rem 1.1rem'
    button-trace:
        backgroundColor: '{colors.trace}'
        textColor: '{colors.ink}'
        rounded: '{rounded.none}'
        padding: '0.65rem 1.1rem'
    button-trace-hover:
        backgroundColor: '{colors.trace-deep}'
        textColor: '{colors.ink}'
        rounded: '{rounded.none}'
        padding: '0.65rem 1.1rem'
    nav-link:
        backgroundColor: '{colors.plaster}'
        textColor: '{colors.body}'
        rounded: '{rounded.none}'
        padding: '0.35rem 0.7rem'
    nav-link-current:
        backgroundColor: '{colors.trace}'
        textColor: '{colors.ink}'
        rounded: '{rounded.none}'
        padding: '0.35rem 0.7rem'
---

# Design System: Stive Lamatta

## Overview

**Creative North Star: "El programa del domo"**

La página es el programa de una función en un planetario pequeño, con las luces de sala ya apagadas. Lo que se proyecta es una órbita de Fourier, en trazo amarillo y plano, sobre el negro del cielo. El nombre, el retrato y la acción viven en una banda de ese mismo amarillo, como el título impreso al pie de la proyección. El resto del scroll es el programa: texto, la captura real de Epiciclos, la fórmula, una lista de estudios y los diplomas como hoja de contactos.

No hay tarjetas, no hay vidrio, no hay resplandor. La profundidad sale de campos de color enteros, no de sombras. El amarillo de trazo ocupa regiones, no se espolvorea como acento.

**Key Characteristics:**

- La órbita ocupa el primer pantallazo; el texto del programa queda en una banda sólida debajo.
- Besley para los títulos, Literata para leer, STIX Two Text solo para la fórmula.
- Esquinas rectas. Un filete de 1px separa grupos. Nada va dentro de una caja.
- El retrato es una fotografía cuadrada, sin aro ni brillo.
- Un solo movimiento: los círculos del epiciclo recorren un trazo que ya está dibujado al llegar.

## Colors

Yeso negro de la sala, cielo puro de la proyección, y un amarillo de trazo que es el color de la órbita.

### Primary

- **Trazo** (#e4f04a): el amarillo de la órbita. Fondos enteros (banda del título, cierre de contacto, botón sobre yeso) y el texto que debe gritar sobre negro.
- **Trazo hundido** (#d4e03a): el mismo amarillo al pasar el cursor.

### Neutral

- **Yeso** (#0c0c0a): fondo de la página y de la barra.
- **Cielo** (#000000): el rectángulo de la proyección, un negro un punto más hondo que el yeso.
- **Tinta** (#14140f): texto y botones sobre el amarillo.
- **Papel** (#f4f0d8): títulos sobre yeso.
- **Cuerpo** (#e7e2c8): párrafos sobre yeso.
- **Apartado** (#cfc8a4): secundario sobre yeso. Es el mismo amarillo, más oscuro, no un gris.
- **Filete** (#2a2a22): la única línea.

### Named Rules

**The Field Rule.** El amarillo cubre una región o no aparece. No es un borde, un brillo ni un gradiente en el texto.

## Typography

**Display Font:** Besley (con Iowan Old Style, Palatino Linotype, serif)
**Body Font:** Literata (con Iowan Old Style, Palatino Linotype, serif)
**Math Font:** STIX Two Text, solo en la fórmula

**Character:** Besley es la letra del cartel del planetario, ancha y con remate. Literata es la nota del programa, cómoda a 68ch. STIX pone la suma de Fourier en la cara con la que se imprime una ecuación.

### Hierarchy

- **Display** (700, clamp 2.6rem–4.75rem, line-height 0.92): el nombre en la banda amarilla.
- **Headline** (700, clamp 2rem–3.35rem, line-height 1.02): títulos de sección. `text-wrap: balance`. Más aire arriba que abajo.
- **Title** (700, 1.35rem): subtítulos y nombres de diploma.
- **Body** (400, 1.0625rem, line-height 1.65): prosa, medida máxima 68ch.
- **Label** (500, 0.95rem): nivel de una habilidad, bajo el título, nunca encima.
- **Math** (400, clamp 1.35rem–2.35rem): la transformada, en STIX.

### Named Rules

**The No Eyebrow Rule.** Ningún rótulo en versalitas va encima de un título. El título habla solo.

## Layout

Una columna de `min(72rem, 100% - 2 * gutter)`. El gutter es `clamp(1.25rem, 4vw, 2.5rem)`. La proyección y las dos bandas amarillas sangran a todo el ancho; su contenido vuelve a la columna.

El primer pantallazo es una rejilla: el cielo ocupa el espacio que sobra y la banda amarilla mide lo que pide su texto. En 860px o menos la navegación pasa a un menú. Los grupos de habilidades pasan de dos columnas a una en 800px.

Escala de espacio: 0.5, 0.75, 1, 1.5, 2.5, 4, 6.5rem. Cada sección deja 6.5rem arriba del título. `scroll-margin-top` aparta los anclas de la barra fija.

## Elevation & Depth

El sistema es plano. No hay sombras. La profundidad es un campo de color junto a otro: cielo negro, banda amarilla, yeso, otra banda amarilla al cierre. El diálogo del diploma es el mismo yeso con un filete, sobre un velo negro sin desenfoque.

### Named Rules

**The No Glow Rule.** Ningún `box-shadow` de color, ningún blur decorativo, ningún texto en degradado.

## Shapes

Esquinas a 0. El domo se dibuja con círculos de verdad en un canvas, no con una máscara sobre una foto. El retrato es un cuadrado. Los diplomas son rectángulos en una lista separada por filetes.

## Components

### Buttons

- **Shape:** rectos (0)
- **Primary:** tinta sobre la banda amarilla, texto trazo, padding 0.65rem 1.1rem, Besley 700. Hover: negro.
- **Trace:** trazo sobre yeso, texto tinta. Hover: trazo hundido.
- **Focus:** anillo de 2px, offset 3px. Sobre amarillo el anillo es tinta; sobre un botón trazo el anillo es papel.

### Navigation

- Barra fija de yeso, filete inferior, altura mínima 4.25rem.
- Enlace en Literata, color cuerpo. Hover: trazo.
- Sección actual: fondo trazo, texto tinta, `aria-current="true"`.
- En pantallas estrechas, un botón de 44px abre la lista. Cerrar con Escape devuelve el foco. Los enlaces ocultos no están en el tabulado.

### Certificate row

- Botón de ancho completo, imagen a la izquierda, título, institución y la palabra "Ver diploma" siempre visibles.
- Abre un `dialog` nativo. Cerrar, Escape o clic en el velo lo cierran.

### Orbit

- Canvas absoluto dentro del cielo, para que el bitmap no estire la rejilla.
- El trazo completo está dibujado al cargar. Los círculos se mueven encima.
- `prefers-reduced-motion`: se queda el trazo quieto, sin círculos en marcha.

## Do's and Don'ts

### Do:

- **Do** usar Trazo (#e4f04a) como campo entero o como texto sobre yeso.
- **Do** dejar la fórmula en STIX, al lado de la explicación, no dentro de un recuadro.
- **Do** mostrar el retrato y los diplomas como fotografías, sin recorte circular.
- **Do** mantener el foco visible y los controles a 44px de alto.

### Don't:

- **Don't** usar Inter, vidrio, degradados de texto, puntos que pulsan ni sombras de color.
- **Don't** meter una tarjeta dentro de otra, ni una ceja encima de un título.
- **Don't** esconder "Ver diploma" hasta el hover.
- **Don't** centrar el programa. La órbita puede ir al centro del cielo; el texto queda alineado a la columna.
