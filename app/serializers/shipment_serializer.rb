class ShipmentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :quantity, :status, :shipper_name, :shipper_phone, :from_name, :from_addr, :from_phone, :to_name, :to_addr, :to_phone, :cost

end
