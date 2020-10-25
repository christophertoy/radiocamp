# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Broadcaster.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('broadcasters')

Broadcaster.create(handle: 'purple-finch', name: 'Purple Finch Podcasts', description: 'Just a gang of pals with stories to tell')
Broadcaster.create(handle: 'wxfr', name: 'WXFR', description: 'WXFR Community Radio, broadcasting out of the offices of Yoyodyne industries')
Broadcaster.create(handle: 'radio70k', name: 'Radio 70000', description: 'Independent radio')