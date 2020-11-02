class AddImageToEpisodes < ActiveRecord::Migration[6.0]
  def change
    add_column :episodes, :image, :string
  end
end
