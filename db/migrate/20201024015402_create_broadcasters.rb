class CreateBroadcasters < ActiveRecord::Migration[6.0]
  def change
    create_table :broadcasters do |t|
      t.string :handle
      t.string :name
      t.string :logo
      t.text :description

      t.timestamps
    end
  end
end
