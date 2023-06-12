import React from "react";
import Navbar from "../../components/Navbar";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="jumbotron text-center">
        <div className="display-4">About Us</div>
        <p className="lead">This is simple About us page</p>
      </div>
      <div className="container">
        <section>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            pariatur explicabo veniam dignissimos, repellat ratione aspernatur
            ex culpa autem illum nobis recusandae quod accusamus, tempora hic
            sapiente itaque reiciendis! Alias.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            pariatur explicabo veniam dignissimos, repellat ratione aspernatur
            ex culpa autem illum nobis recusandae quod accusamus, tempora hic
            sapiente itaque reiciendis! Alias.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            pariatur explicabo veniam dignissimos, repellat ratione aspernatur
            ex culpa autem illum nobis recusandae quod accusamus, tempora hic
            sapiente itaque reiciendis! Alias.
          </p>
        </section>
      </div>
    </>
  );
};
export default AboutPage;
