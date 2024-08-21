export interface CurrentUser {
    id: number,
    firstName: string,
    lastName: string,
    username: string,
    userRoleId: number
    userRole: UserRole
}

export interface UserRole {
    id: number,
    name: string
}