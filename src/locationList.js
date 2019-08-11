const locations = {
    dine: [
        {
            name: 'Cookdaily',
            id: 0,
            type: 'dine',
            position: [-0.058763, 51.537845],
            price: "mid",
            rate: 4,
            allVegan: true,
            reviews: [
                "To keep it real... may people are upset this place is closed Mondays.I know people deserve a day off but I live close and people walk away heart broken on Mondays. Splurging for the extra veg is a good option. Let the people eat!",
                "Awesome vegan food, great vibe and great venue. Good Atmosphere and customer service and reasonable prices. Would highly recommend this restaurant to any vegans and non-vegans out there.",
                "AMAZINGGGGG! If you go there you HAVE to bang some teriyaki bites cos they're PENG, I get them every time I go. Massive portions as well, value for money"
            ],
            address: "Arch 358 Westgate St, London, E8 3RN"

        },
        {
            name: 'Mildreds',
            id: 1,
            type: 'dine',
            position: [-0.117590, 51.531261],
            price: "mid",
            rate: 3,
            allVegan: false,
            reviews: [
                "Vegan Heaven.  Everything on the vegan menu is so delicious, fresh and satisfying.  Couldn’t  recommend enough.  Not the cheapest place in town but absolutely worth every penny.",
                "What a gem of a place. Fantastic selection of food and the cocktails are made to perfection. My (meat loving) nearest and dearest love it just as much as I do",
                "Great vegetarian restaurant. Eclectic flavours. Good staff/service. I had ravioli followed by their soul bowl."
            ],
            address: "45 Lexington Street, London, W1F 9AN"
        },
        {
            name: 'by CHLOE',
            id: 2,
            type: 'dine',
            position: [-0.120385, 51.513541],
            rate: 3,
            allVegan: true,
            reviews: [
                "Love all the chloe chain. Staff are always helpful and nice. Food is good with lots of choice and love their lemonade. Really useful stop when you need to charge your phone up too, my go to place :)",
                "Good salads but nothing special. It's more of a vegan fast food. I dislike that the bowls, cutlery and cups are plastic",
                "Why is everything done on disposables?!? They may be recyclable but you’re still creating waste and energy to produce them."
            ],
            address: "Drury House, 34-43 Russell St, Covent Garden, London, WC2B 5HA"
        },
        {
            name: 'Eat of Eden',
            id: 4,
            type: 'dine',
            position: [-0.111722, 51.462076],
            rate: 3,
            allVegan: true,
            reviews: [
                "Loved the massive and tasty platter for 2. I had 4 plates of food, friend had a couple and still had leftovers. Very laid back cafe. Can't wait to go again.",
                "If I could have this food cooked at home, I will be happy to turn vegan. The food is THAT good. They also don't try to make the food look or taste like meat, which is great.",
                "I have been visiting this place for over a year and the food and service has always been great. I was disappointed however to find the prices have increased this month To £16.95 for a single platter up from £10...that’s a 70% uplift and I do feel the meal is quite overpriced as the vegetables are not expensive to purchase. For this reason I doubt I will return."
            ],
            address: "Unit 4, Brixton Village, Coldharbour Ln, Brixton, London SW9 8PS"
        },
    ],
    take: [
        {
            name: 'Good To Go',
            id: 5,
            type: 'take',
            position: [-0.088720, 51.526341],
            price: "low",
            rate: 3,
            allVegan: true,
            reviews: [
                "Awesome little place with great coffee and a good selection of plant based mylks. Lovely staff. Only had coffee this time but the food looks amazing as well!",
                "Best vegan coffee ever!! Smooth, silky and rich. Staff is nice and there are plenty of delicious food to try. Totally recommended.",
                "Plant based sandwiches and other snacks to go, great selection of milks for coffee and friendly service. What a great find and reasonable prices in london!"
            ],
            address: "The Bower, Retail Mews, unit E+F, 207-211 Old St, London EC1V 9NR"
        },
        {
            name: 'Temple of Hackney',
            id: 6,
            type: 'take',
            position: [-0.053999, 51.546007],
            price: "low",
            rate: 4,
            allVegan: true,
            reviews: [
                "A good fix of vegan fast food. Staff are ace, I day dream they buy the butcher's space next door and create more seating I'd love to sit and enjoy and digest it with some time. Water jugs full up would be a bonus. Hats of animal friends. Peace.",
                "This is vegan junk food, it is incredibly delicious but you wouldn't want to eat it all the time! It's a takeout place, great to get some burgers on the way to London Fields.",
                "Always top service in the most unusual location. Staff is amazing as they feed so many homeless people in the area. Long live Temple."
            ],
            address: "5 Morning Ln, London E9 6NA"
        },
    ],
    market: [
        {
            name: 'Victoria Park',
            id: 7,
            type: 'market',
            position: [-0.048370, 51.534313],
            price: "low",
            rate: 5,
            allVegan: false,
            reviews: [
                "Fantastic market. Grab a beer and some streetfood, sit on the grass and watch the world go buy. Easily one of my favourite markets.",
                "Great food market with plenty of choices. As well as cooked food stalls there are stalls selling fresh organic produce.",
                "Brilliant place. Vibrant. Good street food. Great place to spend a Sunday."
            ],
            address: "56-57 Gore Rd, South Hackney, London E9 7HN"
        },
        {
            name: 'Dinerama',
            id: 8,
            type: 'market',
            position: [-0.078883, 51.523345],
            price: "low",
            rate: 5,
            allVegan: false,
            reviews: [
                "Good range of restaurants and bar areas, but can get quite packed during the weekends. Food is not that cheap but you're paying for the atmosphere. There's a £3 entrance fee (after a certain time) on the Fri/Sats as well.",
                "A variety of pop up food & drink places. Buzzing atmosphere, great for groups of friends/colleagues. Different floors with several rooms. Lovely in the summer, whilst sheltered for winter",
                "Fun, food and frolics! This place is buzzing with joy! The food is amazing, especially the vegan stalls and the selection of drinks are great. I love the look of the place and it just feels good as soon as you walk in!"
            ],
            address: "19 Great Eastern St, Hackney, London EC2A 3EJ"
        },
    ]
  }

  export default locations