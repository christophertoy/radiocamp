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

Broadcaster.create(handle: 'hipp', name: 'Sound-On Network', description: 'Beneath the underground, there is another sound. News and music from the latest innovators.', theme: 'themeTeal', logo: 'https://images.unsplash.com/photo-1590278684388-6f11dbdd3b53')
Broadcaster.create(handle: 'qwerty', name: 'Infinite Loop Network', description: 'Radio for tech junkies', theme: 'themeOrangeGrey', logo: 'https://images.unsplash.com/photo-1468070454955-c5b6932bd08d')
Broadcaster.create(handle: 'tcn', name: 'The Cooking Network', description: 'Unique perspectives from around the globe.', theme: 'themePurpleYellow', logo: 'https://images.unsplash.com/photo-1595535916132-0dfbd3a6577c')

Show.create(name: 'Married to the Music', description: 'Hear the personal stories of struggle and success in the music industry. Each week, a different artist is profiled to talk about their journey through a challenging industry.', broadcaster_id: 4, image:'https://images.unsplash.com/photo-1513829596324-4bb2800c5efb', host: 'Jo Good', genre: 'Music Biographical')
Show.create(name: 'Top of the Avant Pops', description: 'Every week we count down the top 20 innovative emerging pop artists. Released weekly - Friday night at 7PM EST', broadcaster_id: 4, image: 'https://images.unsplash.com/photo-1552185794-de63010ad608', host: 'Lydia Swank & Dustin Newcastle', genre: 'Underground Nouveau Pop')
Show.create(name: '80s Deep Cuts', description: "Join Duquan Jones & Ferra Ireland on this journey through the dark hall of less well-remembered 80s post-punk and synth pop.", broadcaster_id: 4, image:'https://images.unsplash.com/photo-1561059488-916d69792237', host: 'Duquan Jones & Ferra Ireland', genre: 'Synth Pop')
Show.create(name: 'Alt-C', description: "A voyage to the fringes of the alternative country genre.", broadcaster_id: 4, image:'https://images.unsplash.com/photo-1482443462550-d2c99314ab6a', host: 'Nancy Ronaldo', genre: 'Freak Folk')
Show.create(name: 'Supermassive', description: 'Your mind will explode. Your ears will explode. You will explode. The world will explode.', broadcaster_id: 4, image:'https://images.unsplash.com/photo-1573089214287-77f6d814d306', host: 'Pharoh Phooture & Freshie Kool', genre: 'Post Avant Pop Noise')

Show.create(name: 'Sandwich Renaissance', description: 'Because sandwiches deserve their own podcast.', broadcaster_id: 6, image:'https://thumbnailer.mixcloud.com/unsafe/160x160/profile/1/6/3/2/b9df-4c63-4b59-adba-e390f0fdd8f3.jpg', host: 'Sammy Gee & Da Cheeze', genre: 'Sandwiches')
Show.create(name: 'A Hot Dog Is A Sandwich', description: 'Mythical Chefs Josh Scherer and Nicole Hendizadeh discuss, debate, and dissect the web’s most hilariously controversial culinary quandaries.', broadcaster_id: 6, image:'https://open.spotify.com/show/2i5anybdkLktC1ie6Cmhni?si=p5jZ1nY6RJirCR5g6RZKeg', host: 'Josh Scherer & Nicole Hendizadeh', genre: 'Sandwiches')
Show.create(name: 'XXXXXXXXX', description: 'XXXXXXXXX', broadcaster_id: 6, image:'XXXXXXXXX', host: 'XXXXXXXXX', genre: 'XXXXXXXXX')
Show.create(name: 'XXXXXXXXX', description: 'XXXXXXXXX', broadcaster_id: 6, image:'XXXXXXXXX', host: 'XXXXXXXXX', genre: 'XXXXXXXXX')
Show.create(name: 'XXXXXXXXX', description: 'XXXXXXXXX', broadcaster_id: 6, image:'XXXXXXXXX', host: 'XXXXXXXXX', genre: 'XXXXXXXXX')
Show.create(name: 'XXXXXXXXX', description: 'XXXXXXXXX', broadcaster_id: 6, image:'XXXXXXXXX', host: 'XXXXXXXXX', genre: 'XXXXXXXXX')
Show.create(name: 'XXXXXXXXX', description: 'XXXXXXXXX', broadcaster_id: 6, image:'XXXXXXXXX', host: 'XXXXXXXXX', genre: 'XXXXXXXXX')
Show.create(name: 'XXXXXXXXX', description: 'XXXXXXXXX', broadcaster_id: 6, image:'XXXXXXXXX', host: 'XXXXXXXXX', genre: 'XXXXXXXXX')
Show.create(name: 'XXXXXXXXX', description: 'XXXXXXXXX', broadcaster_id: 6, image:'XXXXXXXXX', host: 'XXXXXXXXX', genre: 'XXXXXXXXX')

