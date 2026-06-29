class User < ApplicationRecord
  has_secure_password

  before_validation :normalize_email

  validates :full_name,
            presence: true,
            length: { minimum: 2, maximum: 100 }

  validates :email,
            presence: true,
            uniqueness: { case_sensitive: false },
            format: {
              with: URI::MailTo::EMAIL_REGEXP,
              message: "is not a valid email"
            }

  validates :password,
            length: { minimum: 8 },
            if: -> { password.present? }

  private

  def normalize_email
    self.email = email.to_s.strip.downcase
  end
end