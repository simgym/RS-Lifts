import "./Plans.css";

const Plans = () => {
  const topPlans = [
    {
      name: "BEGINNING",
      services: ["Build Foundation", "Master Basics", "Start Strong"],
      img: {},
      desc: "A 8-week STRONG FOUNDATION plan to kickstart your fitness journey.",
    },
    {
      name: "SHREAD",
      services: [
        "Enhance Defination",
        "Build Lean Muscles",
        "Overcome Plateaus",
      ],
      img: {},
      desc: "A 12-week PROGRESSIVELY INTENSE program to shred fat and get lean.",
    },
    {
      name: "BULK",
      services: ["Build Muscles", "Build Strength", "Elevate Performance"],
      img: {},
      desc: "A 12-week ESCALATING INTENSITY plan to build muscle and gain strength.",
    },
  ];

  const bottomPlans = [
    {
      name: "ONLINE VIDEO/VOICE CONSULTATION",
      desc: "30 Minutes Video Consultation with Rohit",
      img: {},
    },
    {
      name: "ONLINE ONE TO ONE PERSONAL TRAINING",
      desc: "Online Live Transformation Video on Video Call",
      img: {},
    },
  ];
  return (
    <div className="plansWrap">
      <div className="topPlansWrap">
        {topPlans.map((item, index) => (
          <div className="topPlan" key={index}>
            <div className="topPlanHead">
              <div className="topPlanServices">
                {item.services.map((service, ind) => (
                  <p key={ind}>{service}</p>
                ))}
              </div>
              <div className="topPlanNameImg">
                <div className="topPlanName">
                  <p>SUPER</p>
                  <p>{item.name}</p>
                </div>
                <div className="topPlanImg">
                  <img src={item.img} />
                </div>
              </div>
            </div>
            <div className="topPlanDesc">{item.desc}</div>
            <div className="topPlanButton">
              <button>Check</button>
            </div>
          </div>
        ))}
      </div>
      <div className="bottomPlansWrap">
        {bottomPlans.map((item, index) => (
          <div className="bottomPlan" key={index}>
            <div className="bottomPlanName">{item.name}</div>
            <div className="bottomPlanDescImg">
              <span className="bottomPlanDesc">{item.desc}</span>
              <span className="bottomPlanImg">
                <img src={item.img} />
              </span>
            </div>
            <div className="bottomPlanButton">
              <button>Check</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
