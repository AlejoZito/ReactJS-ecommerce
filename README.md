# CODER COMMERCE

Proyecto de e-shop desarrollado en react para el [curso de ReactJs en Coderhouse](https://www.coderhouse.com/online/reactjs)

Se incluye el file env.local para facilitar correrlo en el entorno local.

## Vistas

Listado

![](http://alejozito.com/coderhouse_react/gallery.JPG)

Detalle

Se visualizan todos los campos de la entidad item, incluido el stock. La lib material ui genera un warning que no logré resolver con el componente item count, por haber incluido un textbox dentro del button group.

![](http://alejozito.com/coderhouse_react/detalle.JPG)

Navbar

![](http://alejozito.com/coderhouse_react/navbar.JPG)

Carrito lleno

Esta vista es la más compleja en cuanto a información en la pantalla. Permite eliminar items del carrito (no modificar sus cantidades) e ingresar datos para realizar la compra. Un nice to have sería incluir pequeños mensajes de validación en los inputs para indicar cuando falta completar algún campo o hay valores incorrectos, por ejemplo para el mail.
Se incluyó un selector de modo de pago bastante sencillo, para incluir renderizado condicional (cuando se elige paypal, cambian los campos a ingresar)

![](http://alejozito.com/coderhouse_react/cart_full.JPG)

Carrito vacío

![](http://alejozito.com/coderhouse_react/cart_empty.JPG)

Compra exitosa

![](http://alejozito.com/coderhouse_react/purchaseok.JPG)

## Librerias
### `material-ui`
Se utilizó esta lib para agilizar la implementación del layout y de los estilos, ya que brinda componentes de react según las reglas de estilo de Material Design.
También se incluyó material-ui-labs para el componente Skeleton, que permite renderizar unos placeholders animados cuando los requests al servidor todavía no fueron satisfechos.

### `react router`
Esta lib es la que facilita la navegación mediante urls de los diferentes componentes.


## Iniciar proyecto

### `npm start`

### `npm run build`
