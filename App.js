import React from "react";
import ReactDOM from "react-dom/client";
import { IoCart,IoSearch , IoHelpBuoyOutline} from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { BiSolidOffer } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";

const foodList = [
    {
      "id": "762797",
      "imageId": "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png",
      "action": {
        "link": "https://www.swiggy.com/collections/83637?collection_id=83637&search_context=burger&tags=layout_CCS_Burger&type=rcv2",
        "text": "Burgers",
        "type": "WEBLINK"
      },
      "entityType": "BANNER",
      "accessibility": {
        "altText": "restaurants curated for burger",
        "altTextCta": "open"
      },
      "entityId": "swiggy://collectionV2?collection_id=83637&tags=layout_CCS_Burger&search_context=burger",
      "frequencyCapping": {}
    },
    {
      "id": "750582",
      "imageId": "v1675667625/PC_Creative%20refresh/North_Indian_4.png",
      "action": {
        "link": "https://www.swiggy.com/collections/83645?collection_id=83645&search_context=northindian&tags=layout_CCS_NorthIndian&type=rcv2",
        "text": "North Indian",
        "type": "WEBLINK"
      },
      "entityType": "BANNER",
      "accessibility": {
        "altText": "restaurants curated for north indian",
        "altTextCta": "open"
      },
      "entityId": "swiggy://collectionV2?collection_id=83645&tags=layout_CCS_NorthIndian&search_context=northindian",
      "frequencyCapping": {}
    },
    {
      "id": "750580",
      "imageId": "v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png",
      "action": {
        "link": "https://www.swiggy.com/collections/83644?collection_id=83644&search_context=pizza&tags=layout_CCS_Pizza&type=rcv2",
        "text": "pizzas",
        "type": "WEBLINK"
      },
      "entityType": "BANNER",
      "accessibility": {
        "altText": "restaurants curated for pizza",
        "altTextCta": "open"
      },
      "entityId": "swiggy://collectionV2?collection_id=83644&tags=layout_CCS_Pizza&search_context=pizza",
      "frequencyCapping": {}
    },
    {
      "id": "750223",
      "imageId": "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rolls.png",
      "action": {
        "link": "https://www.swiggy.com/collections/83670?collection_id=83670&tags=layout_CCS_Rolls&type=rcv2",
        "text": "Rolls",
        "type": "WEBLINK"
      },
      "entityType": "BANNER",
      "accessibility": {
        "altText": "restaurants curated for roll",
        "altTextCta": "open"
      },
      "entityId": "swiggy://collectionV2?collection_id=83670&tags=layout_CCS_Rolls",
      "frequencyCapping": {}
    },
    {
      "id": "750592",
      "imageId": "v1675667625/PC_Creative%20refresh/Biryani_2.png",
      "action": {
        "link": "https://www.swiggy.com/collections/83649?collection_id=83649&search_context=biryani&tags=layout_CCS_Biryani&type=rcv2",
        "text": "Biryani",
        "type": "WEBLINK"
      },
      "entityType": "BANNER",
      "accessibility": {
        "altText": "restaurants curated for biryani",
        "altTextCta": "open"
      },
      "entityId": "swiggy://collectionV2?collection_id=83649&tags=layout_CCS_Biryani&search_context=biryani",
      "frequencyCapping": {}
    },
    {
      "id": "750588",
      "imageId": "v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png",
      "action": {
        "link": "https://www.swiggy.com/collections/83647?collection_id=83647&tags=layout_CCS_Chinese&type=rcv2",
        "text": "Chinese",
        "type": "WEBLINK"
      },
      "entityType": "BANNER",
      "accessibility": {
        "altText": "restaurant curated for chinese",
        "altTextCta": "open"
      },
      "entityId": "swiggy://collectionV2?collection_id=83647&tags=layout_CCS_Chinese",
      "frequencyCapping": {}
    },
    {
      "id": "750584",
      "imageId": "v1675667626/PC_Creative%20refresh/South_Indian_4.png",
      "action": {
        "link": "https://www.swiggy.com/collections/83646?collection_id=83646&search_context=southindian&tags=layout_CCS_SouthIndian&type=rcv2",
        "text": "South Indian",
        "type": "WEBLINK"
      },
      "entityType": "BANNER",
      "accessibility": {
        "altText": "restaurants curated for south indian",
        "altTextCta": "open"
      },
      "entityId": "swiggy://collectionV2?collection_id=83646&tags=layout_CCS_SouthIndian&search_context=southindian",
      "frequencyCapping": {}
    },
    {
      "id": "749874",
      "imageId": "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png",
      "action": {
        "link": "https://www.swiggy.com/collections/83656?collection_id=83656&tags=layout_CCS_Cake&type=rcv2",
        "text": "Cakes",
        "type": "WEBLINK"
      },
      "entityType": "BANNER",
      "accessibility": {
        "altText": "restaurant curated for cakes",
        "altTextCta": "open"
      },
      "entityId": "swiggy://collectionV2?collection_id=83656&tags=layout_CCS_Cake",
      "frequencyCapping": {}
    },
    {
      "id": "750226",
      "imageId": "v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Salad.png",
      "action": {
        "link": "https://www.swiggy.com/collections/80395?collection_id=80395&tags=layout_CCS_Salad&type=rcv2",
        "text": "Salad",
        "type": "WEBLINK"
      },
      "entityType": "BANNER",
      "accessibility": {
        "altText": "restaurant curated for salad",
        "altTextCta": "open"
      },
      "entityId": "swiggy://collectionV2?collection_id=80395&tags=layout_CCS_Salad",
      "frequencyCapping": {}
    }
  ];

