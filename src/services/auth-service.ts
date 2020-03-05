class AuthService {
    public static authenticate() {}

    public static fakeAuthentification(userType: 'admin' | 'customer') {
        localStorage.setItem(
            'token',
            'usgkjhkskg6+sd156sdf5sdfsd3f1sd5f+sd5f6+sdf',
        );
        localStorage.setItem('userId', '45875sqssdqsd89356');
        localStorage.setItem('userType', userType);
    }

    public static getUserType() {
        const ut = localStorage.getItem('userType');
        return ut;
    }

    public static logout(): void {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('userType');
        localStorage.removeItem('reduxState');
    }

    public static isAuthenticated(): boolean {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        const userType = localStorage.getItem('userType');
        return (
            token !== undefined &&
            token !== null &&
            userId !== undefined &&
            userId !== null &&
            userType !== undefined &&
            userType !== null
        );
    }
}

export default AuthService;
