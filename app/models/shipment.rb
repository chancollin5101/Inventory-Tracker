class Shipment < ApplicationRecord
  belongs_to :inventory
  
  before_create :setNewStatus 
  after_create :update_inventory # updates the inventory quantity once shipment after created

  def setNewStatus
    self.status = "New"
  end

  def update_inventory
    inventory.update(quantity: inventory.quantity - self.quantity)
  end
end
