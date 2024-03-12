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

export type SignUpState = {
    errors?: {
        email?: string[];
        password?: string[];
        confirmPassword?: string[];
    };
    message?: string | null;
	success: boolean;
	data?: {
		userId: string;
	}
};

export const SignUpSchema = z
	.object({
		email: z.string().email({ message: 'Invalid email' }),
		password: z
			.string(),
		confirmPassword: z
			.string()
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