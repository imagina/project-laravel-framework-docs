import DocCardList from '@theme/DocCardList';

# Icommerce

The route to access the module is as follows: `<Your-Domain>/api/icommerce/v3`

:::info
Remember that for some requests, you need to send the authentication token.

`Header Parameters`

```json
{
  "Authorization": "Bearer ...token..."
}
```
And the query parameters are as follows:

`Query Parameters`

```json
{
  "setting": {
    "timezone": "America/Bogota",
    "fromAdmin": true,
    "appMode": "iadmin",
    "authProvider": "local",
    "locale": "en"
  }
}
```
:::

## Languages

The API supports many languages, one of which is:

| Locale   | Nombre  |
|----------|---------|
| `es` | Spanish |
| `en` | English |
| `de` | German  |

:::info
To use multiple languages in an application, you must have multiple language support enabled.

You can see which languages we support here: [View languages](/docs/API/locale/intro)
:::

## Products

The route to use the products endpoint is as follows: `/products`

## Categories

The route to use the categories endpoint is as follows: `/categories`

## Manufacturers

The route to use the manufacturers endpoint is as follows: `/manufacturers`

<DocCardList />