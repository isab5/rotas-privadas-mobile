import { Redirect } from 'react-router';

export default function Index() {
    // Redireciona para login por padrão
    // O AuthContext irá gerenciar o redirecionamento correto
    return <Redirect href="/(auth)/login" />;
}