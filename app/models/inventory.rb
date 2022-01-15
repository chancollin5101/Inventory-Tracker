class Inventory < ApplicationRecord
    has_many :shipment

    before_create :slugify # creates and sets the slug before creation
    after_update :slugify # resets the slug after record is updated in case title is changed
    validates :title, uniqueness: true, on: :create # checks that no other product with the same name can be created (ie. no duplicate titles)

    def slugify
        self.slug = title.parameterize
    end
end
