# 🍕 Pizzería Mamma Mía - Hito 4

Este hito marca la transición de datos estáticos locales al consumo de una API externa en tiempo real, permitiendo que el catálogo y las vistas de detalle de la pizzería se rendericen de forma dinámica utilizando React Hooks.

## 🚀 Cambios Implementados

### 1. Consumo Dinámico de la API General (`Home.jsx`)
- Se eliminó el archivo de datos estáticos locales (`pizzas.js`).
- Implementación de `useState` para almacenar la lista de pizzas proveniente del backend.
- Uso de `useEffect` con un array de dependencias vacío `[]` para realizar una única petición al montar el componente a la URL: `http://localhost:5000/api/pizzas`.
- Traspaso de la propiedad `desc` a las tarjetas individuales para visualizar la descripción completa de cada pizza.

### 2. Modificación de Tarjetas (`CardPizza.jsx`)
- Se adaptaron las props para recibir el campo `desc` dinámicamente desde el backend.
- Renderizado de la descripción mediante estilos limpios de Bootstrap (`text-muted small`).

### 3. Vista de Detalle Individual (`Pizza.jsx`)
- Creación de un nuevo componente enfocado en simular una vista detallada.
- Consumo del endpoint específico para una pizza: `http://localhost:5000/api/pizzas/p001`.
- Renderizado completo del producto incluyendo su imagen, descripción detallada, lista de ingredientes formateada y precio.

---

## 🛠️ Cómo ejecutar el proyecto localmente

1. **Levantar el Backend:**
   Asegúrate de iniciar el servidor de la API en el puerto http://localhost:5000/api/pizzas

2. **Iniciar el Frontend:**
   En la raíz de este proyecto, ejecuta en tu terminal:
   ```bash
   npm run dev
   ```
3. Abre `http://localhost:5173` en tu navegador para ver la aplicación funcionando en vivo.


