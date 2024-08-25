import "./Admin.css";
import React, { useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import { Chart as ChartJS, defaults, plugins } from "chart.js/auto";



defaults.maintainAspectRatio = true;
defaults.responsive = true;
defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 35;
defaults.plugins.title.color = "black";



const Admin = () => {

  const li = document.querySelectorAll(".wc-wb");
  li.forEach((el) => {
    el.addEventListener("click", () => {
      document.querySelector(".active").classList.remove("active");
      el.classList.add("active");
    });
  });
  const [oata, setOata] = useState({
    labels: ["col1", "col2", "col3", "col4", "col5", "col6"],
    datasets: [
      {
        label: "high",
        data: [100, 345, 200, 67, 91, 264],
        backgroundColor: "rgb(71, 23, 244)",
        borderColor: "rgb(71, 23, 244)",
      },
      {
        label: "low",
        data: [200, 310, 550, 120, 299, 180],
        backgroundColor: "rgb(244, 8, 8)",
        borderColor: "rgb(244, 8, 8",
      },
    ],
  });

  
  return (
    <div className="main">
      <div className="navbar">
        <h1>
          {" "}
          Shop<span id="single-text">keeper</span>
        </h1>
        <div className="options">
          <ul>
            <li className="wc-wb  active">
              <i className="fa-solid fa-house"></i> <span>Home</span>
            </li>
            <li className="wc-wb ">
              <i className="fa-solid fa-user"></i> <span>Dashboard</span>
            </li>
            <li className="wc-wb ">
              <i className="fa-solid fa-star"></i> <span>Page</span>
            </li>
            <li className="wc-wb ">
              <i className="fa-brands fa-discord"></i> <span>kelvin</span>
            </li>
            <li className="wc-wb ">
              <i className="fa-solid fa-bookmark"></i> <span>Logo</span>
            </li>
            <li className="wc-wb ">
              <i className="fa-solid fa-calendar-days"></i>{" "}
              <span>Calender</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="others">
        <div className="top-bar">
          <div className="fst">
            <h2>Dashboard</h2>
            <div className="searching">
              <input type="text" name="Search" placeholder="Search...."></input>
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
          <div className="icons">
            <i className="fa-solid fa-bell"></i>{" "}
            <i className="fa-solid fa-circle-user"></i>
          </div>
        </div>
        <div className="cards">
          <div className="cardd">
            <div className="up-icon">
              <i className="fa-solid fa-pen-to-square"></i>
            </div>
            <div>
              <p id="text-color"> Active</p>
              <p id="num">34</p>
            </div>
          </div>
          <div className="cardd">
            <div className="up-icon">
              <i className="fa-solid fa-money-check-dollar"></i>
            </div>
            <div>
              <p id="text-color"> Ratings</p>
              <p id="num">*</p>
            </div>
          </div>
          <div className="cardd">
            <div className="up-icon">
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <div>
              <p id="text-color"> Page Review</p>
              <p id="num">100</p>
            </div>
          </div>
          <div className="cardd">
            <div className="up-icon">
              <i className="fa-solid fa-shield-halved"></i>
            </div>
            <div>
              <p id="text-color"> Collaborative</p>
              <p id="num">70,338,42</p>
            </div>
          </div>
        </div>
        <div className="graph">
          <Bar
            data={oata}
            options={{
              scales: {
                x: {
                  position: "bottom",
                  ticks: {
                    padding: 5,
                    font: {
                      size: 16,
                    },
                  },
                },
                y: {
                  position: "bottom",
                  ticks: {
                    font: {
                      size: 16,
                    },
                  },
                },
              },
              plugins: {
                title: {
                  text: "Revenue ",
                },
              },
            }}
          />
          <Line
            data={oata}
            options={{
              scales: {
                x: {
                  ticks: {
                    padding: 5,
                    font: {
                      size: 17,
                    },
                  },
                },
                y: {
                  ticks: {
                    font: {
                      size: 17,
                    },
                  },
                },
              },
              plugins: {
                title: {
                  text: "Taxes ",
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Admin;
