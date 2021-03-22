import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  const {getByRole} = render(<CheckoutForm />)
  const header = getByRole('heading',{ queryFallbacks: true, level: 2})
  expect(header).toBeInTheDocument()
});

test("form shows success message on submit with form  details", async () => {
  const {getByRole} = render(<CheckoutForm/>)
  const submit = getByRole('button', { name: submit})
  userEvent.click(submit)
  const submitted = await ( ()=> getByRole('heading', { name: submitted })
  )
});
