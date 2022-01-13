class CreateShipmentInfos < ActiveRecord::Migration[7.0]
  def change
    create_table :shipment_infos do |t|
      t.string :item
      t.float :value
      t.string :from_name
      t.string :from_addr
      t.string :from_phone
      t.string :to_name
      t.string :to_addr
      t.string :to_phone
      t.belongs_to :shipment, null: false, foreign_key: true

      t.timestamps
    end
  end
end
