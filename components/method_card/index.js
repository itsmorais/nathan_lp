
import { Container } from "./style"
export default function MethodCard({ children }) {

    return (
        <Container>
            <div className="textos">
                {children}
            </div>
        </Container>
    )
}