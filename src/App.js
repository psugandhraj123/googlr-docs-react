import axios from "axios";
import { Field, Form, Formik } from "formik";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Formik
        initialValues={{ email: "", name: "" }}
        onSubmit={(values, { resetForm }) => {

          axios
            .post(
              "https://api.steinhq.com/v1/storages/63418386eced9b09e99ecec3/first",
              [values]
            )
            .then((data) => { console.log(data); resetForm() })
            .catch((error) => {
              console.log(error);
            });
        }}
      >
        <Form>
          <Field type="text" name="name" placeholder="Enter Name" />
          <Field type="email" name="email" placeholder="Enter Email" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}
