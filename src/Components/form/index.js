import { Container,Input,Submit,Text,Title,Link,TextSmall,Error,Base } from "./styles/form"

function Form({children,...restProps}) {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}

Form.Input = function FormInput({...restProps}){
    return <Input {...restProps}/>
}

Form.Text = function FormText({children,...restProps}){
    return <Text {...restProps}>{children}</Text>
}

Form.Title = function FormTitle({children,...restProps}){
    return <Title {...restProps}>{children}</Title>
}

Form.Base = function FormBase({children,...restProps}){
    return <Base {...restProps}>{children}</Base>
}

Form.TextSmall = function FormTextSmall({children,...restProps}){
    return <TextSmall {...restProps}>{children}</TextSmall>
}

Form.Error = function FormError({children,...restProps}){
    return <Error {...restProps}>{children}</Error>
}

Form.Submit = function FormSubmit({children,...restProps}){
    return <Submit {...restProps}>{children}</Submit>
}

Form.Link = function FormLink({children,...restProps}){
    return <Link {...restProps}>{children}</Link>
}



export default Form
