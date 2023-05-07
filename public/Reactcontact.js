import React, { useState } from "react";
import jsPDF from "jspdf";

const Reactcontact = () => {
  const [user, setUser] = useState({
    tasktitle: " ",
    taskdescription: " ",
    outputformat: " ",
    acceptancecriteria: " ",
    anyadditionalinfo: " ",
    contactinfo: " "
  });

  let name, value;
  const getuserdata = (event) => {
    name = event.target.name; //targets the particular input box
    value = event.target.value;
    setUser({ ...user, [name]: value });
  };

  const postdata = async (e) => {
    e.preventDefault();

    const {
      tasktitle,
      taskdescription,
      outputformat,
      acceptancecriteria,
      anyadditionalinfo,
      contactinfo
    } = user;

    const response = await fetch("//database url", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        tasktitle,
        taskdescription,
        outputformat,
        acceptancecriteria,
        anyadditionalinfo,
        contactinfo
      })
    });
    if (response) {
      setUser({
        tasktitle: " ",
        taskdescription: " ",
        outputformat: " ",
        acceptancecriteria: " ",
        anyadditionalinfo: " ",
        contactinfo: " "
      });
    }
  };

  function downloadPDF() {
    const divContents = document.getElementById("response-box").innerHTML;
    const pdf = new jsPDF();
    pdf.text(divContents, 10, 10);
    pdf.save("my-pdf.pdf");
  }

  return (
    <>
      <div className="form">
        <div className="title">Welcome</div>
        <div className="subtitle">Get things started!</div>
        <div className="container">
          <form action="" method="POST">
            <div className="input-container ic1">
              <label style={{ color: "whitesmoke" }}> Task Title</label>
              <input
                name="tasktitle"
                className="input input-tasktitle"
                type="text"
                placeholder="Name"
                value={user.tasktitle}
                onChange={getuserdata}
                required
              />
            </div>

            <div className="input-container ic2">
              <label style={{ color: "whitesmoke" }}>Task Description</label>
              <textarea
                name="taskdescription"
                className="input input-taskdescription"
                type="text"
                placeholder="taskdescription"
                value={user.taskdescription}
                onChange={getuserdata}
                required
              />
            </div>

            <div className="input-container ic3">
              <label style={{ color: "whitesmoke" }}>Output Format</label>
              <input
                name="outputformat"
                className="input input-outputformat"
                type="text"
                placeholder="Output Format"
                value={user.outputformat}
                onChange={getuserdata}
                required
              />
            </div>

            <div className="input-container ic4">
              <label style={{ color: "whitesmoke" }}>Acceptance Criteria</label>
              <textarea
                name="acceptancecriteria"
                className="input input-acceptancecriteria"
                type="text"
                placeholder="Acceptance Criteria"
                value={user.acceptancecriteria}
                onChange={getuserdata}
                required
              />
            </div>

            <div className="input-container ic5">
              <label style={{ color: "whitesmoke" }}>Any Additional Info</label>
              <textarea
                name="anyadditionalinfo"
                className="input input-anyadditionalinfo"
                type="text"
                placeholder="Any Additional Info"
                value={user.anyadditionalinfo}
                onChange={getuserdata}
                required
              />
            </div>

            <div className="input-container ic6">
              <label style={{ color: "whitesmoke" }}>Contact Info</label>
              <input
                name="contactinfo"
                className="input input-contactinfo"
                type="text"
                placeholder="Contact Info"
                value={user.contactinfo}
                onChange={getuserdata}
                required
              />
            </div>

            <button type="text" className="submit" onClick={postdata}>
              submit
            </button>
          </form>
        </div>
      </div>
      <div>
        <div id="response-box"></div>
        <button className="submit" onClick={downloadPDF}>
          Download PDF
        </button>
      </div>
    </>
  );
};

export default Reactcontact;
