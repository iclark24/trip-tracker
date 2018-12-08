class Api::AddressesController < ApplicationController
  def index
    render json: Address.all
  end

  def create
    address = Address.new(address_params)
    if address.save
      render json: address
    else
      render json: { errors: address.errors }, status: :unprocessable_entity 
    end
  end

  def update
    address = address.find(params[:id])
    address.update(complete: !address.complete)
    render json: address
  end

  def destroy
    address.find(params[:id]).destroy
    render json: { message: 'address deleted' }
  end

  private

  def address_params
    params.require(:address).permit(:name, :complete)
  end

end