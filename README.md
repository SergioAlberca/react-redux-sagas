# Proyecto realizado con Create React App

Este proyecto se inició con [Create React App](https://github.com/facebook/create-react-app).

## Scripts Disponibles

En el directorio raíz se pueden utilizar los siguientes scripts.

### `yarn install`

Instala todas las dependencias que nos hacen falta para poder arrancar el proyecto, de lo contrario no podremos hacerlo.

### `yarn start`

Para utilizar este comando es necesario haber ejecutado el anterior, este comando levanta la aplicación en modo desarrollo. (Por defecto en http://localhost:3000)

### `yarn test`

Inicia la batería de test de la aplicación, en la consola se podrá ver el resultado de estos.

### `yarn build`

Creará la release de producción de la app para desplegarla en cualquier servidor.

### `Descripción`

Se ha implementado una pantalla de Login en la que recogemos el valor de los campos email y password y cuando pulsemos el botón login, este dispacheara la acción para hacer login, esta acción se encargará de llamar al endpoint, recoger la respuesta y guardarla en el local storage si todo ha ido bien o setear un error en el store para mostrarlo en pantalla e informar al usuario.

También se ha implementado una pantalla para el listado desde la cual podremos consultar los datos de usuarios que nos provee la api, al inicio se dispacheara la acción que llama al enpoint que posteriormente seteará los datos de los usuarios en el store si la llamada ha ido bien o seteará un error con el cual se informará al usuario. Cada item tendrá un botón para ver el detalle de un usuario con el que accederemos a la siguiente pantalla.

Por último se ha implementado una vista detalle con la que podremos consultar el detalle de un usuario, editarlo y borrarlo. Al inicio de la vista se dispacheará la acción que llamará al enpoint de consultar el detalle y setetará en el store un error si ha ocurrido cualquier problema. Se ha implementado un botón con el que habilitaremos o deshabilitaremos el formulario y podremos editar los datos del usuario sólo si este está habilitado, Un botón de actualizar, que dispachea la acción que llama al endpoint de actualizar y seteará un error en el store si algo ha fallado y por último un botón de borrado que dispacheara la acción que llama al endpoint de eliminar un usuario, si ha ido bien eliminaremos el usuario del store y si ha ocurrido cualquier error el usuario se mantendrá y se seteará un error en el store.

Problemas que me he encontrado y como los he solucionado según mi punto de vista:

- En el login se han implementado las rutas protegidas teniendo en cuenta si existe un token y además un parámetro en el store que nos indica si está logeado o no, así se puede evitar cualquier error al refrescar la página ya que el store se resetearía en ese caso.

- En lo referente a la acción de eliminar un usuario me di cuenta de que la api simula la llamada pero en realidad no borra ningún dato con lo cual consideré oportuno implementar la llamada al endpoint y eliminar yo manualmente del store el usuario seleccionado para que la aplicación siguiese el flujo correcto.

- El mismo criterio utilicé a la hora de actualizar un usuario ya que la Api en realidad no actualiza nada, con lo cual para seguir un flujo correcto implemento la llamada al enpoint pero obvio la respuesta y actulizo manualmente el usuario en el store.

- Para mantener en cierta manera la persistencia del listado de usuario a la hora de navegar desdel el detalle al listado, he pasado por medio del state de react router con una bandera indicando si debe de recargar los datos o no, así conseguimos que cuando vengamos desde el login carge los datos y cuando vengamos de la vista detalle mantenga la persistencia.

De esta manera conseguimos que la aplicación realmente consiga eliminar y actualizar usuarios.

### `Librería implementadas`

    - Axios: Cliente http para hacer llamadas Ajax.
    - react-router-dom: Librería para el enrutado de la aplicación.
    - react-redux: Para permitir que los componentes interactúen con Redux.
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
