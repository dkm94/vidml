import { z } from "zod"
// export interface User {
//     email: string;
//     password: string;
//     isAdmin: boolean;
//     sessions: Session[];    
// }

// export interface Session {
//     id: string;
//     userId: string;
//     expiresAt: string;
//     user: User;
// }
export const SignUpSchema = z
	.object({
		email: z.string().email({ message: 'Invalid email' }),
		password: z
			.string()
			.min(8, { message: 'Password must be at least 8 characters long' })
			.max(50, { message: 'Password shouldn\'t exceed 50 characters' }),
		confirmPassword: z
			.string()
			.min(8, { message: 'Password must be at least 8 characters long' }),
	}).refine(
		(values: any) => {
			return values.password === values.confirmPassword;
		},
		{
			message: 'Passwords must match!',
			path: [ 'confirmPassword' ],
		}
	);

export const SignInSchema = z.object({
	username: z.string().min(2).max(50),
	password: z
		.string()
		.min(8, { message: 'Password must be at least 8 characters long' }),
});

export interface DatabaseUserAttributes {
	email: string;
}

export interface ActionResult {
	error: string | null;
}