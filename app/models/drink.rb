# == Schema Information
#
# Table name: drinks
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  description :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Drink < ActiveRecord::Base
  begin :relationships
    has_many :ingredients,
             dependent: :destroy
  end

  begin :validations
  validates :name, presence: true,
                    uniqueness: true,
                    allow_blank: false
  end

  accepts_nested_attributes_for :ingredients,
                                allow_destroy: true
end
