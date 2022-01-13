class ShipmentInfoSerializer
  include FastJsonapi::ObjectSerializer
  attributes :item, :value, :from_name, :from_addr, :from_phone, :to_name, :to_addr, :to_phone
end
