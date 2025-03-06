class PageController < ApplicationController
  def confirmed
    @order = Order.find(params[:order_id])
  end
end
