class Api::AddressesController < ApplicationController
  before_action :set_address, only: [:update, :destroy]
  before_action :set_location

  def index
    render json: @location.address
  end

  def create
    address = @location.address.new(address_params)
    if address.save
      render json: address
    else
      render json: {errors: address.errors}, status: :unprocessable_entity
    end
  end

  def update
    # @address.update
    render json: address
  end

  def destroy
    @address.destroy
    render json: {message: "address deleted"}
  end

  private

  def set_address
    @address = Address.find(params[:id])
  end

  def set_location
    @location = Location.find(params[:location_id])
  end

  def address_params
    params.require(:address).permit(:street, :city, :state, :zip)
  end
end
