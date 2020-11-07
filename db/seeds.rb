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

# The order of seed data should not be changed to ensure no random images/nonsense words are inserted into demo results 

# these broadcasters have real data (good to demo)
Broadcaster.create(handle: 'kbbl', name: 'KBBL 102.5FM', description: 'Beneath the underground, there is another sound. News and music from the latest innovators.', theme: 'themeA', logo: 'https://images.unsplash.com/photo-1506704888326-3b8834edb40a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')
Broadcaster.create(handle: 'tcn', name: 'The Cooking Network', description: 'All cooking. All the time.', theme: 'themeB', logo: 'https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80')

# these broadcasters have randomly generated data (words and images)
Broadcaster.create(handle: 'purple-finch', name: 'Purple Finch Podcasts', description: 'Just a gang of pals with stories to tell', theme: 'themeA')
Broadcaster.create(handle: 'chickadee', name: 'Chickadee Community Radio', description: 'Chickadee Community Radio, broadcasting out of the offices of Yoyodyne industries', theme: 'themeB')
Broadcaster.create(handle: 'sparrow', name: 'Sparrow Radio', description: '98.5FM in Kenora, ON', theme: 'themeC')

# broadcaster_id 1, these shows have real episode data
Show.create(name: 'Married to the Music', description: 'Hear the personal stories of struggle and success in the music industry. Each week, a different artist is profiled to talk about their journey through a challenging industry.', broadcaster_id: 1, image: 'https://images.unsplash.com/photo-1561059488-916d69792237', host: 'Jo Good', genre: 'Music Biographical')
Show.create(name: 'A Hot Dog Is A Sandwich', description: 'Mythical Chefs Josh Scherer and Nicole Hendizadeh discuss, debate, and dissect the web’s most hilariously controversial culinary quandaries.', broadcaster_id: 2, image:'https://images.radio.com/podcast/5ecd672852.jpg', host: 'Josh Scherer & Nicole Hendizadeh', genre: 'Sandwiches')
Show.create(name: 'Sandwich Renaissance', description: 'Because sandwiches deserve their own podcast.', broadcaster_id: 2, image:'https://thumbnailer.mixcloud.com/unsafe/160x160/profile/1/6/3/2/b9df-4c63-4b59-adba-e390f0fdd8f3.jpg', host: 'Sammy Gee & Da Cheeze', genre: 'Sandwiches')
Show.create(name: "30 Minute Italian Podcast", description: "Boost your confidence in speaking Italian with a focus on food! We cover expressions, sometimes sexy grammar, and culture through personal travel stories and detailed examples.", broadcaster_id: 2, image:"https://images.radio.com/podcast/aeac8cedce.jpg", host: "Francesca Bizkotti", genre: "Food Education")
Show.create(name: 'Top of the Avant Pops', description: 'Every week we count down the top 20 innovative emerging pop artists. Released weekly - Friday night at 7PM EST', broadcaster_id: 1, image: 'https://images.unsplash.com/photo-1552185794-de63010ad608', host: 'Lydia Swank & Dustin Newcastle', genre: 'Underground Nouveau Pop')
Show.create(name: "Channel Q", description: "Listen to We Are Channel Q! We're your radio home for the latest in LGBTQ+ news and information, pop culture and music! LISTEN LIVE at work or while you surf. ", broadcaster_id: 1, image:"https://images.radio.com/logos/KQPSFM_1400x1400_Logo.png", host: "various hosts", genre: "Dance/EDM")
Show.create(name: 'Supermassive', description: 'Your mind will explode. Your ears will explode. You will explode. The world will explode.', broadcaster_id: 1, image:'https://images.unsplash.com/photo-1573089214287-77f6d814d306', host: 'Pharoh Phooture & Freshie Kool', genre: 'Post Avant Pop Noise')

# broadcaster_id 1, these shows have no associated episodes but are listed to fill out the show list
Show.create(name: '80s Deep Cuts', description: "Join Duquan Jones & Ferra Ireland on this journey through the dark hall of less well-remembered 80s post-punk and synth pop.", broadcaster_id: 1, image:'https://images.unsplash.com/photo-1513829596324-4bb2800c5efb', host: 'Duquan Jones & Ferra Ireland', genre: 'Synth Pop')
Show.create(name: 'Alt-C', description: "A voyage to the fringes of the alternative country genre.", broadcaster_id: 1, image:'https://images.unsplash.com/photo-1482443462550-d2c99314ab6a', host: 'Nancy Ronaldo', genre: 'Freak Folk')

