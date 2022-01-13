module Api
    module V1
        class ShipmentController < ApplicationController
            protect_from_forgery with: :null_session

            def index
                shipment = Shipment.all

                render json: ShipmentSerializer.new(shipment, options).serialized_json
            end

            def show
                shipment = Shipment.find_by(id: params[:id])

                render json: ShipmentSerializer.new(shipment, options).serialized_json
            end

            def create
                shipment = Shipment.new(shipment_params)

                if shipment.save
                    render json: ShipmentSerializer.new(shipment).serialized_json
                else
                    render json: { errors: shipment.errors.messages }, status: 422
                end
            end

            def update
                shipment = Shipment.find_by(id: params[:id])

                if shipment.update(shipment_params)
                    render json: ShipmentSerializer.new(shipment, options).serialized_json
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

            def shipment_params
                params.require(:shipment).permit(:status, :image_url, :cost, :shipper_name, :shipper_phone)
            end

            def options
                @options ||= { include: %i[ShipmentInfo] }
            end

        end
    end
end
