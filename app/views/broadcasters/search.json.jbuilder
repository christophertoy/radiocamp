# json.array! @episodes, :title
# json.array! @shows, :name
# json.myvar Show.find(episode.show_id).name

json.episodes @episodes.all do |episode|
  json.extract! episode, :title, :id, :description, :episode_number
  json.image episode.show.image
end