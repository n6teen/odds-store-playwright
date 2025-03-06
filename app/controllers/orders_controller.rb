class OrdersController < ApplicationController
  def create
    @order = Order.new(order_params)

    if @order.save
      redirect_to page_confirmed_path, notice: "Order was successfully created."
    else
      redirect_back fallback_location: root_path, alert: "Failed to create order."
    end
  end

  private

  def order_params
    params.require(:order).permit(:name, :phone_number)
  end
end
