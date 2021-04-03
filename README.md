# Proyecto realizado con Create React App

Este proyecto se inició con [Create React App](https://github.com/facebook/create-react-app).

## Scripts Disponibles

En el directorio raíz se pueden utilizar los siguientes scripts.

### `yarn install`

Instala todas las dependencias que nos hacen falta para poder arrancar el proyecto, de lo contrario no podremos hacerlo.

### `yarn start`

Levanta la aplicación en modo desarrollo.
Abra [http: // localhost: 3000] (http: // localhost: 3000) para verlo en el navegador.

La página se recargará si realiza modificaciones en el código.
También verá errores o warnings de lint en la consola.

### `yarn test`

Inicia la batería de test de la aplicación, en la consola se podrá ver el resultado de estos.

### `yarn build`

Creará la release de producción de la app para desplegarla en cualquier servidor.

### `Librería implementadas`

    - Axios: Cliente http para hacer llamadas Ajax.
    - react-router-dom: Librería para el enrutado de la aplicación.
    - react-redux: Proporciona API que permiten que los componentes interactúen con Redux.
    - redux: Librería para poder implementar el patrón redux en la app.
    - redux-saga: Librería para tener un middleware de redux y poder realizar las acciones contra el store.
    - @material-ui/core y @material-ui/lab: Librería de componentes al estilo material design para darle una interfaz agradable a la app.
    - @material-ui/icons: Llibrería de iconos para implementarlos en los componentes de la interfaz.
    - styled-components: librería para poder implementar los styled components de react
    - reselect: librería de "selectores" simple para Redux.
    - node-sass: para poder utilizar Sass en nuestros archivos de estilos.
    - redux-logger: librería para poder ver en la consola todas las acciones y estados de redux más comodamente.
    - eslint y prettier: para el formateo código.
    - husky: para implementar los git hooks

### `Cosas a comentar`

- En el login se han implementado las rutas protegidas teniendo en cuenta si existe un token y además un parámetro en el store que nos indica si está logeado o no, así se puede evitar cualquier error al refrescar la página ya que el store se resetearía en ese caso.

- En el apartado de detalle, la prueba especificaba el endpoint a llamar pero tras investigar la documentación de la api me di cuenta de que ese endpoint devolvía una información que nosotros ya teníamos almacenada en el store ya que es lo mismo que devuelven los elementos del listado con lo cual consideré oportuno ahorrarnos esa llamada.

- En lo referente a la acción de eliminar un usuario me di cuenta de que la api simula la llamada pero en realidad no borra ningún dato con lo cual consideré oportuno implementar la llamada al endpoint pero obviar la respuesta y eliminar yo manualmente del store el usuario seleccionado para que la aplicación siguiese el flujo correcto.

- El mismo criterio utilicé a la hora de actualizar un usuario ya que la Api en realidad no actualiza nada, con lo cual para seguir un flujo correcto implemento la llamada al enpoint pero obvio la respuesta y actulizo manualmente el usuario en el store.

De esta manera conseguimos que la aplicación realmente consiga eliminar y actualizar usuarios. Espero que este punto de vista no haya sigo erróneo a la hora de realizar la prueba...
