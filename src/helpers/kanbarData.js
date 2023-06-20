const user1Pic = process.env.PUBLIC_URL + "/user1.png";
const user2Pic = process.env.PUBLIC_URL + "/user2.png";
const user3Pic = process.env.PUBLIC_URL + "/user3.png";
const user4Pic = process.env.PUBLIC_URL + "/user4.png";
const user5Pic = process.env.PUBLIC_URL + "/user5.png";
const moodboard1 = process.env.PUBLIC_URL + "/moodboard1.png";
const moodboard2 = process.env.PUBLIC_URL + "/moodboard2.png";
const onboard = process.env.PUBLIC_URL + "/onboard.png";
const design = process.env.PUBLIC_URL + "/design.png";
const boardId = '1-Mobile-App';
export const priorityColor = {
    "Low": {
      bg: "rgba(223, 168, 116,0.2)",
      text: "#D58D49",
    },
    "High": {
      bg: "rgba(216, 114, 125,0.1)",
      text: "#D8727D"
  
    },
    "Completed": {
      bg: "rgba(131, 194, 157,0.2)",
      text: "#68B266"
    }
  }
export const lists = [
{
    board: boardId,
    title: 'To Do',
    tasks: [
    {
        section: boardId + "1",
        id: "1" + boardId + "1",
        position: "1",
        title: 'Brainstorming',
        content: "Brainstorming brings team members' diverse experience into play.",
        priority: "Low",
        comments: 12,
        file: 0,
        assignies: [user1Pic, user4Pic, user3Pic],
        picture: []
    },
    {
        section: boardId + "1",
        id: "2" + boardId + "1",
        position: "2",
        title: 'Research',
        content: "User research helps you to create an optimal product for users.",
        priority: "High",
        comments: 10,
        file: 3,
        assignies: [user2Pic, user5Pic],
        picture: []
    },
    {
        section: boardId + "1",
        id: "3" + boardId + "1",
        position: "3",
        title: 'Wireframes',
        content: "Low fidelity wireframes include the most basic content and visuals.",
        priority: "High",
        comments: 12,
        file: 0,
        assignies: [user1Pic, user4Pic, user3Pic],
        picture: []
    },
    ],
    id: "1" + boardId,
    color: '#5030E5',
    secondryColor: '#5030E5',

},
{
    board: boardId,
    title: 'On Progress',
    tasks: [
    {
        section: boardId + "2",
        id: "1" + boardId + "2",
        position: "1",
        title: 'Onboarding Illustrations ',
        priority: "Low",
        comments: 14,
        file: 15,
        assignies: [ user3Pic,user4Pic,user1Pic],
        picture: [onboard]
        
    },
    {
        section: boardId + "2",
        id: "2" + boardId + "2",
        position: "2",
        title: 'Moodboard',
        priority: "Low",
        comments: 10,
        file: 3,
        assignies: [ user3Pic],
        picture: [moodboard1, moodboard2]
    },

    ],
    id: "2" + boardId,
    color: '#FFA500',
    secondryColor: '#FFA500',
},
{
    board: boardId,
    title: 'Done',
    tasks: [

    {
        section: boardId + "3",
        id: "2" + boardId + "3",
        position: "2",
        title: 'Research',
        priority: "Completed",
        comments: 12,
        file: 15,
        assignies: [user1Pic, user4Pic, user3Pic],
        picture: [design]
    },
    {
        section: boardId + "3",
        id: "3" + boardId + "3",
        position: "3",
        title: 'Design System',
        content: "It just needs to adapt the UI from what you did before",
        priority: "Completed",
        comments: 12,
        file: 15,
        assignies: [user1Pic, user3Pic, user4Pic],
        picture: []
    },
    ],
    id: "3" + boardId,
    color: '#8BC48A',
    secondryColor: '#76A5EA'
}
]