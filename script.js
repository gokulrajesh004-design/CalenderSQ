// ── TOOLTIP ───────────────────────────────────────────────────────────────────
const tip    = document.getElementById('tip');
const tBar   = document.getElementById('tBar');
const tIco   = document.getElementById('tIco');
const tTitle = document.getElementById('tTitle');
const tDesc  = document.getElementById('tDesc');
const tCta   = document.getElementById('tCta');

function showTip(x, y, color, ico, title, desc, cta) {
  tBar.style.background = color;
  tIco.textContent  = ico   || '';
  tTitle.textContent= title;
  tDesc.textContent = desc;
  tCta.textContent  = cta   || '';
  tip.style.display = 'block';
  moveTip(x, y);
}
function moveTip(x, y) {
  const W = tip.offsetWidth, H = tip.offsetHeight;
  let lx = x + 16, ly = y - H - 12;
  if (ly < 8)              ly = y + 16;
  if (lx + W > window.innerWidth - 8) lx = x - W - 16;
  tip.style.left = lx + 'px';
  tip.style.top  = ly + 'px';
}
function hideTip() { tip.style.display = 'none'; }

document.addEventListener('mousemove', e => {
  if (tip.style.display === 'block') moveTip(e.clientX, e.clientY);
});

// ── ACTIVITY DATA ─────────────────────────────────────────────────────────────
const A = [
  {
    id: 'apr-c', month: 'Apr', layer: 'L1 — Monthly Campaign', lc: '#F5A623',
    emoji: '🌸', title: 'Workplace Wellness', sub: 'World Health Day',
    tip: 'Healthy menus, mindful breaks and feel-good food moments all April.',
    what: 'April marks World Health Day and we use this moment to shift the cafeteria experience towards wellbeing. Nutrient-dense menus, portion-mindful counters and mood-boosting ingredients make healthy choices feel like upgrades, not compromises. Because a well-nourished team is a high-performing team.',
    tags: ['Wellbeing', 'Healthy Menus', 'Mindful Eating', 'World Health Day'],
    fmt: [
      { i: '🥗', l: 'Wellness Menu Takeover',  d: 'Nutritionist-approved daily specials at a dedicated counter' },
      { i: '💧', l: 'Hydration Station',        d: 'Infused water, electrolyte drinks and detox options all month' },
      { i: '📋', l: 'Nutrition Info Cards',     d: 'Calorie & macro info displayed at every counter' },
    ],
  },
  {
    id: 'apr-t', month: 'Apr', layer: 'L4 — Food Truck', lc: '#9B59B6',
    emoji: '🚚', title: 'Food Truck', sub: 'April Edition',
    tip: 'A food truck rolling into the office courtyard with a fresh menu for the month.',
    what: 'A food truck parks in the office courtyard and brings a completely different cuisine experience right to the office. The food truck format creates a break from the ordinary and turns lunch into a shared outdoor moment.',
    tags: ['Food Truck', 'Courtyard', 'Live Cooking', 'April'],
    fmt: [
      { i: '🍽️', l: 'Live Counter',       d: 'Fresh dishes made to order at the truck window' },
      { i: '🌽', l: 'Vegetarian Options', d: 'Dedicated vegetarian and vegan choices every day' },
      { i: '🫓', l: 'Sides & Extras',     d: 'Freshly made accompaniments and seasonal add-ons' },
    ],
  },
  {
    id: 'may-c', month: 'May', layer: 'L1 — Monthly Campaign', lc: '#F5A623',
    emoji: '☀️', title: 'Beat the Summer', sub: 'Peak Summer Activation',
    tip: 'Cooling menus and refreshing pop-ups to keep energy high through peak summer.',
    what: 'May is peak summer and the cafeteria transforms into a cool refuge. Chilled beverages, cold-pressed juices, summer chaats, frozen desserts and light meals keep energy steady. Heat drains focus — a summer-optimised menu is a tangible act of employee care.',
    tags: ['Summer Menus', 'Cooling Foods', 'Refreshments', 'Seasonal'],
    fmt: [
      { i: '🧃', l: 'Juice & Cooler Bar',    d: 'Daily rotating cold-pressed juices, aam panna and nimboo pani' },
      { i: '🍦', l: 'Frozen Treats Counter', d: 'Kulfi, ice cream and sorbet station open all day' },
      { i: '🥙', l: 'Light Summer Plates',   d: 'Cold salads, wraps and chilled chaats for a lighter lunch' },
    ],
  },
  {
    id: 'may-g', month: 'May', layer: 'L3 — Game Days', lc: '#3DB87A',
    emoji: '🏏', title: 'Cricket Game Day', sub: 'IPL · Non-Food Engagement',
    tip: 'IPL themed engagement, themed snacks and cricket trivia fuel the office rivalry.',
    what: 'IPL season is peak cricket fever and we bring every bit of that energy into the cafeteria. Non-food engagement activities, match-day menus and team moments make the lunch hour an electric shared experience. Cricket is one of India\'s greatest unifiers.',
    tags: ['IPL', 'Cricket', 'Game Day', 'Non-Food Activity', 'Team Energy'],
    fmt: [
      { i: '🎯', l: 'Non-Food Engagement Activity', d: 'Interactive cricket-themed games and activities for the whole office' },
      { i: '🏆', l: 'Team Jersey Day',              d: 'Wear your team jersey — best outfit wins a prize' },
      { i: '🍟', l: 'Match-Day Snack Menu',         d: 'Stadium-style nachos, sliders, samosas and more' },
    ],
  },
  {
    id: 'jun-c', month: 'Jun', layer: 'L1 — Monthly Campaign', lc: '#F5A623',
    emoji: '🌿', title: 'Go Green Day', sub: 'World Environment Day',
    tip: 'Plant-based menus, reduced packaging and sustainable eating made effortless.',
    what: 'World Environment Day kicks off a month of sustainability-led food experiences. Plant-based dishes replace heavy options, single-use plastic disappears and every meal comes with a story about where ingredients were sourced. Sustainable choices should feel like upgrades, not sacrifices.',
    tags: ['Sustainability', 'Plant-Based', 'Eco-Friendly', 'World Environment Day'],
    fmt: [
      { i: '🌱', l: 'Plant-Based Menu Week',    d: 'A full week of inventive vegan and vegetarian specials' },
      { i: '♻️', l: 'Zero Plastic Counters',    d: 'Compostable packaging, no single-use plastics all month' },
      { i: '🌾', l: 'Local Sourcing Spotlight', d: 'Ingredients sourced within 100km — stories on menu boards' },
    ],
  },
  {
    id: 'jun-b', month: 'Jun', layer: 'L2 — Buzzar', lc: '#E8534A',
    emoji: '🌾', title: 'Millet & Earth Bites', sub: 'Jowar · Ragi · Bajra',
    tip: 'A food flea market celebrating ancient grains in their most creative modern forms.',
    what: 'The Buzzar spotlights India\'s ancient grains in delicious modern avatars. Artisan vendors set up stalls with ragi brownies, jowar wraps, bajra porridge bowls and millet street food — proof that traditional superfoods are anything but boring.',
    tags: ['Millets', 'Buzzar', 'Ancient Grains', 'Artisan Vendors', 'Flea Market'],
    fmt: [
      { i: '🛒', l: 'Multi-Vendor Stalls',  d: '5–8 artisan vendors with unique millet-based products' },
      { i: '🎙️', l: 'Live Vendor Stories', d: 'Founders share their journeys at the stall' },
      { i: '🎁', l: 'Take-Home Kits',       d: 'Branded millet meal kits available to buy and take home' },
    ],
  },
  {
    id: 'jun-p', month: 'Jun', layer: 'L5 — Purpose Led Pop-Up', lc: '#C0397A',
    emoji: '♻️', title: 'Sustainability Drive', sub: 'Zero waste · Eco ventures',
    tip: 'Eco-conscious brands and zero-waste entrepreneurs in a purpose-led marketplace.',
    what: 'Our first Purpose Pop-Up brings together eco-conscious entrepreneurs — zero-waste food brands, upcycled packaging startups and sustainability-first ventures. Employees vote with their wallets for a better world, right from the cafeteria.',
    tags: ['Purpose', 'Sustainability', 'Zero Waste', 'Eco Ventures', 'Social Impact'],
    fmt: [
      { i: '🌍', l: 'Eco Brand Marketplace',    d: '4–6 verified sustainable brands with live stalls' },
      { i: '💬', l: 'Founder Conversations',    d: 'Short talks from founders on their sustainability journey' },
      { i: '🌿', l: 'Green Pledge Wall',        d: 'Employees commit to one sustainability habit for the month' },
    ],
  },
  {
    id: 'jul-c', month: 'Jul', layer: 'L1 — Monthly Campaign', lc: '#F5A623',
    emoji: '🌧️', title: 'Monsoon Munch Fest', sub: 'Season Comfort Foods',
    tip: 'Warm pakoras, all-day chai and hearty seasonal curries for rainy afternoons.',
    what: 'The monsoon menu is an ode to comfort — warm, crispy, hearty and deeply satisfying. Chai flows all day, pakora counters appear near windows and seasonal curries are built to match the mood of a rainy afternoon. Monsoon is one of India\'s most nostalgic seasons.',
    tags: ['Monsoon', 'Comfort Food', 'Seasonal', 'Chai', 'Pakoras'],
    fmt: [
      { i: '☕', l: 'All-Day Chai Counter',      d: 'Masala chai, ginger tea and herbal infusions on tap' },
      { i: '🍳', l: 'Live Pakora Station',       d: 'Fresh batata vada, onion pakoras and bhajiya to order' },
      { i: '🍲', l: 'Seasonal Soup & Curry Bar', d: 'Daily rotating hearty soups and monsoon-special curries' },
    ],
  },
  {
    id: 'jul-t', month: 'Jul', layer: 'L4 — Food Truck', lc: '#9B59B6',
    emoji: '🚚', title: 'Food Truck', sub: 'July Edition',
    tip: 'A food truck rolling into the office courtyard with a fresh menu for the month.',
    what: 'A food truck parks in the office courtyard bringing a completely different cuisine experience. The food truck format creates a break from the ordinary and turns the monsoon lunch hour into something to look forward to.',
    tags: ['Food Truck', 'Courtyard', 'Live Cooking', 'July'],
    fmt: [
      { i: '🍽️', l: 'Live Counter',       d: 'Fresh dishes made to order at the truck window' },
      { i: '🌽', l: 'Vegetarian Options', d: 'Dedicated vegetarian and vegan choices every day' },
      { i: '🫓', l: 'Sides & Extras',     d: 'Freshly made accompaniments and seasonal add-ons' },
    ],
  },
  {
    id: 'aug-c', month: 'Aug', layer: 'L1 — Monthly Campaign', lc: '#F5A623',
    emoji: '🇮🇳', title: 'Flavours of India', sub: 'Independence Day',
    tip: 'Regional specials from across India — a culinary journey all month long.',
    what: 'August is a love letter to Indian food in all its diversity. Each week spotlights a different region — South, North, East, West — with authentic recipes, regional street food and stories that connect every plate to its cultural roots.',
    tags: ['Independence Day', 'Regional Cuisine', 'Indian Food', 'Cultural', 'Heritage'],
    fmt: [
      { i: '🗺️', l: 'Regional Week Rotation',     d: '4 weeks, 4 regions — South, North, East and West India' },
      { i: '🍛', l: 'Authentic Regional Specials', d: 'Recipes sourced from each region\'s culinary traditions' },
      { i: '📖', l: 'Food Story Boards',           d: 'Each dish comes with a card explaining its regional origin' },
    ],
  },
  {
    id: 'aug-p', month: 'Aug', layer: 'L5 — Purpose Led Pop-Up', lc: '#C0397A',
    emoji: '🛖', title: 'Local Entrepreneurs', sub: 'Homegrown brands & makers',
    tip: 'A marketplace giving homegrown food brands a platform to reach your workforce.',
    what: 'This pop-up celebrates local hustle — homegrown food brands, neighbourhood artisans and city-based makers who deserve a bigger audience. They set up shop in the cafeteria and employees discover the best of what\'s being built right in their own city.',
    tags: ['Local', 'Homegrown', 'Entrepreneurs', 'Community', 'Small Business'],
    fmt: [
      { i: '🏪', l: 'Local Brand Marketplace', d: '5–10 local food and lifestyle brands with live stalls' },
      { i: '🤝', l: 'Founder Meet & Greet',    d: 'Founders present to share their story and samples' },
      { i: '📲', l: 'Discovery Cards',         d: 'QR codes linking to each brand\'s online presence' },
    ],
  },
  {
    id: 'sep-c', month: 'Sep', layer: 'L1 — Monthly Campaign', lc: '#F5A623',
    emoji: '🎓', title: 'Mentors Week', sub: 'Guidance & Gratitude',
    tip: 'Coffee nooks, shared lunches and gratitude walls for meaningful connections.',
    what: 'September honours the mentors and colleagues who invest in people\'s growth. The cafeteria creates quiet coffee nooks, shared lunch formats and a gratitude wall where employees publicly thank those who shaped them.',
    tags: ['Mentorship', 'Gratitude', 'Culture', 'Team Bonding', 'Leadership'],
    fmt: [
      { i: '☕', l: 'Mentor Coffee Moments', d: 'Reserved café corner for mentor-mentee catch-ups all month' },
      { i: '💌', l: 'Gratitude Wall',        d: 'Physical wall where employees leave appreciation notes' },
      { i: '🍽️', l: 'Team Lunch Formats',  d: 'Pre-booked team lunches with curated shared-plate menus' },
    ],
  },
  {
    id: 'sep-b', month: 'Sep', layer: 'L2 — Buzzar', lc: '#E8534A',
    emoji: '☔', title: 'Monsoon Snack Market', sub: 'Bhajiya · Hot Soups',
    tip: 'A buzzing indoor flea market with bhajiya stalls, soups and monsoon snacks.',
    what: 'The Buzzar goes full monsoon — a buzzing indoor flea market with vendors selling bhajiya of every kind, piping hot soups, masala corn, roasted peanuts and chai. Monsoon is the most communal eating season in India.',
    tags: ['Buzzar', 'Monsoon', 'Bhajiya', 'Hot Soups', 'Snack Market'],
    fmt: [
      { i: '🍲', l: 'Soup Vendor Row',         d: '5 soup vendors with rotating daily specials' },
      { i: '🍳', l: 'Live Bhajiya Counters',   d: 'Fresh pakoras, vada pav and bhajiya made on the spot' },
      { i: '🌽', l: 'Monsoon Munchies Stalls', d: 'Roasted corn, masala peanuts, chilli muri and more' },
    ],
  },
  {
    id: 'oct-c', month: 'Oct', layer: 'L1 — Monthly Campaign', lc: '#F5A623',
    emoji: '🪔', title: 'Dandiya & Delicacies', sub: 'Navratri · Festive Spirit',
    tip: 'Festive fasting menus, dandiya evenings and seasonal sweets for the whole office.',
    what: 'October brings the festive season roaring in. The cafeteria transforms with warm lighting, floral decor and a dedicated fasting-friendly menu. A well-executed Navratri celebration creates belonging and shared joy that people carry long after the month ends.',
    tags: ['Navratri', 'Festive', 'Dandiya', 'Fasting Menu', 'Sweets'],
    fmt: [
      { i: '🥘', l: 'Fasting-Friendly Menu',   d: 'Singhara, sabudana, kuttu and sendha namak specials all week' },
      { i: '🪔', l: 'Festive Décor Experience', d: 'Diyas, marigolds and rangoli throughout the cafeteria' },
      { i: '🍬', l: 'Mithai Counter',           d: 'Traditional sweets and ladoos gifted to every employee' },
    ],
  },
  {
    id: 'oct-p', month: 'Oct', layer: 'L5 — Purpose Led Pop-Up', lc: '#C0397A',
    emoji: '👩‍💼', title: 'Women-Led Ventures', sub: 'She builds · She leads',
    tip: 'Food, products and stories from ventures founded and led by women.',
    what: 'October\'s Purpose Pop-Up shines a full spotlight on women-led businesses. Employees discover, taste, buy and hear directly from the founders. Women entrepreneurs are underrepresented in retail and discovery — this pop-up bridges that gap directly.',
    tags: ['Women-Led', 'Purpose', 'Entrepreneurship', 'Empowerment', 'Social Impact'],
    fmt: [
      { i: '👩‍🍳', l: 'Women Founder Stalls',    d: '6–8 verified women-led brands with live demos and samples' },
      { i: '🎤',   l: 'Founder Spotlight Talk', d: 'Panel discussion with 2–3 founders on their journey' },
      { i: '🛍️',  l: 'Shop & Support',          d: 'All products available to purchase directly at the stall' },
    ],
  },
  {
    id: 'nov-c', month: 'Nov', layer: 'L1 — Monthly Campaign', lc: '#F5A623',
    emoji: '✨', title: 'Lights & Delights', sub: 'Diwali · Sparkle & Sweets',
    tip: 'Mithai counters, festive decor, gifting and celebratory menus for Diwali.',
    what: 'Diwali is the biggest celebration of the year and the cafeteria goes all out. Ornate decorations, a premium mithai counter, festive thali specials and a gifting moment make every employee feel celebrated and seen.',
    tags: ['Diwali', 'Festive', 'Mithai', 'Celebration', 'Gifting'],
    fmt: [
      { i: '🪔', l: 'Diwali Mithai Counter',  d: 'Premium sweets, dry fruit boxes and traditional Indian mithai' },
      { i: '✨', l: 'Festive Thali Special',  d: 'Limited-edition Diwali thali with celebratory dishes' },
      { i: '🎁', l: 'Employee Gift Moment',  d: 'Every employee receives a curated festive sweet box' },
    ],
  },
  {
    id: 'dec-g', month: 'Nov', layer: 'L3 — Game Days', lc: '#3DB87A',
    emoji: '🏎️', title: 'F1 Game Day', sub: 'Non-Food Engagement · Pit stop bites',
    tip: 'F1 themed engagement, pit-stop menu and speed-round trivia in the cafeteria.',
    what: 'The Formula 1 season brings race-day energy to the cafeteria. A speed-inspired pit-stop menu rolls out and the lunch hour becomes a high-octane shared experience with non-food engagement activities and team trivia.',
    tags: ['F1', 'Formula 1', 'Game Day', 'Race Day', 'Sports'],
    fmt: [
      { i: '🎯', l: 'Non-Food Engagement Activity', d: 'Interactive F1-themed games, trivia and pit-stop challenges for the office' },
      { i: '🍔', l: 'Pit Stop Menu',               d: 'Race-day inspired food — fast, bold and satisfying' },
      { i: '🏆', l: 'F1 Trivia Contest',           d: 'Quick-fire trivia rounds with prizes' },
    ],
  },
  {
    id: 'nov-t', month: 'Nov', layer: 'L4 — Food Truck', lc: '#9B59B6',
    emoji: '🚚', title: 'Food Truck', sub: 'November Edition',
    tip: 'A food truck rolling into the office courtyard with a fresh menu for the month.',
    what: 'A food truck parks in the office courtyard bringing a completely different cuisine experience. The festive season energy carries into lunch with a truck that creates excitement and a social atmosphere outside the regular cafeteria routine.',
    tags: ['Food Truck', 'Courtyard', 'Live Cooking', 'November'],
    fmt: [
      { i: '🍽️', l: 'Live Counter',       d: 'Fresh dishes made to order at the truck window' },
      { i: '🌽', l: 'Vegetarian Options', d: 'Dedicated vegetarian and vegan choices every day' },
      { i: '🫓', l: 'Sides & Extras',     d: 'Freshly made accompaniments and seasonal add-ons' },
    ],
  },
  {
    id: 'dec-c', month: 'Dec', layer: 'L1 — Monthly Campaign', lc: '#F5A623',
    emoji: '🎄', title: 'Wish-mas Festival', sub: 'Year-End Festive Cheer',
    tip: 'Festive spreads, Secret Santa food gifts and a warm send-off into the new year.',
    what: 'The final month deserves a grand celebration. Wish-mas is a month-long festive programme — special menus, Secret Santa food gifting, a best-dish-of-the-year wall and a year-end communal feast. How a year ends shapes how people feel about returning.',
    tags: ['Year-End', 'Festive', 'Christmas', 'New Year', 'Celebration'],
    fmt: [
      { i: '🎅', l: 'Secret Santa Food Gifts', d: 'Employees exchange curated food hampers through the cafeteria' },
      { i: '🍽️', l: 'Year-End Grand Feast',   d: 'Special communal feast menu on the last working Friday' },
      { i: '🏆', l: 'Dish of the Year Wall',  d: 'Employees vote for their favourite cafeteria dish of 2026' },
    ],
  },
  {
    id: 'dec-b', month: 'Dec', layer: 'L2 — Buzzar', lc: '#E8534A',
    emoji: '🔥', title: 'Winter Warmth Bazaar', sub: 'Gajak · Hot Cocoa',
    tip: 'A cozy winter market with gajak, rewri, hot cocoa and comfort vendors.',
    what: 'The most cozy Buzzar of the year — a winter market filled with vendors selling gajak, rewri, roasted dry fruits, artisan hot chocolates and mulled drinks. The Buzzar format in December creates an atmosphere that employees look forward to every year.',
    tags: ['Winter', 'Buzzar', 'Gajak', 'Hot Cocoa', 'Cozy'],
    fmt: [
      { i: '🍫', l: 'Artisan Hot Cocoa Bar',        d: 'Single-origin hot chocolate with creative winter toppings' },
      { i: '🍬', l: 'Traditional Winter Sweets',    d: 'Gajak, rewri, til laddoo and seasonal mithai stalls' },
      { i: '🥜', l: 'Roasted Nut & Dry Fruit Stalls', d: 'Premium roasted mixes and dry fruit gifting options' },
    ],
  },
  {
    id: 'jan-c', month: 'Jan', layer: 'L1 — Monthly Campaign', lc: '#F5A623',
    emoji: '🪁', title: 'Festival of Kites', sub: 'Sankranti · Heritage',
    tip: 'Til laddoos, pongal stations and regional festival food for Sankranti.',
    what: 'Makar Sankranti kicks off the new year with colour, culture and community. The cafeteria celebrates with traditional til-gul laddoos, fresh pongal stations, sugarcane juice and regional festive dishes. Starting the new year with cultural celebration sets a warm, connected tone.',
    tags: ['Sankranti', 'Heritage', 'Pongal', 'Kites', 'New Year'],
    fmt: [
      { i: '🍚', l: 'Pongal Station',          d: 'Fresh sweet and savoury pongal prepared live' },
      { i: '🍬', l: 'Til-Gul Laddoo Bar',      d: 'Traditional sesame and jaggery sweets for all employees' },
      { i: '🌿', l: 'Regional Sankranti Dishes', d: 'Festive specials from Tamil Nadu, Gujarat, Maharashtra & more' },
    ],
  },
  {
    id: 'jan-t', month: 'Jan', layer: 'L4 — Food Truck', lc: '#9B59B6',
    emoji: '🚚', title: 'Food Truck', sub: 'January Edition',
    tip: 'A food truck rolling into the office courtyard with a fresh menu for the month.',
    what: 'A food truck kicks off the new year in the office courtyard — bringing a fresh cuisine experience that makes January feel like anything but a slow start.',
    tags: ['Food Truck', 'Courtyard', 'Live Cooking', 'January'],
    fmt: [
      { i: '🍽️', l: 'Live Counter',       d: 'Fresh dishes made to order at the truck window' },
      { i: '🌽', l: 'Vegetarian Options', d: 'Dedicated vegetarian and vegan choices every day' },
      { i: '🫓', l: 'Sides & Extras',     d: 'Freshly made accompaniments and seasonal add-ons' },
    ],
  },
  {
    id: 'feb-c', month: 'Feb', layer: 'L1 — Monthly Campaign', lc: '#F5A623',
    emoji: '💛', title: 'Dil-Licious February', sub: 'Wellness & Self-Love',
    tip: 'Heart-healthy menus, mood-boosting specials and small acts of care all month.',
    what: 'February is about nourishing yourself — body and soul. The menu leans into mood-boosting, heart-healthy dishes. Dark chocolate stations appear, comfort foods take centre stage and small acts of care make every visit feel personal.',
    tags: ['Self-Love', 'Wellness', 'Heart-Healthy', 'Mood Food', 'February'],
    fmt: [
      { i: '❤️', l: 'Heart-Healthy Daily Specials', d: 'Nutritionist-approved comfort food that\'s good for you' },
      { i: '🍫', l: 'Dark Chocolate Corner',       d: 'Daily artisan chocolate station — mood-boosting and guilt-light' },
      { i: '💌', l: 'Care Notes on Every Tray',    d: 'Hand-written affirmations placed on every tray lining' },
    ],
  },
  {
    id: 'feb-p', month: 'Feb', layer: 'L5 — Purpose Led Pop-Up', lc: '#C0397A',
    emoji: '🤝', title: 'Differently Abled Ventures', sub: 'Inclusivity in action',
    tip: 'A marketplace powered entirely by differently abled entrepreneurs.',
    what: 'February\'s Purpose Pop-Up is our most meaningful — a marketplace entirely powered by differently abled entrepreneurs. Every brand is built by someone who turned a challenge into a business. True inclusivity means creating economic opportunity, not just awareness.',
    tags: ['Inclusivity', 'Differently Abled', 'Purpose', 'Social Impact', 'Empowerment'],
    fmt: [
      { i: '🏪', l: 'Inclusive Entrepreneur Market', d: '6–8 ventures run by differently abled founders' },
      { i: '🎙️', l: 'Story Wall & Interviews',      d: 'Video stories of each founder playing at the pop-up' },
      { i: '🛍️', l: 'Buy & Impact Directly',        d: '100% of proceeds go directly to the founders' },
    ],
  },
  {
    id: 'mar-c', month: 'Mar', layer: 'L1 — Monthly Campaign', lc: '#F5A623',
    emoji: '🎨', title: 'Rangotsav', sub: 'Holi · Color Carnival',
    tip: 'Vibrant themed menus, thandai stations and colour-inspired dishes for Holi.',
    what: 'Rangotsav is the cafeteria\'s most colourful month. The menu is built around colour — red beet dishes, orange turmeric specials, green spinach creations — culminating in a Holi celebration with thandai, gujiya and a dry-colour station in the courtyard.',
    tags: ['Holi', 'Festive', 'Colourful', 'Thandai', 'Celebration'],
    fmt: [
      { i: '🎨', l: 'Colour-Coded Menu Week', d: 'Each day features a colour theme — red, yellow, green, orange' },
      { i: '🥛', l: 'Thandai Station',        d: 'Traditional thandai served chilled with Holi special garnishes' },
      { i: '🥮', l: 'Gujiya & Festive Sweets', d: 'House-made gujiya, malpua and holi mithai all week' },
    ],
  },
  {
    id: 'mar-b', month: 'Mar', layer: 'L2 — Buzzar', lc: '#E8534A',
    emoji: '🛒', title: 'Street Food Fiesta', sub: 'Pani Puri · Chaat',
    tip: 'The Buzzar goes full street — pani puri, chaat, vada pav and chaotic fun.',
    what: 'The year\'s final Buzzar goes full street — a sprawling indoor flea market replicating the noise, energy and flavour of India\'s best street food. Pani puri, chaat counters, vada pav stalls and dosa carts packed into the cafeteria.',
    tags: ['Street Food', 'Buzzar', 'Pani Puri', 'Chaat', 'Flea Market'],
    fmt: [
      { i: '🫙', l: 'Pani Puri Wallah',      d: 'Live pani puri counter with 3 flavour variations' },
      { i: '🥗', l: 'Chaat Counter Medley',  d: 'Bhel, sev puri, dahi puri and papdi chaat made fresh' },
      { i: '🥙', l: 'Vada Pav & More',       d: 'Mumbai-style vada pav, dabeli and regional street snacks' },
    ],
  },
];

