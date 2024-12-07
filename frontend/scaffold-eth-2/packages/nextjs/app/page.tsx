"use client";

import AccountDetails from "./components/AccountDetails";
import AdminPanel from "./components/AdminPanel";
import BuyReturnTokens from "./components/BuyReturnTokens";
import CheckLotteryState from "./components/CheckLotteryState";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center mb-8">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">Lottery</span>
          </h1>
          <PageBody />
        </div>
      </div>
    </>
  );
};

function PageBody() {
  return (
    <>
      <p className="text-center text-lg">Here we are!</p>
      <AccountDetails />
      <BuyReturnTokens />
      <CheckLotteryState />
      <AdminPanel />
    </>
  );
}

export default Home;
