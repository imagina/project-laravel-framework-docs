import DocCardList from '@theme/DocCardList';

# Tienda

La ruta para poder usar el modulo es el siguiente `<Tu-Dominio>/api/icommerce/v3`

:::info
Recuerda que para algunas peticiones requieres de enviar el token de autenticación.

`Header Parameters`
```json
{
  "Authorization": "Bearer ...token..."
}
```
Y los parametros de consulta son los siguientes:

`Query Parameters`
```json
{
  "setting": {
    "timezone":"America/Bogota",
    "fromAdmin":true,
    "appMode":"iadmin",
    "authProvider":"local",
    "locale":"es"
  }
}
```
:::

## Lenguajes

La API maneja muchos lenguajes, uno de estos son:

| Locale   | Nombre  |
|----------|---------|
| `es` | Español |
| `en` | English |
| `de` | German  |

:::info
Para poder usar multiples lenguajes en una aplicación debes tener habilitado el uso de múltiples lenguajes.

Puedes ver que lenguajes tenemos soporte: [Ver lenguajes](/docs/API/locale/intro)
:::

## Productos

La ruta para poder usar el endpoint de productos es el siguiente `/products`

## Categorias

La ruta para poder usar el endpoint de categorias es el siguiente `/categories`

## Fabricas

La ruta para poder usar el endpoint de fabricas es el siguiente `/manufacturers`

<DocCardList />