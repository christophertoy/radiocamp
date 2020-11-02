json.results @results.each do | result |
  if result['show_id']
    json.extract! result, :id, :title, :description, :episode_url, :embed_code, :release_date, :show_id, :episode_number, :created_at, :updated_at
    json.image result.show.image
  else
    json.extract! result, :id, :host, :name, :description, :image, :genre, :broadcaster_id, :created_at, :updated_at
  end  
end