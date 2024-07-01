//import React from "react";
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
import "./pageStyles/Signup.css";
import { Link } from "react-router-dom";

const formSchema = z.object({
  userId: z.string(),
  email: z.string().email(),
  password: z.string(),
  username: z.string(),
});

export const Signup = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });
  function handleSignup(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div className="___signup signup-container w-full h-[calc(100dvh-60px)] flex justify-center items-center flex-col gap-3 space-y-4">
      <div className="__form_container bg-blur border-[1px] py-8 px-8 flex flex-col gap-5 w-[300px]">
        <div className="">
          <h1 className="text-4xl font-bold text-left">Signup</h1>
          <p className="font-mono">Join the Community of Coders.</p>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSignup)}
            className="flex flex-col gap-4"
          >
            <FormField
              control={form.control}
              name="userId"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Username" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="email" placeholder="Email" {...field} />
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
              Signup
            </Button>
          </form>
        </Form>
        <small className="text-xs font-mono">
          Already have an account ? <Link className="text-blue-500" to="/login">Login</Link>.
        </small>
      </div>
    </div>
  );
}
