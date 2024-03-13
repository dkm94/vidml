import { z } from "zod"

export type SignFormState = {
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
	email: z.string(),
	password: z
		.string()
		.max(50, { message: 'Password shouldn\'t exceed 50 characters' }),
});

export interface DatabaseUserAttributes {
	email: string;
}

export interface ActionResult {
	error: string | null;
}