const resList = [
   {
     "info": {
       "id": "66938",
       "name": "Chinese Wok",
       "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
       "locality": "RAMCHANDRA LANE EXTENTION RAMCHANDRA LANE EXTENTION RAMCHANDRA LANE EXTENTION",
       "areaName": "Malad West",
       "costForTwo": "₹250 for two",
       "cuisines": [
         "Chinese",
         "Asian",
         "Tibetan",
         "Desserts",
         "Mukhwas"
       ],
       "avgRating": 4.2,
       "parentId": "61955",
       "avgRatingString": "4.2",
       "totalRatingsString": "10K+",
       "sla": {
         "deliveryTime": 32,
         "lastMileTravel": 2.4,
         "serviceability": "SERVICEABLE",
         "slaString": "30-35 mins",
         "lastMileTravelString": "2.4 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2024-04-05 02:00:00",
         "opened": true
       },
       "badges": {
         "imageBadges": [
           {
             "imageId": "Rxawards/_CATEGORY-Chinese.png",
             "description": "Delivery!"
           }
         ]
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             "badgeObject": [
               {
                 "attributes": {
                   "description": "Delivery!",
                   "imageId": "Rxawards/_CATEGORY-Chinese.png"
                 }
               }
             ]
           },
           "textBased": {},
           "textExtendedBadges": {}
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "ITEMS",
         "subHeader": "AT ₹179"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {},
           "video": {}
         }
       },
       "reviewsSummary": {},
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {}
     },
     "analytics": {},
     "cta": {
       "link": "https://www.swiggy.com/restaurants/chinese-wok-ramchandra-lane-extention-malad-west-mumbai-66938",
       "type": "WEBLINK"
     }
   },{
    "info": {
      "id": "153021",
      "name": "Persia Darbar",
      "cloudinaryImageId": "vhknuy7xlvcarch6qrxi",
      "locality": "Malad West",
      "areaName": "Malad West",
      "costForTwo": "₹750 for two",
      "cuisines": [
        "North Indian",
        "Biryani"
      ],
      "avgRating": 4.3,
      "parentId": "3593",
      "avgRatingString": "4.3",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 35,
        "lastMileTravel": 2.6,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "2.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-04-05 04:00:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
      "link": "https://www.swiggy.com/restaurants/persia-darbar-malad-west-mumbai-153021",
      "type": "WEBLINK"
    }
  },
   {
     "info": {
       "id": "324537",
       "name": "UBQ BY Barbeque Nation",
       "cloudinaryImageId": "heje02oemwdnflxlnk4s",
       "locality": "Growels mall",
       "areaName": "Kandivali East",
       "costForTwo": "₹300 for two",
       "cuisines": [
         "North Indian",
         "Barbecue",
         "Biryani",
         "Kebabs",
         "Mughlai",
         "Desserts"
       ],
       "avgRating": 3.9,
       "parentId": "10804",
       "avgRatingString": "3.9",
       "totalRatingsString": "1K+",
       "sla": {
         "deliveryTime": 47,
         "lastMileTravel": 3,
         "serviceability": "SERVICEABLE",
         "slaString": "45-50 mins",
         "lastMileTravelString": "3.0 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2024-04-04 23:30:00",
         "opened": true
       },
       "badges": {},
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {},
           "textBased": {},
           "textExtendedBadges": {}
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "50% OFF",
         "subHeader": "UPTO ₹100"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {},
           "video": {}
         }
       },
       "reviewsSummary": {},
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {}
     },
     "analytics": {},
     "cta": {
       "link": "https://www.swiggy.com/restaurants/ubq-by-barbeque-nation-growels-mall-kandivali-east-mumbai-324537",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "238596",
       "name": "Monginis",
       "cloudinaryImageId": "rjateikhcd8q6inew4on",
       "locality": "Malwani Gate No7",
       "areaName": "Malad West",
       "costForTwo": "₹300 for two",
       "cuisines": [
         "Bakery",
         "Desserts",
         "Snacks"
       ],
       "avgRating": 4.5,
       "parentId": "5007",
       "avgRatingString": "4.5",
       "totalRatingsString": "50+",
       "sla": {
         "deliveryTime": 40,
         "lastMileTravel": 4.3,
         "serviceability": "SERVICEABLE",
         "slaString": "35-40 mins",
         "lastMileTravelString": "4.3 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2024-04-04 23:30:00",
         "opened": true
       },
       "badges": {},
       "isOpen": true,
       "aggregatedDiscountInfoV2": {},
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {},
           "textBased": {},
           "textExtendedBadges": {}
         }
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {},
           "video": {}
         }
       },
       "reviewsSummary": {},
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {}
     },
     "analytics": {},
     "cta": {
       "link": "https://www.swiggy.com/restaurants/monginis-malwani-gate-no7-malad-west-mumbai-238596",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "23731",
       "name": "McDonald's",
       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/b5c7e325-a2b3-4334-b104-0b20df81dd93_23731.JPG",
       "locality": "Kandivali West",
       "areaName": "Kandivali West",
       "costForTwo": "₹400 for two",
       "cuisines": [
         "Burgers",
         "Beverages",
         "Cafe",
         "Desserts"
       ],
       "avgRating": 4.4,
       "parentId": "630",
       "avgRatingString": "4.4",
       "totalRatingsString": "10K+",
       "sla": {
         "deliveryTime": 24,
         "lastMileTravel": 1.3,
         "serviceability": "SERVICEABLE",
         "slaString": "20-25 mins",
         "lastMileTravelString": "1.3 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2024-04-05 00:45:00",
         "opened": true
       },
       "badges": {
         "imageBadges": [
           {
             "imageId": "Rxawards/_CATEGORY-Burger.png",
             "description": "Delivery!"
           }
         ]
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             "badgeObject": [
               {
                 "attributes": {
                   "description": "Delivery!",
                   "imageId": "Rxawards/_CATEGORY-Burger.png"
                 }
               }
             ]
           },
           "textBased": {},
           "textExtendedBadges": {}
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "40% OFF",
         "subHeader": "UPTO ₹80"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {},
           "video": {}
         }
       },
       "reviewsSummary": {},
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {}
     },
     "analytics": {},
     "cta": {
       "link": "https://www.swiggy.com/restaurants/mcdonalds-kandivali-west-mumbai-23731",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "9867",
       "name": "Pizza Hut",
       "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
       "locality": "Kandivali West",
       "areaName": "Kandivali West",
       "costForTwo": "₹300 for two",
       "cuisines": [
         "Pizzas"
       ],
       "avgRating": 3.9,
       "parentId": "721",
       "avgRatingString": "3.9",
       "totalRatingsString": "10K+",
       "sla": {
         "deliveryTime": 32,
         "lastMileTravel": 1.9,
         "serviceability": "SERVICEABLE",
         "slaString": "30-35 mins",
         "lastMileTravelString": "1.9 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2024-04-05 05:00:00",
         "opened": true
       },
       "badges": {
         "imageBadges": [
           {
             "imageId": "Rxawards/_CATEGORY-Pizza.png",
             "description": "Delivery!"
           }
         ]
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             "badgeObject": [
               {
                 "attributes": {
                   "description": "Delivery!",
                   "imageId": "Rxawards/_CATEGORY-Pizza.png"
                 }
               }
             ]
           },
           "textBased": {},
           "textExtendedBadges": {}
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "20% OFF",
         "subHeader": "UPTO ₹50"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {},
           "video": {}
         }
       },
       "reviewsSummary": {},
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {}
     },
     "analytics": {},
     "cta": {
       "link": "https://www.swiggy.com/restaurants/pizza-hut-kandivali-west-mumbai-9867",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "258512",
       "name": "KFC",
       "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
       "locality": "Infinity Mall Food Court",
       "areaName": "Malad West",
       "costForTwo": "₹400 for two",
       "cuisines": [
         "Burgers",
         "Biryani",
         "American",
         "Snacks",
         "Fast Food"
       ],
       "avgRating": 4.2,
       "parentId": "547",
       "avgRatingString": "4.2",
       "totalRatingsString": "1K+",
       "sla": {
         "deliveryTime": 45,
         "lastMileTravel": 3,
         "serviceability": "SERVICEABLE",
         "slaString": "45-50 mins",
         "lastMileTravelString": "3.0 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2024-04-05 03:00:00",
         "opened": true
       },
       "badges": {},
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {},
           "textBased": {},
           "textExtendedBadges": {}
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "ITEMS",
         "subHeader": "AT ₹179"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {},
           "video": {}
         }
       },
       "reviewsSummary": {},
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {}
     },
     "analytics": {},
     "cta": {
       "link": "https://www.swiggy.com/restaurants/kfc-infinity-mall-food-court-malad-west-mumbai-258512",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "24496",
       "name": "Domino's Pizza",
       "cloudinaryImageId": "d0450ce1a6ba19ea60cd724471ed54a8",
       "locality": "Mahakali Caves Road",
       "areaName": "Kandivali West",
       "costForTwo": "₹400 for two",
       "cuisines": [
         "Pizzas",
         "Italian",
         "Pastas",
         "Desserts"
       ],
       "avgRating": 4.1,
       "parentId": "2456",
       "avgRatingString": "4.1",
       "totalRatingsString": "10K+",
       "sla": {
         "deliveryTime": 30,
         "lastMileTravel": 0.8,
         "serviceability": "SERVICEABLE",
         "slaString": "30 mins",
         "lastMileTravelString": "0.8 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2024-04-04 22:59:00",
         "opened": true
       },
       "badges": {
         "imageBadges": [
           {
             "imageId": "Rxawards/_CATEGORY-Pizza.png",
             "description": "Delivery!"
           }
         ]
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             "badgeObject": [
               {
                 "attributes": {
                   "description": "Delivery!",
                   "imageId": "Rxawards/_CATEGORY-Pizza.png"
                 }
               }
             ]
           },
           "textBased": {},
           "textExtendedBadges": {}
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "30% OFF",
         "subHeader": "UPTO ₹75"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {},
           "video": {}
         }
       },
       "reviewsSummary": {},
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {}
     },
     "analytics": {},
     "cta": {
       "link": "https://www.swiggy.com/restaurants/dominos-pizza-mahakali-caves-road-kandivali-west-mumbai-24496",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "351108",
       "name": "Grameen Kulfi",
       "cloudinaryImageId": "lj3iyi0tsqwrkc4xpuof",
       "locality": "Ushma Nagar",
       "areaName": "Malad West",
       "costForTwo": "₹120 for two",
       "cuisines": [
         "Ice Cream",
         "Desserts"
       ],
       "avgRating": 4.7,
       "veg": true,
       "parentId": "12175",
       "avgRatingString": "4.7",
       "totalRatingsString": "1K+",
       "sla": {
         "deliveryTime": 30,
         "lastMileTravel": 2.7,
         "serviceability": "SERVICEABLE",
         "slaString": "30-35 mins",
         "lastMileTravelString": "2.7 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2024-04-05 01:00:00",
         "opened": true
       },
       "badges": {},
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {},
           "textBased": {},
           "textExtendedBadges": {}
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "60% OFF",
         "subHeader": "UPTO ₹120"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {},
           "video": {}
         }
       },
       "reviewsSummary": {},
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {}
     },
     "analytics": {},
     "cta": {
       "link": "https://www.swiggy.com/restaurants/grameen-kulfi-ushma-nagar-malad-west-mumbai-351108",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "48545",
       "name": "Shiv Sagar Malad",
       "cloudinaryImageId": "dpnzkxlvp7d8ed1ccy1i",
       "locality": "Marve Road",
       "areaName": "Malad West",
       "costForTwo": "₹500 for two",
       "cuisines": [
         "Indian",
         "Chinese"
       ],
       "avgRating": 4.2,
       "veg": true,
       "parentId": "183307",
       "avgRatingString": "4.2",
       "totalRatingsString": "10K+",
       "sla": {
         "deliveryTime": 35,
         "lastMileTravel": 2,
         "serviceability": "SERVICEABLE",
         "slaString": "30-35 mins",
         "lastMileTravelString": "2.0 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2024-04-05 00:15:00",
         "opened": true
       },
       "badges": {},
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {},
           "textBased": {},
           "textExtendedBadges": {}
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "25% OFF",
         "subHeader": "UPTO ₹65"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {},
           "video": {}
         }
       },
       "reviewsSummary": {},
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {}
     },
     "analytics": {},
     "cta": {
       "link": "https://www.swiggy.com/restaurants/shiv-sagar-malad-marve-road-malad-west-mumbai-48545",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "415453",
       "name": "Baskin Robbins - Ice Cream Desserts",
       "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
       "locality": "S. V. ROAD",
       "areaName": "Kandivali West",
       "costForTwo": "₹250 for two",
       "cuisines": [
         "Desserts",
         "Ice Cream"
       ],
       "avgRating": 4.4,
       "veg": true,
       "parentId": "5588",
       "avgRatingString": "4.4",
       "totalRatingsString": "100+",
       "sla": {
         "deliveryTime": 17,
         "lastMileTravel": 1,
         "serviceability": "SERVICEABLE",
         "slaString": "15-20 mins",
         "lastMileTravelString": "1.0 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2024-04-05 06:00:00",
         "opened": true
       },
       "badges": {
         "imageBadges": [
           {
             "imageId": "Rxawards/_CATEGORY-Ice-creams.png",
             "description": "Delivery!"
           }
         ]
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             "badgeObject": [
               {
                 "attributes": {
                   "description": "Delivery!",
                   "imageId": "Rxawards/_CATEGORY-Ice-creams.png"
                 }
               }
             ]
           },
           "textBased": {},
           "textExtendedBadges": {}
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "40% OFF",
         "subHeader": "UPTO ₹80"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {},
           "video": {}
         }
       },
       "reviewsSummary": {},
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {}
     },
     "analytics": {},
     "cta": {
       "link": "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-s-v-road-kandivali-west-mumbai-415453",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "30906",
       "name": "Natural Ice Cream",
       "cloudinaryImageId": "cdxwjyujgqeqe74wvtj6",
       "locality": "MAHAVIR NAGAR",
       "areaName": "Kandivali West",
       "costForTwo": "₹150 for two",
       "cuisines": [
         "Ice Cream",
         "Desserts"
       ],
       "avgRating": 4.6,
       "veg": true,
       "parentId": "2093",
       "avgRatingString": "4.6",
       "totalRatingsString": "10K+",
       "sla": {
         "deliveryTime": 22,
         "lastMileTravel": 1.7,
         "serviceability": "SERVICEABLE",
         "slaString": "20-25 mins",
         "lastMileTravelString": "1.7 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2024-04-04 23:59:00",
         "opened": true
       },
       "badges": {
         "imageBadges": [
           {
             "imageId": "Rxawards/_CATEGORY-Ice-creams.png",
             "description": "Delivery!"
           }
         ]
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             "badgeObject": [
               {
                 "attributes": {
                   "description": "Delivery!",
                   "imageId": "Rxawards/_CATEGORY-Ice-creams.png"
                 }
               }
             ]
           },
           "textBased": {},
           "textExtendedBadges": {}
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "50% OFF",
         "subHeader": "UPTO ₹100"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {},
           "video": {}
         }
       },
       "reviewsSummary": {},
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {}
     },
     "analytics": {},
     "cta": {
       "link": "https://www.swiggy.com/restaurants/natural-ice-cream-mahavir-nagar-kandivali-west-mumbai-30906",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "76686",
       "name": "NIC Ice Creams",
       "cloudinaryImageId": "18d8b8fb6bac8063a6fa886e20148110",
       "locality": "Ushma Nagar",
       "areaName": "Malad West",
       "costForTwo": "₹120 for two",
       "cuisines": [
         "Ice Cream",
         "Desserts"
       ],
       "avgRating": 4.7,
       "veg": true,
       "parentId": "6249",
       "avgRatingString": "4.7",
       "totalRatingsString": "10K+",
       "sla": {
         "deliveryTime": 29,
         "lastMileTravel": 2.7,
         "serviceability": "SERVICEABLE",
         "slaString": "25-30 mins",
         "lastMileTravelString": "2.7 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2024-04-05 01:00:00",
         "opened": true
       },
       "badges": {
         "imageBadges": [
           {
             "imageId": "Rxawards/_CATEGORY-Ice-creams.png",
             "description": "Delivery!"
           }
         ]
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             "badgeObject": [
               {
                 "attributes": {
                   "description": "Delivery!",
                   "imageId": "Rxawards/_CATEGORY-Ice-creams.png"
                 }
               }
             ]
           },
           "textBased": {},
           "textExtendedBadges": {}
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "ITEMS",
         "subHeader": "AT ₹169"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {},
           "video": {}
         }
       },
       "reviewsSummary": {},
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {}
     },
     "analytics": {},
     "cta": {
       "link": "https://www.swiggy.com/restaurants/nic-ice-creams-ushma-nagar-malad-west-mumbai-76686",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "413634",
       "name": "Vadilal Ice Creams",
       "cloudinaryImageId": "k33rw9dd4slprv46jqq4",
       "locality": "Borivali",
       "areaName": "Kandivali West",
       "costForTwo": "₹200 for two",
       "cuisines": [
         "Ice Cream",
         "Desserts"
       ],
       "avgRating": 4.2,
       "veg": true,
       "parentId": "11745",
       "avgRatingString": "4.2",
       "totalRatingsString": "500+",
       "sla": {
         "deliveryTime": 20,
         "lastMileTravel": 1.7,
         "serviceability": "SERVICEABLE",
         "slaString": "20-25 mins",
         "lastMileTravelString": "1.7 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2024-04-04 23:59:00",
         "opened": true
       },
       "badges": {},
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {},
           "textBased": {},
           "textExtendedBadges": {}
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "60% OFF",
         "subHeader": "UPTO ₹120",
         "discountCalloutInfo": {
           "message": "Free Delivery",
           "logoCtx": {
             "logo": "v1655895371/free_delivery_logo_hqipbo.png"
           }
         }
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {},
           "video": {}
         }
       },
       "reviewsSummary": {},
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {}
     },
     "analytics": {},
     "cta": {
       "link": "https://www.swiggy.com/restaurants/vadilal-ice-creams-borivali-kandivali-west-mumbai-413634",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "41580",
       "name": "Hangout Cakes & More",
       "cloudinaryImageId": "377369343dcd983007e9156e8aa8f9da",
       "locality": "Kandivali West",
       "areaName": "Borivali",
       "costForTwo": "₹150 for two",
       "cuisines": [
         "Desserts",
         "Bakery"
       ],
       "avgRating": 4.4,
       "veg": true,
       "parentId": "4508",
       "avgRatingString": "4.4",
       "totalRatingsString": "10K+",
       "sla": {
         "deliveryTime": 21,
         "lastMileTravel": 2,
         "serviceability": "SERVICEABLE",
         "slaString": "20-25 mins",
         "lastMileTravelString": "2.0 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2024-04-04 23:59:00",
         "opened": true
       },
       "badges": {
         "imageBadges": [
           {
             "imageId": "v1695133679/badges/Pure_Veg111.png",
             "description": "pureveg"
           }
         ],
         "textExtendedBadges": [
           {
             "iconId": "guiltfree/GF_Logo_android_3x",
             "shortDescription": "options available",
             "fontColor": "#7E808C"
           }
         ]
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             "badgeObject": [
               {
                 "attributes": {
                   "description": "pureveg",
                   "imageId": "v1695133679/badges/Pure_Veg111.png"
                 }
               }
             ]
           },
           "textBased": {},
           "textExtendedBadges": {
             "badgeObject": [
               {
                 "attributes": {
                   "description": "",
                   "fontColor": "#7E808C",
                   "iconId": "guiltfree/GF_Logo_android_3x",
                   "shortDescription": "options available"
                 }
               }
             ]
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "60% OFF",
         "subHeader": "UPTO ₹150",
         "discountTag": "SAVE BIG"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {},
           "video": {}
         }
       },
       "reviewsSummary": {},
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {}
     },
     "analytics": {},
     "cta": {
       "link": "https://www.swiggy.com/restaurants/hangout-cakes-and-more-kandivali-west-borivali-mumbai-41580",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "47646",
       "name": "Cheelizza - India ka Pizza",
       "cloudinaryImageId": "f58a1b772e5eeea45ff8ead3890703ed",
       "locality": "Mahavir Nagar",
       "areaName": "Kandivali West",
       "costForTwo": "₹500 for two",
       "cuisines": [
         "Pizzas",
         "Italian",
         "Fast Food"
       ],
       "avgRating": 4.2,
       "veg": true,
       "parentId": "375077",
       "avgRatingString": "4.2",
       "totalRatingsString": "10K+",
       "sla": {
         "deliveryTime": 31,
         "lastMileTravel": 2.1,
         "serviceability": "SERVICEABLE",
         "slaString": "30-35 mins",
         "lastMileTravelString": "2.1 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2024-04-05 03:00:00",
         "opened": true
       },
       "badges": {
         "imageBadges": [
           {
             "imageId": "v1695133679/badges/Pure_Veg111.png",
             "description": "pureveg"
           }
         ],
         "textExtendedBadges": [
           {
             "iconId": "guiltfree/GF_Logo_android_3x",
             "shortDescription": "options available",
             "fontColor": "#7E808C"
           }
         ]
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             "badgeObject": [
               {
                 "attributes": {
                   "description": "pureveg",
                   "imageId": "v1695133679/badges/Pure_Veg111.png"
                 }
               }
             ]
           },
           "textBased": {},
           "textExtendedBadges": {
             "badgeObject": [
               {
                 "attributes": {
                   "description": "",
                   "fontColor": "#7E808C",
                   "iconId": "guiltfree/GF_Logo_android_3x",
                   "shortDescription": "options available"
                 }
               }
             ]
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "60% OFF",
         "subHeader": "UPTO ₹120"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {},
           "video": {}
         }
       },
       "reviewsSummary": {},
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {}
     },
     "analytics": {},
     "cta": {
       "link": "https://www.swiggy.com/restaurants/cheelizza-india-ka-pizza-mahavir-nagar-kandivali-west-mumbai-47646",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "258305",
       "name": "Poetry By Love & Cheesecake",
       "cloudinaryImageId": "70995c10def761ed1733f4e32c213ff7",
       "locality": "Kandivali West",
       "areaName": "Kandivali West",
       "costForTwo": "₹900 for two",
       "cuisines": [
         "Desserts"
       ],
       "avgRating": 4.5,
       "parentId": "11330",
       "avgRatingString": "4.5",
       "totalRatingsString": "1K+",
       "sla": {
         "deliveryTime": 30,
         "lastMileTravel": 2,
         "serviceability": "SERVICEABLE",
         "slaString": "25-30 mins",
         "lastMileTravelString": "2.0 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2024-04-05 04:00:00",
         "opened": true
       },
       "badges": {
         "imageBadges": [
           {
             "imageId": "newg.png",
             "description": "Gourmet"
           }
         ]
       },
       "isOpen": true,
       "aggregatedDiscountInfoV2": {},
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             "badgeObject": [
               {
                 "attributes": {
                   "description": "Gourmet",
                   "imageId": "newg.png"
                 }
               }
             ]
           },
           "textBased": {},
           "textExtendedBadges": {}
         }
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {},
           "video": {}
         }
       },
       "reviewsSummary": {},
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {}
     },
     "analytics": {},
     "cta": {
       "link": "https://www.swiggy.com/restaurants/poetry-by-love-and-cheesecake-kandivali-west-mumbai-258305",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "369177",
       "name": "NOTO - Ice Creams & Desserts",
       "cloudinaryImageId": "81ac87e5c89c16adc867be38ce5a1ba3",
       "locality": "Malad Kan East",
       "areaName": "Kandivali East",
       "costForTwo": "₹300 for two",
       "cuisines": [
         "Ice Cream"
       ],
       "avgRating": 4.6,
       "veg": true,
       "parentId": "468478",
       "avgRatingString": "4.6",
       "totalRatingsString": "1K+",
       "sla": {
         "deliveryTime": 31,
         "lastMileTravel": 5,
         "serviceability": "SERVICEABLE",
         "slaString": "30-35 mins",
         "lastMileTravelString": "5.0 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2024-04-05 00:30:00",
         "opened": true
       },
       "badges": {
         "textExtendedBadges": [
           {
             "iconId": "guiltfree/GF_Logo_android_3x",
             "shortDescription": "brand",
             "fontColor": "#7E808C"
           }
         ]
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {},
           "textBased": {},
           "textExtendedBadges": {
             "badgeObject": [
               {
                 "attributes": {
                   "description": "",
                   "fontColor": "#7E808C",
                   "iconId": "guiltfree/GF_Logo_android_3x",
                   "shortDescription": "brand"
                 }
               }
             ]
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "60% OFF",
         "subHeader": "UPTO ₹120"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {},
           "video": {}
         }
       },
       "reviewsSummary": {},
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {}
     },
     "analytics": {},
     "cta": {
       "link": "https://www.swiggy.com/restaurants/noto-ice-creams-and-desserts-malad-kan-east-kandivali-east-mumbai-369177",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "31918",
       "name": "Jimis Burger",
       "cloudinaryImageId": "7fc108b2b8fdee5d9612d12d00413034",
       "locality": "Malad West",
       "areaName": "Malad West",
       "costForTwo": "₹600 for two",
       "cuisines": [
         "Burgers",
         "Fast Food",
         "Beverages"
       ],
       "avgRating": 4.6,
       "parentId": "8122",
       "avgRatingString": "4.6",
       "totalRatingsString": "10K+",
       "sla": {
         "deliveryTime": 34,
         "lastMileTravel": 2.6,
         "serviceability": "SERVICEABLE",
         "slaString": "30-35 mins",
         "lastMileTravelString": "2.6 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2024-04-05 02:00:00",
         "opened": true
       },
       "badges": {
         "imageBadges": [
           {
             "imageId": "newg.png",
             "description": "Gourmet"
           }
         ]
       },
       "isOpen": true,
       "aggregatedDiscountInfoV2": {},
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             "badgeObject": [
               {
                 "attributes": {
                   "description": "Gourmet",
                   "imageId": "newg.png"
                 }
               }
             ]
           },
           "textBased": {},
           "textExtendedBadges": {}
         }
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {},
           "video": {}
         }
       },
       "reviewsSummary": {},
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {}
     },
     "analytics": {},
     "cta": {
       "link": "https://www.swiggy.com/restaurants/jimis-burger-malad-west-mumbai-31918",
       "type": "WEBLINK"
     }
   }, {
    "info": {
      "id": "20344",
      "name": "Uncle's Kitchen (Since 1987)",
      "cloudinaryImageId": "jm1kluealljyccdqz9hm",
      "locality": "Malad West",
      "areaName": "Malad Kan West",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Chinese",
        "Asian",
        "Thai"
      ],
      "avgRating": 4.4,
      "parentId": "472158",
      "avgRatingString": "4.4",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 27,
        "lastMileTravel": 1.9,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "1.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-04-04 23:15:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
      "link": "https://www.swiggy.com/restaurants/uncles-kitchen-since-1987-malad-west-malad-kan-west-mumbai-20344",
      "type": "WEBLINK"
    }
  },
 ];

 const FoodImg = (props) =>{
  const {food} = props;
  return (
    <div className="food-list">
      <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ food.imageId} alt="" />
    </div>
  )
 }

 const ResCarousel = () =>{
  return (
    <div className="food-container container">
      <h1>What's on your mind?</h1>
      <div className="foods">
      {foodList.map((food) => (
           <FoodImg key={food.id} food={food} />
         ))}
      </div>
    </div>
  )
}

