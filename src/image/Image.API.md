# API to handle Images

Defining API for Images

Images consist of changes its Name and it Variants

A image is

```
{
    id:sting,
    productId: string,
    url: string
}
```

To handle the Images we have the following endpoints

| Status     | Endpoint                      | Description                                  |
| ---------- | ----------------------------- | -------------------------------------------- |
| to be done | `GET` `/product/:id/image`    | this will get all the image for that product |
| to be done | `GET` `/product/image/:id`    | this will get the image by id                |
| to be done | `POST` `/product/:id/image`   | this will create a new image                 |
| to be done | `DELETE` `/product/image/:id` | this will delete the image                   |
