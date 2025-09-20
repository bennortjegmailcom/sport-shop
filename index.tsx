// --- ENUMS & TYPES (for clarity) ---
const Page = {
  HOME: 'HOME',
  PRODUCTS: 'PRODUCTS',
  ABOUT: 'ABOUT',
  CONTACT: 'CONTACT',
  ADMIN: 'ADMIN',
};

// --- CONSTANTS ---
const NAV_LINKS = [
  { label: 'Home', page: Page.HOME },
  { label: 'Products', page: Page.PRODUCTS },
  { label: 'About', page: Page.ABOUT },
  { label: 'Contact Us', page: Page.CONTACT },
];

const FOOTER_LINKS = [
  { label: 'Contact', page: Page.CONTACT },
  { label: 'About Us', page: Page.ABOUT },
];

const FULL_ABOUT_TEXT = `
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

const INITIAL_STATE = {
  specials: [
    {
      id: 1,
      title: 'Red Dot Sale on Fishing Lures!',
      description: 'Get 20% off on all Rapala and Bomber lures this month. Stock up for your next big catch.',
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
    openingHours: [
        "Mon - Fri: 8:00 AM - 5:00 PM",
        "Saturday: 8:00 AM - 1:00 PM",
        "Sunday: Closed"
    ]
  }
};

const PRODUCT_CATEGORIES = [
    { name: 'Fishing Lures', imageUrl: 'https://res.cloudinary.com/dsexriquh/image/upload/v1757416151/kunsaas_rak_dakx86.jpg', alt: 'A collection of colorful fishing lures in their packaging.' },
    { name: 'Fishing Gear', imageUrl: 'https://res.cloudinary.com/dsexriquh/image/upload/v1757416146/katrolrak_2_heplhv.jpg', alt: 'Various fishing equipment displayed in a store.' },
    { name: 'Funky Hats', imageUrl: 'https://res.cloudinary.com/dsexriquh/image/upload/v1757416136/Funky_Hats_rnhzxd.jpg', alt: 'A display of various funky hats.' },
    { name: 'Cool Socks', imageUrl: 'https://res.cloudinary.com/dsexriquh/image/upload/v1757416138/Cool_Socks_dwipre.jpg', alt: 'A display of colorful and cool socks.' },
    { name: 'Bicycles', imageUrl: 'https://res.cloudinary.com/dsexriquh/image/upload/v1757416139/Bicycles_eroej8.jpg', alt: 'A mountain bike displayed among other sporting goods.' },
    { name: 'Outdoor Accessories', imageUrl: 'https://res.cloudinary.com/dsexriquh/image/upload/v1757417188/540986166_1388596895973910_193193808143274167_n_dmkvt4.jpg', alt: 'A collection of various outdoor and sports accessories.' },
];


// --- APPLICATION STATE ---
let state = JSON.parse(JSON.stringify(INITIAL_STATE)); // Deep copy to allow reset
let currentPage = Page.HOME;

// --- DOM ELEMENT REFERENCES ---
const appContainer = document.getElementById('app-container');

// --- TEMPLATE/RENDER FUNCTIONS ---

const renderHeader = () => {
    const navButtons = NAV_LINKS.map(link => {
        const isActive = currentPage === link.page;
        return `
            <button 
                data-page="${link.page}"
                class="nav-button w-full py-3 px-2 text-center uppercase tracking-wider font-semibold text-xs sm:text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
                    isActive 
                    ? 'bg-yellow-500 text-gray-900' 
                    : 'hover:bg-gray-600'
                }"
                aria-current="${isActive ? 'page' : 'false'}"
            >
                ${link.label}
            </button>
        `;
    }).join('');

    return `
        <header class="bg-gray-900 shadow-md">
            <div class="text-center p-4 bg-gray-800">
                <img src="https://res.cloudinary.com/dsexriquh/image/upload/v1757416137/leo_naam_hhznam.jpg" alt="Leo Fietse & Hengel Logo" class="mx-auto h-12"/>
            </div>
            <nav class="bg-gray-700 text-white flex justify-center">
                ${navButtons}
            </nav>
        </header>
    `;
};

const renderFooter = () => {
    const footerLinks = FOOTER_LINKS.map(link => `
        <button 
            data-page="${link.page}"
            class="nav-button text-gray-300 hover:text-yellow-400 transition-colors font-semibold text-sm"
        >
            ${link.label}
        </button>
    `).join('');

    return `
        <footer class="bg-yellow-900 text-white text-center p-4">
            <div class="flex justify-center space-x-4 mb-4">
                ${footerLinks}
                <button 
                    data-page="${Page.ADMIN}"
                    class="nav-button text-gray-400 hover:text-yellow-400 transition-colors font-semibold text-sm"
                >
                    Admin Panel
                </button>
            </div>
           <div class="flex justify-center items-center space-x-2 mt-4">
                <p class="text-xs text-gray-500">Designed and built by Ben</p>
                <img src="https://res.cloudinary.com/dsexriquh/image/upload/v1757420870/bendesign_wit_q8ysqb.png" alt="BendeSign Logo" class="h-12 opacity-70"/>
            </div>
        </footer>
    `;
};

const renderHomePage = () => {
    const specialsHtml = state.specials.length > 0 ? state.specials.map(special => `
        <div class="bg-white rounded-lg shadow-md overflow-hidden flex flex-col sm:flex-row items-center transition-shadow hover:shadow-xl">
            <img src="${special.imageUrl}" alt="${special.title}" class="w-full sm:w-1/3 h-32 sm:h-full object-cover"/>
            <div class="p-4 flex-grow">
                <h4 class="font-bold text-lg text-yellow-700">${special.title}</h4>
                <p class="text-gray-600 text-sm mt-1">${special.description}</p>
            </div>
        </div>
    `).join('') : '<p class="text-center text-gray-500 col-span-full">No specials at the moment. Check back soon!</p>';

    return `
        <div class="space-y-12">
            <section class="text-center">
                <div class="rounded-lg overflow-hidden shadow-lg">
                    <img src="https://res.cloudinary.com/dsexriquh/image/upload/v1757416210/leo_front_page_ydpbwu.jpg" alt="Promotional image for Leo Cycles store" class="w-full h-auto"/>
                </div>
                <div class="bg-white p-6 mt-8 mx-auto max-w-2xl rounded-lg shadow-xl">
                    <h2 class="text-3xl sm:text-4xl font-extrabold text-gray-800">Your Adventure Starts Here.</h2>
                    <p class="text-gray-600 mt-2">Ride. Fish. Explore. Leo Cycles Has It All.</p>
                    <button data-page="${Page.PRODUCTS}" class="nav-button mt-6 bg-yellow-500 text-gray-900 font-bold py-2 px-6 rounded-full hover:bg-yellow-400 transition-transform duration-200 hover:scale-105">
                        Explore Products
                    </button>
                </div>
            </section>
            <section class="text-center">
                <h3 class="text-2xl font-bold text-gray-800 mb-2">Welcome to Leo Cycles</h3>
                <p class="text-gray-600 max-w-2xl mx-auto">
                    Your ultimate destination for all things cycling, fishing, and outdoor sports in Lephalale. We're passionate about helping you get out there and enjoy your favorite activities with the best gear.
                </p>
                <button data-page="${Page.ABOUT}" class="nav-button mt-4 text-yellow-600 font-semibold hover:text-yellow-500">
                    Learn More About Us &rarr;
                </button>
            </section>
            <section>
                <h3 class="text-2xl font-bold text-center text-gray-800 mb-6">Current Specials</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">${specialsHtml}</div>
            </section>
        </div>
    `;
};

const renderAboutPage = () => `
    <div class="bg-white p-6 rounded-lg shadow-lg">
        <div class="prose max-w-none">${state.aboutContent}</div>
    </div>
