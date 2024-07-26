# A TODO for the ecom api package 
[x] Setup Nestjs and dockerize the applications 
[x] Setup postgresQL service. 
[x] Update the docker-compose for development too, ref: https://www.tomray.dev/nestjs-docker-compose-postgres
[x] Setup a product service
[x] Update Product create api to check for duplicate name 
[x] Add error handling for all the incorrect requests
[ ] Update Product create api to return category name if added 
[x] Create a Category CRUD 
[ ] Review each Category operation and add appropriate guard rails
[ ] Add status field to Product. Can we use a Enum to set allowed values ( Active, Draft, Inactive, Archived)
[ ] Add fields for meta data  - SEO title, SEO description 
[ ] Since this is a local project, checkout OSS like MinIO for object storage ( images, gifs, videos).

