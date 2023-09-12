import { Container } from "../Button/styles";

interface ButtonProps {
    title: string;
    onClick: () => void;

}

export function Button({ title, onClick }: ButtonProps) {
    return <Container onClick={onClick}>{title}</Container>
}