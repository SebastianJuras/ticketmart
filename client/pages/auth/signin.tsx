import { useForm } from "react-hook-form";
import Router from "next/router";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CustomError } from "@/components/ui/customError"; 
import { signinSchema, TSigninSchema } from '@/lib/types';
import { useRequest } from '@/hooks/useRequest';

export default function SigninComponent() {
  const { register, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm<TSigninSchema>({
    resolver: zodResolver(signinSchema),
  });

  const [alert, setAlert] = useState("");

  const { doRequest, loading, error } = useRequest({
    url: '/api/users/signin',
    method: 'post',
    onSuccess: () => Router.push('/'),
    onError: (error) => {
      if (error.response && error.response.data && error.response.data.errors) {
        setAlert("Invalid credentials");
      }
    },
  });

  const onSubmit = async (data: TSigninSchema) => {
    setAlert("");
    doRequest({ email: data.email, password: data.password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-3xl">Sign In</CardTitle>
          <CardDescription>Enter your information to sign in</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="me@example.com" {...register("email")} />
              {errors.email && <CustomError message={errors.email.message?.toString()} closable />}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" {...register("password")} />
              {errors.password && <CustomError message={errors.password.message?.toString()} closable />}
            </div>
            <Button disabled={loading} className="w-full" type="submit">Sign In</Button>
            {alert && <CustomError message={alert} closable />}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
