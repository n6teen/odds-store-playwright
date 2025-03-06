class PageController < ApplicationController
  def confirmed
    @order = Order.last
  end
end
