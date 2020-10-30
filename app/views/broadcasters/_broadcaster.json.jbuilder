json.extract! broadcaster, :id, :theme, :handle, :name, :logo, :description, :created_at, :updated_at
json.url broadcaster_url(broadcaster, format: :json)
