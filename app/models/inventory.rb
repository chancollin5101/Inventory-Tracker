class Inventory < ApplicationRecord
    has_many :shipment

    before_create :slugify # creates and sets the slug before creation
    
    def slugify
        self.slug = title.parameterize
    end
end
