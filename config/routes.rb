Rails.application.routes.draw do
  root 'pages#index'

  namespace :api do
    namespace :v1 do
      resources :shipment, only: [:index, :show, :create, :update, :destroy]
      resources :inventory, param: :slug
    end
  end

  get '*path', to: 'pages#index', via: :all
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
