//import React from "react";
import "./pageStyles/grid.css";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const formSchema = z.object({
  userId: z.string(),
  password: z.string(),
});
export const Login = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userId: "",
      password: "",
    },
  });
  function handleLogin(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div className="___login grid-bg w-full h-[calc(100dvh-60px)] flex justify-center items-center flex-col gap-3 space-y-4">
      <div className="__form_container bg-blur border-[1px] py-6 px-4 flex flex-col gap-5 w-[300px]">
        <div className="">
          <h1 className="text-4xl font-bold text-left">Login here</h1>
          <p className="font-mono">Welcome back fellow coders 🧑‍💻</p>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleLogin)}
            className="flex flex-col gap-4"
          >
            <FormField
              control={form.control}
              name="userId"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Username or Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="password" placeholder="Password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full" type="submit">
              Login
            </Button>
          </form>
        </Form>
        <small className="text-xs font-mono">
          Don't have an account ? <Link className="text-blue-500" to="/signup">Signup</Link>.
        </small>
      </div>
    </div>
  );
};
