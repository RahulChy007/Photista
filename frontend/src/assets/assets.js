import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import photographer1 from './photographer (1).png'
import photographer2 from './photographer (2).png'
import photographer3 from './photographer (3).png'
import photographer4 from './photographer (4).png'
import photographer5 from './photographer (5).png'
import photographer6 from './photographer (6).png'
import photographer7 from './photographer (7).png'
import photographer8 from './photographer (8).png'
import photographer9 from './photographer (9).png'
import photographer10 from './photographer (10).png'
import photographer11 from './photographer (11).png'
import photographer12 from './photographer (12).png'
import photographer13 from './photographer (13).png'
import photographer14 from './photographer (14).png'
import photographer15 from './photographer (15).png'
import Wedding from './Wedding.svg'
import Portrait from './Portrait.svg'
import Fashion from './Fashion.svg'
import Event from './Event.svg'
import Product from './Product.svg'
import Travel from './Travel.svg'
import stars from './rating_stars.png'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    about_image,
    dropdown_icon,
    upload_icon,
    stars
}

export const specialityData = [
    {
        speciality: 'Wedding Photographer',
        image: Wedding
    },
    {
        speciality: 'Portrait Photographer',
        image: Portrait
    },
    {
        speciality: 'Fashion Photographer',
        image: Fashion
    },
    {
        speciality: 'Event Photographer',
        image: Event
    },
    {
        speciality: 'Product Photographer',
        image: Product
    },
    {
        speciality: 'Travel Photographer',
        image: Travel
    },
]

