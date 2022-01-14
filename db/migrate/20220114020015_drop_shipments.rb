class DropShipments < ActiveRecord::Migration[7.0]
  def up
    drop_table :shipments
  end

  def down
    fail ActiveRecord::IrreversibleMigration
  end
end