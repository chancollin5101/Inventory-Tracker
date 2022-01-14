module Api
    module V1
        class InventoryController < ApplicationController
            protect_from_forgery with: :null_session

            def index
                inventory = Inventory.all

                render json: InventorySerializer.new(inventory, options).serialized_json
            end

            def show
                inventory = Inventory.find_by(slug: params[:slug])

                render json: InventorySerializer.new(inventory, options).serialized_json
            end

            def create
                inventory = Inventory.create(inventory_params) 
            
                if inventory.save
                    render json: InventorySerializer.new(inventory).serialized_json
                else 
                    render json: { errors: inventory.errors.messages }, status: 422
                end
            end 

            def update
                inventory = Inventory.find_by(slug: params[:slug])

                if inventory.update(inventory_params)
                    render json: InventorySerializer.new(inventory, options).serialized_json
                else
                    render json: { errors: inventory.errors.messages }, status: 422
                end
            end

            def destroy
                inventory = Inventory.find_by(slug: params[:slug])

                if inventory.destroy
                    head :no_content
                else
                    render json: { errors: inventory.errors.messages }, status: 422
                end
            end

            private

            def inventory_params
                params.require(:inventory).permit(:title, :description, :price, :quantity)
            end

            def options
                @options ||= { include: %i[shipment] }
            end
        end
    end
end