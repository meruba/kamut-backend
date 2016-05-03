module Api
  module V1
    class DrinksController < ApplicationController

      respond_to :json

      # save json nested attributes
      # http://stackoverflow.com/questions/19574595/rails-4-not-updating-nested-attributes-via-json#comment34449874_19574595
      nested_attributes_names = Drink.nested_attributes_options.keys.map do |key|
        key.to_s.concat('_attributes').to_sym
      end

      wrap_parameters include: Drink.attribute_names + nested_attributes_names,
      format: :json

      def index
        respond_with(Drink.all.includes(:ingredients).order("id DESC"))
      end

      def show
        respond_with(Drink.find(params[:id]))
      end

      def create
        @drink = Drink.create(drink_params)
        respond_with(:api, :v1, @drink)
      end

      def update
        @drink = Drink.find(params[:id])
        @drink.update(drink_params)
        respond_with @drink
      end

      def destroy
        respond_with(Drink.destroy(params[:id]))
      end

      private

      def drink_params
        params.require(:drink).permit(:name,
                                      :description,
                                      :ingredients_attributes => [
                                        :id,
                                        :drink_id,
                                				:name,
                                				:amount,
                                				:_destroy
                                			])
      end

    end
  end
end
