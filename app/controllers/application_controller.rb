class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token

  # def current_user
  #   @current_user ||= Broadcaster.find(session[:user_id]) if session[:user_id]
  # end
  # helper_method :current_user

  # def authorize
  #   redirect_to '/' unless current_user
  # end

end
