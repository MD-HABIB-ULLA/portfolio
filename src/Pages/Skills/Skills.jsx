import html from "/html.png";
import javascript from "/js.png";                 

import "react-tooltip/dist/react-tooltip.css";

const Skills = () => {
  const skills = [
    {
      id: 1,
      name: "HTML",
      image: html,
      percentage: 90,
      color: "#E34F26", // HTML5 icon color
    },
    {
      id: 2,
      name: "CSS",
      image:"https://i.ibb.co/ZM8yNjc/css-3.png",
      percentage: 85,
      color: "#1572B6", // CSS3 icon color
    },
    {
      id: 3,
      name: "JavaScript",
      image: javascript,
      percentage: 85,
      color: "#F7DF1E", // JavaScript icon color
    },
    {
      id: 4,
      name: "Bootstrap",
      image: "https://i.ibb.co/sCjBzX0/bootstrap-1024x1024.png",
      percentage: 75,
      color: "#7952B3", // Bootstrap icon color
    },
    {
      id: 5,
      name: "Tailwind",
      image: "https://i.ibb.co/s21MP3h/tailwind-css-256x154.png",
      percentage: 70,
      color: "#06B6D4", // Tailwind CSS icon color
    },
    {
      id: 6,
      name: "Material UI",
      image: "https://i.ibb.co/PckXwV1/material-ui-1024x814.png",
      percentage: 70,
      color: "#0081CB", // Material UI icon color
    },
    {
      id: 7,
      name: "Daisy UI",
      image: "https://i.ibb.co/vVRpGPc/b28165db-1eed-4f6a-9027-8f3317357e55-cover-removebg-preview.png",
      percentage: 65,
      color: "#4A5568", // Daisy UI color (assuming a neutral grey)
    },
    {
      id: 8,
      name: "Figma",
      image: "https://i.ibb.co/NN0vxKS/figma-684x1024.png",
      percentage: 70,
      color: "#F24E1E", // Figma icon color
    },
    {
      id: 9,
      name: "React",
      image: "https://i.ibb.co/XYKVPhS/react-1024x911.png",
      percentage: 80,
      color: "#61DAFB", // React icon color
    },
    {
      id: 10,
      name: "Next.js",
      image: "https://i.ibb.co/R00RB4s/nextjs-1024x1024.png",
      percentage: 30,
      color: "#000000", // Next.js icon color
    },
    {
      id: 11,
      name: "Node.js",
      image: "https://i.ibb.co/KNq617x/file-type-node-908x1024.png",
      percentage: 65,
      color: "#339933", // Node.js icon color
    },
    {
      id: 12,
      name: "Express.js",
      image: "https://i.ibb.co/zFShqhP/express-original-1024x594.png",
      percentage: 70,
      color: "#000000", // Express.js icon color
    },
    {
      id: 13,
      name: "MongoDB",
      image: "https://i.ibb.co/YNcRdRx/mongodb-original-460x1024.png",
      percentage: 80,
      color: "#47A248", // MongoDB icon color
    },
    {
      id: 14,
      name: "Firebase",
      image: "https://i.ibb.co/h8rp7HL/file-type-firebase-746x1024.png",
      percentage: 60,
      color: "#FFCA28", // Firebase icon color
    },
    {
      id: 15,
      name: "JWT",
      image: "https://i.ibb.co/9VYyqVQ/icons8-jwt-480.png",
      percentage: 55,
      color: "#F50057", // JWT icon color
    },
  ];








https://i.ibb.co/h8rp7HL/file-type-firebase-746x1024.png


  console.log(skills[2]);

  return (
    <div className="section " id="skills">
      <div>
        <h1 className="capitalize text-5xl mb-7 font-bold text-center">Skills and Expertise </h1>
        <div className="grid lg:grid-cols-3 grid-cols-2 lg:gap-4 gap-2">
          {skills.map((skill) => (
            <div
       
              key={skill.id}
              className={`flex items-center gap-4 border-[1px] border-opacity-50 border-black   bg-black/20 justify-between text-2xl backdrop-blur-2xl rounded-lg p-4`}
            >
              <div className="h-12 w-12 flex justify-center ">
                <img src={skill.image} alt="" className="h-full" />
              </div>
              <div>
                <h1 className="uppercase lg:text-2xl text-xl  font-bold">
                  {skill.name}
                </h1>
                <progress
                  className="progress progress-success lg:w-56 w-32  "
                  value={skill.percentage}
                  max="100"
                ></progress>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
