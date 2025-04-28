"use server"

import { z } from "zod"

// Define a schema for form validation
const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export async function sendEmail(formData: FormData) {
  // Extract data from FormData
  const rawData = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  }

  // Validate form data
  const validatedFields = formSchema.safeParse(rawData)

  if (!validatedFields.success) {
    throw new Error("Invalid form data")
  }

  const { firstName, lastName, email, phone, subject, message } = validatedFields.data

  // In a real application, you would use an email service like SendGrid, Mailgun, etc.
  // For demonstration purposes, we'll just log the data and simulate a delay
  console.log("Sending email with data:", {
    name: `${firstName} ${lastName}`,
    email,
    phone,
    subject,
    message,
  })

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // In a real application, you would handle errors from the email service
  // and return appropriate responses

  return { success: true }
}