# broadcaster_id 1, show_id 1 
Episode.create(title: 'St. Vincent', description: 'Channelling artists as diverse as David Bowie and Kate Bush, St. Vincent talks about life and being on the road on this edition of married to the music.', release_date: '2020-09-26', episode_url: 'https://www.mixcloud.com/XfmRadio/married-to-the-music-st-vincent/', show_id: 1, episode_number: 1, image: 'https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/3/0/6/7/c9b7-0671-4348-9d03-dd9dfd3664c2.jpg')
Episode.create(title: 'Charlotte OC', description: 'Jo Good asks the young singer-songwriter for music old, new, borrowed and blue. Charlotte OC made headlines in 2013 on the release of her first EP. She crossed the English channel and found success in France, Germany, and beyond.', release_date: '2020-10-03', episode_url: 'https://www.mixcloud.com/XfmRadio/married-to-the-music-charlotte-oc/', show_id: 1, episode_number: 2, image: 'https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/a/c/4/5/c2e5-d53e-48ec-a48c-35b498ca7be6.jpg')
Episode.create(title: 'Augustines', description: 'The trio have returned with their eponymous second album, so Jo Good invited Eric Sanderson into the studio to talk through some of his favourite tunes.', release_date: '2020-10-17', episode_url: 'https://www.mixcloud.com/XfmRadio/married-to-the-music-augustines/', show_id: 1, episode_number: 3, image: 'https://thumbnailer.mixcloud.com/unsafe/300x300/profile/9/0/e/c/ea2d-2eb5-48ad-9e9c-f066d01ec094.png')
Episode.create(title: "MTTM - Rock n' Soul", description: 'A little bit of rock and a little bit of soul.', release_date: '2020-10-23', episode_url: 'https://www.mixcloud.com/Marriedtothemusic/mttm-rock-n-soul-3/', show_id: 1, episode_number: 4, image:'https://images.unsplash.com/photo-1569315888779-22ceb4303f35')
Episode.create(title: 'MTTM - Late Nights', description: 'Playing tracks by Erykah Badu, Russ, Ta Ku, Bj The Chicago Kid and Malat.', release_date: '2020-10-30', episode_url: 'https://www.mixcloud.com/Marriedtothemusic/mttm-late-nights/', show_id: 1, episode_number: 5, image: 'https://thumbnailer.mixcloud.com/unsafe/120x120/extaudio/9/e/2/9/8b4a-cf8b-40dd-88f1-1a9b01969a6c')

# broadcaster_id 1, show_id 5
Episode.create(title: "Countdown 2019.02.01", description: "This week, will St. Vincent retain the top spot or will Paris duo Air reclaim the throne? ", release_date: "2019-02-01", episode_url: "", show_id: 5, episode_number: 28, image: "")

# broadcaster_id 1, show_id 7
Episode.create(title: "Channel Orange", description: "We examine the landmark album from Frank Ocean. How has it influenced the genre 8 years later?", release_date: "2020-07-10", episode_url: "", show_id: 7, episode_number: 12, image: "https://images.unsplash.com/photo-1517816428104-797678c7cf0c")

