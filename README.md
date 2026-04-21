# ALIA - Asesoría Legal Inteligente Aplicada

Marketplace de abogados en Chile. Conecta con profesionales legales verificados.

## 🚀 Desplegar en Vercel (3 minutos)

### Opción 1: Con GitHub (Recomendado)

#### Paso 1: Crear repositorio en GitHub
1. Ve a [github.com/new](https://github.com/new)
2. Nombre: `alia-marketplace`
3. Descripción: "ALIA - Marketplace de abogados"
4. ✅ Público
5. Click en "Create repository"

#### Paso 2: Subir código a GitHub
```bash
cd alia-marketplace
git init
git add .
git commit -m "ALIA marketplace initial commit"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/alia-marketplace.git
git push -u origin main
```

#### Paso 3: Desplegar en Vercel
1. Ve a [vercel.com](https://vercel.com)
2. Click en "Sign up" (usa tu cuenta GitHub)
3. Click en "Import Project"
4. Pega tu URL del repositorio: `https://github.com/TU_USUARIO/alia-marketplace`
5. Click en "Import"
6. Click en "Deploy"

**¡Listo!** En 2 minutos tendrás tu URL pública:
```
https://alia-marketplace.vercel.app
```

---

### Opción 2: Deploy directo sin GitHub

1. Ve a [vercel.com](https://vercel.com)
2. Haz login/signup
3. Click en "Create" 
4. Click en "Project"
5. Elige "Create from CLI"
6. Instala Vercel CLI:
   ```bash
   npm install -g vercel
   ```
7. En tu carpeta del proyecto:
   ```bash
   vercel
   ```
8. Sigue las instrucciones en terminal

---

## 💻 Ejecutar localmente (opcional)

Para probar antes de desplegar:

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

---

## 🎨 Estructura del proyecto

```
alia-marketplace/
├── pages/
│   └── index.js          # Página principal de ALIA
├── public/               # Archivos estáticos
├── package.json          # Dependencias
└── README.md            # Este archivo
```

---

## 📝 Próximos pasos (Integración de APIs)

Cuando estés listo para agregar funcionalidad:

### 1. Autenticación (Google & Meta OAuth)
```javascript
// pages/api/auth/[...nextauth].js
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
}
```

### 2. Base de datos de abogados
- MongoDB (recomendado)
- PostgreSQL
- Firebase

### 3. Sistema de calificaciones
- Guardar ratings en base de datos
- Promedios dinámicos

### 4. Pagos (Stripe)
- Procesamiento de consultas
- Comisiones de plataforma

---

## 🔧 Variables de entorno

Cuando integres APIs, crea un archivo `.env.local`:

```env
GOOGLE_CLIENT_ID=tu_id_aqui
GOOGLE_CLIENT_SECRET=tu_secret_aqui
DATABASE_URL=tu_database_aqui
STRIPE_SECRET_KEY=tu_stripe_key_aqui
```

---

## 📱 Características actuales

✅ Marketplace de 6 abogados  
✅ Búsqueda por nombre/especialidad  
✅ Perfiles expandibles con modal  
✅ Sistema de calificación con estrellas  
✅ Diseño responsive (mobile-first)  
✅ Botones de login Google/Meta (sin integración aún)  

---

## 🔗 Recursos útiles

- [Documentación Next.js](https://nextjs.org/docs)
- [Vercel Docs](https://vercel.com/docs)
- [NextAuth.js para OAuth](https://next-auth.js.org)
- [Stripe para pagos](https://stripe.com/docs)

---

## 📧 Soporte

¿Preguntas? Contacta a tu equipo de desarrollo.

---

Made with ❤️ for ALIA
