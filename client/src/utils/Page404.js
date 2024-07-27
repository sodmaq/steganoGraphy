// ----------------------------------------------------------------------
// ----------------------------------------------------------------------
import * as React from "react";

export const Page404 = () => {
  return (
    <>
      <section class="page_404">
        <div class="container">
          <div class="row">
            <div class="contant_box_404">
              <h3 class="h2">Look like you're lost</h3>

              <p>the page you are looking for not avaible!</p>

              <a href="/" class="link_404">
                Go to Home
              </a>
            </div>
            <div class="col-sm-12 ">
              <div class="col-sm-10 col-sm-offset-1  text-center">
                <div class="four_zero_four_bg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// import React from "react";

// function Page404({ onProceed }) {
//   return (
//     <div>
//       <h1>Welcome to the Landing Page</h1>
//       <button onClick={onProceed}>Enter</button>
//     </div>
//   );
// }
// export default Page404;
