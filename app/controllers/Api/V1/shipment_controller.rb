module Api
    module V1
        class ShipmentController < ApplicationController
            protect_from_forgery with: :null_session

            def index
                shipment = Shipment.all

                render json: ShipmentSerializer.new(shipment).serialized_json
            end

            def show
                shipment = Shipment.find_by(id: params[:id])

                render json: ShipmentSerializer.new(shipment).serialized_json
            end

            def create
                shipment = inventory.shipment.new(shipment_create_params)

                if shipment.save
                    render json: ShipmentSerializer.new(shipment).serialized_json
                else
                    render json: { errors: shipment.errors.messages }, status: 422
                end
            end

            def update
                shipment = Shipment.find_by(id: params[:id])

                if shipment.update(shipment_params)
                    render json: ShipmentSerializer.new(shipment).serialized_json
                else
                    render json: { errors: shipment.errors.messages }, status: 422
                end
            end

            def destroy
                shipment = Shipment.find_by(id: params[:id])

                if shipment.destroy
                    head :no_content
                else
                    render json: { errors: shipment.errors.messages }, status: 422
                end
            end

            private

            def inventory
                @inventory ||= Inventory.find(params[:inventory_id])
            end

            def shipment_create_params
                params.require(:shipment).permit(:quantity, :shipper_name, :shipper_phone, 
                :to_name, :to_addr, :to_phone, :cost, :inventory_id)
            end
        end
    end
end