// ── MONTH LAYOUT ──────────────────────────────────────────────────────────────
const MONTHS = [
  { name: 'Apr', num: '04', ids: ['apr-c', null,    null,    'apr-t', null    ] },
  { name: 'May', num: '05', ids: ['may-c', null,    'may-g', null,    null    ] },
  { name: 'Jun', num: '06', ids: ['jun-c', 'jun-b', null,    null,    'jun-p' ] },
  { name: 'Jul', num: '07', ids: ['jul-c', null,    null,    'jul-t', null    ] },
  { name: 'Aug', num: '08', ids: ['aug-c', null,    null,    null,    'aug-p' ] },
  { name: 'Sep', num: '09', ids: ['sep-c', 'sep-b', null,    null,    null    ] },
  { name: 'Oct', num: '10', ids: ['oct-c', null,    null,    null,    'oct-p' ] },
  { name: 'Nov', num: '11', ids: ['nov-c', null,    'dec-g', 'nov-t', null    ] },
  { name: 'Dec', num: '12', ids: ['dec-c', 'dec-b', null,    null,    null    ] },
  { name: 'Jan', num: '01', ids: ['jan-c', null,    null,    'jan-t', null    ] },
  { name: 'Feb', num: '02', ids: ['feb-c', null,    null,    null,    'feb-p' ] },
  { name: 'Mar', num: '03', ids: ['mar-c', 'mar-b', null,    null,    null    ] },
];

