class AuthService {
    public static authenticate() {}

    public static logout(): void {
        localStorage.removeItem('token');
        localStorage.removeItem('accessToken');
        localStorage.removeItem('userId');
        localStorage.removeItem('reduxState');
    }

    public static isAuthenticated(): boolean {
        const token = localStorage.getItem('token');
        const accessToken = localStorage.getItem('accessToken');
        const userId = localStorage.getItem('userId');
        return (
            token !== undefined &&
            token !== null &&
            accessToken !== undefined &&
            accessToken !== null &&
            userId !== undefined &&
            userId !== null
        );
    }
}

export default AuthService;
