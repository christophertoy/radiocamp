class AddHostToShows < ActiveRecord::Migration[6.0]
  def change
    add_column :shows, :host, :string
  end
end
