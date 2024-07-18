import axios from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { signupSchema, TSignupSchema } from '@/lib/types'

export default function SignupComponent() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<TSignupSchema>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: TSignupSchema) => {
    const response = await axios.post('/api/users/signup', {
      email: data.email,
      password: data.password
    });
    console.log(response.data) 
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
              {errors.email && <span className="text-red-500">{errors.email.message?.toString()}</span>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" {...register("password")} />
              {errors.password && <span className="text-red-500">{errors.password.message?.toString()}</span>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input id="confirm-password" type="password" {...register("confirmPassword")} />
              {errors.confirmPassword && <span className="text-red-500">{errors.confirmPassword.message?.toString()}</span>}
            </div>
            <Button className="w-full" type="submit">Register</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
