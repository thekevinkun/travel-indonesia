import images from "./images"

const destinations = [
    {
        "location": "Magelang, East Java",
        "image": images.bgHeroImg1,
        "title": "Borobudur Temple",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure"
    },
    {
        "location": "Malang, East Java",
        "image": images.bgHeroImg2,
        "title": "Mount Bromo",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure"
    },
    {
        "location": "Klungkung, East Kalimantan",
        "image": images.bgHeroImg3,
        "title": "Derawan Island",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure"
    },
    {
        "location": "Klungkung, Bali",
        "image": images.bgHeroImg4,
        "title": "Penida Island",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure"
    },
    {
        "location": "Flores, East Nusa Tenggara",
        "image": images.bgHeroImg5,
        "title": "Labuan Bajo",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure"
    }
]

const events = [
    {
        "title": "Enjoy an iconic performance of Kecak Fire Dance in Uluwatu, Bali",
        "image": images.eventsUluwatu,
        "day": "1 night",
        "price": "Rp 135.000",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        "title": "Experiencing beautiful sunset from Great Temple of Borboudur",
        "image": images.eventsBorobudur,
        "day": "1 day",
        "price": "Rp 500.000",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        "title": "Hike and Witness the Spectacular Sunrise of Mount Bromo",
        "image": images.eventsBromo,
        "day": "2 day 1 night",
        "price": "Rp 350.000",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        "title": "Take a speedboat trip to explore the panorama of Labuan Bajo",
        "image": images.eventsLabuanBajo,
        "day": "2 day",
        "price": "Rp 1.450.000",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
]

const faq = [
    {
        "question": "How's the tour's going?",
        "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        "question": "How to book a tour?",
        "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        "question": "What guarentess can I get when paying for the tour?",
        "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
]

const blogs = [
    {
        "date": "Nov 6, 2024",
        "title": "Wild performance of komodo dragons",
        "blog": "Only found in the world within the Komodo National Park and the surrounding Flores island, these Jurassic and majestic creatures are the park’s star attraction. Although awesome to see, visitors are urged to keep a distance and exercise caution.",
        "views": 1246,
        "image": images.blogKomodo,
        "image1": images.blogKomodoImg1,
        "image2": images.blogKomodoImg2
    },
    {
        "date": "Jan 1, 2025",
        "title": "The unforgettable adventure take around Bromo",
        "blog": "The magnificent Mount Bromo will not disappoint with its spectacular views and dramatic landscapes. Here, you can observe the unique indigenous culture and traditions of the 'Tenggerese' including their rituals and ceremonies.",
        "views": 2001,
        "image": images.blogBromo,
        "image1": images.blogBromoImg1,
        "image2": images.blogBromoImg2
    }
]

const footer = [
    {
        "title": "Links",
        "list": [
            {"title": "Home", "href": "#home"},
            {"title": "About Us", "href": "#aboutus"},
            {"title": "Upcoming Events", "href": "#events"},
            {"title": "Watch Moments", "href": "#moments"},
            {"title": "Blog", "href": "#blog"}
        ]
    },
    {
        "title": "Services",
        "list": [
            {"title": "Help/FAQ", "href": "#faq"},
            {"title": "Term and Condition", "href": "#termcondition"},
            {"title": "Privacy & Policy", "href": "#policy"},
            {"title": "Affilates", "href": "#affilates"},
            {"title": "Contact Us", "href": "#contact"}
        ]
    },
    {
        "title": "Contact",
        "list": [
            {"title": "Address: Jl. Anggrek Merah 3 No.54", "href": "#address"},
            {"title": "Phone: +62 813 4560 1880", "href": "#phone"},
            {"title": "Email: travelindonesia@gmail.com", "href": "#email"},
            {"title": "Maps: Samarinda, East Kalimantan", "href": "#maps"}
        ]
    }
]

export default {
    destinations,
    events,
    faq,
    blogs,
    footer
}