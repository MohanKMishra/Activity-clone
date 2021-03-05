import React from "react";
import data from "../Data/test.json";
import "./Home.css";
import Calendar from "./Calendar";
import Card from "./Card";

const Home = () => {
  return (
    <div className="container">
      {data.members.map((e) => {
        return (
          <div>
            <div className="card-container">
              <Card data={e} />
              <button
                type="button"
                className="button btn btn-success"
                data-toggle="modal"
                data-target={"#" + e.id}
              >
                Click to view activity details
              </button>
            </div>
          </div>
        );
      })}

      {data.members.map((e) => {
        return (
          <div
            class="modal fade"
            id={e.id}
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLongTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLongTitle">
                    {e.real_name}
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <Calendar data={e} />
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Home;
