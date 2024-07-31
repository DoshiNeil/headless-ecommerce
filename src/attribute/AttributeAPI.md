# API to handle Attributes 
Defining API for Attributes 

Attributes consist of changes its Name and it Variants 

A attribute is 
```
{
    id:sting,
    name: string,
    variants: Variants[]
}
```
and a Variant is 
```
{
    name: string,
    attributeId:string
}
```

To handle the Attributes we have the following endpoints

|Status | Endpoint           | Description                                       |
|-------|--------------------|---------------------------------------------------|
| check | `GET` `/attribute` | this will get all the attribute with its variants |
| check | `GET` `/attribute/:id`| this will get the attribute by id with its variants |
| check | `POST` `/attribute`| this will create a new attribute. Here we can pass the variants too|
| check | `PUT` `/attribute/:id`| this will update the attribute at the id.On the attribute details will be updated and not the Variant details for the Attribute|
| to be done | `GET` `/attribute/variant/:id` | this will fetch the variant details | 
| to be done | `POST` `/attribute/:aid/variant`| this will create a new variant.It can create 1 or many|
| to be done | `PUT` `/attribute/variant/:vid`| this will update the variant details|
| to be done | `DELETE` `/attribute/variant/:vid`| this will delete the variant details|
| check | `DELETE` `/attribute/:aid`| this will delete the attribute along with its variants|
