# R.T.I Mantenimiento — Sitio web

Sitio corporativo de **R.T.I Mantenimiento Ltda.** (Recursos Técnicos Industriales): mantenimiento
industrial, eléctrico, mecanizado, montajes y alquiler de equipos.

Sitio 100% estático (solo frontend), listo para desplegar en Vercel.

## Stack

- **React 19** + **TypeScript**
- **Vite 8** (Rolldown)
- **Tailwind CSS 4** (tokens de diseño en `src/index.css`)
- **Motion** (antes Framer Motion) para animaciones y scroll
- **Lenis** para scroll suave
- **Lucide** para iconografía

## Desarrollo

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # genera /dist
npm run preview   # sirve /dist en local
```

> Requiere Node ≥ 22.12 (definido en `engines`).

## Estructura

```
public/img/          Fotos optimizadas en WebP (recortadas de los backups)
src/components/      Secciones y piezas de UI
src/data/site.ts     Contenido editable: servicios, proceso, galería, clientes, contacto
src/index.css        Tema (colores, tipografías, animaciones base)
```

Todo el texto y las imágenes de las secciones se editan en `src/data/site.ts`; los datos de
contacto (teléfono, WhatsApp, correo, dirección) también viven ahí y se reutilizan en el menú,
el formulario y el pie de página.

## Despliegue en Vercel

1. Subir el repositorio a GitHub.
2. En Vercel: **New Project → Import** el repositorio.
3. Framework preset: **Vite** (se detecta solo). Build: `npm run build`. Output: `dist`.
4. Dominio: agregar `rtimantenimiento.com` en *Settings → Domains*.

El formulario de contacto no usa backend: arma un mensaje y abre WhatsApp
(`https://wa.me/573164541612`). Para envíos por correo haría falta un servicio externo
(Formspree, Resend, etc.).

## Contenido de origen

El contenido proviene de `backups/` (portafolio en PDF y documento de servicios). Las fotos se
recortaron para eliminar las marcas de agua de fecha y se convirtieron a WebP.
