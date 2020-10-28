class SessionsController < ApplicationController

  def create
    user = Broadcaster.find_by(handle: params["handle"])
    # If the user exists AND the password entered is correct.
    if user 
      # Save the user id inside the browser cookie. This is how we keep the user 
      # logged in when they navigate around our website.
      session[:user_id] = user.id
      render json: {
        logged_in: true,
        user: user
      }
    else 
      render json: { status: 401 }
    # # If user's login doesn't work, send them back to the login form.
    #   redirect_to '/login'
    end
  end


  def destroy
    session[:user_id] = nil
    redirect_to '/'
  end

end