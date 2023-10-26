import React,{ useContext, useEffect } from 'react'
import noteContext from '../context/notes/NoteContext'
import Footer from '../Footer';


const About = () => {
  
  return (
    <>
    
      <div className="container my-2 align-center " id='info'>
        <h2 > What is iNoteBook </h2>
        <br></br>
        <br></br>
        <p>
          In today's digital age, the traditional notebook is getting a
          contemporary makeover, and it's all happening in the cloud with
          iNotebook. iNotebook is not just a notebook; it's your virtual
          companion for capturing ideas, organizing thoughts, and staying
          productive in an increasingly connected world.Whether you're a student, professional, or creative thinker, iNotebook revolutionizes the way you capture and manage information. Embrace the convenience, accessibility, and organization of the digital age with iNotebook, your trusted digital notebook in the cloud. Welcome to the future of note-taking. Welcome to iNotebook.






        </p>
      </div>
      <h1 className="my-4 mb-5" style={{ 'textAlign': "center" ,'font-size':"45px",'font-weight':'bolder' }}>
      Power Of iNoteBook
      </h1>
      <div className="row" id='box'>
        <div className="col-md-3" id='box1' >
          <div className="card" style={{ width: "20rem", height: "25rem" }}>
            <div className="card-head">
              <h2 className="card-title text-center mx-2 my-4">
                Anywhere, Anytime Access:{" "}
              </h2>
            </div>
            <div className="card-body">
              <p
                className="card-text text-center"
                style={{ "font-size": "20px" }}
              >
                With iNotebook, your notes are always at your fingertips.
                Whether you're at home, in the office, or on the go, you can
                access your digital notebook from any device with an internet
                connection.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card" style={{ width: "20rem", height: "25rem" }}>
            <div className="card-head">
              <h2 className="card-title text-center mx-2 my-4">
                Enhanced Security:{" "}
              </h2>
            </div>
            <div className="card-body">
              <p
                className="card-text text-center"
                style={{ "font-size": "20px" }}
              >
                Your privacy matters. iNotebook employs robust security measures
                to keep your data safe and confidential. Rest assured that your
                notes are protected from unauthorized access.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card" style={{ width: "20rem", height: "25rem" }}>
            <div className="card-head">
              <h2 className="card-title text-center mx-2 my-4">
                Seamless Synchronization:{" "}
              </h2>
            </div>
            <div className="card-body">
              <p
                className="card-text text-center"
                style={{ "font-size": "20px" }}
              >
                Say goodbye to the hassles of manually transferring notes.
                iNotebook seamlessly syncs your notes and updates across all
                your devices, ensuring that your work is always up to date.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card" style={{ width: "20rem", height: "25rem" }}>
            <div className="card-head">
              <h2 className="card-title text-center mx-2 my-4">
                Advanced Organization:{" "}
              </h2>
            </div>
            <div className="card-body">
              <p
                className="card-text text-center"
                style={{ "font-size": "20px" }}
              >
                With customizable notebooks, tags, and folders, iNotebook helps
                you keep your digital workspace tidy and organized. You can
                quickly find what you need, even amid a sea of notes.
              </p>
            </div>
          </div>
        </div>
      </div>
      <h1 className="my-5 mt-5" style={{ textAlign: "center",'margin-top':"50px", 'font-size':"45px",'font-weight':'bolder' }}>
        Uses Of iNoteBook
      </h1>
      <div className="row" id='box2'>
        <div className="col-md-3">
          <div className="card" style={{ width: "20rem", height: "22rem" }}>
            <div className="card-head">
              <h2 className="card-title text-center mx-2 my-4">
                Professional Note-Taking:
              </h2>
            </div>
            <div className="card-body">
              <p
                className="card-text text-center"
                style={{ "font-size": "20px" }}
              >
                iNotebook is perfect for professionals attending meetings,
                conferences, or brainstorming sessions. Capture ideas, create
                to-do lists, and jot down action items effortlessly.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card" style={{ width: "20rem", height: "22rem" }}>
            <div className="card-head">
              <h2 className="card-title text-center mx-2 my-4">
                Academic Excellence:{" "}
              </h2>
            </div>
            <div className="card-body">
              <p
                className="card-text text-center"
                style={{ "font-size": "20px" }}
              >
                Students can use iNotebook to take organized class notes,
                collaborate on group projects, and maintain a digital study
                journal.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card" style={{ width: "20rem", height: "22rem" }}>
            <div className="card-head">
              <h2 className="card-title text-center mx-2 my-4">
                Creative Expression:{" "}
              </h2>
            </div>
            <div className="card-body">
              <p
                className="card-text text-center"
                style={{ "font-size": "20px" }}
              >
                Artists, writers, and designers can use iNotebook to sketch,
                write, and record inspiration. It's your digital canvas for
                creative expression.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card" style={{ width: "20rem", height: "22rem" }}>
            <div className="card-head">
              <h2 className="card-title text-center mx-2 my-4">
                Personal Journal:{" "}
              </h2>
            </div>
            <div className="card-body">
              <p
                className="card-text text-center"
                style={{ "font-size": "20px" }}
              >
                Keep a digital diary, track personal goals, and document life's
                journey in a secure and easily accessible format.
              </p>
            </div>
          </div>
        </div>
      </div>
      <h2 className="my-4 mt-5" style={{ textAlign: "center",'font-size':"45px",'font-weight':'bolder'  }}>
        You Can Know More About Us On:
      </h2>
      <div className="accordion my-5" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>GITHUB</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is our GITHUB LINK.</strong>{" "}
              https://github.com/neehalmd
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>LINKEDIN</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is our LINKEDIN Workspace.</strong>{" "}
              www.linkedin.com/in/neehal-dhotegar-13b242270
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>INSTAGRAM</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is our Instagram Account.</strong>
            </div>
          </div>
        </div>
      </div>
      
    
    
    
    </>
  );
}

export default About