Episode.create(title: 'St. Vincent', description: 'St. Vincent shares her musical something old, something new, something borrowed and something blue with Jo Good in this edition of married to the music.', release_date: '2020-09-26', episode_url: 'https://www.mixcloud.com/XfmRadio/married-to-the-music-st-vincent/', show_id: 1, episode_number: 1, image: 'https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/3/0/6/7/c9b7-0671-4348-9d03-dd9dfd3664c2.jpg')
Episode.create(title: 'Charlotte OC', description: 'Jo Good asks the young singer-songwriter for music old, new, borrowed and blue. Charlotte OC made headlines in 2013 on the release of her first EP, Colour My Heart. The 22-year old singer from Blackburn grew up in a house full of music, as she tells XFMs Jo Good. But it was the outrageous hardcore Berlin dance club Berghain that prompted her to write the songs on the EP. Find out more as she picks something old, something new, something borrowed and something blue for Married To The Music.', release_date: '2020-10-03', episode_url: 'https://www.mixcloud.com/XfmRadio/married-to-the-music-charlotte-oc/', show_id: 1, episode_number: 2, image: 'https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/a/c/4/5/c2e5-d53e-48ec-a48c-35b498ca7be6.jpg')
Episode.create(title: 'Augustines', description: 'The trio have returned with their eponymous second album, so Jo Good invited Eric Sanderson into the studio to talk through some of his favourite tunes.', release_date: '2020-10-17', episode_url: 'https://www.mixcloud.com/XfmRadio/married-to-the-music-augustines/', show_id: 1, episode_number: 3, image: 'https://thumbnailer.mixcloud.com/unsafe/300x300/profile/9/0/e/c/ea2d-2eb5-48ad-9e9c-f066d01ec094.png')
Episode.create(title: "MTTM - Rock n' Soul", description: 'A little bit of rock and a little bit of soul.', release_date: '2020-10-23', episode_url: 'https://www.mixcloud.com/Marriedtothemusic/mttm-rock-n-soul-3/', show_id: 1, episode_number: 4, image:'https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/3/4/8/8/83a1-a914-4056-bbbe-1851c916e90d')
Episode.create(title: 'MTTM - Late Nights', description: 'Playing tracks by Erykah Badu, Russ, Ta Ku, Bj The Chicago Kid and Malat.', release_date: '2020-10-30', episode_url: 'https://www.mixcloud.com/Marriedtothemusic/mttm-late-nights/', show_id: 1, episode_number: 5, image: 'https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/9/e/2/9/8b4a-cf8b-40dd-88f1-1a9b01969a6c')

Episode.create(title: 'XXXXXXXXX', description: 'XXXXXXXXX', release_date: 'XXXXXXXXX', episode_url: 'XXXXXXXXX', show_id: 00000000, episode_number: 00000000, image: 'XXXXXXXXX')
Episode.create(title: 'XXXXXXXXX', description: 'XXXXXXXXX', release_date: 'XXXXXXXXX', episode_url: 'XXXXXXXXX', show_id: 00000000, episode_number: 00000000, image: 'XXXXXXXXX')
Episode.create(title: 'XXXXXXXXX', description: 'XXXXXXXXX', release_date: 'XXXXXXXXX', episode_url: 'XXXXXXXXX', show_id: 00000000, episode_number: 00000000, image: 'XXXXXXXXX')
Episode.create(title: 'XXXXXXXXX', description: 'XXXXXXXXX', release_date: 'XXXXXXXXX', episode_url: 'XXXXXXXXX', show_id: 00000000, episode_number: 00000000, image: 'XXXXXXXXX')
Episode.create(title: 'XXXXXXXXX', description: 'XXXXXXXXX', release_date: 'XXXXXXXXX', episode_url: 'XXXXXXXXX', show_id: 00000000, episode_number: 00000000, image: 'XXXXXXXXX')
Episode.create(title: 'XXXXXXXXX', description: 'XXXXXXXXX', release_date: 'XXXXXXXXX', episode_url: 'XXXXXXXXX', show_id: 00000000, episode_number: 00000000, image: 'XXXXXXXXX')
Episode.create(title: 'XXXXXXXXX', description: 'XXXXXXXXX', release_date: 'XXXXXXXXX', episode_url: 'XXXXXXXXX', show_id: 00000000, episode_number: 00000000, image: 'XXXXXXXXX')
Episode.create(title: 'XXXXXXXXX', description: 'XXXXXXXXX', release_date: 'XXXXXXXXX', episode_url: 'XXXXXXXXX', show_id: 00000000, episode_number: 00000000, image: 'XXXXXXXXX')
Episode.create(title: 'XXXXXXXXX', description: 'XXXXXXXXX', release_date: 'XXXXXXXXX', episode_url: 'XXXXXXXXX', show_id: 00000000, episode_number: 00000000, image: 'XXXXXXXXX')
Episode.create(title: 'XXXXXXXXX', description: 'XXXXXXXXX', release_date: 'XXXXXXXXX', episode_url: 'XXXXXXXXX', show_id: 00000000, episode_number: 00000000, image: 'XXXXXXXXX')
Episode.create(title: 'XXXXXXXXX', description: 'XXXXXXXXX', release_date: 'XXXXXXXXX', episode_url: 'XXXXXXXXX', show_id: 00000000, episode_number: 00000000, image: 'XXXXXXXXX')
Episode.create(title: 'XXXXXXXXX', description: 'XXXXXXXXX', release_date: 'XXXXXXXXX', episode_url: 'XXXXXXXXX', show_id: 00000000, episode_number: 00000000, image: 'XXXXXXXXX')

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
    show_id: random.rand(3..Show.count),
    episode_number: random.rand(1..10)
  )
end
