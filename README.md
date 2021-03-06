# Inventory Tracker

This is a simple inventory tracker CRUD app built with Ruby on Rails and reactjs using webpacker

![demo1](demo-gif/inv-tracker-demo1.gif)
![demo2](demo-gif/inv-tracker-demo2.gif)

This app uses:
  * Ruby version: ```3.0```
  * Rails version: ```7.0.1```
  * Database: ```postgresql```
  * React version: ```17.0.2```
  * React Hooks API

## Steps for running locally
1. Make sure the following are installed
  * Ruby
  * Rails
  * Yarn
  * PostgreSQL (psql)
  * More detailed instructions can be found here (<a href="https://guides.rubyonrails.org/getting_started.html" target="_blank">Initial Setup for Ruby on Rails</a>)

2. Configure psql

Create a Postgres user for the Ruby on Rails app 
  * First, switch into the Postgres user:
  ```
  $ su - postgres
  ```
  * Then, access psql 
  ```
  psql
  ```
  * Then, create a role
  ```
  create role loginName with createdb login password 'password1';
  ```
  * Finally, go to ```config/database.yml``` and update the credentials
  ```yml
  ...
  development:
    ...
    username: loginName
    password: password1
  ...
  ```
4. Run the app
Go back to the terminal and run the following
```
$ bundle install
$ bundle exec rails db:prepare
$ yarn install
$ bundle exec rails s
```
## Functionality 
* Feature implemented:
  * Ability to create “shipments” and assign inventory to the shipment, and adjust inventory appropriately

## Routes
```
                                  Prefix Verb   URI Pattern                                                                                       Controller#Action
                                    root GET    /                                                                                                 pages#index
                   api_v1_shipment_index GET    /api/v1/shipment(.:format)                                                                        api/v1/shipment#index
                                         POST   /api/v1/shipment(.:format)                                                                        api/v1/shipment#create
                         api_v1_shipment GET    /api/v1/shipment/:id(.:format)                                                                    api/v1/shipment#show
                                         PATCH  /api/v1/shipment/:id(.:format)                                                                    api/v1/shipment#update
                                         DELETE /api/v1/shipment/:id(.:format)                                                                    api/v1/shipment#destroy
                  api_v1_inventory_index GET    /api/v1/inventory(.:format)                                                                       api/v1/inventory#index
                                         POST   /api/v1/inventory(.:format)                                                                       api/v1/inventory#create
                        api_v1_inventory GET    /api/v1/inventory/:slug(.:format)                                                                 api/v1/inventory#show
                                         PATCH  /api/v1/inventory/:slug(.:format)                                                                 api/v1/inventory#update
                                         DELETE /api/v1/inventory/:slug(.:format)                                                                 api/v1/inventory#destroy
```

