class CreateEpisodes < ActiveRecord::Migration[6.0]
  def change
    create_table :episodes do |t|
      t.string :title
      t.text :description
      t.text :episode_url
      t.datetime :release_date
      t.belongs_to :show, null: false, foreign_key: true

      t.timestamps
    end
  end
end
