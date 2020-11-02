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

Broadcaster.create(handle: 'hipp', name: 'Sound-On Network', description: 'Beneath the underground, there is another sound. News and music from the latest innovators.', theme: 'themeTeal')
Broadcaster.create(handle: 'qwerty', name: 'Infinite Loop Network', description: 'Radio for tech junkies', theme: 'themeOrangeGrey')
Broadcaster.create(handle: 'starling', name: 'The Starling Network', description: 'Starling provides over 50 unique perspectives from around the globe.', theme: 'themePurpleYellow')

Show.create(name: 'Married to the Music', description: 'Hear the personal stories of struggle and success in the music industry. Each week, a different artist is profiled to talk about their journey through a challenging industry.', broadcaster_id: 4, image:'', host: 'Jo Good', genre: 'Music Biographical')
Show.create(name: 'Top of the Avant Pops', description: 'Every week we count down the top 20 innovative emerging pop artists. Released weekly - Friday night at 7PM EST', broadcaster_id: 4, image: '', host: 'Lydia Swank & Dustin Newcastle', genre: 'Underground Nouveau Pop')
Show.create(name: '80s Deep Cuts', description: "So much amazing music was created in the 1980s, and much of it you haven't heard yet. Join Duquan Jones & Ferra Ireland on this journey through the dark hall of less well-remembered 80s post-punk and synth pop.", broadcaster_id: 4, image:' ', host: 'Duquan Jones & Ferra Ireland', genre: 'Synth Pop')
Show.create(name: 'Alt-C', description: "A voyage to the fringes of the alternative country genre.", broadcaster_id: 4, image:' ', host: 'Nancy Ronaldo', genre: 'Freak Folk')
Show.create(name: 'Supermassive', description: 'Your mind will explode. Your ears will explode. You will explode. The world will explode.', broadcaster_id: 4, image:' ', host: 'Pharoh Phooture & Freshie Kool', genre: 'Post Avant Pop Noise')

Episode.create(title: 'St. Vincent', description: 'St. Vincent shares her musical something old, something new, something borrowed and something blue with Jo Good in this edition of married to the music.', release_date: '2020-10-30', episode_url: 'https://www.mixcloud.com/XfmRadio/married-to-the-music-st-vincent/', show_id: 1, episode_number: 1)
Episode.create(title: 'Charlotte OC', description: 'Jo Good asks the young singer-songwriter for music old, new, borrowed and blue. Charlotte OC made headlines in 2013 on the release of her first EP, Colour My Heart. The 22-year old singer from Blackburn grew up in a house full of music, as she tells XFMs Jo Good. But it was the outrageous hardcore Berlin dance club Berghain that prompted her to write the songs on the EP. Find out more as she picks something old, something new, something borrowed and something blue for Married To The Music.', release_date: '2020-10-30', episode_url: 'https://www.mixcloud.com/XfmRadio/married-to-the-music-charlotte-oc/', show_id: 1, episode_number: 2, image: 'https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/a/c/4/5/c2e5-d53e-48ec-a48c-35b498ca7be6.jpg')
Episode.create(title: 'St. Vincent', description: 'St. Vincent shares her musical something old, something new, something borrowed and something blue with Jo Good in this edition of married to the music.', release_date: '2020-10-30', episode_url: 'https://www.mixcloud.com/XfmRadio/married-to-the-music-st-vincent/', show_id: 1, episode_number: 1, image: '')
Episode.create(title: 'St. Vincent', description: 'St. Vincent shares her musical something old, something new, something borrowed and something blue with Jo Good in this edition of married to the music.', release_date: '2020-10-30', episode_url: 'https://www.mixcloud.com/XfmRadio/married-to-the-music-st-vincent/', show_id: 1, episode_number: 1)
Episode.create(title: 'St. Vincent', description: 'St. Vincent shares her musical something old, something new, something borrowed and something blue with Jo Good in this edition of married to the music.', release_date: '2020-10-30', episode_url: 'https://www.mixcloud.com/XfmRadio/married-to-the-music-st-vincent/', show_id: 1, episode_number: 1)

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
