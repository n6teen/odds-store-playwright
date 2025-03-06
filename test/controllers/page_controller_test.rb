require "test_helper"

class PageControllerTest < ActionDispatch::IntegrationTest
  test "should get confirmed" do
    get page_confirmed_url
    assert_response :success
  end
end
