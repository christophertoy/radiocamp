# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Show.destroy_all
Broadcaster.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('broadcasters')
ActiveRecord::Base.connection.reset_pk_sequence!('shows')

Broadcaster.create(handle: 'purple-finch', name: 'Purple Finch Podcasts', description: 'Just a gang of pals with stories to tell')
Broadcaster.create(handle: 'wxfr', name: 'WXFR', description: 'WXFR Community Radio, broadcasting out of the offices of Yoyodyne industries')
Broadcaster.create(handle: 'radio70k', name: 'Radio 70000', description: 'Independent radio')

Show.create(name: 'Modern Expansion', broadcaster_id: 1)
Show.create(name: 'Contemporary Few', broadcaster_id: 1)
Show.create(name: 'Syntactic Yacht', broadcaster_id: 2)
Show.create(name: 'Urban Homework', broadcaster_id: 2)
Show.create(name: 'Complete Herb', broadcaster_id: 2)
Show.create(name: 'Rude Executive', broadcaster_id: 3)
Show.create(name: 'Negative Bank', broadcaster_id: 3)
Show.create(name: 'Coming Occasion', broadcaster_id: 3)

Episode.create( title: 'The Modern Campfire', 
                description: 'Examining isolation and connection in the age of Zoom parties',
                episode_url: 'http://www.example.com',
                release_date: Time.now.to_datetime,
                show_id: 1
              )