class PasswordResetController < ApplicationController
  def index
    @user = User.new
  end

  def create
    user = User.find_by_email(params[:user][:email])

    if user && params[:user][:email].present?
      user.refresh_token!
      UserMailer.password_reset_email(user).deliver!
      redirect_to password_reset_index_path, notice: 'We sent you an email with instructions on how to reset your password.'
    else
      @user = User.new
      flash.now[:error] = 'We can\'t find that email in our system.'
      render :index
    end
  end

  def show
    @user = User.find_by_token!(params[:id])
  end

  def update
    @user = User.find_by_token!(params[:id])
    user_params = params[:user].permit(:password, :password_confirmation)
    if @user.update_attributes user_params[:password], user_params[:password_confirmation], skip_username_validation: true
      sign_in @user
      redirect_to profile_path, notice: 'Your password has been updated.'
    else
      flash.now[:error] = 'Please make sure the passwords you entered match.'
      render :show
    end
  end
end
