class AddSlugToInventory < ActiveRecord::Migration[7.0]
  def change
    add_column :inventories, :slug, :string
  end
end
