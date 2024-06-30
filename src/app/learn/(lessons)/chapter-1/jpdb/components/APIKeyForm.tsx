"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import { FormSchema } from "@/features/jpdb/actions/formSchema"
import { addAPIKey } from "@/features/jpdb/actions/actions"
import FormButton from "./FormButton"

export default function APIKeyForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    mode: "onBlur",
    resolver: zodResolver(FormSchema),
    defaultValues: {
      apiKey: "",
    },
  })

  async function onSubmit(data: FormData) {
    const response = await addAPIKey(data)
    if (!response) {
      // if user is not logged in (void response)
      toast.error("User must be logged in to add API key.", {
        position: "bottom-center",
      })
      return
    } else {
      toast.success("API key added successfully!", {
        position: "bottom-center",
      })
      console.log(response)
    }
  }

  return (
    <Form {...form}>
      <form action={onSubmit} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="apiKey"
          render={({ field }) => (
            <FormItem>
              <FormLabel>API Key</FormLabel>
              <FormControl>
                <Input
                  placeholder="api key"
                  className="text-center font-normal"
                  {...field}
                />
              </FormControl>
              <FormDescription>Get it from jpdb settings.</FormDescription>
              <FormMessage>{form.formState.errors.apiKey?.message}</FormMessage>
            </FormItem>
          )}
        />
        <FormButton />
      </form>
    </Form>
  )
}
