import { Button, Paper, Grid, TextField, Box, Typography } from "@mui/material";
import { Form, useFormik } from "formik";
import React from "react";
import { userSchema } from "../../Schemas";

const initialValues = {
  name: "",
  age: "",
  email: "",
  phonenumber: "",
  password: "",
  company: "",
};

function FromValidation() {
  const Formik = useFormik({
    initialValues: initialValues,
    validationSchema: userSchema,
    onSubmit: (values,actions) => {
      alert("Form submitted successfully");
      actions.resetForm({
        values:{
          name: "",
          age: "",
          email: "",
          phonenumber: "",
          password: "",
          company: "",
        }

      });
    },
  });
  console.log(Formik.handleBlur);

  return (
    <>
      <Box
        container={true}
        sx={{ boxShadow: 3, width: "40%", mx: "auto" }}
        spacing={3}
        paddingX={5}
        paddingY={8}
        marginY={2}
      >
        <Typography variant="h5" marginBottom={4}>
          Form Validations
        </Typography>

        <form onSubmit={Formik.handleSubmit} spacing={2}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Grid>
                <TextField
                  name="name"
                  value={Formik.values.name}
                  label="Name"
                  onChange={Formik.handleChange}
                  onBlur={Formik.handleBlur}
                />
              </Grid>
              <Grid>
                {Formik.errors.name && Formik.touched.name ? (
                  <Typography sx={{ color: "red" }} variant="p">
                    {Formik.errors.name}
                  </Typography>
                ) : null}
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Grid>
                <TextField
                  label="Age"
                  value={Formik.values.age}
                  name="age"
                  onChange={Formik.handleChange}
                  onBlur={Formik.handleBlur}
                />
              </Grid>
              <Grid item xs={12}>
                {Formik.errors.age && Formik.touched.age ? (
                  <Typography sx={{ color: "red" }} variant="p">
                    {Formik.errors.age}
                  </Typography>
                ) : null}
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Grid>
                <TextField
                  label="Email"
                  value={Formik.values.email}
                  name="email"
                  onChange={Formik.handleChange}
                  onBlur={Formik.handleBlur}
                />
              </Grid>
              <Grid item xs={12}>
                {Formik.errors.email && Formik.touched.email ? (
                  <Typography sx={{ color: "red" }} variant="p">
                    {" "}
                    {Formik.errors.email}{" "}
                  </Typography>
                ) : null}
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Grid>
                <TextField
                  label="Company"
                  value={Formik.values.company}
                  name="company"
                  onChange={Formik.handleChange}
                  onBlur={Formik.handleBlur}
                />
              </Grid>
              <Grid item xs={12}>
                {Formik.errors.company && Formik.touched.company ? (
                  <Typography sx={{ color: "red" }} variant="p">
                    {" "}
                    {Formik.errors.company}{" "}
                  </Typography>
                ) : null}
              </Grid>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Grid>
                <TextField
                  label="Phone Number"
                  value={Formik.values.phonenumber}
                  name="phonenumber"
                  onChange={Formik.handleChange}
                  onBlur={Formik.handleBlur}
                />
              </Grid>
              <Grid item xs={12}>
                {Formik.errors.phonenumber && Formik.touched.phonenumber ? (
                  <Typography sx={{ color: "red" }} variant="p">
                    {" "}
                    {Formik.errors.phonenumber}{" "}
                  </Typography>
                ) : null}
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Grid>
                <TextField
                  label="Password"
                  value={Formik.values.password}
                  name="password"
                  onChange={Formik.handleChange}
                  onBlur={Formik.handleBlur}
                />
              </Grid>
              <Grid item xs={12}>
                {Formik.errors.password && Formik.touched.password ? (
                  <Typography sx={{ color: "red" }} variant="p">
                    {" "}
                    {Formik.errors.password}{" "}
                  </Typography>
                ) : null}
              </Grid>
            </Grid>
          </Grid>
          <Grid marginY={3}>
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Grid>
        </form>
        <Grid container></Grid>
      </Box>
    </>
  );
}

export default FromValidation;
