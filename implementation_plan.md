# Plan de Implementación: Actualización de Contenido del Roadmap + Rediseño Estético de la Página

El objetivo es **doble**: (1) reemplazar todas las descripciones de las 10 semanas en `roadmapData.js` con el texto detallado y paso-a-paso proporcionado por el usuario, y (2) rediseñar la página del mapa (`Roadmap.jsx` + CSS) para que se vea **aesthetic, bien organizada y premium**.

---

## Cambios Existentes (del Plan Anterior — se mantienen)

### 1. Estilos y Colores de la Marca
Actualizar las variables CSS principales del tema para que coincidan con los colores morados del `favicon.svg`.

#### [MODIFY] `src/index.css`
- Variables `--accent-primary`, `--accent-hover`, `--accent-light` → paleta morada (`#863bff`, etc.)

### 2. Redirección de la Semana 8
El botón "Acceder al Recurso" en la Semana 8 cambiará de `https://docs.google.com` a la ruta interna `/recursos`.

#### [MODIFY] `src/data/roadmapData.js`
- En `w8-t1`, cambiar `upsell.link` a `'/recursos'`.

### 3. Enlaces Internos en el Acordeón
Usar `Link` de React Router si el enlace empieza con `/`.

#### [MODIFY] `src/components/TaskAccordion.jsx`
- Importar `Link` desde `react-router-dom`.
- Renderizar `<Link>` en lugar de `<a target="_blank">` para enlaces internos.

---

## Cambios Nuevos

### 4. Actualizar Todo el Contenido de las Semanas

Reescribir **todas las descripciones** de las 10 semanas con el texto detallado proporcionado:

| Semana | Cambios |
|--------|---------|
| 10 | Nuevas descripciones "Por qué" + "Paso a paso" para las 4 tareas. CTA de Bookish Alchemy en Landing Page. |
| 9 | Reescribir 3 tareas: Equipo ARC, teaser visual, perfil de autor. |
| 8 | Reescribir 4 tareas. |
| 7 | Reescribir 4 tareas con detalles de preventa, BookFunnel, PR Boxes. |
| 6 | Reescribir existentes + agregar nueva tarea "Pedir Copias de Autor" (alerta urgente). |
| 5 | Reescribir 3 tareas: playlist, seguimiento ARC, incentivos preventa. |
| 4 | Reescribir 3 tareas: Book Trailer, instrucciones ARC, afiche evento. |
| 3 | Reescribir 3 tareas: blurbs, categorías KDP, colaboraciones. |
| 2 | Reescribir 4 tareas: archivo final + A+, programar contenido, copias de autor, kit de firmas. |
| 1 | Reescribir 4 tareas: Release Day, anuncios, reseñas ARC, evento presencial. |

#### [MODIFY] `src/data/roadmapData.js`

### 5. Rediseño Estético de la Página del Mapa

#### [MODIFY] `src/components/Roadmap.jsx`

- **Subtítulo por semana**: Campo `subtitle` que contextualiza cada semana.
- **Barra de progreso por semana**: Indicador visual de tareas completadas.
- **Timeline vertical decorativa**: Línea con nodos entre secciones.
- **Badge circular** con el número de semana.
- **Header mejorado**: Mejor jerarquía visual.

#### [MODIFY] `src/index.css`

Nuevos estilos: `.timeline-track`, `.week-node`, `.week-subtitle`, `.week-progress`, `.week-badge`, mejoras a `.week-section` y `.roadmap-header`.

---

## Verification Plan

1. Ejecutar `npm run dev` y abrir `http://localhost:5173`.
2. Verificar que cada semana muestra subtítulo, timeline, badge y barra de progreso.
3. Expandir cada tarea y verificar que el texto coincide con el proporcionado por el usuario.
4. Probar modo oscuro y marcar tareas completadas.
5. Verificar la nueva tarea "Pedir Copias de Autor" en Semana 6.
