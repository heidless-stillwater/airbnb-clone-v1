require 'rails_helper'

RSpec.describe Review, type: :model do
  it { should validate_presence_of(:title)  }
  it { should validate_presence_of(:body)  }
  it { should validate_presence_of(:rating)  }
  it { belong_to(:reviewable)  }
  it { validate_numericality_of(:rating).is_greater_than_or_equal_to(1) }
  it { validate_numericality_of(:rating).is_less_than_or_equal_to(5) }
  it { validate_numericality_of(:rating).only_integer }
end
