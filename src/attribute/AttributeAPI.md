# API to handle Attributes 
----
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
----
To handle the Attributes we have the following endpoints

| Endpoint           | Description                                       |
|--------------------|---------------------------------------------------|
| `GET` `/attribute` | this will get all the attribute with its variants |
| `GET` `/attribute/:id`| this will get the attribute by id with its variants |
| `POST` `/attribute`| this will create a new attribute. Here we can pass the variants too|
| `PUT` `/attribute/:id`| this will update the attribute at the id.On the attribute details will be updated and not the Variant details for the Attribute|
| `POST` `/attribute/:aid/variant`| this will create a new variant.It can create 1 or many|
| `PUT` `/attribute/:aid/variant/:vid`| this will update the variant details|
| `DELETE` `/attribute/:aid/variant/:vid`| this will delete the variant details|
| `DELETE` `/attribute/:aid`| this will delete the attribute along with its variants|
