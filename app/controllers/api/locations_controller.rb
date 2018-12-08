class Api::LocationsController < ApplicationController
  
  before_action :set_location, only: [:update, :destroy]
  before_action :set_trip

  def index
    render json: @trip.locations.all
  end

  def create
    location = @trip.locations.new(location_params)
    if location.save
      render json: location
    else
      render json: {errors: location.errors}, status: :unprocessable_entity
    end
  end

  def update
    # @location.update
    render json: location
  end

  def destroy
    @location.destroy
    render json: {message: "location deleted"}
  end

  private

  def set_location
    @location = Location.find(params[:id])
  end

  def set_trip
    @trip = Trip.find(params[:trip_id])
  end

  def location_params
    params.require(:location).permit(:name, :days)
  end

end
