# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Samples::IMAGES
require_relative 'sample_data'

# Initialize a deterministic pseudo-random number generator with a specific seed value so we get the same 'random' numbers every time this script is executed
random = Random.new(123456)
Faker::Config.random = random

Episode.destroy_all
Show.destroy_all
Broadcaster.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('broadcasters')
ActiveRecord::Base.connection.reset_pk_sequence!('shows')
ActiveRecord::Base.connection.reset_pk_sequence!('episodes')

Broadcaster.create(handle: 'purple-finch', name: 'Purple Finch Podcasts', description: 'Just a gang of pals with stories to tell', theme: 'themePurpleYellow')
Broadcaster.create(handle: 'chickadee', name: 'Chickadee Community Radio', description: 'Chickadee Community Radio, broadcasting out of the offices of Yoyodyne industries', theme: 'themePurpleYellow')
Broadcaster.create(handle: 'sparrow', name: 'Sparrow Radio', description: '98.5FM in Kenora, ON', theme: 'themeOrangeGrey')

(1..20).each do
  Show.create(
    name: Faker::Book.unique.title,
    description: Faker::Lorem.paragraph(random_sentences_to_add: 10),
    broadcaster_id: random.rand(1..Broadcaster.count),
    image: Samples::IMAGES[random.rand(1..Samples::IMAGES.count)-1],
    host: [Faker::Name.unique.name, (Faker::Name.unique.name + ' & ' + Faker::Name.unique.name)].sample,
    genre: ["Music", "News", "Art", "Technology", "Comedy", "Fiction", "True Crime"].sample
  )
end

(1..100).each do
  Episode.create(
    title: Faker::Lorem.sentence(word_count: 1, random_words_to_add: 4).titleize,
    description: Faker::Lorem.paragraph(random_sentences_to_add: 10),
    release_date: (Faker::Date.between(from: 3.years.ago, to: Date.today)),
    episode_url: Faker::Boolean.boolean ? 'https://www.mixcloud.com/residentadvisor/ra670/' : 'https://open.spotify.com/episode/1zcbnS759Fj53gCY2CpgD9',
    show_id: random.rand(1..Show.count),
    episode_number: random.rand(1..10)
  )
end
