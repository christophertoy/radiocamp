json.extract! episode, :id, :title, :description, :episode_url, :embed_code, :release_date, :show_id, :episode_number, :created_at, :updated_at, :image
json.url episode_url(episode, format: :json)
json.showName Show.find(episode.show_id).name
json.show_image Show.find(episode.show_id).image