# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_10_30_020023) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "broadcasters", force: :cascade do |t|
    t.string "handle"
    t.string "name"
    t.string "logo"
    t.text "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "theme"
  end

  create_table "episodes", force: :cascade do |t|
    t.string "title"
    t.text "description"
    t.text "episode_url"
    t.datetime "release_date"
    t.bigint "show_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.text "embed_code"
    t.bigint "episode_number"
    t.index ["show_id"], name: "index_episodes_on_show_id"
  end

  create_table "shows", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.text "image"
    t.string "genre"
    t.bigint "broadcaster_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "host"
    t.index ["broadcaster_id"], name: "index_shows_on_broadcaster_id"
  end

  add_foreign_key "episodes", "shows"
  add_foreign_key "shows", "broadcasters"
end
