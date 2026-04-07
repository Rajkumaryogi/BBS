export const menuItems = [
  // STARTERS
  { id: 1,  name: "Boiled Egg",                    category: "Starters",         price: 20  },
  { id: 2,  name: "Roasted Chicken (Half 6pcs)",   category: "Starters",         price: 230 },
  { id: 3,  name: "Roasted Chicken (Full 12pcs)",  category: "Starters",         price: 400 },
  { id: 4,  name: "Chicken Tikka (Half 4pcs)",     category: "Starters",         price: 180 },
  { id: 5,  name: "Chicken Tikka (Full 8pcs)",     category: "Starters",         price: 350 },
  { id: 6,  name: "Soya Chaap (Half 4pcs)",        category: "Starters",         price: 160 },
  { id: 7,  name: "Soya Chaap (Full 8pcs)",        category: "Starters",         price: 300 },
  { id: 8,  name: "Fish Tikka (Half 4pcs)",        category: "Starters",         price: 220 },
  { id: 9,  name: "Fish Tikka (Full 8pcs)",        category: "Starters",         price: 400 },
  { id: 10, name: "Paneer Tikka (Half 4pcs)",      category: "Starters",         price: 140 },
  { id: 11, name: "Paneer Tikka (Full 8pcs)",      category: "Starters",         price: 250 },
  { id: 12, name: "Peanut Masala",                 category: "Starters",         price: 60  },
  { id: 13, name: "Roasted Papad",                 category: "Starters",         price: 15  },
  { id: 14, name: "Masala Papad",                  category: "Starters",         price: 30  },
  { id: 15, name: "Green Salad",                   category: "Starters",         price: 70  },
  { id: 16, name: "Green Chutney",                 category: "Starters",         price: 10  },

  // HANDI MUTTON
  { id: 17, name: "Ahuna Handi Mutton (Qtr)",      category: "Handi Mutton",     price: 220  },
  { id: 18, name: "Ahuna Handi Mutton (Half)",     category: "Handi Mutton",     price: 430  },
  { id: 19, name: "Ahuna Handi Mutton (Full)",     category: "Handi Mutton",     price: 800  },
  { id: 20, name: "Champaran Handi Mutton (Half)", category: "Handi Mutton",     price: 470  },
  { id: 21, name: "Champaran Handi Mutton (Full)", category: "Handi Mutton",     price: 900  },
  { id: 22, name: "Desi Mutton (Qtr)",             category: "Handi Mutton",     price: 270  },
  { id: 23, name: "Desi Mutton (Half)",            category: "Handi Mutton",     price: 530  },
  { id: 24, name: "Desi Mutton (Full)",            category: "Handi Mutton",     price: 1000 },

  // CHICKEN
  { id: 25, name: "Handi Chicken (3pcs)",          category: "Chicken",          price: 250 },
  { id: 26, name: "Handi Chicken (6pcs)",          category: "Chicken",          price: 450 },
  { id: 27, name: "Handi Chicken (12pcs)",         category: "Chicken",          price: 900 },
  { id: 28, name: "Chicken Changeji (3pcs)",       category: "Chicken",          price: 250 },
  { id: 29, name: "Chicken Changeji (6pcs)",       category: "Chicken",          price: 450 },
  { id: 30, name: "Chicken Changeji (12pcs)",      category: "Chicken",          price: 900 },

  // VEG MAIN COURSE
  { id: 31, name: "Handi Dal (Half)",              category: "Veg Main Course",  price: 120 },
  { id: 32, name: "Handi Dal (Full)",              category: "Veg Main Course",  price: 200 },
  { id: 33, name: "Handi Paneer (Half)",           category: "Veg Main Course",  price: 180 },
  { id: 34, name: "Handi Paneer (Full)",           category: "Veg Main Course",  price: 350 },
  { id: 35, name: "Egg Curry Veg (Half)",          category: "Veg Main Course",  price: 130 },
  { id: 36, name: "Egg Curry Veg (Full)",          category: "Veg Main Course",  price: 250 },
  { id: 37, name: "Sev Tamatar (Half)",            category: "Veg Main Course",  price: 120 },
  { id: 38, name: "Sev Tamatar (Full)",            category: "Veg Main Course",  price: 200 },

  // EGG
  { id: 39, name: "Egg Curry (2pcs)",              category: "Egg",              price: 150 },
  { id: 40, name: "Egg Curry (4pcs)",              category: "Egg",              price: 250 },

  // RICE
  { id: 41, name: "Steam Rice",                    category: "Rice",             price: 80  },
  { id: 42, name: "Jeera Rice",                    category: "Rice",             price: 100 },

  // BIRYANI
  { id: 43, name: "Chicken Biryani (2pcs)",        category: "Biryani",          price: 150 },
  { id: 44, name: "Chicken Biryani (4pcs)",        category: "Biryani",          price: 300 },

  // RAITA & BEVERAGES
  { id: 45, name: "Bundi Raita",                   category: "Raita & Beverages", price: 80  },
  { id: 46, name: "Veg Raita",                     category: "Raita & Beverages", price: 100 },
  { id: 47, name: "Chhachh",                       category: "Raita & Beverages", price: 30  },
  { id: 48, name: "Lassi (Sweet)",                 category: "Raita & Beverages", price: 50  },
  { id: 49, name: "Curd (Dahi)",                   category: "Raita & Beverages", price: 60  },

  // CHULHA SPECIAL
  { id: 50, name: "Tawa Roti (Plain)",             category: "Chulha Special",   price: 15  },
  { id: 51, name: "Tawa Roti (Butter)",            category: "Chulha Special",   price: 20  },
  { id: 52, name: "Bajra Roti (Plain)",            category: "Chulha Special",   price: 30  },
  { id: 53, name: "Bajra Roti (Butter)",           category: "Chulha Special",   price: 40  },
  { id: 54, name: "Bejad Roti (Plain)",            category: "Chulha Special",   price: 40  },
  { id: 55, name: "Bejad Roti (Butter)",           category: "Chulha Special",   price: 50  },
  { id: 56, name: "Makka Roti (Plain)",            category: "Chulha Special",   price: 40  },
  { id: 57, name: "Makka Roti (Butter)",           category: "Chulha Special",   price: 50  },
  { id: 58, name: "Bati (Plain)",                  category: "Chulha Special",   price: 20  },
  { id: 59, name: "Bati (Butter)",                 category: "Chulha Special",   price: 30  },

  // TANDOOR SPECIAL
  { id: 60, name: "Tandoor Roti",                  category: "Tandoor Special",  price: 15  },
  { id: 61, name: "Tandoor Butter Roti",           category: "Tandoor Special",  price: 20  },
  { id: 62, name: "Missi Roti",                    category: "Tandoor Special",  price: 40  },
  { id: 63, name: "Onion Roti",                    category: "Tandoor Special",  price: 50  },
  { id: 64, name: "Plain Naan",                    category: "Tandoor Special",  price: 40  },
  { id: 65, name: "Butter Naan",                   category: "Tandoor Special",  price: 50  },
  { id: 66, name: "Garlic Naan",                   category: "Tandoor Special",  price: 60  },
  { id: 67, name: "Laccha Patatha",                category: "Tandoor Special",  price: 50  },

  // EXTRAS
  { id: 68, name: "Pani Bottle",                   category: "Extras",           price: 20  },
];

export const categories = [
  "Starters",
  "Handi Mutton",
  "Chicken",
  "Veg Main Course",
  "Egg",
  "Rice",
  "Biryani",
  "Raita & Beverages",
  "Chulha Special",
  "Tandoor Special",
  "Extras",
];
