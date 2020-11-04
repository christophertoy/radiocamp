class Broadcaster < ApplicationRecord
  has_many :shows
  validates :handle, presence: true, uniqueness: true, format: { with: /\A[a-z0-9\-]*\z/ }
end
