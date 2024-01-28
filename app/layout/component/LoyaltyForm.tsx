"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, useAnimate } from "framer-motion";

import { useForm } from "react-hook-form";
import * as z from "zod";

const LoyaltyForm = () => {
  const [scope, animate] = useAnimate();

  const formSchema = z.object({
    email: z.string().email(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="relative">
              <motion.div
                ref={scope}
                className="absolute left-5 bottom-2 opacity-0 z-10"
              >
                <FormLabel className="bg-primary text-foreground p-1 rounded-md">
                  Email
                </FormLabel>
              </motion.div>
              <div className="flex w-full max-w-md items-center space-x-5">
                <FormControl>
                  <Input
                    onFocus={(e) => {
                      animate(scope.current, {
                        top: "-15px",
                        left: "8px",
                        opacity: 1,
                      });
                    }}
                    className="bg-primary border-foreground"
                    placeholder="JohnDoe@gmail.com"
                    {...field}
                  />
                </FormControl>
                <Button
                  className="bg-primary border-foreground border-2 hover:bg-white hover:text-primary"
                  type="submit"
                >
                  Submit
                </Button>
              </div>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default LoyaltyForm;
