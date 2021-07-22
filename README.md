# node-paper-reporting

Node js with TypeScript api example from [here](https://auth0.com/blog/node-js-and-typescript-tutorial-build-a-crud-api).

# Example items api queries

## Get all items:

```sh
curl http://localhost:7000/api/menu/items -i
```

## Get an item:

```sh
curl http://localhost:7000/api/menu/items/2 -i
```

## Add an item:

```sh
curl -X POST -H 'Content-Type: application/json' -d '{
  "name": "Salad",
  "price": 499,
  "description": "Fresh",
  "image": "https://images.ctfassets.net/23aumh6u8s0i/5pnNAeu0kev0P5Neh9W0jj/5b62440be149d0c1a9cb84a255662205/whatabyte_salad-sm.png"
}' http://localhost:7000/api/menu/items -i
```

## Verify that you added the "Salad" menu item:

```sh
curl http://localhost:7000/api/menu/items/ -i
```

## Update an item:

```sh
curl -X PUT -H 'Content-Type: application/json' -d '{
  "name": "Spicy Pizza",
  "price": 599,
  "description": "Blazing Good",
  "image": "https://images.ctfassets.net/23aumh6u8s0i/2x1D2KeepKoZlsUq0SEsOu/bee61947ed648848e99c71ce22563849/whatabyte_pizza-sm.png"
}' http://localhost:7000/api/menu/items/2 -i
```

## Verify that your API updated the item:

```sh
curl http://localhost:7000/api/menu/items/2 -i
```

## Delete an item:

```sh
curl -X DELETE http://localhost:7000/api/menu/items/2 -i
```

## Verify that you deleted the item:

```sh
curl http://localhost:7000/api/menu/items/ -i
```

## Test the not found handler:

```sh
curl http://localhost:7000/employees/ -i
```

## Example client application

[Here](https://dashboard.whatabyte.app/)

# Example shapes api queries

http://localhost:7000/api/drawing/shapes/rectangle
http://localhost:7000/api/drawing/shapes/ellipse
http://localhost:7000/api/drawing/shapes/polygon/5
http://localhost:7000/api/drawing/shapes/star/5