# broadcaster_id 2, show_id 2
Episode.create(title: "Is Chocolate Technically Candy?", description: "Everyone loves chocolate, but there's one question burnin' up our brains-- is chocolate candy?", release_date: "2020-10-28", episode_url: 'https://open.spotify.com/episode/0Gwya2LQUqTRJl7EuAruyO?si=4cLhnFpIRZ6ZazgsApJygg', show_id: 2, episode_number: 7, image: "https://images.radio.com/podcast/5ecd672852.jpg")
Episode.create(title: "What’s the Best Pizza Style? ft. Amanda Hesser", description: "Pizza is enjoyed as a comfort food around the world, but are all the unique combinations of cheesy baked dough created equal? Today, we're joined by Amanda Hesser to discuss: what's the best pizza style?", release_date: "2020-10-28", episode_url: 'https://open.spotify.com/episode/27WNfcLb7os6jYUID6mrxf?si=SNzQdywkTUStMUkOGMQUcg', show_id: 2, episode_number: 6, image: "https://images.radio.com/podcast/5ecd672852.jpg")
Episode.create(title: "The Great Chicken Wing Debate: Drums vs. Flats", description: "It's the battle of the chicken wing. Today we ask the question: which is better, drums or flats?", release_date: "2020-09-30", episode_url: 'https://open.spotify.com/episode/6KpGh7KzdZanOh2sLJ2Vyu?si=-ZHDS_PkRkyFNbTXA6J4Fg', show_id: 2, episode_number: 5, image: "https://images.radio.com/podcast/5ecd672852.jpg")
Episode.create(title: "s Kit-Kat Technically a Lasagna?", description: "The Kit-Kat, saucy chocolate layered between crispy wafers. Could this sweet snack have a cheesy Italian cousin? Today we ask the question: Is a Kit-Kat a lasagna?", release_date: "2020-09-23", episode_url: 'https://open.spotify.com/episode/5tN4ExNRrc30aAvN1FITkY?si=k6Fni9FnS_a2P5s5hsGk_g', show_id: 2, episode_number: 4, image: "https://images.radio.com/podcast/5ecd672852.jpg")
Episode.create(title: "The Lasagna Paradox", description: "At what point does one lasagna become two lasagnae?", release_date: "2020-06-24", episode_url: 'https://open.spotify.com/episode/0lMulnuQ1DZYCCRIzgRKjo?si=bkQI2yuxTuqdlmdK2o8DxQ', show_id: 2, episode_number: 3, image: "https://images.radio.com/podcast/5ecd672852.jpg")
Episode.create(title: "Are Pop-Tarts Ravioli?", description: "Pop-Tarts, a beloved breakfast treat. Ravioli, a savory stuffing wrapped in pasta dough. Like Bruce Wayne and Batman, could these separate identities be the same caped crusader?", release_date: "2020-06-03", episode_url: 'https://open.spotify.com/episode/68r4NsTqVfDSzdyM48HO2e?si=cQyCkE9CSX-phB_hxqUjHQ', show_id: 2, episode_number: 2, image: "https://images.radio.com/podcast/5ecd672852.jpg")
Episode.create(title: "Is Cereal Soup?", description: "Have you been eating soup for breakfast without knowing it? In this episode, Josh and Nicole are debating whether or not cereal is soup.", release_date: "2020-03-18", episode_url: "https://open.spotify.com/episode/5PLwS4z8Xox4wvM4bG9o2U?si=3MGvOP7NSn-F5dY_G_ZFTg", show_id: 2, episode_number: 1, image: "https://images.radio.com/podcast/5ecd672852.jpg")
Episode.create(title: "Are Cheetos Chips?", description: "Does the cheese that goes crunch belong in the same club as its snack aisle counterparts? Today we ask the question, are Cheetos chips? Learn more about your ad choices. Visit podcastchoices.com/adchoices", release_date: "2020-08-19", episode_url: "https://open.spotify.com/episode/7zczztXvKO5uRqzHeBnV8L?si=JWOTk0j_QUGSfTm3I_mDXA", show_id: 2, episode_number: 9, image: "https://images.radio.com/podcast/5ecd672852.jpg")
Episode.create(title: "When Does A Grilled Cheese Become A Melt?", description: "The grilled cheese can be many things, but where's the line when it ceases to be that simple classic and become something more?", release_date: "2020-09-02", episode_url: "https://open.spotify.com/episode/6i9V4C7sTFaraxeobftVNC?si=QOTFTPLKQmyw6xkMCWxBBg", show_id: 2, episode_number: 8, image: "https://images.radio.com/podcast/5ecd672852.jpg")

# broadcaster_id 2, show_id 3
Episode.create(title: "Grilled Cheese", description: "Everything you wanted to know about the iconic staple.", release_date: "2020-05-30", episode_url: "https://www.mixcloud.com/SandwichRenaissance/episode-1-3-grilled-cheese/", show_id: 3, episode_number: 2, image: "https://thumbnailer.mixcloud.com/unsafe/300x300/profile/1/6/3/2/b9df-4c63-4b59-adba-e390f0fdd8f3.jpg")

# broadcaster_id 2, show_id 4
Episode.create(title: "How to Buy Cheese in Italy", description: "Much like in the US, you can buy cheese at the deli counter. Near the deli there is usually some already pre-packaged and pre-weighed cheeses for you to browse as well. Personally, I like my cheese fresh cut, so I recommend going to the deli versus buying it pre-packaged. Alternatively you can get cheese from a caseificio, which is a shop that specializes in dairy products. These shops are usually close to the farm where the sheep / cows are bred.", release_date: "2018-12-09", episode_url: "https://open.spotify.com/episode/3lU9eyCKqUcyx6JHLv446G?si=eQkrBQh2TwiM9TAOQgXf5w", show_id: 4, episode_number: 34, image: "")

# Additional demo data creation may be added below this line

(1..20).each do
  Show.create(
    name: Faker::Book.unique.title,
    description: Faker::Lorem.paragraph(random_sentences_to_add: 10),
    broadcaster_id: random.rand(3..Broadcaster.count),
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
    show_id: random.rand(10..Show.count),
    episode_number: random.rand(1..10)
  )
end
