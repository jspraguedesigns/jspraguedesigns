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
        dob: "2005-07-22",
        grade: "10",
        performance: "Students at this level typically understand little in some everyday English, both spoken and written, but would like to feel more confident in using English to communicate. Their knowledge of English vocabulary and grammatical structures could be strengthened so that they can understand complex, academic content."
      },
      {
        name: "Yuxi, Yao",
        id: "002",
        score: "140",
        date: "2019-10-20",
        dob: "2006-02-23",
        grade: "9",
        performance: "Students at this level typically understand little in some everyday English, both spoken and written, but would like to feel more confident in using English to communicate. Their knowledge of English vocabulary and grammatical structures could be strengthened so that they can understand complex, academic content."
      },
    ]

    
const classesData= [
  { names: "EnglishLevel1", score:"90", teacher: "Mrs. Smith" },
  { names: "EnglishLevel2", score:"97",  teacher: "Mrs. Smith"},
  { names: "EnglishLevel3", score:"124", teacher: "Mrs. Adams" }
 ];
   
  studentsData.forEach(students => {
        createPage({
          path: `/${students.name}`,
          component: require.resolve(`./src/templates/student-template.js`),
          context: { students },
        })
      })
   
    classesData.forEach(cls => {
      createPage({
        path: `/${cls.name}`,
        component: require.resolve(`./src/templates/class-template.js`),
        context: { cls },
      })
    })
  }

// You can delete this file if you're not using it