const RC = ['cell-r1','cell-r2','cell-r3','cell-r4','cell-r5'];
const CC = ['card-campaign','card-buzzar','card-gameday','card-truck','card-purpose'];
const aMap = {};
A.forEach(a => aMap[a.id] = a);

// ── BUILD CALENDAR ────────────────────────────────────────────────────────────
const grid = document.getElementById('monthsGrid');
MONTHS.forEach(m => {
  const col = document.createElement('div');
  col.className = 'month-col';
  col.innerHTML = `<div class="mhdr"><span class="mname">${m.name}</span><span class="mnum">${m.num}</span></div>`;
  m.ids.forEach((id, i) => {
    const cell = document.createElement('div');
    cell.className = `cell ${RC[i]}`;
    if (id && aMap[id]) {
      const a = aMap[id];
      cell.innerHTML = `<div class="card ${CC[i]}" data-id="${id}">
        <span class="cico">${a.emoji}</span>
        <span class="ctitle">${a.title}</span>
        <span class="csub">${a.sub}</span>
      </div>`;
    } else {
      cell.innerHTML = `<div class="empty-wrap"><div class="edot"></div></div>`;
    }
    col.appendChild(cell);
  });
  grid.appendChild(col);
});

// ── CARD TOOLTIPS ─────────────────────────────────────────────────────────────
document.querySelectorAll('.card[data-id]').forEach(c => {
  const a = aMap[c.dataset.id];
  c.addEventListener('mouseenter', e => showTip(e.clientX, e.clientY, a.lc, a.emoji, a.title, a.tip, 'Click to explore →'));
  c.addEventListener('mouseleave', hideTip);
});

