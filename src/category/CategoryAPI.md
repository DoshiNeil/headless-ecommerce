# Category API planning document

In the document, we plan the API endpoints and define the appropriate responses

---

### Create a new Category

#### Request Body

```
{
    "name": "Abc",
    "parent": "Xyz"
}
```

#### Response

```
{
    "name": "Abc",
    "id":"<uuid>",
    "parent": "Xyz",
    "createdAt" "<timestamp>",
    "updatedAt" "<timestamp>",
}
```

- Check for unique name
- Handle bad requests
- - Unique name
- - Incorrect Parent
- - Bad request

### Update a Category

#### Request Body

```
{
    "name": "Abc",
    "id": "<uuid>", // either name or id compulsory for identification
    "parent": "Xyz" // parent update is optional
}
```

#### Response

```
{
    "name": "Abc",
    "id":"<uuid>",
    "parent": "Xyz",
    "createdAt" "<timestamp>",
    "updatedAt" "<timestamp>",
}
```

- Check for unique name
- Handle bad requests
- - Unique name
- - Incorrect Parent
- - Bad request

### List all Categories

#### Request Body

**none**

- Name or id necessary for fetching

#### Response

```
[
    {
    "name": "Abc",
    "id":"<uuid>",
    },
    {
    "name": "Abc",
    "id":"<uuid>",
    }
]
```

### List all SubCategories

#### Request Body

```
{
// either name or id
    "name": "Abc",
    "id": "<uuid>"
}
```

#### Response

```
{
 "name":"Abc",
 "subcategories":
    [
        {
        "name": "Abc",
        "id":"<uuid>",
        },
        {
        "name": "Abc",
        "id":"<uuid>",
        }
    ]
}
```

### Fetch a Category by id or name

#### Request Body

```
{
    "name": "Abc",
}
```

OR

```
{
    "id": "<uuid>",
}
```

#### Response

```
{
    "name":"Abc",
    "id":"<uuid>",
    "parent": "Xyz",
    "createdAt" "<timestamp>",
    "updatedAt" "<timestamp>",
}
```

### Delete a Category

#### Request Body

```
{
    "id": "<uuid>",
    "orphanProducts" : boolean // optional
    "orphanSubCategories" : boolean // optional 
}
```

#### Response

```
{
    "name":"Abc",
    "id":"<uuid>",
    "message":deleted successfully"
}
```
- Check for any attached products 
 - Error if appropriate flags are not passed
- Check for any attached subcategories 
 - Error if appropriate flags are not passed

