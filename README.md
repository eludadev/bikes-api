# Bikes API, with Cyclic 🚲️

## Fill Database with Mock Data

```bash
npm run fill-db # fills database with 25 mock bike items
```

## Fetching Bikes
![GET routes](./assets/GET%20Routes.png)

### List all bikes

```bash
curl http://localhost:3000/bikes/all | jq .
```

### Get bike by ID

```bash
curl http://localhost:3000/bikes/<ID> | jq . # replace <ID> with an ID from the response to /all
```

### Get bike by Handle

```bash
curl http://localhost:3000/bikes/by-handle/<HANDLE> | jq . # replace <HANDLE> with a handle from the response to /all
```

### Search bikes by Title

```bash
curl http://localhost:3000/bikes/search/by-title\?query\=Bicycle | jq .
```


## Creating and Replacing Bikes [<mark>(Authentication required!)</mark>](#authentication)
![POST & PUT routes](./assets/POST%20%26%20PUT%20Routes.png)

### Create new bike

```json
// request.json (remove this line from the actual file!)
{
  "productType": "Hybrid Bicycle",
  "createdAt": "Fri Jan 28 2022 03:13:24 GMT+0100 (GMT+02:00)",
  "vendor": "Audi",
  "totalInventory": 2,
  "availableForSale": false,
  "priceRange": {
    "minPrice": {
      "currencyCode": "USD",
      "amount": 1160
    },
    "maxPrice": {
      "currencyCode": "USD",
      "amount": 1624
    }
  },
  "description": "Autem ipsam quasi omnis ut. Et officiis quia. Sed quaerat pariatur nihil nobis est quos earum quidem.",
  "title": "Hybrid Bicycle Sentra"
}
```

```bash
export TOKEN=<TOKEN> # replace <TOKEN> with the token from /api/user
curl -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" http://localhost:3000/bikes/ -d @request.json | jq .
```

### Replace existing bike

```json
// request.json (remove this line from the actual file!)
{
  "productType": "Hybrid Bicycle",
  "createdAt": "Fri Jan 28 2022 03:13:24 GMT+0100 (GMT+02:00)",
  "vendor": "Audi",
  "totalInventory": 2,
  "availableForSale": false,
  "priceRange": {
    "minPrice": {
      "currencyCode": "USD",
      "amount": 1160
    },
    "maxPrice": {
      "currencyCode": "USD",
      "amount": 1624
    }
  },
  "description": "Autem ipsam quasi omnis ut. Et officiis quia. Sed quaerat pariatur nihil nobis est quos earum quidem.",
  "title": "Hybrid Bicycle Sentra",
  "id": "4139c5ae-b83d-4a0c-9b75-12d182aaed7c",
  "handle": "hybrid-bicycle-sentra"
}
```

```bash
export TOKEN=<TOKEN> # replace <TOKEN> with the token from /api/user
curl -X PUT -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" http://localhost:3000/bikes/<ID> -d @request.json | jq . # replace <ID> with an ID from the response to /all
```


## Updating and Deleting [<mark>(Authentication required!)</mark>](#authentication)
![PATCH & DELETE routes](./assets/PATCH%20%26%20DELETE%20Routes.png)

### Update parts of existing bike

```json
// request.json (remove this line from the actual file!)
{
  "totalInventory": 4,
  "availableForSale": true
}
```

```bash
export TOKEN=<TOKEN> # replace <TOKEN> with the token from /api/user
curl -X PATCH -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" http://localhost:3000/bikes/<ID> -d @request.json | jq . # replace <ID> with an ID from the response to /all
```

### Delete existing bike

```bash
export TOKEN=<TOKEN> # replace <TOKEN> with the token from /api/user
curl -X DELETE -H "Authorization: Bearer $TOKEN" http://localhost:3000/bikes/<ID> | jq . # replace <ID> with an ID from the response to /all
```

## Authentication

<mark>Get bearer authentication token:</mark>

```bash
curl -H 'Content-Type: application/json' http://localhost:3000/api/user -d '{"username": "cyclic"}' | jq .token -r
```