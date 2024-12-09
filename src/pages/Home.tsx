import { Button } from "@mui/material";
// import Logo from "../assets/NeuroWhealth.png";

const Home = () => {
  return (
    <div className="flex items-center justify-center h-[100vh] text-center bg-[#e2e3f5]">
      <div>
        {/* <div className="Logo text-center mb-10">
          <img src={Logo} className="m-auto" />
        </div> */}
        <h1 className="text-[2rem] font-bold text-[#493e82] mb-2">
          Welcome to the Home Page!
        </h1>
        <p className="mb-5">This is the landing page of Neuro Wealth App</p>
        <div>
          {" "}
          <Button
            variant="contained"
            color="primary"
            href="/dashboard/neural-pattern-score"
          >
            Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
