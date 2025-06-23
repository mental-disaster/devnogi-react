export type ItemCategory = {
  id: string;
  name: string;
  children?: ItemCategory[];
};

export const itemCategories: ItemCategory[] = [
  {
    id: "all",
    name: "전체",
    children: [
      {
        id: "melee",
        name: "근거리 장비",
        children: [
          {
            id: "one-handed",
            name: "한손 장비",
          },
          {
            id: "two-handed",
            name: "양손 장비",
          },
          {
            id: "test",
            name: "테스트 카테고리",
            children: [
              {
                id: "test-1",
                name: "테스트 1",
              },
              {
                id: "test-2",
                name: "테스트 2",
              },
            ],
          },
        ],
      },
      {
        id: "ranged",
        name: "원거리 장비",
        children: [
          {
            id: "test-3",
            name: "테스트 3",
          },
        ],
      },
      {
        id: "magic",
        name: "마법 장비",
      },
      {
        id: "armor",
        name: "갑옷 장비",
      },
      {
        id: "defense",
        name: "방어 장비",
      },
      {
        id: "accessory",
        name: "액세서리",
      },
      {
        id: "special",
        name: "특수 장비",
      },
      {
        id: "installable",
        name: "설치물",
      },
      {
        id: "enchant",
        name: "인챈트 용품",
      },
      {
        id: "scroll",
        name: "스크롤",
      },
      {
        id: "magigraphy",
        name: "마기그래피 용품",
      },
      {
        id: "book",
        name: "서적",
      },
      {
        id: "consumable",
        name: "소모품",
      },
      {
        id: "totem",
        name: "토템",
      },
      {
        id: "etc",
        name: "기타",
      },
    ],
  },
];
