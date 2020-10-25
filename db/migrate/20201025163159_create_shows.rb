class CreateShows < ActiveRecord::Migration[6.0]
  def change
    create_table :shows do |t|
      t.string :name
      t.text :description
      t.text :image
      t.string :genre
      t.belongs_to :broadcaster, null: false, foreign_key: true

      t.timestamps
    end
  end
end