const styleCard = {
  // backgroundColor: "#f0f0f0"
 };
 
 const truncateString = (str, maxLength) => {
  return str.length > maxLength ? str.slice(0, maxLength) + '...' : str;
 };
 
 const RestaurantCard = (props) =>{
 // console.log(props); //! Wrap all the passed props into an object
 
 //! DESTRUCTURING
 const {resData} = props;
 const {cloudinaryImageId,name, avgRatingString, cuisines, sla, locality} = resData?.info; //* Use Optional Chaining - to avoid errors
 
 return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}
        alt="res-img"
      />
      <h3>{name}</h3>
      <div className="res-info">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" role="img" aria-hidden="true" strokecolor="rgba(2, 6, 12, 0.92)" fillcolor="rgba(2, 6, 12, 0.92)"><circle cx="10" cy="10" r="9" fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"></circle><path d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z" fill="white"></path><defs><linearGradient id="StoreRating20_svg__paint0_linear_32982_71567" x1="10" y1="1" x2="10" y2="19" gradientUnits="userSpaceOnUse"><stop stopColor="#21973B"></stop><stop offset="1" stopColor="#128540"></stop></linearGradient></defs></svg>
        <span>{avgRatingString} • </span>
        {sla?.slaString}
      </div>
      <h4>{truncateString(cuisines.join(", "), 30)}</h4>
       <h4>{truncateString(locality, 25)}</h4>
    </div>
  );
 }

 const ResNearYou =()=>{
  return (
    <div className="res-near">
       <h1>Restaurants near you</h1>
       <div className="res-container">
         {resList.map((restaurants) => (
           // For each restaurants => return a (JSX) i.e <RestaurantCard /> (and pass data to it)
           <RestaurantCard key={restaurants.info.id} resData={restaurants} />
         ))}
       </div>
     </div>
  )
 }

 const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://t3.ftcdn.net/jpg/04/03/74/22/360_F_403742248_8DDzcFF4jw05lWqftk2yxzKRpFvpZ01Y.jpg" alt="logo" />
        <span>Kandivali, Mumbai <IoIosArrowDown/></span>
      </div>
      <div className="nav-items">
        <ul>
          <li><IoSearch/> Search</li>
          <li><BiSolidOffer/> Offers</li>
          <li><IoHelpBuoyOutline/> Help</li>
          <li><FaRegUser/> Sign In</li>
          <li><IoCart/> Cart</li>
        </ul>
      </div>
    </div>
  );
 }

const Body = () =>{
 return (
   <div className="main-body">
     <ResCarousel/>
     <ResNearYou/>
   </div>
 );
}

const AppLayout = () => {
 return (
  <div className="app">
   <Header/>
   <Body/>
  </div>
 )
}

const root  = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);