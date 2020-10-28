Rails.application.routes.draw do
  resources :sessions, only: [:create]
  resources :episodes
  resources :shows
  resources :broadcasters
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: "pages#home"
  get ':broadcaster_handle/search', to: 'broadcasters#search'
  get '*path', to: 'pages#home'
end
