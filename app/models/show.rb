class Show < ApplicationRecord
  belongs_to :broadcaster
  has_many :episodes
end
