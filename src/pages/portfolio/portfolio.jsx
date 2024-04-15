import React, { useState } from "react";
import "./portfolio.css";
import Footer from "../../components/footer/footer";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Portfolio() {
  const [skillp, setSkills] = useState(false);
  const { Skillss } = useParams();

  const onSkill = () => {
    setSkills(true);
  };
  const offSkill = () => {
    setSkills(false);
    window.location.href = "/portfolio";
  };
  const CVdownload=()=>{
    window.location.href =
      "https://drive.google.com/uc?export=download&id=15F_8EuzpJXJVmJJ_8P1nPorI8t_uv3y4";
  }

  const Skills = [
    {
      Logo: "https://cdn.iconscout.com/icon/free/png-256/free-html-5-1-1175208.png",
      skill: "HTML",
      range: 95,
    },
    {
      Logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png",
      skill: "CSS",
      range: 90,
    },
    {
      Logo: "https://www.freepnglogos.com/uploads/javascript/javascript-online-logo-for-website-0.png",
      skill: "JavaScript",
      range: 80,
    },
    {
      Logo: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
      skill: "React",
      range: 80,
    },
    {
      Logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png",
      skill: "Python",
      range: 90,
    },
    {
      Logo: "https://code.djangoproject.com/raw-attachment/ticket/24953/django-hexbin.png",
      skill: "Django",
      range: 75,
    },
    {
      Logo: "https://www.transparentpng.com/thumb/photoshop-logo-png/hd-photo-png-photoshop-logo-14.png",
      skill: "Photoshop",
      range: 95,
    },
    {
      Logo: "https://cdn.iconscout.com/icon/free/png-256/free-microsoft-office-722717.png?f=webp",
      skill: "MS Office",
      range: 90,
    },
    {
      Logo: "https://cdn1.iconfinder.com/data/icons/fs-icons-ubuntu-by-franksouza-/512/libreoffice-calc.png",
      skill: "Libre Office",
      range: 88,
    },
  ];
  const projectData = [
    {
      Img: "https://pythonprogramming.net/static/images/playlistimages/Django%20-%20Web%20Development%20with%20Python.png",
      ProTitle: "My Django Project",
      proInfo:
        "This project created in django and this name is <Myweb /> This project source code is available on GitHub",
      proLink: "",
      source: "https://github.com/taxonex/mydjangowebproject.git",
    },
    {
      Img: "https://aboutreact.com/wp-content/uploads/2018/07/reactjs.png",
      ProTitle: "Netflix Clone",
      proInfo:
        "This project created in react js it's netflix clone This project source code available on GitHub",
      proLink: "",
      source: "",
    },
    // { Img: "", ProTitle: "", proInfo: "", proLink: "" },
  ];
  const getData = (Vid) => {
    const Found = Skills.find((product) => product.skill === Vid);
    if (Found) {
      return Found;
    } else {
      return null;
    }
  };
  const CheckInAPI = getData(Skillss);

  const SkillRange = () => {
    return (
      <>
        {CheckInAPI ? (
          <div id="skill-range" onClick={offSkill}>
            <div id="skill-range-card">
              <div id="range">
                <h3>{CheckInAPI.range}%</h3>
                <span id="rng">
                  <span
                    style={{
                      width: `${CheckInAPI.range}%`,
                      backgroundColor: "green",
                    }}
                  ></span>
                </span>
              </div>
              <h1>{CheckInAPI.skill}</h1>
            </div>
          </div>
        ) : (
          <></>
        )}
      </>
    );
  };

  return (
    <>
      <div id="portfolio-container">
        <div id="portfolio-Header">
          <div id="portLogo">
            <h1>Portfolio</h1>
          </div>
          <div id="pagelink">
            <a href="/">Netflix</a>
            <a href="#skills">Skills</a>
            <a href="#my-projects">Projects</a>
          </div>
          <div id="contact-me">
            <button>Contact Me</button>
          </div>
        </div>
        <div id="port-Detail">
          <div id="port-Cont">
            <div id="about-me">
              <div id="info">
                <h1>Hay'Im Rohit</h1>
                <p>
                  I'm a web developer & I'm very passionate and dedicated to my
                  work. I have acquired the skills and knowledge necessary to
                  make your project a success
                </p>
              </div>
              <div id="Abmpr">
                <a href="#my-projects">
                  <button>Projects</button>
                </a>
                <a href="#skills" id="ski" draggable="false">
                  <button>Skills</button>
                </a>
              </div>
              <div id="aboutmyself">
                <span>
                  <p>Born In</p>
                  <h2>Delhi</h2>
                </span>
                <span>
                  <p>Date of Birth</p>
                  <h2>12 April 2005</h2>
                </span>
              </div>
            </div>
            <div id="sidelogo">
              <span id="imgCo">Hii Download My CV</span>
              <img
                src="https://png.pngtree.com/png-vector/20230918/ourmid/pngtree-man-in-shirt-smiles-and-gives-thumbs-up-to-show-approval-png-image_10094381.png"
                alt=""
              />
              <span id="downloadCV" onClick={CVdownload}>
                <abbr title="Download CV">
                  <button>
                    <i class="fa-solid fa-download"></i>
                  </button>
                </abbr>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div id="skills">
        <div id="conta-Skill">
          {Skills.map((skil, index) => (
            <Link to={`/portfolio/${skil.skill}`}>
              <div id="skill-cards" key={index} onClick={onSkill}>
                <img src={skil.Logo} alt="" />
                <h3>{skil.skill}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div id="my-projects">
        <div id="projects">
          <h1>{"<My projects/>"}</h1>
        </div>
        {projectData.map((data) => (
          <div id="project-check">
            <img src={data.Img} alt="" />
            <span>
              <h2>{data.ProTitle}</h2>
              <p>{data.proInfo}</p>
              <div id="visit">
                <a href={data.source}>
                  <u>Source Code</u>
                </a>
                <a href={data.proLink}>visit</a>
              </div>
            </span>
          </div>
        ))}
      </div>

      <SkillRange />
      <div id="footer">
        <Footer />
      </div>
    </>
  );
}
export default Portfolio;
