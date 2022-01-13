module Api
    module V1
        class ShipmentInfoController < ApplicationController
            protect_from_forgery with: :null_session

            def create
                shipmentinfo = ShipmentInfo.create(shipmentinfo_params) 
            
                if shipmentinfo.save
                    render json: ShipmentInfoSerializer.new(shipmentinfo).serialized_json
                else 
                    render json: { errors: shipmentinfo.errors.messages }, status: 422
                end
            end 

            def destroy
                shipmentinfo = ShipmentInfo.find_by(id: params[:id]) 
            
                if shipmentinfo.destroy
                    head :no_content
                else 
                    render json: { errors: shipmentinfo.errors.messages }, status: 422
                end
            end

            private 

            def shipmentinfo_params
                params.require(:shipment_info).permit(:item, :value, :from_name, :from_addr, :from_phone, :to_name, :to_addr, :to_phone, :shipment_id)
            end
        end
    end
end