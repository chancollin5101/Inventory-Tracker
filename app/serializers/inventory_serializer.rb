class InventorySerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :price, :quantity, :slug

  has_many :shipment
end
