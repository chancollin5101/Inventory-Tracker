# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_01_12_064533) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "shipment_infos", force: :cascade do |t|
    t.string "item"
    t.float "value"
    t.string "from_name"
    t.string "from_addr"
    t.string "from_phone"
    t.string "to_name"
    t.string "to_addr"
    t.string "to_phone"
    t.bigint "shipment_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["shipment_id"], name: "index_shipment_infos_on_shipment_id"
  end

  create_table "shipments", force: :cascade do |t|
    t.string "status"
    t.string "image_url"
    t.float "cost"
    t.string "shipper_name"
    t.string "shipper_phone"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "shipment_infos", "shipments"
end
