import { Page, AppState, ProductCategory } from './types';

export const NAV_LINKS = [
  { label: 'Home', page: Page.HOME },
  { label: 'Products', page: Page.PRODUCTS },
  { label: 'About', page: Page.ABOUT },
  { label: 'Contact Us', page: Page.CONTACT },
];

export const FOOTER_LINKS = [
  { label: 'Contact', page: Page.CONTACT },
  { label: 'About Us', page: Page.ABOUT },
];

export const FULL_ABOUT_TEXT = `
<h2 class="text-2xl font-bold text-gray-800 mb-4">About Leo Cycles</h2>
<p class="mb-4">Welcome to Leo Cycles, your ultimate destination for all things cycling, fishing, and outdoor sports in Lephalale. We're passionate about helping you get out there and enjoy your favorite activities, whether you're hitting the trails on two wheels or casting a line in the water.</p>
<p class="mb-6">At Leo Cycles, we believe that quality gear should be accessible to everyone. That's why we offer a wide range of products, from affordable to high-end, ensuring that you'll find exactly what you need, no matter your budget or skill level.</p>

<h3 class="text-xl font-bold text-gray-800 mb-3">Cycling Gear and Services</h3>
<p class="mb-4">Whether you're a seasoned cyclist or just starting, we've got you covered. We stock a fantastic selection of bicycles for all types of riding, along with a comprehensive range of spares, clothing, and accessories. Our expert team is also on hand to help with professional servicing and repairs, so your bike is always in top condition. We'll even pump your tires for you!</p>

<h3 class="text-xl font-bold text-gray-800 mb-3">Fishing Equipment</h3>
<p class="mb-4">Get ready for your next big catch with our extensive selection of fishing gear. We specialize in equipment for bass, carp, and kurper, with a huge variety of rods, reels, hooks, bait, lures, and specialized gear. We also carry a great range of fishing clothing and accessories to keep you comfortable on the water.</p>

<h3 class="text-xl font-bold text-gray-800 mb-3">More to Explore</h3>
<p class="mb-4">Leo Cycles is more than just a bike and fishing shop. We're your one-stop shop for outdoor fun! We also offer: swimming gear, camping accessories, funky hats and socks, stylish and practical clothing, and air guns.</p>
<p>Come on in and let us help you find the perfect gear for your next adventure. We're more than just a store; we're a community.</p>
`;

export const INITIAL_STATE: AppState = {
  specials: [
    {
      id: 1,
      title: 'Red Dot Sale on Fishing Lures!',
      description: 'Browse trough a wide varity of lures at give away Prices. Stock up for your next big catch.',
      imageUrl: 'https://res.cloudinary.com/dsexriquh/image/upload/v1757417455/Screenshot_2025-09-08_121639_lnn72h.png'
    },
    {
      id: 2,
      title: 'Get your bicycles serviced and ready!',
      description: 'Our expert mechanics are ready to get your bike in top condition for your next adventure.',
      imageUrl: 'https://res.cloudinary.com/dsexriquh/image/upload/v1757417215/515320812_1337782804388653_4801594132892939502_n_okxhlu.jpg'
    }
  ],
  aboutContent: FULL_ABOUT_TEXT,
  contactInfo: {
    address: "Kotie St, Ellisras, South Africa",
    phone: "084 250 2881",
    email: "leosport@leosport.co.za",
    // FIX: Add opening hours data to be used in MapPage.tsx
    openingHours: [
        "Mon - Fri: 8:00 AM - 5:00 PM",
        "Saturday: 8:00 AM - 1:00 PM",
        "Sunday: Closed"
    ]
  }
};

// FIX: Export CONTACT_INFO to resolve the import error in MapPage.tsx.
export const CONTACT_INFO = INITIAL_STATE.contactInfo;

export const PRODUCT_CATEGORIES: ProductCategory[] = [
    { name: 'Fishing Lures', imageUrl: 'https://res.cloudinary.com/dsexriquh/image/upload/v1757416151/kunsaas_rak_dakx86.jpg', alt: 'A collection of colorful fishing lures in their packaging.' },
    { name: 'Fishing Gear', imageUrl: 'https://res.cloudinary.com/dsexriquh/image/upload/v1757416146/katrolrak_2_heplhv.jpg', alt: 'Various fishing equipment displayed in a store.' },
    { name: 'Funky Hats', imageUrl: 'https://res.cloudinary.com/dsexriquh/image/upload/v1757416136/Funky_Hats_rnhzxd.jpg', alt: 'A display of various funky hats.' },
    { name: 'Cool Socks', imageUrl: 'https://res.cloudinary.com/dsexriquh/image/upload/v1757416138/Cool_Socks_dwipre.jpg', alt: 'A display of colorful and cool socks.' },
    { name: 'Bicycles', imageUrl: 'https://res.cloudinary.com/dsexriquh/image/upload/v1757416139/Bicycles_eroej8.jpg', alt: 'A mountain bike displayed among other sporting goods.' },
    { name: 'Outdoor Accessories', imageUrl: 'https://res.cloudinary.com/dsexriquh/image/upload/v1757417188/540986166_1388596895973910_193193808143274167_n_dmkvt4.jpg', alt: 'A collection of various outdoor and sports accessories.' },
];