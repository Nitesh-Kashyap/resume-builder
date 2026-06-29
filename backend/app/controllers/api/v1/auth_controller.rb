module Api
  module V1
    class AuthController < ApplicationController
      def register
        user = User.new(user_params)

        if user.save
          token = JwtService.encode(user_id: user.id)

          render_success(
            message: "Registration successful",
            data: {
              token: token,
              user: user_response(user)
            },
            status: :created
          )
        else
          render_error(
            message: "Registration failed",
            errors: user.errors.full_messages
          )
        end
      end

      def login
        user = User.find_by(email: params[:email].to_s.downcase.strip)

        if user&.authenticate(params[:password])
          token = JwtService.encode(user_id: user.id)

          render_success(
            message: "Login successful",
            data: {
              token: token,
              user: user_response(user)
            }
          )
        else
          render_error(
            message: "Invalid email or password",
            status: :unauthorized
          )
        end
      end

      private

      def user_params
        params.permit(
          :full_name,
          :email,
          :password,
          :password_confirmation
        )
      end

      def user_response(user)
        {
          id: user.id,
          full_name: user.full_name,
          email: user.email
        }
      end
    end
  end
end