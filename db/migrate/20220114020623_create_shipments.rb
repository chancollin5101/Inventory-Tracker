class CreateShipments < ActiveRecord::Migration[7.0]
  def change
    create_table :shipments do |t|
      t.integer :quantity
      t.string :status
      t.string :shipper_name
      t.string :shipper_phone
      t.string :from_name
      t.string :from_addr
      t.string :from_phone
      t.string :to_name
      t.string :to_addr
      t.string :to_phone
      t.float :cost
      t.belongs_to :inventory, null: false, foreign_key: true

      t.timestamps
    end
  end
end
