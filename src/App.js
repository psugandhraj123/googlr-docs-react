import axios from "axios";
import { Field, Form, Formik } from "formik";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Formik
        initialValues={{ Email: "", Name: "" }}
        onSubmit={(values) => {
          console.log(values);
          axios
            .post(
              "https://sheet.best/api/sheets/ec201f71-904b-42e1-a160-7d554f366d23",
              {
                headers: {
                  "X-Api-Key":
                    "2y@U!BKz96nGGXDwaG%VkJyu@%DJo0DI9MuYn6Xj7okC1l4icg8ryE1_5XU#G$gf"
                }
              },
              values
            )
            .then((data) => console.log(data))
            .catch((error) => {
              console.log(error);
            });
        }}
      >
        <Form>
          <Field type="text" name="Name" placeholder="Enter Name" />
          <Field type="email" name="Email" placeholder="Enter Email" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}
