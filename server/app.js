require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const PORT = 5005;
const cohorts = require("./cohorts.json");
const students = require("./students.json");
const StudentsModel = require("./models/Students.model");
const CohortsModel = require("./models/Cohorts.model");
const cors = require("cors");
const {
  errorHandler,
  notFoundHandler,
} = require("./middleware/error-handling");

//

// STATIC DATA
// Devs Team - Import the provided files with JSON data of students and cohorts here:
mongoose
  .connect("mongodb://127.0.0.1:27017/cohort-tools-api")
  .then((x) => console.log(`Connected to Database: "${x.connections[0].name}"`))
  .catch((err) => console.error("Error connecting to MongoDB", err));

// INITIALIZE EXPRESS APP - https://expressjs.com/en/4x/api.html#express
const app = express();

// MIDDLEWARE
// Research Team - Set up CORS middleware here:
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


// ROUTES - https://expressjs.com/en/starter/basic-routing.html
// Devs Team - Start working on the routes here:
// ...

app.get("/docs", (req, res) => {
  res.sendFile(__dirname + "/views/docs.html");
});

// getting all the cohorts
<<<<<<< HEAD
app.get("/api/cohorts", (req, res) => {
  res.json(cohorts);
});
=======
>>>>>>> ee4ed805658e728898429b702ddfb0ed5767fa94

// Creatingg new cohorts
app.post("/api/cohorts", (req, res) => {
  CohortsModel.create({
    inProgress: req.body.inProgress,
    cohortSlug: req.body.cohortSlug,
    cohortName: req.body.cohortName,
    program: req.body.program,
    campus: req.body.campus,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    programManager: req.body.programManager,
<<<<<<< HEAD
    leadTeach: req.body.leadTeach,
=======
    leadTeacher: req.body.leadTeacher,
>>>>>>> ee4ed805658e728898429b702ddfb0ed5767fa94
    totalHours: req.body.totalHours,
  })
    .then((createdCohort) => {
      res.status(201).json(createdCohort);
    })
    .catch((err) => {
      res.status(500).json({ message: "Error creating new cohort!" });
    });
});

// Finding ALL cohorts
app.get("/api/cohorts", (req, res) => {
  CohortsModel.find()
    .then((allCohorts) => {
      res.status(200).json(allCohorts);
    })
    .catch((err) => {
      res.status(500).json({ message: "Error!" });
    });
});

// gets the cohort ID
app.get("/api/cohorts/:cohortId", (req, res) => {
  CohortsModel.findById(req.params.cohortId)
    .then((cohorts) => {
      res.status(200).json(cohorts);
    })
    .catch((error) => {
      res.status(500).json({ message: "Error!" });
    });
});

// FINDING COHORTS WITH ID AND UPDATE
<<<<<<< HEAD
app.get("/api/cohorts/:cohortId", () => {
=======
app.put("/api/cohorts/:cohortId", () => {
>>>>>>> ee4ed805658e728898429b702ddfb0ed5767fa94
  CohortsModel.findByIdAndUpdate(req.params.cohortId)
    .then((updatedCohortsModel) => {
      res.status(200).json(updatedCohortsModel);
    })
    .catch(() => {
      res.status(500).json({ message: "Error!" });
    });
});

/// DELETE // Deletes a specific cohort by id

app.delete("/api/cohorts/:cohortId", (req, res) => {
  CohortsModel.findByIdAndDelete(req.params.cohortId)
    .then(() => {
      res.status(204).send();
    })
    .catch((error) => {
      res.status(500).json({ message: "Error while deleting" });
    });
});

// STUDENTS ROUTES
app.get("/api/students", (req, res) => {
  res.json(students);
});

app.post("/api/students", (req, res) => {
  StudentsModel.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone,
    linkedinUrl: req.body.linkedinUrl,
    languages: req.body.languages,
    program: req.body.program,
    background: req.body.background,
    image: req.body.image,
    cohort: req.body.cohort,
    projects: req.body.projects,
  })
    .then((students) => {
      res.status(201).json(students);
    })
    .catch((err) => {
      res.status(500).json({ message: "Error creating new Student" });
<<<<<<< HEAD
=======
      console.log(err);
>>>>>>> ee4ed805658e728898429b702ddfb0ed5767fa94
    });
});

app.get("/api/students", (req, res) =>
  StudentsModel.find()
    .then((allStudents) => {
      res.status(200).json(allStudents);
    })
    .catch((err) => {
      res.status(500).json({ message: "error finding all students" });
<<<<<<< HEAD
=======
      console.log(err);
>>>>>>> ee4ed805658e728898429b702ddfb0ed5767fa94
    })
);

app.get("/api/students/cohort/:cohortId", (req, res) => {
  StudentsModel.findById({ cohort: cohortId })
    .populate("cohorts")
    .then((student) => {
      res.status(200).json(student);
    })
    .catch((err) => {
      res.status(500).json({ message: "Error finding Studentes by cohortId" });
    });
});

app.get("/api/students/:studentId", (req, res) => {
  StudentsModel.findById(req.params.studentId)
    .then((student) => {
      res.status(200).json(student);
    })
    .catch((err) => {
      res.status(500).json({ message: "Error gettin one Student" });
    });
});

app.put("/api/student/:studentId", (req, res) => {
<<<<<<< HEAD
  StudentsModel.findByIdAndUpdate(req.params, req.body, { new: true })
=======
  StudentsModel.find(req.params, req.body, { new: true })
>>>>>>> ee4ed805658e728898429b702ddfb0ed5767fa94
    .then((student) => {
      res.status(200).json(student);
    })
    .catch((err) => {
<<<<<<< HEAD
      res.status(500).json({ message: "Error updating student" });
=======
      res
        .status(500)
        .json({ message: "Error updating student", error: err.message });
>>>>>>> ee4ed805658e728898429b702ddfb0ed5767fa94
    });
});

app.delete("/api/student/:studentId", (req, res) => {
  StudentsModel.findOneAndDelete(req.params.studentId)
    .then(() => {
      res.status(204).send();
    })
    .catch((err) => {
      res.status(500).json({ message: "Error deleting a student" });
    });
});
<<<<<<< HEAD
=======

// MARIANA ADDED

const authRouter = require("./routes/auth.routes"); //  <== IMPORT
app.use("/auth", authRouter);  
app.use(notFoundHandler);
app.use(errorHandler); 
>>>>>>> ee4ed805658e728898429b702ddfb0ed5767fa94

// START SERVER
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});