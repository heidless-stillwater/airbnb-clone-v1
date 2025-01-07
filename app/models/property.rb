class Property < ApplicationRecord
  validates :name, presence: true 
  validates :headline, presence: true 
  validates :description, presence: true 
  validates :address_1, presence: true 
  validates :city, presence: true 
  validates :state, presence: true 
  validates :country, presence: true 
  
  monetize :price_cents, allow_nil: true

  geocoded_by :address
  after_validation :geocode, if: -> { latitude.blank? && longitude.blank? }

  has_many_attached :images, dependent: :destroy

  has_many :reviews, as: :reviewable

  @tst_image_int = (rand*10).round(0)

  def default_image
    images.first
  end

  def address
    [state, country].compact.join(', ')
  end

end
