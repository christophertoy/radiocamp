class AddEmbedCodeToEpisodes < ActiveRecord::Migration[6.0]
  def change
    add_column :episodes, :embed_code, :text
  end
end
