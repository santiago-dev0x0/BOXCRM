# CRM Conversacional

Aplicación web moderna y potente para la gestión de relaciones con clientes (CRM) con una interfaz conversacional intuitiva, diseñada con una arquitectura modular y escalable.

## ✨ Características Clave

* **Interfaz Conversacional**: Ofrece una experiencia de usuario moderna y centrada en la interacción.
* **Seguridad**: Incluye autenticación con inicio de sesión seguro, gestión de sesiones y protección de rutas.
* **Arquitectura**: Implementación de una estructura modular basada en características (`features`), con clara separación de responsabilidades.
* **Tipado Estricto**: Código completamente tipado con TypeScript para mejorar la calidad y detectar errores tempranamente.

## 🛠 Tecnologías Principales

| Categoría | Tecnología | Versión / Uso Específico |
| :--- | :--- | :--- |
| **Frontend** | ⚛️ React 19 / TypeScript | Lógica de la interfaz y tipado fuerte del código. |
| **Estilos** | 🎨 Tailwind CSS | Estilizado atómico y flexible. |
| **Componentes UI** | **Shadcn UI** (Basado en Radix) | Componentes reutilizables sin estilo para construir la interfaz. |
| **Estado Server** | 🔄 React Query | Gestión de *caching*, sincronización y estado del servidor. |
| **Estado Global** | Zustand | Gestión de estado global ligero y eficiente. |
| **Llamadas API** | Axios | Cliente HTTP estándar para las peticiones en la capa `services/`. |
| **Bundler** | 🏗️ Vite | Entorno de desarrollo rápido y empaquetado optimizado. |

## 🏗 Estructura del Proyecto

La organización está diseñada para la escalabilidad, siguiendo el patrón de **Módulos Basados en Características (`features`)**.

```
src/
├── assets/         # Recursos estáticos
├── components/     # Componentes reutilizables
├── constants/      # Constantes y valores fijos reutilizables
├── features/       # Módulos principales
├── hooks/          # Custom hooks reutilizables
├── lib/            # Utilidades reutilizables
├── mocks/          # Mocks para desarrollo
├── routes/         # Configuración de rutas
├── services/       # Llamadas a API reutilizables (axios)
├── store/          # Estado global(zustand)
├── styles/         # Estilos(tailwind, css)
├── types/          # Tipos TypeScript
└── main.tsx        # Punto de entrada
```
## ⚙ Configuración del Entorno

1.  **Requisitos**:
    * Node.js **>= 18.0.0**
    * pnpm **>= 8.0.0**

2.  **Instalación de Dependencias**:
    ```bash
    pnpm install
    ```

3.  **Desarrollo**:
    ```bash
    pnpm dev
    ```

## ▶️ Comandos Principales

| Comando | Descripción |
| :--- | :--- |
| `pnpm dev` | Inicia el servidor de desarrollo local (Vite). |
| `pnpm build` | Compila el proyecto para producción. |
| `pnpm lint` | Ejecuta el linter (ESLint) en todos los archivos. |
| `pnpm format` | Formatea el código con Prettier. |