# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


inventory = Inventory.create([
    {
        title: "iPhone 12 Pro Max 128GB",
        description: "Apple announced iPhone 12 Pro Max on October 13, 2020. The phone which is powered by the new Apple A14 Bionic processor, comes with a 6.7 inche Super Retina XDR OLED capacitive touchscreen and 2778 x 1284 p resolution. It features an HDR display and True Tone, and Wide color (P3) gamut.",
        price: 1200.00,
        quantity: 20,
    },
    {
        title: "iPhone 13 Pro Max 128GB",
        description: "The iPhone 13 Pro Max display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle.",
        price: 1500.00,
        quantity: 100,
    }
])

shipment = Shipment.create([
    {
        quantity: 2,
        status: "In Progress",
        shipper_name: "Jack Daniels",
        shipper_phone: "9056789898",
        to_name: "Jack Doe",
        to_addr: "10 Yonge Street, Toronto, Ontario, M4C5R2, Canada",
        to_phone: "6478990023",
        cost: 30.99,
        inventory: inventory.first
    },
    {
        quantity: 1,
        status: "Arrived",
        shipper_name: "Ronald Lee",
        shipper_phone: "4165557890",
        to_name: "John Doe",
        to_addr: "10 Markham Road, Markham, Ontario, L4C5R2, Canada",
        to_phone: "6478990023",
        cost: 10.50,
        inventory: inventory[1]
    }
])