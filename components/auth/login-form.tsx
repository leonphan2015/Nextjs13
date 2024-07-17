import { Box } from "@mui/material"
import { useForm } from "react-hook-form"
import { InputField } from "../form"

export function LoginForm(){
    const { control, handleSubmit } = useForm({
        defaultValues: {
            username: 1,
            password: 12
        },
    })

    function handleLoginSubmit(values) {

    }

    return (
        <Box component='form' onSubmit={handleSubmit(handleLoginSubmit)} >
            <InputField name="username" control={control} />
            <InputField name="password" control={control} />
        </Box>
    )
}