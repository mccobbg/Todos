export default {
  name: "root",
  type: "dir",
  items: [
    {
      name: "src",
      type: "dir",
      items: [
        {
          name: "01.js",
          type: "file",
          size: 123,
        },
        {
          name: "02.js",
          type: "file",
          size: 456,
        },
        {
          name: "03.js",
          type: "file",
          size: 343,
        },
        {
          name: "ext",
          type: "dir",
          items: [
            {
              name: "marcury.txt",
              type: "file",
              size: 222
            },
            {
              name: "venus.txt",
              type: "file",
              size: 569
            },
            {
              name: "earth.txt",
              type: "file",
              size: 582
            },
            {
              name: "mars.txt",
              type: "file",
              size: 438
            },
            {
              name: "jupiter.txt",
              type: "file",
              size: 1000
            },
          ]
        }
      ],
    },
    {
      name: "test",
      type: "dir",
      items: [
        {
          name: "01.test.js",
          type: "file",
          size: 50,
        },
      ],
    },
    {
      name: "package.json",
      type: "file",
      size: 10,
    },
  ],
};
