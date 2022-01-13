# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

shipment = Shipment.create([
    {
        status: "In Progress",
        image_url: "https://cdn.arstechnica.net/wp-content/uploads/2021/09/iPhone-13-Pro-Max-back-800x438.jpeg",
        cost: 30.99,
        shipper_name: "Jack Daniels",
        shipper_phone: "9056789898"
    },
    {
        status: "Arrived",
        image_url: "https://www.relyco.com/wp-content/uploads/2019/10/Syn_Tridura_1_ALT.jpg",
        cost: 200.50,
        shipper_name: "Ronald Lee",
        shipper_phone: "4165557890"
    }
])

shiperment_details = ShipmentInfo.create([
    {
        item: "iPhone 13 Pro Max",
        value: 1500,
        from_name: "Jack Ma",
        from_addr: "3 Sunset Beach Road, Richmond Hill, Ontario, L4C5R2, Canada",
        from_phone: "9056783232",
        to_name: "Ronald Tong",
        to_addr: "10 Yonge Street, Toronto, Ontario, M4C5R2, Canada",
        to_phone: "6478990023",
        shipment: shipment.first
    },
    {
        item: "Confidential Documents",
        value: 0,
        from_name: "Rick Johnson",
        from_addr: "14 Sunset Dr Willows, California(CA), 95988, United States of America",
        from_phone: "9056783232",
        to_name: "John Doe",
        to_addr: "10 Markham Road, Markham, Ontario, L4C5R2, Canada",
        to_phone: "6478990023",
        shipment: shipment[1]
    }
])
