# Things to do for first draft of the application API 
[x] Setup Nestjs and dockerize the applications 
[x] Setup postgresQL service. 
[x] Update the docker-compose for development too, ref: https://www.tomray.dev/nestjs-docker-compose-postgres
[x] Setup a product service
[x] Update Product create api to check for duplicate name 
[x] Add error handling for all the incorrect requests
[x] Update Product create api to return category name if added 
[x] Create a Category CRUD 
[x] Review each Category operation and add appropriate guard rails
[x] Add status field to Product. Can we use a Enum to set allowed values ( Active, Draft, Inactive, Archived)
[x] Add fields for meta data  - SEO title, SEO description 
[x] Create CRUD for product tags 
[x] Create CRUD for product attributes with and without variants 
[x] Since this is a local project, checkout OSS like MinIO for object storage ( images, gifs, videos).
[-] Creat CRUD for images ( need to figure out nested routes, current code doesnt work ) 
[ ] Figure out testing and start writing unit and integrated tests.
[ ] Implement API design and documentation with Swagger
[ ] Implement logger middleware. ( this needs to tie up with a telemetery system which you may get to later)
[ ] Sketch out User Management module. Implement following features (here we implement gaurd for authentication)  
- [ ] Register new user 
- [ ] Login new user 
- [ ] Authentication on the requests 
