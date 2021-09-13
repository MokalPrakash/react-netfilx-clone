import FaqsContainer from "../Container/faqs";
import FooterContainer from "../Container/footer";
import JumbotronContainer from "../Container/jumbotron";
import HeaderContainer from "../Container/header";
import { OptForm,Feature } from "../Components";

function Home() {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>
                        Unlimited films, Tv programmes and more.
                    </Feature.Title>
                    <Feature.SubTitle>
                        Watch anywhere. Cancel at any time.
                    </Feature.SubTitle>

                    <OptForm>
                        <OptForm.Input placeholder='Email address'/>
                        <OptForm.Button>Try me now</OptForm.Button>
                        <OptForm.Break/>
                        <OptForm.Text>Ready to watch? Enter your email to create  or restart your membership</OptForm.Text>
                    </OptForm>
                </Feature>
                
            </HeaderContainer>
            <JumbotronContainer/>
            <FaqsContainer/>
            <FooterContainer/>
        </>
    )
}

export default Home
