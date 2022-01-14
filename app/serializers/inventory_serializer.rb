class InventorySerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :price, :quantity

  has_many :shipment
end
