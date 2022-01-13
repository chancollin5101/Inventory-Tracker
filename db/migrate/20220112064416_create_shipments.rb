class CreateShipments < ActiveRecord::Migration[7.0]
  def change
    create_table :shipments do |t|
      t.string :status
      t.string :image_url
      t.float :cost
      t.string :shipper_name
      t.string :shipper_phone

      t.timestamps
    end
  end
end
