import * as Yup from "yup";

export const healthHistorySchema = Yup.object({

    height:Yup.number()
    .typeError("Height must be a number")
    .positive("Height must be Positive")
    .min(50,"Height must be at least 50 cm")
    .max(350,"Height seems too high")
    .required("Please enter you height"),

    weight:Yup.number()
    .typeError("Weight must be a number")
    .positive("Weight must be positive")
    .min(10,"Weight must be at least 10 kg")
    .max(350,"Weight seems too high")
    .required("Please enter your Weight"),

    bmiCategory:Yup.string().required("Choose your BMI Category"),

    medicalHistory:Yup.object({
        hasHistory:Yup.boolean(),
        details:Yup.string().when("hasHistory", {
            is:true,
            then:()=>
                Yup.string().required("Please provide details of medical history" ),
                    otherwise:()=>Yup.string().nullable(),
               
        })
    }),

  conditions: Yup.object({
    hasCondition: Yup.boolean(),
    details: Yup.string().when("hasCondition", {
      is: true,
      then: () => Yup.string().required("Please provide details of medical conditions"),
      otherwise: () => Yup.string().nullable(),
    })
  }),

    allergies: Yup.object({
    hasAllergies: Yup.boolean(),
    details: Yup.string().when("hasAllergies", {
      is: true,
      then: () => Yup.string().required("Please provide details of allergies"),
      otherwise: () => Yup.string().nullable(),
    })
  }),

    sensory: Yup.object({
    hasSensory: Yup.boolean(),
    details: Yup.string().when("hasSensory", {
      is: true,
      then: () => Yup.string().required("Please provide details of sensory concerns"),
      otherwise: () => Yup.string().nullable(),
    })
  }),

    declaration: Yup.boolean()
    .oneOf([true], "You must accept the declaration")
    .required("You must accept the declaration"),
});




    

