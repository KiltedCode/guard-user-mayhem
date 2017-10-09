export interface User {
    id: number;
    name: string;
    role: 'USER' | 'ADMIN' | 'SUPER_ADMIN';
}
