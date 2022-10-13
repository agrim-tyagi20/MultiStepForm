import React, { useState } from "react";
import { Typography, TextField, Button, Stepper, Step, StepLabel, } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useForm, FormProvider, useFormContext, Controller } from "react-hook-form"

const useStyles = makeStyles((theme) => ({
    button: {
       margin: ".5rem 1rem",
        fontSize:"1.5rem"
    },
    customLabelStyle: {
        fontSize: "24px"
    },

    textfield: {
        fontSize: "3rem"
    }
}));

const BasicInformation = () => {
    const { control, formState: { errors } } = useFormContext();
    return <>
        <Controller
            control={control}
            name="firstName"
            rules={{
                required: "First name is required",
            }}
            render={({ field }) => (

                <TextField
                    InputLabelProps={{ style: { fontSize: 18 } }}
                    InputProps={{ style: { fontSize: 15 } }}
                    FormHelperTextProps={{style:{fontSize: 14 }}}
                    id="first-name"
                    label="First Name"
                    variant="outlined"
                    placeholder="Enter Your First Name"
                    fullWidth
                    size="medium"
                    margin="normal"
                    {...field}
                    error={errors.firstName}
                    helperText={errors.firstName?.message}
                />

            )}
        />
        <Controller
            control={control}
            name="lastName"
            rules={{
                required: "Last name is required",
            }}
            render={({ field }) => (

                <TextField
                InputLabelProps={{ style: { fontSize: 18 } }}
                InputProps={{ style: { fontSize: 15 } }}
                FormHelperTextProps={{style:{fontSize: 14 }}}
                    id="last-name"
                    label="Last Name"
                    variant="outlined"
                    placeholder="Enter Your Last Name"
                    fullWidth
                    margin="normal"
                    {...field}
                    error={errors.lastName}
                    helperText={errors.lastName?.message}
                />

            )}
        />

        <Controller
            control={control}
            name="nickName"
            rules={{
                required: "Nick name is required",
            }}
            render={({ field }) => (

                <TextField
                InputLabelProps={{ style: { fontSize: 18 } }}
                InputProps={{ style: { fontSize: 15 } }}
                FormHelperTextProps={{style:{fontSize: 14 }}}
                    id="nick-name"
                    label="Nick Name"
                    variant="outlined"
                    placeholder="Enter Your Nick Name"
                    fullWidth
                    margin="normal"
                    name="nickName"
                    {...field}
                    error={errors.nickName}
                    helperText={errors.nickName?.message}
                />

            )}
        />

    </>


}


const ContactInformation = () => {

    const { control, formState: { errors } } = useFormContext();
    return <>
        <Controller
            control={control}
            name="emailAddress"
            rules={{
                required: "Email is required",
            }}
            render={({ field }) => (

                <TextField
                InputLabelProps={{ style: { fontSize: 18 } }}
                FormHelperTextProps={{style:{fontSize: 14 }}}
                InputProps={{ style: { fontSize: 15 } }}
                    id="email"
                    label="E-mail"
                    variant="outlined"
                    placeholder="Enter Your E-mail Address"
                    fullWidth
                    margin="normal"
                    name="emailAddress"
                    {...field}
                    error={errors.emailAddress}
                    helperText={errors.emailAddress?.message}
                />

            )}
        />
        <Controller
            control={control}
            name="phoneNumber"
            rules={{
                required: "Phone Number is required",
            }}
            render={({ field }) => (

                <TextField
                InputLabelProps={{ style: { fontSize: 18 } }}
                InputProps={{ style: { fontSize: 15 } }}
                FormHelperTextProps={{style:{fontSize: 14 }}}
                    id="phone-number"
                    label="Phone Number"
                    variant="outlined"
                    placeholder="Enter Your Phone Number"
                    fullWidth
                    margin="normal"
                    name="phoneNumber"
                    {...field}
                    error={errors.phoneNumber}
                    helperText={errors.phoneNumber?.message}
                />

            )}
        />
        <Controller
            control={control}
            name="alternatePhone"
            rules={{
                required: "Alternate Phone is required",
            }}
            render={({ field }) => (


                <TextField
                InputLabelProps={{ style: { fontSize: 18 } }}
                InputProps={{ style: { fontSize: 15 } }}
                FormHelperTextProps={{style:{fontSize: 14 }}}
                    id="alternate-phone"
                    label="Alternate Phone"
                    variant="outlined"
                    placeholder="Enter Your Alternate Phone"
                    fullWidth
                    margin="normal"
                    name="alternatePhone"
                    {...field}
                    error={errors.alternatePhone}
                    helperText={errors.alternatePhone?.message}
                />

            )}
        />


    </>


}


