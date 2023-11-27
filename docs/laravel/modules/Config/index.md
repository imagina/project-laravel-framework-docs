---
sidebar_position: 2
---

# Configure routes

You can configure routes to create a CRUD in a simple way.

## API CRUD

| Name         | Content                                                                                                                                                                                                                    |
|--------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| module       | Name of the module to use                                                                                                                                                                                                  |
| prefix       | Prefix used for the route name                                                                                                                                                                                             |
| controller   | Name of the controller method to use                                                                                                                                                                                       |
| middleware   | if not set up middleware, auth:api will be the default                                                                                                                                                                     |
| customRoutes | Allows the addition of customizable routes with the concatenated parent prefix. For example, by adding the route `/icommerce/v3/products/sync`, a custom route is created that extends from the parent prefix `/products`. |

### CustomRoutes
| Name       | Content                                                |
|------------|--------------------------------------------------------|
| method     | API method                                             |
| path       | Prefix used for the route name                         |
| uses       | Name of the controller method to use                   |
| middleware | if not set up middleware, auth:api will be the default |


```php
<?php

use Illuminate\Routing\Router;

$router->group(['prefix' => '/icommerce/v3'/*,'middleware' => ['auth:api']*/], function (Router $router) {
  //======  OPTION TYPES - STATIC
  $router->apiCrud([
    'module' => 'icommerce',
    'prefix' => 'option-types',
    'staticEntity' => 'Modules\Icommerce\Entities\OptionType'
  ]);
  
  $router->apiCrud([
    'module' => 'icommerce',
    'prefix' => 'products',
    'controller' => 'ProductApiController',
    //'middleware' => ['create' => [], 'index' => [], 'show' => [], 'update' => [], 'delete' => [], 'restore' => []]
    'customRoutes' => [
      ['method' => 'post', 'path' => '/generate-spread-sheet', 'uses' => 'generateSpreadSheet', 'middleware' => []],
      ['method' => 'post', 'path' => '/sync', 'uses' => 'sync']
    ]
  ]);
});

```
