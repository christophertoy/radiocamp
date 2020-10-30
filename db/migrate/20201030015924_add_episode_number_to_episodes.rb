class AddEpisodeNumberToEpisodes < ActiveRecord::Migration[6.0]
  def change
    add_column :episodes, :episode_number, :bigint
  end
end