const PersonalInformation = () => {
    const { control, formState: { errors } } = useFormContext();
    return <>
        <>
            <Controller
                control={control}
                name="address1"
                rules={{
                    required: "Address is required",
                }}
                render={({ field }) => (

                    <TextField
                    InputLabelProps={{ style: { fontSize: 18 } }}
                    InputProps={{ style: { fontSize: 15 } }}
                    FormHelperTextProps={{style:{fontSize: 14 }}}
                        id="address1"
                        label="Address 1"
                        variant="outlined"
                        placeholder="Enter Your Address 1"
                        fullWidth
                        margin="normal"
                        name="address1"
                        {...field}
                        error={errors.address1}
                        helperText={errors.address1?.message}
                    />

                )}
            />
            <Controller
                control={control}
                name="address2"
                rules={{
                    required: "Address 2 is required",
                }}
                render={({ field }) => (
                    <TextField
                    InputLabelProps={{ style: { fontSize: 18 } }}
                    InputProps={{ style: { fontSize: 15 } }}
                    FormHelperTextProps={{style:{fontSize: 14 }}}
                        id="address2"
                        label="Address 2"
                        variant="outlined"
                        placeholder="Enter Your Address 2"
                        fullWidth
                        margin="normal"
                        name="address2"
                        {...field}
                        error={errors.address2}
                        helperText={errors.address2?.message}
                    />

                )}
            />

            <Controller
                control={control}
                name="country"
                rules={{
                    required: "Address 2 is required",
                }}
                render={({ field }) => (

                    <TextField
                    InputLabelProps={{ style: { fontSize: 18 } }}
                    InputProps={{ style: { fontSize: 15 } }}
                    FormHelperTextProps={{style:{fontSize: 14 }}}
                        id="country"
                        label="Country"
                        variant="outlined"
                        placeholder="Enter Your Country Name"
                        fullWidth
                        margin="normal"
                        name="country"
                        {...field}
                        error={errors.country}
                        helperText={errors.country?.message}
                    />

                )}
            />

        </>
    </>
}


const Payment = () => {
    const { control } = useFormContext();
    return <>

        <Controller
            control={control}
            name="cardNumber"
            rules={{
                required: true,
            }}
            render={({ field }) => (

                <TextField
                InputLabelProps={{ style: { fontSize: 18 } }}
                InputProps={{ style: { fontSize: 15 } }}
                FormHelperTextProps={{style:{fontSize: 14 }}}
                    id="cardNumber"
                    label="Card Number"
                    variant="outlined"
                    placeholder="Enter Your Card Number"
                    fullWidth
                    margin="normal"
                    name="cardNumber"
                    {...field}
                />

            )}
        />

        <Controller
            control={control}
            name="cardMonth"
            rules={{
                required: true,
            }}
            render={({ field }) => (

                <TextField
                InputLabelProps={{ style: { fontSize: 18 } }}
                InputProps={{ style: { fontSize: 15 } }}
                FormHelperTextProps={{style:{fontSize: 14 }}}
                    id="cardMonth"
                    label="Card Month"
                    variant="outlined"
                    placeholder="Enter Your Card Month"
                    fullWidth
                    margin="normal"
                    name="cardMonth"
                    {...field}
                />

            )}
        />
        <Controller
            control={control}
            name="cardYear"
            rules={{
                required: true,
            }}
            render={({ field }) => (

                <TextField
                InputLabelProps={{ style: { fontSize: 18 } }}
                InputProps={{ style: { fontSize: 15 } }}
                FormHelperTextProps={{style:{fontSize: 14 }}}
                    id="cardYear"
                    label="Card Year"
                    variant="outlined"
                    placeholder="Enter Your Card Year"
                    fullWidth
                    margin="normal"
                    name="cardYear"
                    {...field}
                />

            )}
        />


    </>
}

