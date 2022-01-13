class ShipmentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :status, :image_url, :cost, :shipper_name, :shipper_phone

  has_many :ShipmentInfo
end