`;

const renderProductsPage = () => {
    const categoriesHtml = PRODUCT_CATEGORIES.map(category => `
        <div class="group relative rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105">
            <img src="${category.imageUrl}" alt="${category.alt}" class="w-full h-40 object-cover" />
            <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 class="text-white text-lg font-bold text-center p-2">${category.name}</h3>
            </div>
        </div>
    `).join('');

    return `
        <div class="space-y-8">
            <div class="text-center">
                <h2 class="text-3xl font-bold text-gray-800">Our Products</h2>
                <p class="text-gray-600 mt-2">We offer a wide range of products for all your outdoor needs.</p>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                ${categoriesHtml}
            </div>
        </div>
    `;
};

const renderContactPage = () => {
    const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(state.contactInfo.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
    return `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="space-y-6">
                <div>
                    <h2 class="text-3xl font-bold text-gray-800">Get In Touch</h2>
                    <p class="text-gray-600 mt-2">We'd love to hear from you!</p>
                </div>
                <div class="space-y-3 text-gray-700">
                    <p><strong>Address:</strong> ${state.contactInfo.address}</p>
                    <p><strong>Phone:</strong> ${state.contactInfo.phone}</p>
                    <p><strong>Email:</strong> <a href="mailto:${state.contactInfo.email}" class="text-yellow-600 hover:underline">${state.contactInfo.email}</a></p>
                </div>
                <div class="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-md">
                    <iframe src="${mapUrl}" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" title="Location of Leo Cycles"></iframe>
                </div>
            </div>
            <div id="contact-form-container" class="bg-gray-50 p-6 rounded-lg shadow-lg">
                <form id="contact-form" class="space-y-4">
                    <div>
                        <label for="name" class="block text-sm font-medium text-gray-700">Your Name</label>
                        <input type="text" id="name" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"/>
                    </div>
                     <div>
                        <label for="email" class="block text-sm font-medium text-gray-700">Your Email</label>
                        <input type="email" id="email" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"/>
                    </div>
                     <div>
                        <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
                        <textarea id="message" rows="5" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"></textarea>
                    </div>
                    <button type="submit" class="w-full bg-yellow-500 text-gray-900 font-bold py-3 px-4 rounded-md hover:bg-yellow-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
                        Submit Message
                    </button>
                </form>
            </div>
        </div>
    `;
};

const renderAdminPage = () => {
    const specialsHtml = state.specials.map((special, index) => `
        <div key="${special.id}" class="bg-white p-3 rounded shadow-sm flex justify-between items-center">
            <span>${index + 1}. ${special.title}</span>
            <button data-id="${special.id}" class="remove-special-btn bg-red-500 text-white px-2 py-1 text-xs rounded hover:bg-red-600">Remove</button>
        </div>
    `).join('');

    return `
        <div class="space-y-8 p-4 bg-gray-50 rounded-lg shadow-inner">
            <div class="text-center border-b pb-4">
                <h2 class="text-3xl font-bold text-gray-800">Admin Panel</h2>
                <p class="text-sm text-red-600 mt-2">NOTE: Changes made here are for demonstration and will reset on page refresh.</p>
            </div>
            
            <div id="save-message-container"></div>

            <div class="space-y-4">
                <h3 class="text-xl font-semibold text-gray-700">Manage Specials</h3>
                <div id="specials-list">${specialsHtml}</div>
                 <div class="bg-white p-4 rounded shadow-sm space-y-3">
                    <h4 class="font-medium">Add New Special</h4>
                    <input type="text" id="new-special-title" placeholder="Title" class="w-full p-2 border rounded"/>
                    <input type="text" id="new-special-desc" placeholder="Description" class="w-full p-2 border rounded"/>
                    <button id="add-special-btn" class="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Add Special</button>
                </div>
            </div>

            <div class="space-y-4">
                <h3 class="text-xl font-semibold text-gray-700">Edit Contact Info</h3>
                <div class="bg-white p-4 rounded shadow-sm space-y-3">
                    <div>
                        <label class="block text-sm font-medium">Address</label>
                        <input type="text" id="contact-address" value="${state.contactInfo.address}" class="w-full p-2 border rounded"/>
                    </div>
                    <div>
                        <label class="block text-sm font-medium">Phone</label>
                        <input type="text" id="contact-phone" value="${state.contactInfo.phone}" class="w-full p-2 border rounded"/>
                    </div>
                     <div>
                        <label class="block text-sm font-medium">Email</label>
                        <input type="email" id="contact-email" value="${state.contactInfo.email}" class="w-full p-2 border rounded"/>
                    </div>
                </div>
            </div>

            <div class="space-y-4">
                <h3 class="text-xl font-semibold text-gray-700">Edit About Page Content</h3>
                 <div class="bg-white p-4 rounded shadow-sm">
                    <textarea id="about-content" rows="10" class="w-full p-2 border rounded">${state.aboutContent}</textarea>
                    <p class="text-xs text-gray-500 mt-1">HTML tags can be used for formatting.</p>
                </div>
            </div>

            <button id="save-changes-btn" class="w-full bg-yellow-500 text-gray-900 font-bold py-3 rounded-lg hover:bg-yellow-600 transition-colors text-lg">
                Save All Changes
            </button>
        </div>
    `;
};


// --- EVENT HANDLERS & LOGIC ---

const navigateTo = (page) => {
    if (page && Object.values(Page).includes(page)) {
        currentPage = page;
        window.scrollTo(0, 0);
        renderApp();
    }
};

const handleContactSubmit = (e) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const name = (form.querySelector('#name') as HTMLInputElement).value;
    const email = (form.querySelector('#email') as HTMLInputElement).value;
    const message = (form.querySelector('#message') as HTMLTextAreaElement).value;
    console.log({ name, email, message });
    
    const container = document.getElementById('contact-form-container');
    container.innerHTML = `
        <div class="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-md" role="alert">
            <p class="font-bold">Thank you!</p>
            <p>Your message has been sent successfully.</p>
        </div>
    `;
    setTimeout(() => {
        // Re-render the form for subsequent submissions
        container.innerHTML = `
           <form id="contact-form" class="space-y-4">
                <div>
                    <label for="name" class="block text-sm font-medium text-gray-700">Your Name</label>
                    <input type="text" id="name" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"/>
                </div>
                 <div>
                    <label for="email" class="block text-sm font-medium text-gray-700">Your Email</label>
                    <input type="email" id="email" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"/>
                </div>
                 <div>
                    <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
                    <textarea id="message" rows="5" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"></textarea>
                </div>
                <button type="submit" class="w-full bg-yellow-500 text-gray-900 font-bold py-3 px-4 rounded-md hover:bg-yellow-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
                    Submit Message
                </button>
            </form>
        `;
        document.getElementById('contact-form').addEventListener('submit', handleContactSubmit);
    }, 5000);
};

const attachPageSpecificListeners = () => {
    if (currentPage === Page.CONTACT) {
        const form = document.getElementById('contact-form');
        if (form) form.addEventListener('submit', handleContactSubmit);
    }
    if (currentPage === Page.ADMIN) {
        document.getElementById('save-changes-btn').addEventListener('click', () => {
            // FIX: Cast elements to specific types (HTMLInputElement, HTMLTextAreaElement) to access their 'value' property.
            state.contactInfo.address = (document.getElementById('contact-address') as HTMLInputElement).value;
            state.contactInfo.phone = (document.getElementById('contact-phone') as HTMLInputElement).value;
            state.contactInfo.email = (document.getElementById('contact-email') as HTMLInputElement).value;
            state.aboutContent = (document.getElementById('about-content') as HTMLTextAreaElement).value;
            
            const msgContainer = document.getElementById('save-message-container');
            msgContainer.innerHTML = `
                <div class="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-md" role="alert">
                    <p>Changes saved successfully! (Changes will reset on page refresh)</p>
                </div>
            `;
            setTimeout(() => { msgContainer.innerHTML = ''; }, 5000);
        });

        document.getElementById('add-special-btn').addEventListener('click', () => {
            // FIX: Cast elements to HTMLInputElement to access their 'value' property.
            const titleInput = document.getElementById('new-special-title') as HTMLInputElement;
            const descInput = document.getElementById('new-special-desc') as HTMLInputElement;
            if (titleInput.value && descInput.value) {
                state.specials.push({
                    id: Date.now(),
                    title: titleInput.value,
                    description: descInput.value,
                    imageUrl: 'https://picsum.photos/seed/new-special/400/300'
                });
                titleInput.value = '';
                descInput.value = '';
                renderApp(); // Re-render to show new special
            } else {
                alert('Please fill in title and description.');
            }
        });
        
        document.querySelectorAll('.remove-special-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                // FIX: Cast e.target to HTMLElement to access 'dataset' property.
                const idToRemove = parseInt((e.target as HTMLElement).dataset.id, 10);
                state.specials = state.specials.filter(s => s.id !== idToRemove);
                renderApp(); // Re-render to show updated list
            });
        });
    }
};

// --- MAIN RENDER FUNCTION & INITIALIZATION ---

const renderApp = () => {
    if (!appContainer) {
        console.error('App container not found');
        return;
    }

    let pageHtml;
    switch (currentPage) {
        case Page.HOME: pageHtml = renderHomePage(); break;
        case Page.ABOUT: pageHtml = renderAboutPage(); break;
        case Page.PRODUCTS: pageHtml = renderProductsPage(); break;
        case Page.CONTACT: pageHtml = renderContactPage(); break;
        case Page.ADMIN: pageHtml = renderAdminPage(); break;
        default: pageHtml = renderHomePage();
    }

    appContainer.innerHTML = `
        ${renderHeader()}
        <main class="p-4 sm:p-6 md:p-8">
            ${pageHtml}
        </main>
        ${renderFooter()}
    `;

    // Attach general navigation listeners
    document.querySelectorAll('.nav-button').forEach(button => {
        button.addEventListener('click', (e) => {
            // FIX: Cast e.currentTarget to HTMLElement to access 'dataset' property.
            navigateTo((e.currentTarget as HTMLElement).dataset.page);
        });
    });

    // Attach listeners for content specific to the current page
    attachPageSpecificListeners();
};

// Initial render when the DOM is ready
document.addEventListener('DOMContentLoaded', renderApp);