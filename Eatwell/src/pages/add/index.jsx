import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import { EatSchema } from "./schema/schema";
import axios from "axios";
import "./index.scss";
const Add = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    let res = await axios("http://localhost:8080/products");
    setData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:8080/products/${id}`);

    console.log(id);
  };

  return (
    <div id="add">
      <div className="container">
        <div className="add">
          <Formik
            initialValues={{
              imgUrl: "",
              price: 0,
              productName: "",
              description: "",
            }}
            validationSchema={EatSchema}
            onSubmit={async (values, { resetForm }) => {
              let foods = {
                imgUrl: values.img,
                price: values.price,
                productName: values.name,
                description: values.detail,
              };
              try {
                await axios.post("http://localhost:8080/products", foods);
                resetForm();
              } catch (error) {
                console.log(error);
              }
            }}
          >
            {({ isSubmitting, errors, touched }) => (
              <Form className="productForm">
                <Field
                  type="url"
                  name="img"
                  className="field"
                  placeholder="Image"
                />
                {errors.img && touched.img && <p>{errors.img}</p>}
                <Field
                  type="number"
                  name="price"
                  className="field"
                  placeholder="Price"
                />
                {errors.price && touched.price && <p>{errors.price}</p>}

                <Field
                  type="text"
                  name="name"
                  className="field"
                  placeholder="Name"
                />
                {errors.name && touched.name && <p>{errors.name}</p>}

                <Field
                  type="text"
                  name="detail"
                  className="field"
                  placeholder="Detail"
                />
                {errors.detail && touched.detail && <p>{errors.detail}</p>}
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>

        <div className="table">
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Img</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Desc</th>
                <th>delete</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item) => (
                <tr>
                  <td>{item._id}</td>
                  <td>
                    <img src={item.imgUrl} />
                  </td>
                  <td>{item.productName}</td>
                  <td>{item.price}</td>
                  <td>{item.description}</td>
                  <td>
                    <button onClick={() => deleteProduct(item._id)}>
                      delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Add;
