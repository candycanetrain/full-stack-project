# == Schema Information
#
# Table name: rooms
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  city        :string           not null
#  price       :decimal(7, 2)    not null
#  location    :string           not null, is an Array
#  description :text             not null
#  bedrooms    :integer          not null
#  beds        :integer          not null
#  bathrooms   :integer          not null
#  homeType    :string           not null
#  accomdates  :integer          not null
#  amenities   :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Room < ApplicationRecord
  validates :name, :city, :price, :location, :description, :bedrooms, :beds, :bathrooms, :homeType, :accomdates, presence: true


  
end