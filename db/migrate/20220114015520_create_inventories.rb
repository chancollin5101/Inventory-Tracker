class CreateInventories < ActiveRecord::Migration[7.0]
  def change
    create_table :inventories do |t|
      t.string :title
      t.string :description
      t.float :price
      t.integer :quantity

      t.timestamps
    end
  end
end
