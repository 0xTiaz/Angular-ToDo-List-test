En este repositorio reside "Prueba Tecnica - Desarrollador Front End"

Datos a considerar:

- Se utilizo una interfaz para agregar y mostrar tareas ingresadas.

- Utilice un componente "./src/app/components/todo-list, este componente se utilizo en app.ts
  contiene el desarrollo, estilos, objetos y props.

- Para el estilo del sitio, se utilizo TailWindCSS, instalado con - npm install tailwindcss @tailwindcss/postcss postcss --force -
  Para lograr que esta libreria funcione, se debio agregar ".postcssrc.json" logrando inicializar la libreria, luego en "styles.css"
  se importa mediante - @import "tailwindcss" -

- En cuanto al proceso de "build" se utiliza - ng build - generando la carpeta .dist/

- En "https://github.com/0xTiaz/Angular-ToDo-List-test" se puede visualizar - .github/workflows - creado por Azure, configurando el paso a produccion.

- En Azure a traves de Static Web Apps se logra el "paso a produccion" a traves del repo antes mencionado.

- En su configuracion, se le indica la ruta "dist/task-angular-app/browser/index.html"

- Una vez que la carpeta se crea mediante Azure, se inicializa el workflow azure-static-web-apps-mango-flower-0b440e81e.yml, finalizando el proceso, podremos ver
  el proyecto en produccion con la direccion https://mango-flower-0b440e81e.1.azurestaticapps.net/

- Agradeciendo el tiempo invertido en mi postulacion, estare atento a nuevas noticias sobre este proceso, Saludos y bonita semana.