export const photographers = [
  {
    _id: 'p1',
    name: 'John Carter',
    image: photographer1,
    speciality: 'Wedding Photographer',
    expertise: 'Candid & Traditional',
    experience: '6 Years',
    about: 'John specializes in wedding photography with a keen eye for capturing natural emotions, candid moments, and grand traditional poses.',
    basePrice: 500,
    rating: 4.7,
    equipments: {
      "Drone Camera": 150,
      "Lighting Kit": 80,
      "4K Video Setup": 200,
      "Extra Lens Package": 100
    },
    address: {
      line1: 'Rosewood Apartments',
      line2: 'Baker Street, London'
    },
    reviews: [
      { id: 1, user: "Emily Johnson", rating: 5, text: "Amazing photos! Captured our wedding beautifully." },
      { id: 2, user: "Mark Smith", rating: 4, text: "Very professional and easy to work with." },
      { id: 3, user: "Sarah Lee", rating: 5, text: "Loved the candid shots! Highly recommend." }
    ]
  },
  {
    _id: 'p2',
    name: 'Sophia Williams',
    image: photographer2,
    speciality: 'Portrait Photographer',
    expertise: 'Studio & Outdoor Portraits',
    experience: '4 Years',
    about: 'Sophia creates stunning portrait sessions, blending lighting, composition, and post-editing to highlight true personality.',
    basePrice: 300,
    rating: 4.5,
    equipments: {
      "Softbox & Reflectors": 50,
      "High-End Retouching": 100,
      "Premium Lens": 120
    },
    address: {
      line1: 'Greenwood Plaza',
      line2: 'High Street, Manchester'
    },
    reviews: [
      { id: 1, user: "Daniel Green", rating: 5, text: "Fantastic portrait session, made me feel comfortable!" },
      { id: 2, user: "Hannah Moore", rating: 4, text: "Good experience but editing took a bit long." }
    ]
  },
  {
    _id: 'p3',
    name: 'David Miller',
    image: photographer3,
    speciality: 'Fashion Photographer',
    expertise: 'Editorial & Runway',
    experience: '5 Years',
    about: 'David has worked with multiple fashion brands, creating compelling visuals for editorials, catalogs, and ramp shows.',
    basePrice: 700,
    rating: 4.8,
    equipments: {
      "Studio Lights": 120,
      "Runway Setup": 250,
      "Drone Shots": 180
    },
    address: {
      line1: 'Kingsway Towers',
      line2: 'Oxford Street, London'
    },
    reviews: [
      { id: 1, user: "Olivia Brown", rating: 5, text: "Incredible shots for our brand campaign!" },
      { id: 2, user: "Leo Turner", rating: 5, text: "David has a sharp eye for fashion photography." }
    ]
  },
  {
    _id: 'p4',
    name: 'Emma Johnson',
    image: photographer4,
    speciality: 'Event Photographer',
    expertise: 'Concerts & Corporate',
    experience: '3 Years',
    about: 'Emma captures the essence of live events and corporate functions with sharp attention to detail and atmosphere.',
    basePrice: 400,
    rating: 4.6,
    equipments: {
      "Extra Lighting Rig": 90,
      "Wireless Mics": 60,
      "HD Video Camera": 150
    },
    address: {
      line1: 'Sunset Residency',
      line2: 'Camden Town, London'
    },
    reviews: [
      { id: 1, user: "Chris Evans", rating: 5, text: "Perfect coverage of our corporate event." },
      { id: 2, user: "Liam Brooks", rating: 4, text: "Great photos but delivery could be faster." }
    ]
  },
  {
    _id: 'p5',
    name: 'Michael Brown',
    image: photographer5,
    speciality: 'Product Photographer',
    expertise: 'E-commerce & Ads',
    experience: '7 Years',
    about: 'Michael is a commercial photographer focusing on product shoots for ads, online catalogs, and branding campaigns.',
    basePrice: 600,
    rating: 4.9,
    equipments: {
      "360 Product Rig": 130,
      "Macro Lens": 100,
      "Light Tent": 70
    },
    address: {
      line1: 'Maple Avenue',
      line2: 'Soho, London'
    },
    reviews: [
      { id: 1, user: "Sophia King", rating: 5, text: "Outstanding product shots, boosted our sales!" },
      { id: 2, user: "Andrew Hall", rating: 5, text: "Michael is highly professional and creative." }
    ]
  },
  {
    _id: 'p6',
    name: 'Olivia Taylor',
    image: photographer6,
    speciality: 'Travel Photographer',
    expertise: 'Landscapes & Cultures',
    experience: '8 Years',
    about: 'Olivia documents her journeys across the world, capturing landscapes, cultures, and people in breathtaking frames.',
    basePrice: 450,
    rating: 4.7,
    equipments: {
      "Drone Kit": 150,
      "Wide Angle Lens": 120,
      "Tripod Set": 60
    },
    address: {
      line1: 'Riverfront Lane',
      line2: 'Bristol'
    },
    reviews: [
      { id: 1, user: "Ava White", rating: 5, text: "Her travel photos are simply stunning!" },
      { id: 2, user: "Lucas Wright", rating: 4, text: "Great pictures, but delivery took longer." }
    ]
  },
  {
    _id: 'p7',
    name: 'Daniel Anderson',
    image: photographer7,
    speciality: 'Product Photographer',
    expertise: 'Restaurants & Magazines',
    experience: '5 Years',
    about: 'Daniel collaborates with restaurants, chefs, and food brands to make dishes look as delicious as they taste.',
    basePrice: 350,
    rating: 4.6,
    equipments: {
      "Food Styling Kit": 80,
      "Macro Lens": 90,
      "Reflectors": 50
    },
    address: {
      line1: 'Meadow Heights',
      line2: 'Liverpool'
    },
    reviews: [
      { id: 1, user: "Emily Harris", rating: 5, text: "Food photos looked mouthwatering!" },
      { id: 2, user: "Jack Miller", rating: 4, text: "Very good but could use faster editing." },
      { id: 3, user: "Jack Miller", rating: 4, text: "Very good but could use faster editing." },
      { id: 4, user: "Jack Miller", rating: 4, text: "Very good but could use faster editing." },
      { id: 5, user: "Jack Miller", rating: 4, text: "Very good but could use faster editing." },
      { id: 6, user: "Jack Miller", rating: 4, text: "Very good but could use faster editing." },
      { id: 7, user: "Jack Miller", rating: 4, text: "Very good but could use faster editing." },
      { id: 8, user: "Jack Miller", rating: 4, text: "Very good but could use faster editing." },
      { id: 9, user: "Jack Miller", rating: 4, text: "Very good but could use faster editing." },
      { id: 10, user: "Jack Miller", rating: 4, text: "Very good but could use faster editing." }
    ]
  },
  {
    _id: 'p8',
    name: 'Isabella Moore',
    image: photographer8,
    speciality: 'Wedding Photographer',
    expertise: 'Maternity & Family Shoots',
    experience: '6 Years',
    about: 'Isabella brings warmth and creativity to weddings, maternity, and family sessions, ensuring memories that last a lifetime.',
    basePrice: 550,
    rating: 4.8,
    equipments: {
      "Drone Camera": 140,
      "Lighting Kit": 100,
      "Premium Lens": 130
    },
    address: {
      line1: 'Parkview Residency',
      line2: 'Leeds'
    },
    reviews: [
      { id: 1, user: "Megan Young", rating: 5, text: "Beautiful family portraits, full of emotions." },
      { id: 2, user: "Ryan Scott", rating: 4, text: "Great work, but a little pricey." }
    ]
  },
  {
    _id: 'p9',
    name: 'James Robinson',
    image: photographer9,
    speciality: 'Event Photographer',
    expertise: 'Sports & Action Shots',
    experience: '4 Years',
    about: 'James freezes moments of adrenaline and action, covering everything from football matches to adventure sports.',
    basePrice: 480,
    rating: 4.5,
    equipments: {
      "High-Speed Camera": 200,
      "Telephoto Lens": 150,
      "Tripod": 50
    },
    address: {
      line1: 'Broadway Flats',
      line2: 'Birmingham'
    },
    reviews: [
      { id: 1, user: "Liam Walker", rating: 5, text: "Amazing sports shots, captured the action perfectly!" },
      { id: 2, user: "Ella James", rating: 4, text: "Great energy in the photos." }
    ]
  },
  {
    _id: 'p10',
    name: 'Charlotte Davis',
    image: photographer10,
    speciality: 'Travel Photographer',
    expertise: 'Nature & Wildlife',
    experience: '9 Years',
    about: 'Charlotte spends months in the wild capturing rare glimpses of nature and wildlife in their natural habitats.',
    basePrice: 800,
    rating: 4.9,
    equipments: {
      "Telephoto Zoom Lens": 220,
      "Drone Camera": 180,
      "Camouflage Gear": 90
    },
    address: {
      line1: 'Forest Edge Villas',
      line2: 'Edinburgh'
    },
    reviews: [
      { id: 1, user: "Henry Parker", rating: 5, text: "Her wildlife shots are breathtaking!" },
      { id: 2, user: "Sophia Green", rating: 5, text: "Captured rare animal moments beautifully." }
    ]
  },
  {
    _id: 'p11',
    name: 'Henry Clark',
    image: photographer11,
    speciality: 'Wedding Photographer',
    expertise: 'Luxury Weddings',
    experience: '10 Years',
    about: 'Henry specializes in luxury wedding shoots, blending creative storytelling with cinematic visuals.',
    basePrice: 900,
    rating: 5.0,
    equipments: {
      "Cinematic Camera": 300,
      "Drone Kit": 180,
      "Lighting Rig": 150
    },
    address: {
      line1: 'Royal Gardens',
      line2: 'Kensington, London'
    },
    reviews: [
      { id: 1, user: "Olivia Scott", rating: 5, text: "A true professional, our wedding looked like a movie!" },
      { id: 2, user: "Daniel Lee", rating: 5, text: "Henry is worth every penny, stunning work." }
    ]
  },
  {
    _id: 'p12',
    name: 'Amelia Scott',
    image: photographer12,
    speciality: 'Portrait Photographer',
    expertise: 'Black & White Portraits',
    experience: '5 Years',
    about: 'Amelia creates artistic portraits with a special focus on black and white photography.',
    basePrice: 320,
    rating: 4.6,
    equipments: {
      "Studio Setup": 100,
      "Backdrop Collection": 80,
      "Retouching Pack": 70
    },
    address: {
      line1: 'Oakwood Studios',
      line2: 'Sheffield'
    },
    reviews: [
      { id: 1, user: "George Hill", rating: 5, text: "Her B&W portraits are timeless pieces of art." },
      { id: 2, user: "Ella Brown", rating: 4, text: "Great work but editing took a while." }
    ]
  },
  {
    _id: 'p13',
    name: 'Ethan Lewis',
    image: photographer13,
    speciality: 'Fashion Photographer',
    expertise: 'Streetwear & Editorial',
    experience: '6 Years',
    about: 'Ethan has collaborated with global streetwear brands, delivering powerful fashion visuals.',
    basePrice: 750,
    rating: 4.8,
    equipments: {
      "Runway Lighting": 200,
      "Drone Shots": 170,
      "4K Camera": 220
    },
    address: {
      line1: 'Skyline Apartments',
      line2: 'Manchester'
    },
    reviews: [
      { id: 1, user: "Zoe Taylor", rating: 5, text: "His editorial shots are next level." },
      { id: 2, user: "Max Harris", rating: 5, text: "Delivered beyond expectations for our magazine." }
    ]
  },
  {
    _id: 'p14',
    name: 'Grace Wilson',
    image: photographer14,
    speciality: 'Product Photographer',
    expertise: 'Jewellery & Luxury Goods',
    experience: '4 Years',
    about: 'Grace captures luxury products with elegance, often collaborating with jewellery and watch brands.',
    basePrice: 650,
    rating: 4.7,
    equipments: {
      "Macro Lens": 120,
      "Reflectors": 60,
      "Light Tent": 90
    },
    address: {
      line1: 'Crown Plaza',
      line2: 'London Bridge'
    },
    reviews: [
      { id: 1, user: "Anna Wilson", rating: 5, text: "Jewellery shots looked absolutely stunning." },
      { id: 2, user: "Tom Carter", rating: 4, text: "Great quality, but editing could be faster." }
    ]
  },
  {
    _id: 'p15',
    name: 'Benjamin Hall',
    image: photographer15,
    speciality: 'Event Photographer',
    expertise: 'Corporate & Conferences',
    experience: '7 Years',
    about: 'Benjamin provides professional coverage of corporate events, seminars, and conferences.',
    basePrice: 550,
    rating: 4.6,
    equipments: {
      "Conference Kit": 150,
      "Extra Lighting": 100,
      "Video Setup": 200
    },
    address: {
      line1: 'Business Tower',
      line2: 'Canary Wharf, London'
    },
    reviews: [
      { id: 1, user: "Sarah Johnson", rating: 5, text: "Excellent corporate event coverage, very reliable." },
      { id: 2, user: "David Clark", rating: 4, text: "Professional but slightly delayed delivery." }
    ]
  }
]
