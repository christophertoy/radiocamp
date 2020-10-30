json.extract! episode, :id, :title, :description, :episode_url, :embed_code, :release_date, :show_id, :episode_number, :created_at, :updated_at
json.url episode_url(episode, format: :json)
json.showName Show.find(episode.show_id).name
json.showImage Show.find(episode.show_id).image