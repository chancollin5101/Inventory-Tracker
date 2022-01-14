class Shipment < ApplicationRecord
  belongs_to :inventory

  after_create :update_inventory # updates the inventory quantity once shipment after created

  def update_inventory
    inventory.update(quantity: inventory.quantity - self.quantity)
  end
end
