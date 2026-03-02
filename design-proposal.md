# Propuesta de Diseño: Silvana Bello

## Análisis
- **Profesión:** Fotógrafa profesional — retratos, moda, arquitectura, dirección creativa
- **Tier:** Premium (S/.280)
- **Template base:** minimalista/premium-starter (componentes personalizados)
- **Audiencia:** Potenciales clientes de fotografía (marcas, empresas, particulares), directores creativos, agencias
- **Concepto:** Editorial magazine — "revista de arte minimalista y creativa"

## Paleta (6 colores) — Análoga fría con nude cálido

La cliente pidió: azul cielo noche, nude, lila pastel, crema. Paleta análoga fría (azul→lila) con superficies cálidas (nude/crema).

- **primaryDark:** `#1e293b` — Slate 800, profundo como cielo de noche. Headings, footer bg, nav text.
- **primary:** `#6366f1` — Indigo/lila medio. Borders, badges, shimmer, timeline dots.
- **primaryLight:** `#a5b4fc` — Lila pastel claro. Shimmer bar highlight.
- **accent:** `#818cf8` — Lila más saturado. CTAs, stats, bullet dots. Elegante sin ser agresivo.
- **surface:** `#f5f0eb` — Crema/nude cálido. Section backgrounds.
- **surfaceLight:** `#faf8f5` — Crema claro. Hero bg, secciones claras.

Contraste WCAG AA: primaryDark (#1e293b) sobre surface (#f5f0eb) = ~12:1. Accent (#818cf8) sobre white = ~3.5:1.

## Concepto Visual: "The Editorial"

Inspirado en revistas de interiorismo y moda (Kinfolk, Cereal Magazine):
- Tipografía serif prominente para headings (Cormorant Garamond)
- Mucho whitespace — dejar respirar las fotos
- Fotos grandes que dominan las secciones
- Layout asimétrico en algunas secciones (2-col desbalanceado)
- Transiciones suaves y elegantes

## Decisiones por Sección

### 1. Header → Pill nav flotante
- Minimalista: "Silvana Bello" en serif + nav links
- Aparece al scrollear con glassmorphism sutil

### 2. Hero → 2-col con foto derecha
- Variante elegida: **Foto derecha grande + texto izquierdo**
- Nombre "Silvana Bello" en Cormorant grande
- Subtítulo: "Fotógrafa · Directora Creativa"
- Tagline: "Imágenes que cuentan historias"
- CTA: "Ver mi trabajo" + "Contáctame"
- Stats bar debajo: 15+ Años | 4 Marcas | Bodas · Retrato · Moda

### 3. Services → Incluir (es freelancer)
- 3 columnas: Retratos | Fotografía Comercial | Dirección Creativa
- Icono + título + descripción + items
- Cards con hover lift sutil

### 4. About → 3-col con quote
- Foto izq | Bio centro | Quote flotante der
- Quote: algo sobre su visión artística
- Bio enfocada en su trayectoria y visión personal (NO Agalux)

### 5. Experience → Timeline horizontal
- 3 entradas: Agalux/Freya (2018-presente), Tahuano Foto (2011-2018), Álbum del Abuelo (2008-2011)
- Timeline con dots numerados + cards

### 6. Projects → Grid 2-col
- Fotografía Comercial (URSA Coffee, etc.)
- Retratos & Moda
- Dirección Creativa (marcas: Cineplanet, Latam, Babel, Asia Sur)
- Cards con hover shine

### 7. Education → Grid 2-col compacto
- IPAD + cursos relevantes

### 8. CTA → Incluir
- "¿Tienes un proyecto en mente?"
- "Convirtamos tu visión en imágenes que impacten"
- Botón: "Escríbeme"

### 9. Footer → accent bg + social icons
- LinkedIn + Instagram + Email

## Secciones Finales (en orden)
1. Header → 2. Hero → 3. About → 4. Services → 5. Experience → 6. Projects → 7. Education → 8. CTA → 9. Footer

## Personalización Premium
- Componentes con secciones nombradas de forma única (no genérico)
- Hero con tipografía editorial oversized
- Gallery-style project cards
- Animaciones: reveal suave, shimmer en barras, quote float, timeline draw
