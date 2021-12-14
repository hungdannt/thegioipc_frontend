import { USFlag } from "@components/icons/USFlag";
import { VNFlag } from "@components/icons/VNFlag";

export const siteSettings = {
  name:
    "Thế Giới PC - Chuyên Laptop, RAM, SSD, HDD, USB, Thẻ nhớ, Chuột, Bàn Phím, Pin sạc dự phòng, linh kiện vi tính giá rẻ",
  description:
    "Chuyên Laptop, RAM, SSD, HDD, USB, Thẻ nhớ, Chuột, Bàn Phím, Pin sạc dự phòng, linh kiện vi tính giá rẻ",
  author: {
    name: "BlayTeam, Inc.",
    websiteUrl: "https://fb.com/dtranhung",
    address: "Da Nang, Viet Nam"
  },
  logo: {
    url: "/assets/images/logo.png",
    alt: "TheGioiPC",
    href: "/",
    width: 60,
    height: 50
  },
  defaultLanguage: "vn",
  currencyCode: "VND",
  site_header: {
    menu: [
      {
        id: 1,
        path: "/",
        label: "menu-products",
        subMenu: [
          {
            id: 1,
            path: "/bo-mach-chu",
            label: "menu-mainboard",
            columns: [
              {
                id: 1,
                columnItems: [
                  {
                    id: 1,
                    path: "/search?q=top-wear",
                    label: "menu-top-wear",
                    columnItemItems: [
                      {
                        id: 1,
                        path: "/search?q=t-shit-shirtrt",
                        label: "menu-t-shirt"
                      },
                      {
                        id: 2,
                        path: "/search?q=casual-shirts",
                        label: "menu-casual-shirts"
                      }
                    ]
                  },
                  {
                    id: 2,
                    path: "/search?q=belt-scarves",
                    label: "menu-belt-scarves"
                  }
                ]
              },
              {
                id: 5,
                columnItems: [
                  {
                    id: 1,
                    path: "/search?q=gadgets",
                    label: "menu-gadgets",
                    columnItemItems: [
                      {
                        id: 1,
                        path: "/search?q=smart-wearables",
                        label: "menu-smart-wearables"
                      },
                      {
                        id: 2,
                        path: "/search?q=headphones",
                        label: "menu-headphones"
                      }
                    ]
                  },
                  {
                    id: 2,
                    path: "/search?q=jewellers",
                    label: "menu-jewellers",
                    columnItemItems: [
                      {
                        id: 1,
                        path: "/search?q=fashion-jewellers",
                        label: "menu-fashion-jewellers"
                      },
                      {
                        id: 2,
                        path: "/search?q=fine-jewellers",
                        label: "menu-fine-jewellers"
                      }
                    ]
                  },
                  {
                    id: 3,
                    path: "/search?q=backpacks",
                    label: "menu-backpacks"
                  }
                ]
              }
            ]
          },
          {
            id: 2,
            path: "/",
            label: "menu-cpu",
            columns: [
              {
                id: 1,
                columnItems: [
                  {
                    id: 1,
                    path: "/search?q=top-wear",
                    label: "menu-top-wear",
                    columnItemItems: [
                      {
                        id: 1,
                        path: "/search?q=t-shit-shirtrt",
                        label: "menu-theo-ten"
                      },
                      {
                        id: 2,
                        path: "/search?q=casual-shirts",
                        label: "menu-casual-shirts"
                      }
                    ]
                  },
                  {
                    id: 2,
                    path: "/search?q=belt-scarves",
                    label: "menu-belt-scarves"
                  }
                ]
              }
            ]
          },
          {
            id: 3,
            path: "/",
            label: "menu-vga"
          },
          {
            id: 4,
            path: "/",
            label: "menu-ram"
          },
          {
            id: 5,
            path: "/",
            label: "menu-hdd"
          },
          {
            id: 6,
            path: "/",
            label: "menu-ssd"
          },
          {
            id: 7,
            path: "/",
            label: "menu-man-hinh"
          },
          {
            id: 8,
            path: "/",
            label: "menu-pc"
          },
          {
            id: 9,
            path: "/",
            label: "menu-keyboard"
          },
          {
            id: 10,
            path: "/",
            label: "menu-mouse",
            columns: [
              {
                id: 1,
                columnItems: [
                  {
                    id: 1,
                    path: "/search?q=top-wear",
                    label: "menu-top-wear",
                    columnItemItems: [
                      {
                        id: 1,
                        path: "/search?q=t-shit-shirtrt",
                        label: "menu-theo-ten"
                      },
                      {
                        id: 2,
                        path: "/search?q=casual-shirts",
                        label: "menu-casual-shirts"
                      }
                    ]
                  },
                  {
                    id: 2,
                    path: "/search?q=belt-scarves",
                    label: "menu-belt-scarves"
                  }
                ]
              }
            ]
          }
        ]
        // columns: [
        //   {
        //     id: 1,
        //     columnItems: [
        //       {
        //         id: 1,
        //         path: "/search?q=top-wear",
        //         label: "menu-top-wear",
        //         columnItemItems: [
        //           {
        //             id: 1,
        //             path: "/search?q=t-shit-shirtrt",
        //             label: "menu-theo-ten"
        //           },
        //           {
        //             id: 2,
        //             path: "/search?q=casual-shirts",
        //             label: "menu-casual-shirts"
        //           }
        //         ]
        //       },
        //       {
        //         id: 2,
        //         path: "/search?q=belt-scarves",
        //         label: "menu-belt-scarves"
        //       }
        //     ]
        //   },
        //   {
        //     id: 2,
        //     columnItems: [
        //       {
        //         id: 1,
        //         path: "/search?q=western-wear",
        //         label: "menu-western-wear",
        //         columnItemItems: [
        //           {
        //             id: 1,
        //             path: "/search?q=dresses",
        //             label: "menu-dresses"
        //           }
        //         ]
        //       }
        //     ]
        //   }
        // ]
      },
      {
        id: 5,
        path: "/search",
        label: "menu-search"
      },
      {
        id: 6,
        path: "/",
        label: "menu-pages",
        subMenu: [
          {
            id: 2,
            path: "/faq",
            label: "menu-faq"
          },
          {
            id: 3,
            path: "/privacy",
            label: "menu-privacy-policy"
          },
          {
            id: 4,
            path: "/terms",
            label: "menu-terms-condition"
          },
          {
            id: 5,
            path: "/contact-us",
            label: "menu-contact-us"
          },
          {
            id: 6,
            path: "/checkout",
            label: "menu-checkout"
          },
          {
            id: 9,
            path: "/order",
            label: "menu-order"
          }
        ]
      }
    ],
    mobileMenu: [
      {
        id: 1,
        path: "/",
        label: "menu-products",
        subMenu: [
          //   {
          //     id: 1,
          //     path: "/bo-mach-chu",
          //     label: "menu-mainboard",
          //     subMenu: [
          //       {
          //         columns: [
          //           {
          //             id: 1,
          //             columnItems: [
          //               {
          //                 id: 1,
          //                 path: "/search?q=top-wear",
          //                 label: "menu-top-wear",
          //                 columnItemItems: [
          //                   {
          //                     id: 1,
          //                     path: "/search?q=t-shit-shirtrt",
          //                     label: "menu-theo-ten"
          //                   },
          //                   {
          //                     id: 2,
          //                     path: "/search?q=casual-shirts",
          //                     label: "menu-casual-shirts"
          //                   }
          //                 ]
          //               },
          //               {
          //                 id: 2,
          //                 path: "/search?q=belt-scarves",
          //                 label: "menu-belt-scarves"
          //               }
          //             ]
          //           },
          //           {
          //             id: 2,
          //             columnItems: [
          //               {
          //                 id: 1,
          //                 path: "/search?q=western-wear",
          //                 label: "menu-western-wear",
          //                 columnItemItems: [
          //                   {
          //                     id: 1,
          //                     path: "/search?q=dresses",
          //                     label: "menu-dresses"
          //                   }
          //                 ]
          //               }
          //             ]
          //           }
          //         ]
          //       }
          //     ]
          //   },
          {
            id: 2,
            path: "/",
            label: "menu-cpu"
          },
          {
            id: 3,
            path: "/",
            label: "menu-vga"
          },
          {
            id: 4,
            path: "/",
            label: "menu-ram"
          },
          {
            id: 5,
            path: "/",
            label: "menu-hdd"
          },
          {
            id: 6,
            path: "/",
            label: "menu-ssd"
          },
          {
            id: 7,
            path: "/",
            label: "menu-man-hinh"
          },
          {
            id: 8,
            path: "/",
            label: "menu-pc"
          },
          {
            id: 9,
            path: "/",
            label: "menu-keyboard"
          },
          {
            id: 10,
            path: "/",
            label: "menu-mouse"
          }
        ]
      },
      {
        id: 2,
        path: "/search?q=men-wear",
        label: "menu-men-wear",
        columns: [
          {
            id: 1,
            columnItems: [
              {
                id: 1,
                path: "/search?q=top-wear",
                label: "menu-top-wear",
                columnItemItems: [
                  {
                    id: 1,
                    path: "/search?q=t-shit-shirtrt",
                    label: "menu-t-shirt"
                  },
                  {
                    id: 2,
                    path: "/search?q=casual-shirts",
                    label: "menu-casual-shirts"
                  },
                  {
                    id: 3,
                    path: "/search?q=formal-shirts",
                    label: "menu-formal-shirts"
                  },
                  {
                    id: 4,
                    path: "/search?q=blazwers-coats",
                    label: "menu-blazwers-coats"
                  },
                  {
                    id: 5,
                    path: "/search?q=suits",
                    label: "menu-suits"
                  },
                  {
                    id: 6,
                    path: "/search?q=jackets",
                    label: "menu-jackets"
                  }
                ]
              },
              {
                id: 2,
                path: "/search?q=belt-scarves",
                label: "menu-belt-scarves"
              }
            ]
          },
          {
            id: 5,
            columnItems: [
              {
                id: 1,
                path: "/search?q=gadgets",
                label: "menu-gadgets",
                columnItemItems: [
                  {
                    id: 1,
                    path: "/search?q=smart-wearables",
                    label: "menu-smart-wearables"
                  },
                  {
                    id: 2,
                    path: "/search?q=headphones",
                    label: "menu-headphones"
                  }
                ]
              },
              {
                id: 2,
                path: "/search?q=jewellers",
                label: "menu-jewellers",
                columnItemItems: [
                  {
                    id: 1,
                    path: "/search?q=fashion-jewellers",
                    label: "menu-fashion-jewellers"
                  },
                  {
                    id: 2,
                    path: "/search?q=fine-jewellers",
                    label: "menu-fine-jewellers"
                  }
                ]
              },
              {
                id: 3,
                path: "/search?q=backpacks",
                label: "menu-backpacks"
              },
              {
                id: 4,
                path: "/search?q=handbags-wallets",
                label: "menu-handbags-wallets"
              }
            ]
          }
        ]
      },
      {
        id: 5,
        path: "/search",
        label: "menu-search"
      },
      {
        id: 6,
        path: "/",
        label: "menu-pages",
        subMenu: [
          {
            id: 2,
            path: "/faq",
            label: "menu-faq"
          },
          {
            id: 3,
            path: "/privacy",
            label: "menu-privacy-policy"
          },
          {
            id: 4,
            path: "/terms",
            label: "menu-terms-condition"
          },
          {
            id: 5,
            path: "/contact-us",
            label: "menu-contact-us"
          },
          {
            id: 6,
            path: "/checkout",
            label: "menu-checkout"
          },
          {
            id: 9,
            path: "/order",
            label: "menu-order",
            subMenu: [
              {
                id: 1,
                path: "/bo-mach-chu",
                label: "menu-mainboard"
              }
            ]
          }
        ]
      }
    ],
    languageMenu: [
      {
        id: "vi",
        name: "Tiếng Việt",
        value: "vi",
        icon: <VNFlag width="20px" height="15px" />
      },
      {
        id: "en",
        name: "English",
        value: "en",
        icon: <USFlag width="20px" height="15px" />
      }
    ]
  }
};
