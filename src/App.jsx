import LandingSection from "./components/LandingSection";
import TransformationSlider from "./components/TransformationSlider";
import NinetyTransformation from "./components/NinetyTransformation";
import Plans from "./components/Plans";
import Discount from "./components/Discount";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import CoachSection from "./components/CoachSection";
import Combos from "./components/Combos";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import Errorpage from "./pages/Errorpage";
import Homepage from "./pages/Homepage";
import SuperPlanDetails from "./pages/SuperPlanDetails";
import consultImg from "./assets/consult.jpg";
import beforeImage from "./assets/6O9A2315.jpg";
import firstImg from "./assets/first.jpg";
import superBeginning from "./assets/superBeginning.jpg";
import superBulk from "./assets/superBulk.jpg";
import superShred from "./assets/superShred.jpg";
import "./App.css";

function App() {
  const [showDiscount, setShowDiscount] = useState(false);

  const planDetails = [
    {
      poster: superBeginning,
      media: [superBeginning, "kyRZOtN89s4"],
      title: "SUPER BEGINNING",
      target: "For Beginners",
      mrp: 6000,
      price: 2000,
      desc: "This program is designed for those who are just starting their fitness journey, coming back after a break, or intermediates who need to strengthen their foundation to overcome a plateau.",
      services: [
        {
          name: "CUSTOMIZED WORKOUT PLAN (PDF)",
          include:
            "A workout plan tailored to introduce beginners to exercise gradually and safely. Ideal for individuals returning to fitness after a break and intermediates who need to rebuild a strong foundation to break through plateaus. The plan focuses on fundamental exercises to build a strong base and incorporates both bodyweight exercises and basic equipments. It is divided into two phases, with progression in the last four weeks to ensure continuous improvement and adaptation.",
        },
        {
          name: "EXERCISE DEMONSTRATION VIDEOS",
          include:
            "Access to videos showing correct form and techniques for each exercise, with detailed instructions to ensure safe and effective workouts. Rohit Sharma himself appears in the tutorials to perfectly demonstrate the exercises with just a click on exercise name which is a link, helping you understand and perform each exercise correctly, minimizing the risk of injury and maximizing results.",
        },
        {
          name: "BASIC NUTRITION GUIDANCE VIDEO",
          include:
            "Easy-to-follow dietary advice to help build healthy eating habits, focusing on balanced meals with proper macronutrient distribution. This video provides sample meal plans and snack ideas to simplify your nutritional approach.",
        },
        {
          name: "PLAN EXPLANATION VIDEO",
          include:
            "A comprehensive video that explains the details of your personalized plan, helping you understand how to follow it effectively and get the best results. This video addresses common questions and provides clarity on each aspect of your plan.",
        },
        {
          name: "UNLIMITED TIME ACCESS TO PLAN",
          include:
            "You will have unlimited access to your workout and nutrition plans, allowing you to follow them at your own pace and revisit them whenever needed.",
        },
      ],
    },
    {
      poster: superShred,
      media: [superShred, "kyRZOtN89s4"],
      title: "SUPER SHRED",
      target: "For Fat Loss and getting Lean",
      mrp: 6000,
      price: 2000,
      desc: "This program is designed for individuals who have spent more than six months in the gym, have hit a plateau, and are struggling to lose fat and shape their bodies. This 12-week program is divided into two phases with modified volume and intensity for maximum fat loss and building a good amount of lean muscle mass. In this plan, you're going to experience something new which you might not have ever tried.",
      services: [
        {
          name: "CUSTOMIZED WORKOUT PLAN (PDF)",
          include:
            "A workout plan tailored to burn calories and increase metabolism, focusing on high-intensity workouts and exercises that promote fat loss while building lean muscle. The plan is divided into two phases, with progression in the last six weeks to ensure continuous improvement and adaptation.",
        },
        {
          name: "EXERCISE DEMONSTRATION VIDEOS",
          include:
            "Access to videos showing correct form and techniques for each exercise, with detailed instructions to ensure safe and effective workouts. Rohit Sharma himself appears in the tutorials to perfectly demonstrate the exercises with just a click on exercise name which is a link, helping you understand and perform each exercise correctly, minimizing the risk of injury and maximizing results.",
        },
        {
          name: "BASIC NUTRITION GUIDANCE VIDEO",
          include:
            " Easy-to-follow dietary advice to help you achieve a calorie deficit while ensuring proper nutrition. This video provides sample meal plans and snack ideas that support fat loss and lean muscle building, focusing on balanced meals with the right macronutrient distribution.",
        },
        {
          name: "PLAN EXPLANATION VIDEO",
          include:
            "A comprehensive video that explains the details of your personalized plan, helping you understand how to follow it effectively and get the best results. This video addresses common questions and provides clarity on each aspect of your plan.",
        },
        {
          name: "UNLIMITED TIME ACCESS TO PLAN",
          include:
            "You will have unlimited access to your workout and nutrition plans, allowing you to follow them at your own pace and revisit them whenever needed.",
        },
      ],
    },

    {
      poster: superBulk,
      media: [superBulk, "kyRZOtN89s4"],
      title: "SUPER BULK",
      target: "For Muscle Building and Gaining  Strength",
      mrp: 6000,
      price: 2000,
      desc: "This program is designed for individuals who are focused on gaining muscle size and strength. Perfect for those who want to bulk up and see significant muscle gains, this 12-week program provides a structured approach to ensure maximum muscle growth and strength development. Feel the explosive strength and muscle growth like never before in this plan.",
      services: [
        {
          name: "CUSTOMIZED WORKOUT PLAN (PDF)",
          include:
            "A workout plan tailored to progressively overload your muscles and stimulate growth, focusing on strength training and hypertrophy. The plan is divided into two phases, with progression in the last six weeks to ensure continuous improvement and adaptation, helping you achieve substantial muscle gains.",
        },
        {
          name: "EXERCISE DEMONSTRATION VIDEOS",
          include:
            "Access to videos showing correct form and techniques for each exercise, with detailed instructions to ensure safe and effective workouts. Rohit Sharma himself appears in the tutorials to perfectly demonstrate the exercises with just a click on the exercise name which is a link, helping you understand and perform each exercise correctly, minimizing the risk of injury and maximizing results.",
        },
        {
          name: "BASIC NUTRITION GUIDANCE VIDEO",
          include:
            "Easy-to-follow dietary advice to support muscle growth with the right balance of macronutrients. This video provides sample meal plans and snack ideas that focus on high protein intake and caloric surplus to fuel muscle building.",
        },
        {
          name: "PLAN EXPLANATION VIDEO",
          include:
            "A comprehensive video that explains the details of your personalized plan, helping you understand how to follow it effectively and get the best results. This video addresses common questions and provides clarity on each aspect of your plan.",
        },
        {
          name: "UNLIMITED TIME ACCESS TO PLAN",
          include:
            "You will have unlimited access to your workout and nutrition plans, allowing you to follow them at your own pace and revisit them whenever needed.",
        },
      ],
    },
    {
      poster: consultImg,
      media: [consultImg, "kyRZOtN89s4"],
      title: "Video Consultation",
      mrp: 2000,
      price: 1000,
      desc: "Take your fitness journey to the next level with our personalized 30-minute video consultation. This service is designed for those who need expert advice on their current training and nutrition plans.",
      services: [
        {
          name: "Personalized Q&A",
          include:
            "Ask questions about your current fitness routine and diet plan, clear all your doubts and receive tailored solutions to your fitness queries.",
        },
        {
          name: "Professional Advice",
          include:
            "Get expert guidance to adjust and optimize your workout and nutrition plans.",
        },
        {
          name: "Comprehensive Review",
          include:
            "We will thoroughly review your current plans and suggest effective changes to help you achieve better results.",
        },
        {
          name: "Actionable Solutions",
          include:
            "Receive practical and actionable advice that you can implement immediately.",
        },
        {
          name: "Motivation and Support",
          include:
            "Gain motivation and support to keep you on track and committed to your fitness goals.",
        },
      ],
    },
    {
      poster: consultImg,
      media: [consultImg, "kyRZOtN89s4"],
      title: "Online Personal Training",
      mrp: 2000,
      price: 1000,
      desc: "Experience the ultimate convenience and effectiveness of personalized one-to-one personal training sessions, all from the comfort of your home. Whether you have a home gym, a few pieces of equipment, or none at all, our live online PT sessions ensure you perform every exercise correctly and efficiently.",
      services: [
        {
          name: "Customized Workouts",
          include:
            "Tailored to your body and fitness level, ensuring maximum results.",
        },
        {
          name: "Correct Technique",
          include:
            "No more incorrect movements. Get real-time corrections and learn the proper technique for each exercise.",
        },
        {
          name: "Full Attention",
          include:
            "Every movement is monitored to ensure optimal form and prevent injuries.",
        },
        {
          name: "Flexible Scheduling",
          include: " Schedule training sessions at your convenience.",
        },
        {
          name: "On-the-Spot Motivation",
          include: "Stay motivated with immediate feedback and encouragement.",
        },
        {
          name: "Adaptable Training",
          include:
            " Programs designed to adapt to your progress and changing fitness needs.",
        },
        {
          name: "Holistic Guidance",
          include:
            "Receive comprehensive advice on exercise, nutrition, and overall wellness.",
        },
        {
          name: "Continuous Support",
          include:
            "Enjoy ongoing support and adjustments to your plan for continuous improvement.",
        },
        {
          name: "Direct Access to Rohit",
          include:
            "Stay connected 24/7 through WhatsApp or call for any questions or additional support.",
        },
      ],
    },
    {
      poster: beforeImage,
      media: [beforeImage, "kyRZOtN89s4"],
      title: "SUPER BEGINNING + SUPER SHRED",
      mrp: 3000,
      price: 1500,
      services: [
        {
          name: "CONSISTENT TRAINING FOR MAXIMUM BENEFITS",
          include:
            "With this combo, you will receive a comprehensive 8-week Super Beginning plan followed by a 12-week Super Shred plan. This ensures consistent training, starting with building a strong foundation and transitioning into an intense fat loss and muscle sculpting phase for optimal results.",
        },
        {
          name: "COMPREHENSIVE TRANSFORMATION",
          include:
            "By combining Super Beginning and Super Shred, you get a holistic approach to your fitness journey. Start with building a strong foundation in Super Beginning, mastering the basics, and gaining confidence in your fitness abilities.",
        },
        {
          name: "ACCELERATED FAT LOSS AND LEAN MUSCLE DEVELOPMENT",
          include:
            "Transition seamlessly into Super Shred to accelerate fat loss and sculpt lean muscle. Benefit from boosted metabolism and targeted exercises designed to burn fat while enhancing muscle definition.",
        },
        {
          name: "VERSATILE AND FLEXIBLE PROGRAM",
          include:
            "Enjoy the flexibility to fit your lifestyle with personalized workout and nutrition plans from both programs. Whether you're a beginner or aiming for lean muscle, this combo offers tailored guidance to achieve your goals effectively.",
        },
        {
          name: "DISCOUNTED PRICING",
          include:
            "Purchase both programs together and receive a special discount. These plans have been proven to give better results and require a lot of expertise to design, making them a valuable investment in your muscle-building journey.",
        },
      ],
    },
    {
      poster: beforeImage,
      media: [beforeImage, "kyRZOtN89s4"],
      title: "SUPER BEGINNING + SUPER BULK",
      mrp: 3000,
      price: 1500,
      services: [
        {
          name: "CONSISTENT TRAINING FOR MAXIMUM BENEFITS",
          include:
            "With this combo, you will receive a comprehensive 8-week Super Beginning plan followed by a 12-week Super Bulk plan. This ensures consistent training, starting with building a strong foundation and transitioning into an intense muscle-building and strength-gaining phase for optimal results.",
        },
        {
          name: "COMPREHENSIVE MUSCLE BUILDING JOURNEY",
          include:
            "Start with Super Beginning to build a solid foundation and master basic exercises. Lay the groundwork for strength and endurance, ensuring you're prepared for the muscle-building phase.",
        },
        {
          name: "EXPLOSIVE MUSCLE GROWTH AND STRENGTH DEVELOPMENT",
          include:
            "Progress to Super Bulk to experience explosive strength gains and substantial muscle growth. Benefit from targeted hypertrophy training and progressive overload techniques to build mass and enhance power.",
        },
        {
          name: "PERSONALIZED APPROACH",
          include:
            "Receive personalized workout plans and nutrition guidance tailored to both beginner fitness levels and advanced muscle-building goals. This combo ensures that every aspect of your fitness journey is carefully planned for optimal results.",
        },
        {
          name: "COST SAVINGS",
          include:
            "Enjoy significant savings with a bundled discount when you purchase both Super Beginning and Super Bulk together. These plans have been proven to give better results and require a lot of expertise to design, making them a valuable investment in your muscle-building journey.",
        },
      ],
    },
    {
      poster: beforeImage,
      media: [beforeImage, "kyRZOtN89s4"],
      title: "90-Day Online Body Transformation Program",
      mrp: 3000,
      price: 1500,
      desc: "Achieving your fitness goals can be easier and more effective with the right guidance of a good coach. With our 90-day online transformation coaching program, you will receive expert support and personalized plans, no matter where you are—any city, state, or country, or wherever you do your workout—whether at home, in the gym, or at a park. Our approach ensures you stay motivated, make informed decisions, and always stay on track.",
      services: [
        {
          name: "Customized Workout Plan",
          include:
            "A workout plan tailored just for you, accessible from anywhere.",
        },
        {
          name: "Tailored Diet Plan",
          include:
            "A personalized diet plan designed to fit your lifestyle, eating preferences, and goals.",
        },
        {
          name: "Exercise Demonstration Videos",
          include:
            "Exclusive access to videos showing you exactly how to perform each exercise, ensuring perfect form every time.",
        },
        {
          name: "Initial Voice Call with Rohit Sharma",
          include:
            "A comprehensive voice call to discuss your goals and create a personalized action plan.",
        },
        {
          name: "24/7 WhatsApp Support",
          include:
            "Continuous support and guidance available anytime you need it, right on your phone.",
        },
        {
          name: "Exercise Form Correction",
          include:
            "Regular feedback on your exercise form through video submissions, helping you improve quickly and safely.",
        },
        {
          name: "Daily/Weekly Meal & Progress Tracking",
          include:
            "Easy meal tracking through WhatsApp—just send your meals, and I'll make sure you're following the right diet with the right amount of calories.",
        },
        {
          name: "Modifications in Workout and Diet Plan",
          include:
            "Adjustments to your plans after 45 days to keep your progress steady and effective.",
        },
      ],
    },
  ];

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <Errorpage />,
      children: [
        {
          index: true,
          element: (
            <Homepage
              setShowDiscount={setShowDiscount}
              showDiscount={showDiscount}
            />
          ),
        },
        {
          path: "/home/plan/superplans/superbeginning",
          element: <SuperPlanDetails details={planDetails[0]} />,
        },
        {
          path: "/home/plan/superplans/supershred",
          element: <SuperPlanDetails details={planDetails[1]} />,
        },
        {
          path: "/home/plan/superplans/superbulk",
          element: <SuperPlanDetails details={planDetails[2]} />,
        },
        {
          path: "/home/plan/videoconsultation",
          element: <SuperPlanDetails details={planDetails[3]} />,
        },
        {
          path: "/home/plan/onlinept",
          element: <SuperPlanDetails details={planDetails[4]} />,
        },
        {
          path: "/home/plan/combo/beginning+shred",
          element: <SuperPlanDetails details={planDetails[5]} />,
        },
        {
          path: "/home/plan/combo/beginning+bulk",
          element: <SuperPlanDetails details={planDetails[6]} />,
        },
        {
          path: "/home/plan/90+day+online+transformation+program",
          element: <SuperPlanDetails details={planDetails[7]} />,
        },
      ],
    },
  ]);

  useEffect(() => {
    const initialTimeout = setTimeout(() => {
      setShowDiscount(true);
    }, 3000);
    const interval = setInterval(() => {
      setShowDiscount(true);
    }, 60000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="appWrapper">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