// ── LAYER LABEL TOOLTIPS ──────────────────────────────────────────────────────
document.querySelectorAll('.lbl[data-layer]').forEach(l => {
  l.addEventListener('mouseenter', e => showTip(e.clientX, e.clientY, l.dataset.color, '', l.dataset.layer, l.dataset.desc, ''));
  l.addEventListener('mouseleave', hideTip);
});

// ── DETAIL PAGE ───────────────────────────────────────────────────────────────
document.addEventListener('click', e => {
  const card = e.target.closest('.card[data-id]');
  if (!card) return;
  hideTip();
  const a = aMap[card.dataset.id];
  if (!a) return;

  document.getElementById('dBc').textContent = a.month + ' · ' + a.title;

  const badge = document.getElementById('dBadge');
  badge.textContent = a.layer;
  badge.style.cssText = `background:${a.lc}18;border:1px solid ${a.lc}55;color:${a.lc};display:inline-flex;align-items:center;gap:6px;padding:5px 12px;border-radius:20px;font-size:10px;font-weight:600;letter-spacing:.5px;margin-bottom:16px;`;

  document.getElementById('dEmoji').textContent = a.emoji;
  document.getElementById('dTitle').textContent = a.title;
  document.getElementById('dSub').textContent   = a.month + ' 2026 · ' + a.sub;
  document.getElementById('dWhat').textContent  = a.what;

  document.getElementById('dTags').innerHTML = a.tags
    .map(t => `<span class="dtag">${t}</span>`).join('');

  document.getElementById('dFormat').innerHTML = a.fmt
    .map(f => `<div class="format-item">
      <span class="fmat-ico">${f.i}</span>
      <div class="fmat-body"><strong>${f.l}</strong><span>${f.d}</span></div>
    </div>`).join('');

  document.querySelectorAll('#dTopbar span').forEach(s => s.style.background = a.lc);
  document.getElementById('view-detail').scrollTop = 0;
  document.body.classList.add('detail-open');
});

document.getElementById('backBtn').addEventListener('click', () => {
  document.body.classList.remove('detail-open');
});
