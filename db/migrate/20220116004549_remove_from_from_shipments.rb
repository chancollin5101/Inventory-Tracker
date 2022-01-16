class RemoveFromFromShipments < ActiveRecord::Migration[7.0]
  def change
    remove_column :shipments, :from_name, :string
    remove_column :shipments, :from_addr, :string
    remove_column :shipments, :from_phone, :string
  end
end
