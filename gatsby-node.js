/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = ({ actions }) => {
    const { createPage } = actions
    // pull in or use whatever data
    const studentsData = [
      {
        name: "Wang, Jing",
        id: "001",
        score: "145",
        date: "2019-10-20",
      },
      {
        name: "Yuxi, Yao",
        id: "002",
        score: "140",
        date: "2019-10-20",
      },
    ]

  studentsData.forEach(students => {
        createPage({
          path: `/${students.name}`,
          component: require.resolve(`./src/templates/student-template.js`),
          context: { students },
        })
      })
    }

// You can delete this file if you're not using it
