import * as Yup from 'yup';


export const personalDetailsSchema = Yup.object({
    fullName:Yup.string().required("Please Enter Your Name"),
    email:Yup.string().email("Invalid Email").required("Please Enter Your Name"),
    phone:Yup.string()
      .matches(/^[0-9]{10}$/, "Phone must be 10 digits")
    .required("Please Enter Your Phone Number"),
    designation:Yup.string().required("Enter Designation"),
    highestQualiification:Yup.string().required("select Your Qualification"),
    reason:Yup.string().when(['graduationCertificate','plusTwoCertificate'],{
        is:(grad,plusTwo)=> !grad && !plusTwo,
        then:()=>
            Yup.string().required(
                "if Certificates not Uploaded ,Please enter valid reason"
            ),
    }),
}); 