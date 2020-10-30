class AddThemeToBroadcasters < ActiveRecord::Migration[6.0]
  def change
    add_column :broadcasters, :theme, :string
  end
end