function getSteps() {
    return [
        "Basic information",
        "Contact Information",
        "Personal Information",
        "Payment",
    ];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return <BasicInformation />



        case 1:
            return <ContactInformation />;
        case 2:
            return <PersonalInformation />
        case 3:
            return

            <Payment />


        default:
            return "unknown step";
    }
}

const Layout = () => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const [skippedSteps, setSkippedSteps] = useState([]);
    const steps = getSteps();
    const methods = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            nickName: "",
            emailAddress: "",
            phoneNumber: "",
            alternatePhone: "",
            address1: "",
            address2: "",
            country: "",
            cardNumber: "",
            cardMonth: "",
            cardYear: "",
        }
    });

    const Error = () => {
        return Boolean(Object.keys(methods.formState.errors).length)
    }

    const isStepOptional = (step) => {
        return step === 1 || step === 2;
    };

    const isStepSkipped = (step) => {
        return skippedSteps.includes(step);
    };

    const handleNext = (data) => {
        if (activeStep == steps.length - 1)
            console.log(data)
        setActiveStep(activeStep + 1);
        setSkippedSteps(skippedSteps.filter((skipItem) => skipItem !== activeStep));
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    const handleSkip = () => {
        if (!isStepSkipped(activeStep)) {
            setSkippedSteps([...skippedSteps, activeStep]);
        }
        setActiveStep(activeStep + 1);
    };


    const onSubmit = (data) => {

    }


    return (
        <div>
            <Stepper alternativeLabel activeStep={activeStep} >
                {steps.map((step, index) => {
                    const labelProps = {};
                    const stepProps = {};
                    if (isStepOptional(index)) {
                        labelProps.optional = (
                            <Typography
                                variant="caption"
                                align="center"
                                style={{ display: "block", fontSize: "2rem" }}
                            >
                                optional
                            </Typography>
                        );
                    }

                    if (Error() && activeStep == index) {
                        labelProps.error = true;
                    }
                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step {...stepProps} key={index}>
                            <StepLabel {...labelProps} classes={{ label: classes.customLabelStyle }} >{step}
                               
                            </StepLabel>
                        </Step>
                    );
                })}
            </Stepper>

            {activeStep === steps.length ? (
                <Typography variant="h3" align="center">
                    Thank You
                </Typography>
            ) : (
                <>

                    <FormProvider {...methods}>
                        <form onSubmit={methods.handleSubmit(handleNext)}>{getStepContent(activeStep)}
                            <Button
                                className={classes.button}
                                disabled={activeStep === 0}
                                onClick={handleBack}
                            >
                                back
                            </Button>
                            {isStepOptional(activeStep) && (
                                <Button
                                    className={classes.button}
                                    variant="contained"
                                    color="primary"
                                    onClick={handleSkip}
                                >
                                    skip
                                </Button>
                            )}
                            <Button
                                className={classes.button}
                                variant="contained"
                                color="primary"
                                //onClick={handleNext}
                                type="submit"
                            >
                                {activeStep === steps.length - 1 ? "Finish" : "Next"}
                            </Button>
                        </form>
                    </FormProvider>

                </>
            )}
        </div>
    );
};

export default Layout;