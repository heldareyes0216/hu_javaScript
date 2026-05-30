# Aplicación de Notas con JavaScript

Este proyecto es una aplicación sencilla de notas desarrollada en **JavaScript Vanilla**, que permite agregar, eliminar y persistir notas en el navegador utilizando LocalStorage.

---

##  ¿Qué hace este proyecto?

- Permite agregar notas desde un input
- Muestra las notas dinámicamente en pantalla
- Permite eliminar notas individualmente
- Guarda las notas en LocalStorage
- Mantiene las notas incluso al recargar la página

---

## 📂 Estructura del proyecto

HU_3/
│
├── index.html 
├── styles.css 
├── app.js 


---

## Conceptos aplicados

- Manipulación del DOM
- Eventos en JavaScript
- Arrays
- Funciones
- LocalStorage
- JSON (parse y stringify)
- Renderizado dinámico
- Programación estructurada

---

##  Cómo ejecutar el proyecto

### 1. Abrir el proyecto
Solo abre el archivo `index.html` en el navegador.

O usa Live Server si trabajas con VS Code.

---

##  Funcionalidades

###  Agregar notas

El usuario escribe una nota y la agrega a la lista.

---

###  Eliminar notas

Cada nota tiene un botón para eliminarla individualmente.

---

###  Persistencia de datos

Las notas se guardan en LocalStorage, por lo que no se pierden al recargar la página.

---

##  Ejemplo de uso

```txt id="example1"
Usuario escribe: "Estudiar JavaScript"
→ Se agrega a la lista
→ Se guarda en LocalStorage