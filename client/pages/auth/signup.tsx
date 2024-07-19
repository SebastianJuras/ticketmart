import { useForm } from "react-hook-form";
import Router from "next/router";
import { zodResolver } from "@hookform/resolvers/zod";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CustomError } from "@/components/ui/customError";
import { signupSchema, TSignupSchema } from '@/lib/types';
import { useRequest } from '@/hooks/useRequest';

export default function SignupComponent() {
  const { register, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm<TSignupSchema>({
    resolver: zodResolver(signupSchema),
  });

  const { doRequest, loading, error } = useRequest({
    url: '/api/users/signup',
    method: 'post',
    onSuccess: () => Router.push('/'),
    onError: (error) => {
      if (error.response && error.response.data && error.response.data.errors) {
        error.response.data.errors.forEach((err: { message: string }) => {
          if (err.message.includes("Email")) {
            setError("email", { type: "manual", message: err.message });
          } else if (err.message.includes("Password")) {
            setError("password", { type: "manual", message: err.message });
          }
        });
      }
    },
  });

  const onSubmit = async (data: TSignupSchema) => {
    doRequest({ email: data.email, password: data.password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-3xl">Register</CardTitle>
          <CardDescription>Enter your information to create an account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="me@example.com" {...register("email")} />
              {errors.email && <CustomError message={errors.email.message?.toString()} />}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" {...register("password")} />
              {errors.password && <CustomError message={errors.password.message?.toString()} />}
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input id="confirm-password" type="password" {...register("confirmPassword")} />
              {errors.confirmPassword && <CustomError message={errors.confirmPassword.message?.toString()} />}
            </div>
            <Button disabled={loading} className="w-full" type="submit">Register</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
