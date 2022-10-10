export const getProductDetails = async (id) => {
  const response = EXHIBITIONS.find((el) => el.id === id)

  return { ...response, imageUrl: Math.floor(Math.random() * 7 + 1) }
}

export const getProductSlug = async () => {
  return EXHIBITIONS
}

const EXHIBITIONS = [
  {
    id: "6341bc70af0b38507d75282f",
    index: 1,
    isNew: false,
    year: 2022,
    picture: "http://placehold.it/32x32",
    title: "mollit irure",
    description:
      "commodo occaecat veniam esse amet sint irure id do mollit pariatur adipisicing aliqua est anim aute fugiat proident veniam anim elit amet consectetur culpa commodo laborum non sit officia nisi et fugiat officia nisi velit anim ut voluptate proident et exercitation exercitation ad ipsum esse ea culpa qui consequat nostrud mollit amet cupidatat id anim nisi ipsum laborum ut duis in culpa id est veniam duis labore nostrud est mollit",
    description_2:
      "ad dolore eiusmod labore aliquip veniam elit est officia mollit sit consequat ullamco tempor sit officia non ex elit ipsum",
    collection_id: "pcol_01GEWCNTCWPAMVGBAZRHRR93MS",
  },
  {
    id: "6341bc7012e0d9d2e47506ad",
    index: 2,
    isNew: true,
    year: 2022,
    picture: "http://placehold.it/32x32",
    title: "Lorem eiusmod",
    description:
      "exercitation reprehenderit Lorem irure tempor ullamco id nostrud deserunt id reprehenderit proident consequat irure est commodo occaecat tempor tempor enim pariatur qui incididunt et magna nulla amet proident eu qui eiusmod velit culpa enim nostrud ex nostrud deserunt esse ullamco cillum consequat minim id cupidatat id laborum minim magna culpa proident sit sit et in nostrud sint qui ipsum fugiat reprehenderit aliqua anim in non id et cillum incididunt quis",
    description_2:
      "mollit nisi proident cupidatat enim cupidatat eu sit nisi velit aliqua irure ut laboris irure enim cupidatat cillum id exercitation",
    collection_id: "pcol_01GEWCNTCWPAMVGBAZRHRR93MS",
  },
  {
    id: "6341bc708fe2bb1d35f5c872",
    index: 3,
    isNew: false,
    year: 2022,
    picture: "http://placehold.it/32x32",
    title: "fugiat in",
    description:
      "nulla nostrud aliquip Lorem magna quis excepteur cillum consectetur sint nostrud nisi id id culpa consequat anim cupidatat excepteur nostrud est amet laborum quis ipsum elit enim aliquip proident qui pariatur dolore occaecat labore enim dolore enim aliquip magna sunt qui commodo ex veniam sit enim labore officia minim occaecat labore culpa id ea ullamco ex nisi voluptate nisi culpa veniam ullamco sunt minim ex sint eu enim commodo mollit",
    description_2:
      "culpa laboris exercitation minim et reprehenderit nostrud do in occaecat proident aliquip ex excepteur voluptate nostrud ex sit voluptate cillum",
      collection_id: "pcol_01GEVRAHNEQ5PHXHBGKFSJF5PX",
  },
  {
    id: "6341bc704322fd65839c3bd2",
    index: 4,
    isNew: false,
    year: 2022,
    picture: "http://placehold.it/32x32",
    title: "amet amet",
    description:
      "ad id commodo labore anim aliquip nulla irure ea dolore anim non consectetur excepteur labore tempor mollit ullamco occaecat tempor nostrud et cillum proident incididunt ut amet magna est minim cillum dolor laboris non ex laborum quis consequat irure proident ad esse labore sint tempor ex non laborum duis fugiat esse labore non laborum deserunt aute aute cupidatat irure labore fugiat qui reprehenderit duis exercitation magna pariatur consectetur mollit mollit",
    description_2:
      "anim ad officia ullamco adipisicing ipsum et ut irure mollit commodo ullamco in amet ex eiusmod non sit non elit",
      collection_id: "pcol_01GEVRAHNEQ5PHXHBGKFSJF5PX",
  },
  {
    id: "6341bc7041bc2b018f5bd1be",
    index: 5,
    isNew: true,
    year: 2022,
    picture: "http://placehold.it/32x32",
    title: "in tempor",
    description:
      "fugiat consectetur eiusmod nulla exercitation ipsum laborum elit duis incididunt aliqua consequat aliquip magna velit velit consequat ea duis qui pariatur eiusmod est esse aute culpa laboris ullamco mollit sint nisi amet sint veniam elit amet occaecat irure sint magna dolor cillum laborum laboris id qui dolor sunt pariatur nisi nisi ea cillum cillum sint Lorem nisi eiusmod do occaecat cupidatat eu sunt duis veniam cillum laboris deserunt exercitation commodo",
    description_2:
      "veniam nulla officia quis est nostrud velit laboris et aliqua ullamco ipsum sit commodo consequat sit dolor dolor sunt excepteur",
    collectionid: "pcol_01GEWCP5FXYHF64RWKXVHXW20G",
  },
  {
    id: "6341bc70cbaabc2af0daa313",
    index: 6,
    isNew: false,
    year: 2022,
    picture: "http://placehold.it/32x32",
    title: "ullamco est",
    description:
      "incididunt cillum commodo nulla consectetur dolore ipsum ea sunt deserunt nisi ex sint est aute pariatur Lorem ea irure laboris aliquip irure laborum minim eu cupidatat ad ad duis commodo officia in consequat sint nostrud magna eiusmod do esse quis adipisicing irure ullamco sunt incididunt irure dolor adipisicing ipsum do nulla velit duis enim officia culpa aliquip ad mollit voluptate Lorem ex anim magna veniam culpa velit aliqua ea sunt",
    description_2:
      "labore adipisicing labore veniam magna tempor cupidatat proident do enim aute exercitation minim do proident velit adipisicing labore et qui",
    collectionid: "pcol_01GEWCP5FXYHF64RWKXVHXW20G",
  },
  {
    id: "6341bc70dc8ce3774b8b1be8",
    index: 7,
    isNew: true,
    year: 2022,
    picture: "http://placehold.it/32x32",
    title: "qui mollit",
    description:
      "qui in quis in enim adipisicing dolore non tempor ad do dolore aute esse quis consequat culpa fugiat deserunt consequat ullamco aliqua nisi laborum occaecat deserunt elit id do cillum aliqua non ut laborum duis adipisicing elit occaecat minim eiusmod ea non dolore exercitation occaecat id veniam officia reprehenderit duis quis sunt magna cupidatat labore ea laborum sunt consequat ut nulla exercitation deserunt proident ut aliquip aute in in sit",
    description_2:
      "ad occaecat magna ea sit adipisicing officia adipisicing ut duis eu ullamco et anim do ullamco aliquip in pariatur nostrud",
    collectionid: "pcol_01GEWCNTCWPAMVGBAZRHRR93MS",
  },
]
